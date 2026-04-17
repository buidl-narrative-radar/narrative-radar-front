import { useEffect, useMemo, useState } from 'react'
import { AssetStateCardList } from './components/AssetStateCardList'
import { AssetStateDetailPanel } from './components/AssetStateDetailPanel'
import { EvaluationSnapshotPanel } from './components/EvaluationSnapshotPanel'
import { FeatureBreakdownPanel } from './components/FeatureBreakdownPanel'
import { FlowStageStrip } from './components/FlowStageStrip'
import { SourceDocList } from './components/SourceDocList'
import { mockNarrativeRadarRepository } from './data/mockNarrativeRadarRepository'
import type { AssetOutput } from './domain/types'

const tabs = ['Discover', 'Asset Detail', 'Alerts', 'Watchlist', 'Profile']
const promptSuggestions = [
  'Explain BNB posture',
  'What changed in LISTA?',
  'Which assets look event-driven?'
]
const API_BASE_URL = import.meta.env.VITE_NARRATIVE_RADAR_API_BASE_URL ?? 'https://narrative-radar-backend.onrender.com'

type FeedMode = 'all' | 'asset'
type AssetSource = 'backend' | 'mock'
type BackendStatus = 'loading' | 'live' | 'fallback'
type SelectedAssetStatus = 'loading' | AssetSource

type BackendAssetPayload = {
  asset_key?: string
  symbol?: string
  mood_label?: string
  playbook_label?: string
  risk_flags?: string[]
  summary?: string
  confidence_score?: number
  confidence_label?: string
}

function mergeBackendAssetOutput(
  fallbackAssetOutput: AssetOutput,
  backendAssetPayload: BackendAssetPayload
): AssetOutput {
  return {
    ...fallbackAssetOutput,
    moodLabel: backendAssetPayload.mood_label ?? fallbackAssetOutput.moodLabel,
    playbookLabel: backendAssetPayload.playbook_label ?? fallbackAssetOutput.playbookLabel,
    riskFlags: backendAssetPayload.risk_flags ?? fallbackAssetOutput.riskFlags,
    summary: backendAssetPayload.summary ?? fallbackAssetOutput.summary,
    confidenceScore: backendAssetPayload.confidence_score ?? fallbackAssetOutput.confidenceScore,
    confidenceLabel: backendAssetPayload.confidence_label ?? fallbackAssetOutput.confidenceLabel
  }
}

async function loadAssetOutputFromBackend(
  fallbackAssetOutput: AssetOutput,
  signal: AbortSignal
): Promise<{ assetOutput: AssetOutput; source: 'backend' | 'mock' }> {
  try {
    const response = await fetch(`${API_BASE_URL}/asset/${fallbackAssetOutput.symbol}`, { signal })

    if (!response.ok) {
      throw new Error(`Failed to load ${fallbackAssetOutput.symbol}: ${response.status}`)
    }

    const backendAssetPayload = (await response.json()) as BackendAssetPayload

    return {
      assetOutput: mergeBackendAssetOutput(fallbackAssetOutput, backendAssetPayload),
      source: 'backend'
    }
  } catch {
    return {
      assetOutput: fallbackAssetOutput,
      source: 'mock'
    }
  }
}

function buildAnswer(assetOutput: AssetOutput, selectedAssetStatus: SelectedAssetStatus) {
  return {
    eyebrow:
      selectedAssetStatus === 'backend'
        ? 'Live answer'
        : selectedAssetStatus === 'loading'
          ? 'Syncing answer'
          : 'Fallback answer',
    headline: `${assetOutput.symbol} posture summary`,
    body: assetOutput.summary,
    confidence: `Confidence: ${assetOutput.confidenceLabel}`,
    supporting: `${assetOutput.assetKey} · ${assetOutput.playbookLabel}`
  }
}

