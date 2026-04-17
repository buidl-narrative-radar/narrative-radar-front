import { useEffect, useMemo, useState } from 'react'
import type { AssetOutput } from './domain/types'
import { fallbackAssetOutputs } from './data/fallbackAssetOutputs'
import { httpAssetSummaryRepository } from './data/httpAssetSummaryRepository'
import { alertItems, getUiPreset, promptSuggestions } from './data/uiContent'

const tabs = ['Discover', 'Asset Detail', 'Alerts', 'Watchlist', 'Profile'] as const

type Tab = (typeof tabs)[number]

function App() {
  const [assetOutputs, setAssetOutputs] = useState<AssetOutput[]>(fallbackAssetOutputs)
  const [selectedTab, setSelectedTab] = useState<Tab>('Discover')
  const [selectedAssetKey, setSelectedAssetKey] = useState('bsc:BNB')
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
    }

    hydrateAssetOutputs()

    return () => {
      mounted = false
      controller.abort()
    }
  }, [])

  const watchlistAssets = useMemo(() => {
    const preferredSymbols = ['BNB', 'CAKE']
    return preferredSymbols
      .map((symbol) => assetOutputs.find((assetOutput) => assetOutput.symbol === symbol))
      .filter((assetOutput): assetOutput is AssetOutput => Boolean(assetOutput))
  }, [assetOutputs])

  const selectedAsset = useMemo(
    () => assetOutputs.find((assetOutput) => assetOutput.assetKey === selectedAssetKey) ?? watchlistAssets[0] ?? assetOutputs[0],
    [assetOutputs, selectedAssetKey, watchlistAssets]
  )

  if (!selectedAsset) {
    return (
      <main className="page-shell page-shell--empty">
        <h1>Narrative Radar</h1>
        <p>Unable to load the frontend view model.</p>
      </main>
    )
  }

  const selectedPreset = getUiPreset(selectedAsset)
  const discoverConfidence = selectedPreset.confidenceLabel ?? selectedAsset.confidenceLabel

  const handleSelectAsset = (assetKey: string, tab: Tab = 'Asset Detail') => {
    setSelectedAssetKey(assetKey)
    setSelectedTab(tab)
  }

  const handleAskWhy = (assetKey: string, prompt: string) => {
    setSelectedAssetKey(assetKey)
    setQuery(prompt)
    setSelectedTab('Discover')
  }

  const renderDiscoverView = () => (
    <>
      <section className="discover-hero card-surface">
        <div className="discover-hero__copy">
          <h2>Ask AI what today’s posture means</h2>
          <p>
            Narrative Radar turns noisy market data and discussion into simple mood, playbook, and risk guidance.
          </p>
        </div>

        <div className="discover-hero__prompt-row">
          <input
            aria-label="Ask Narrative Radar"
            className="hero-input"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ask Narrative Radar"
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
      </section>

      <section className="discover-grid">
        <section className="watchlist-surface watchlist-surface--discover">
          <div className="section-heading-row section-heading-row--stacked">
            <div>
              <h2>Your Watchlist Today</h2>
              <p>
                2 assets are shifting from cautious optimism to more crowded conditions. Main risk: liquidity and execution.
              </p>
            </div>
          </div>

          <div className="discover-watchlist-grid">
            {watchlistAssets.map((assetOutput) => {
              const preset = getUiPreset(assetOutput)

              return (
                <article className="discover-asset-card" key={assetOutput.assetKey}>
                  <div className="discover-asset-card__top">
                    <strong>{assetOutput.symbol}</strong>
                    <span className="pill pill--sentiment">{preset.sentimentLabel}</span>
                  </div>

                  <p className="discover-asset-card__summary">{preset.discoverSummary}</p>

                  <div className="chip-row chip-row--tight">
                    <span className="pill pill--risk">Liquidity</span>
                    <span className="pill pill--risk-danger">Execution</span>
                  </div>

                  <button
                    className="inline-link-button"
                    onClick={() => handleSelectAsset(assetOutput.assetKey)}
                    type="button"
                  >
                    View detail <span aria-hidden="true">›</span>
                  </button>
                </article>
              )
            })}
          </div>
        </section>

        <section className="ask-ai-surface card-surface">
          <div className="section-heading-row section-heading-row--stacked">
            <div>
              <h2>Ask AI</h2>
              <p>Plain-language explanation layer on top of today’s posture.</p>
            </div>
          </div>

          <div className="answer-box">
            <div className="answer-box__chips">
              <span className="pill pill--answer">Answer</span>
              <span className="pill pill--confidence">Confidence: {discoverConfidence}</span>
            </div>
            <p>{selectedPreset.askAiSummary}</p>
          </div>

          <div className="section-subtitle-block">
            <h3>Evidence</h3>
          </div>
          <div className="evidence-bullet-list">
            {selectedPreset.evidenceBullets.map((item) => (
              <div className="evidence-bullet-item" key={item}>
                <span aria-hidden="true">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  )

  const renderAssetDetailView = () => (
    <section className="detail-grid">
      <div className="detail-grid__main">
        <section className="detail-hero-card card-surface">
          <div className="detail-hero-card__top">
            <h2>{selectedAsset.symbol}</h2>
            <div className="chip-row chip-row--tight">
              <span className="pill pill--sentiment">{selectedPreset.sentimentLabel}</span>
              <span className="pill pill--outline">Confidence: {selectedPreset.confidenceLabel ?? selectedAsset.confidenceLabel}</span>
            </div>
          </div>

          <p className="detail-hero-card__summary">{selectedPreset.discoverSummary}</p>

          <div className="chip-row chip-row--detail-actions">
            <button className="chip chip--soft-action" onClick={() => setQuery('Why is it overheated?')} type="button">
              Why is it overheated?
            </button>
            <button className="chip chip--soft-action" onClick={() => setQuery('What is the main risk?')} type="button">
              What is the main risk?
            </button>
            <button className="chip chip--soft-action" onClick={() => setQuery('Should I avoid chasing?')} type="button">
              Should I avoid chasing?
            </button>
          </div>
        </section>

        <section className="detail-copy-card card-surface">
          <h3>What the crowd feels</h3>
          <p>{selectedPreset.crowdFeels}</p>
        </section>

        <section className="detail-copy-card card-surface">
          <h3>What the crowd is trying to do</h3>
          <div className="stacked-pills-list">
            {selectedPreset.crowdPlaybooks.map((item) => (
              <div className="stacked-pill-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="detail-grid__side">
        <section className="detail-copy-card card-surface">
          <h3>What can go wrong now</h3>
          <div className="stacked-pills-list stacked-pills-list--warning">
            {selectedPreset.risks.map((item) => (
              <div className="stacked-pill-item stacked-pill-item--warning" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="detail-copy-card card-surface">
          <h3>Evidence</h3>
          <p className="section-note">Why this posture was computed.</p>

          <article className="evidence-post-card">
            <div className="evidence-post-card__top">
              <strong>{selectedPreset.evidence.title}</strong>
              <span aria-hidden="true">◔</span>
            </div>
            <p className="evidence-post-card__meta">{selectedPreset.evidence.meta}</p>
            <p className="evidence-post-card__body">{selectedPreset.evidence.body}</p>
            <div className="evidence-post-card__stats">
              {selectedPreset.evidence.stats.map((stat) => (
                <span key={stat.label}>{`${stat.label} ${stat.value}`}</span>
              ))}
            </div>
          </article>
        </section>
      </div>
    </section>
  )

  const renderAlertsView = () => (
    <section className="alerts-list">
      {alertItems.map((alertItem) => {
        const alertAsset = assetOutputs.find((assetOutput) => assetOutput.assetKey === alertItem.assetKey) ?? selectedAsset

        return (
          <article className="alert-card card-surface" key={alertItem.id}>
            <div className="alert-card__icon" aria-hidden="true">
              ⚠
            </div>
            <div className="alert-card__copy">
              <h3>{alertItem.title}</h3>
              <p>{alertItem.description}</p>
              <span>{alertItem.timestamp}</span>
            </div>
            <div className="alert-card__actions">
              <button className="secondary-button" onClick={() => handleSelectAsset(alertAsset.assetKey)} type="button">
                View asset
              </button>
              <button className="primary-button primary-button--compact" onClick={() => handleAskWhy(alertAsset.assetKey, alertItem.prompt)} type="button">
                Ask AI why
              </button>
            </div>
          </article>
        )
      })}
    </section>
  )

  const renderWatchlistView = () => (
    <section className="watchlist-grid watchlist-grid--full">
      {watchlistAssets.map((assetOutput) => {
        const preset = getUiPreset(assetOutput)

        return (
          <article className="watchlist-card watchlist-card--full card-surface" key={assetOutput.assetKey}>
            <div className="watchlist-card__header">
              <h3>{assetOutput.symbol}</h3>
              <button aria-label={`Save ${assetOutput.symbol}`} className="icon-button icon-button--star" type="button">
                ☆
              </button>
            </div>

            <div className="chip-row chip-row--tight">
              <span className="pill pill--sentiment">{preset.sentimentLabel}</span>
              <span className="pill pill--risk">Liquidity</span>
              <span className="pill pill--risk-danger">Execution</span>
            </div>

            <p className="watchlist-card__summary">{preset.discoverSummary}</p>
            <div className="watchlist-card__divider" />
            <div className="watchlist-card__meta-block">
              <p>
                <strong>Change:</strong> {preset.watchlistChange}
              </p>
              <p>
                <strong>Main playbook:</strong> {preset.watchlistMainPlaybook}
              </p>
            </div>
          </article>
        )
      })}
    </section>
  )

  const renderProfileView = () => (
    <section className="profile-card card-surface">
      <h2>Profile</h2>
      <p className="profile-card__subtitle">Minimal profile surface for MVP.</p>
      <div className="profile-card__list">
        <p>Saved watchlist assets: 2</p>
        <p>BNB Focus mode: On</p>
        <p>Preferred explanation style: Plain-language guidance</p>
      </div>
    </section>
  )

  return (
    <main className="page-shell">
      <section className="app-topbar card-surface">
        <div className="brand-lockup">
          <div className="brand-mark">✦</div>
          <div>
            <h1>Narrative Radar</h1>
            <p>AI Copilot for BNB Chain Users</p>
          </div>
          <span className="top-focus-pill">BNB Focus</span>
        </div>
        <div className="topbar-actions">
          <button aria-label="Search" className="icon-button" type="button">
            ⌕
          </button>
          <button aria-label="Notifications" className="icon-button" type="button">
            ◌
          </button>
          <button aria-label="User menu" className="icon-button" type="button">
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

      {selectedTab === 'Discover' ? renderDiscoverView() : null}
      {selectedTab === 'Asset Detail' ? renderAssetDetailView() : null}
      {selectedTab === 'Alerts' ? renderAlertsView() : null}
      {selectedTab === 'Watchlist' ? renderWatchlistView() : null}
      {selectedTab === 'Profile' ? renderProfileView() : null}
    </main>
  )
}

export default App
