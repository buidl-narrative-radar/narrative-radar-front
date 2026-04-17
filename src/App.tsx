import { useEffect, useMemo, useState } from 'react'
import { AssetStateCardList } from './components/AssetStateCardList'
import { AssetStateDetailPanel } from './components/AssetStateDetailPanel'
import { LiveApiCoveragePanel } from './components/LiveApiCoveragePanel'
import { SelectedAssetResponsePanel } from './components/SelectedAssetResponsePanel'
import type { AssetOutput } from './domain/types'
import type { AssetSource } from './data/assetSummaryRepository'
import { fallbackAssetOutputs } from './data/fallbackAssetOutputs'
import { httpAssetSummaryRepository } from './data/httpAssetSummaryRepository'

const tabs = ['Discover', 'Asset Detail', 'Alerts', 'Watchlist', 'Profile']
const promptSuggestions = [
  'Explain BNB posture',
  'What changed in LISTA?',
  'Which assets look event-driven?'
]

type BackendStatus = 'loading' | 'live' | 'fallback'
type SelectedAssetStatus = 'loading' | AssetSource

function getDisplaySymbol(assetOutput: AssetOutput) {
  return assetOutput.backendSymbol ?? assetOutput.symbol
}

function getDisplayAssetKey(assetOutput: AssetOutput) {
  return assetOutput.backendAssetKey ?? assetOutput.assetKey
}

function buildAnswer(assetOutput: AssetOutput, selectedAssetStatus: SelectedAssetStatus) {
  const displaySymbol = getDisplaySymbol(assetOutput)
  const displayAssetKey = getDisplayAssetKey(assetOutput)

  return {
    eyebrow:
      selectedAssetStatus === 'backend'
        ? 'Live answer'
        : selectedAssetStatus === 'loading'
          ? 'Syncing answer'
          : 'Fallback answer',
    headline: `${displaySymbol} posture summary`,
    body: assetOutput.summary,
    confidence: `Confidence: ${assetOutput.confidenceLabel}`,
    supporting: `${displayAssetKey} · ${assetOutput.playbookLabel}`
  }
}

function App() {
  const [assetOutputs, setAssetOutputs] = useState<AssetOutput[]>(fallbackAssetOutputs)
  const [assetSourcesBySymbol, setAssetSourcesBySymbol] = useState<Partial<Record<string, AssetSource>>>({})
  const [backendStatus, setBackendStatus] = useState<BackendStatus>('loading')
  const [selectedTab, setSelectedTab] = useState('Discover')
  const [selectedAssetKey, setSelectedAssetKey] = useState(fallbackAssetOutputs[0]?.assetKey ?? '')
  const [query, setQuery] = useState(promptSuggestions[0])

  useEffect(() => {
    const controller = new AbortController()
    let mounted = true

    async function hydrateAssetOutputs() {
      const results = await httpAssetSummaryRepository.hydrateAssetOutputs(fallbackAssetOutputs, controller.signal)

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
  }, [])

  const selectedAssetOutput = useMemo(
    () => assetOutputs.find((assetOutput) => assetOutput.assetKey === selectedAssetKey) ?? assetOutputs[0],
    [assetOutputs, selectedAssetKey]
  )

  if (!selectedAssetOutput) {
    return (
      <main className="page-shell page-shell--empty">
        <h1>Narrative Radar</h1>
        <p>Unable to load the asset summary repository.</p>
      </main>
    )
  }

  const selectedAssetStatus: SelectedAssetStatus =
    assetSourcesBySymbol[selectedAssetOutput.symbol] ?? (backendStatus === 'loading' ? 'loading' : 'mock')

  const answer = buildAnswer(selectedAssetOutput, selectedAssetStatus)
  const liveAssetCount = Object.values(assetSourcesBySymbol).filter((source) => source === 'backend').length
  const fallbackAssetCount = assetOutputs.length - liveAssetCount
  const strongestSetup = assetOutputs.reduce((best, current) =>
    current.confidenceScore > best.confidenceScore ? current : best
  )

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
              Narrative Radar now treats the deployed backend as the source of truth for per-asset posture summaries and keeps unsupported analysis panels out of the product surface.
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
              <span>Live summaries</span>
              <strong>{liveAssetCount}</strong>
              <p>Only deployed backend summaries count toward the live total.</p>
            </article>
            <article className="hero-metric-card">
              <span>Fallback assets</span>
              <strong>{fallbackAssetCount}</strong>
              <p>
                {backendStatus === 'live'
                  ? 'Fallback stays available for symbols that fail individually.'
                  : 'All symbols are currently rendering from the local fallback set.'}
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
              <li>Top signal: {selectedAssetOutput.playbookLabel}</li>
              <li>Risk lens: {selectedAssetOutput.riskFlags[0] ?? 'Execution discipline'}</li>
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
            onSelectAsset={(assetKey) => {
              setSelectedAssetKey(assetKey)
              setSelectedTab('Asset Detail')
            }}
            selectedAssetKey={selectedAssetKey}
          />
          <AssetStateDetailPanel assetOutput={selectedAssetOutput} />
        </div>
        <div className="content-grid__right">
          <LiveApiCoveragePanel
            fallbackAssetCount={fallbackAssetCount}
            liveAssetCount={liveAssetCount}
          />
          <SelectedAssetResponsePanel
            assetOutput={selectedAssetOutput}
            assetSource={selectedAssetStatus}
          />
        </div>
      </section>
    </main>
  )
}

export default App