function App() {
  const repository = mockNarrativeRadarRepository
  const flowOverview = repository.getFlowOverview()
  const fallbackAssetOutputs = useMemo(() => repository.getAssetOutputs(), [repository])
  const evaluationSummary = repository.getEvaluationSummary()
  const allDocs = repository.getAllDocs()
  const [assetOutputs, setAssetOutputs] = useState<AssetOutput[]>(fallbackAssetOutputs)
  const [assetSourcesBySymbol, setAssetSourcesBySymbol] = useState<Partial<Record<string, AssetSource>>>({})
  const [backendStatus, setBackendStatus] = useState<BackendStatus>('loading')
  const [selectedTab, setSelectedTab] = useState('Discover')
  const [selectedAssetKey, setSelectedAssetKey] = useState(fallbackAssetOutputs[0]?.assetKey ?? '')
  const [query, setQuery] = useState(promptSuggestions[0])
  const [selectedDocId, setSelectedDocId] = useState('doc_023')
  const [feedMode, setFeedMode] = useState<FeedMode>('all')

  useEffect(() => {
    const controller = new AbortController()
    let mounted = true

    async function hydrateAssetOutputs() {
      const results = await Promise.all(
        fallbackAssetOutputs.map((fallbackAssetOutput) =>
          loadAssetOutputFromBackend(fallbackAssetOutput, controller.signal)
        )
      )

      if (!mounted) {
        return
      }

      setAssetOutputs(results.map((result) => result.assetOutput))
      setAssetSourcesBySymbol(
        Object.fromEntries(results.map((result, index) => [fallbackAssetOutputs[index].symbol, result.source]))
      )
      setBackendStatus(results.some((result) => result.source === 'backend') ? 'live' : 'fallback')
    }

    hydrateAssetOutputs()

    return () => {
      mounted = false
      controller.abort()
    }
  }, [fallbackAssetOutputs])

  const selectedAssetBaseDetail = useMemo(
    () => repository.getAssetDetail(selectedAssetKey),
    [repository, selectedAssetKey]
  )

  const selectedAssetOutput = useMemo(() => {
    const fromState = assetOutputs.find((assetOutput) => assetOutput.assetKey === selectedAssetKey)
    return fromState ?? selectedAssetBaseDetail?.assetOutput ?? fallbackAssetOutputs[0]
  }, [assetOutputs, fallbackAssetOutputs, selectedAssetBaseDetail, selectedAssetKey])

  const selectedAssetStatus: SelectedAssetStatus =
    assetSourcesBySymbol[selectedAssetOutput.symbol] ?? (backendStatus === 'loading' ? 'loading' : 'mock')

  const selectedAssetDetail = selectedAssetBaseDetail
    ? {
        ...selectedAssetBaseDetail,
        assetOutput: selectedAssetOutput
      }
    : undefined

  const selectedFeature = repository.getFeatureByDocId(selectedDocId)
  const selectedDoc = allDocs.find((doc) => doc.docId === selectedDocId)

  const visibleDocs = useMemo(() => {
    if (feedMode === 'asset') {
      return allDocs.filter((doc) => doc.assetKey === selectedAssetKey)
    }
    return allDocs
  }, [allDocs, feedMode, selectedAssetKey])

  const totalDocuments = allDocs.length
  const signalQuality = `${Math.round(evaluationSummary.playbookMatchRate * 100)}%`
  const strongestSetup = assetOutputs.reduce((best, current) =>
    current.confidenceScore > best.confidenceScore ? current : best
  )

  const handleSelectAsset = (assetKey: string) => {
    setSelectedAssetKey(assetKey)
    setSelectedTab('Asset Detail')
    if (feedMode === 'asset') {
      const nextDoc = allDocs.find((doc) => doc.assetKey === assetKey)
      setSelectedDocId(nextDoc?.docId ?? selectedDocId)
    }
  }

  const handleSelectDoc = (docId: string) => {
    setSelectedDocId(docId)
    const doc = allDocs.find((item) => item.docId === docId)
    if (doc) {
      setSelectedAssetKey(doc.assetKey)
    }
  }

  if (!selectedAssetDetail || !selectedFeature) {
    return (
      <main className="page-shell page-shell--empty">
        <h1>Narrative Radar</h1>
        <p>Unable to load the mock repository.</p>
      </main>
    )
  }

  const answer = buildAnswer(selectedAssetDetail.assetOutput, selectedAssetStatus)

  return (
    <main className="page-shell">
      <section className="app-topbar card-surface">
        <div className="brand-lockup">
          <div className="brand-mark">N</div>
          <div>
            <h1>Narrative Radar</h1>
            <p>AI Copilot for BNB Chain Users</p>
          </div>
          <span className="tag tag--focus">BNB Focus</span>
        </div>
        <div className="topbar-actions">
          <button aria-label="Search" className="icon-button" type="button">
            ⌕
          </button>
          <button aria-label="Notifications" className="icon-button" type="button">
            ◌
          </button>
          <button aria-label="Profile" className="icon-button" type="button">
            ☺
          </button>
        </div>
      </section>

      <nav className="tab-bar card-surface" aria-label="Primary navigation">
        {tabs.map((tab) => (
          <button
            aria-pressed={selectedTab === tab}
            className={`tab-pill ${selectedTab === tab ? 'tab-pill--active' : ''}`}
            key={tab}
            onClick={() => setSelectedTab(tab)}
            type="button"
          >
            {tab}
          </button>
        ))}
      </nav>

      <section className="hero-grid">
        <section className="hero-panel card-surface">
          <div>
            <p className="section-kicker">Ask AI</p>
            <h2>Ask AI what today's posture means</h2>
            <p className="hero-description">
              Narrative Radar translates noisy BNB Chain discussion into posture, playbook, and timing risk so you can scan the market without reading every thread.
            </p>
          </div>

          <div className="hero-input-row">
            <input
              aria-label="Ask Narrative Radar"
              className="hero-input"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ask Narrative Radar about posture, crowd behavior, or timing risk"
              type="text"
              value={query}
            />
            <button className="primary-button" type="button">
              Ask AI
            </button>
          </div>

          <div className="chip-row">
            {promptSuggestions.map((suggestion) => (
              <button
                className={`chip ${query === suggestion ? 'chip--active' : ''}`}
                key={suggestion}
                onClick={() => setQuery(suggestion)}
                type="button"
              >
                {suggestion}
              </button>
            ))}
          </div>

          <div className="hero-metric-grid">
            <article className="hero-metric-card">
              <span>Assets tracked</span>
              <strong>{assetOutputs.length}</strong>
              <p>{strongestSetup.symbol} currently leads the confidence stack.</p>
            </article>
            <article className="hero-metric-card">
              <span>Documents parsed</span>
              <strong>{totalDocuments}</strong>
              <p>Adapter-normalized evidence cards are ready for drill-down.</p>
            </article>
            <article className="hero-metric-card">
              <span>Signal quality</span>
              <strong>{signalQuality}</strong>
              <p>
                {backendStatus === 'live'
                  ? 'Per-asset backend summaries are now live from the deployed API.'
                  : 'Mock summaries remain active until the backend responds.'}
              </p>
            </article>
          </div>
        </section>

        <section className="answer-panel card-surface">
          <div className="section-heading-row section-heading-row--tight">
            <div>
              <p className="section-kicker">{answer.eyebrow}</p>
              <h2>Ask AI</h2>
            </div>
            <span className="tag">{answer.confidence}</span>
          </div>
          <div className="answer-card">
            <div className="answer-card__header">
              <span className="tag tag--soft">{answer.supporting}</span>
            </div>
            <h3>{answer.headline}</h3>
            <p>{answer.body}</p>
            <ul className="answer-bullets">
              <li>Top signal: {selectedAssetDetail.assetOutput.playbookLabel}</li>
              <li>Risk lens: {selectedAssetDetail.assetOutput.riskFlags[0] ?? 'Execution discipline'}</li>
              <li>
                Source:{' '}
                {selectedAssetStatus === 'backend'
                  ? 'Backend /asset/{symbol} summary'
                  : selectedAssetStatus === 'loading'
                    ? 'Syncing deployed summary'
                    : 'Mock summary fallback'}
              </li>
            </ul>
          </div>
        </section>
      </section>

      <section className="content-grid">
        <div className="content-grid__left">
          <AssetStateCardList
            assetOutputs={assetOutputs}
            onSelectAsset={handleSelectAsset}
            selectedAssetKey={selectedAssetKey}
          />
          <AssetStateDetailPanel assetOutput={selectedAssetDetail.assetOutput} />
        </div>
        <div className="content-grid__right">
          <EvaluationSnapshotPanel evaluationSummary={evaluationSummary} />
          <SourceDocList
            docs={visibleDocs}
            feedMode={feedMode}
            onChangeFeedMode={setFeedMode}
            onSelectDoc={handleSelectDoc}
            selectedDocId={selectedDocId}
          />
        </div>
      </section>

      <section className="insight-grid">
        <FlowStageStrip activeStageId="json-summary" stages={flowOverview} />
        <FeatureBreakdownPanel feature={selectedFeature} />
      </section>

      {selectedDoc ? (
        <section className="evidence-footer card-surface">
          <div>
            <p className="section-kicker">Selected evidence</p>
            <h2>{selectedDoc.docId}</h2>
            <p>{selectedDoc.text}</p>
          </div>
          <div className="evidence-footer__meta">
            <span>{selectedDoc.authorId}</span>
            <span>{selectedDoc.assetKey}</span>
            <span>{selectedDoc.publishedAt ?? 'N/A'}</span>
          </div>
        </section>
      ) : null}
    </main>
  )
}

export default App
