import type { AssetOutput } from '../domain/types'
import type { AssetSource } from '../data/assetSummaryRepository'

type SelectedAssetResponsePanelProps = {
  assetOutput: AssetOutput
  assetSource: AssetSource | 'loading'
}

export function SelectedAssetResponsePanel({ assetOutput, assetSource }: SelectedAssetResponsePanelProps) {
  const sourceLabel =
    assetSource === 'backend'
      ? 'Live backend contract'
      : assetSource === 'loading'
        ? 'Hydrating deployed response'
        : 'Local fallback payload'
  const displaySymbol = assetOutput.backendSymbol ?? assetOutput.symbol
  const displayAssetKey = assetOutput.backendAssetKey ?? assetOutput.assetKey

  return (
    <section className="section-card">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker">Response mapping</p>
          <h2>Selected Asset Response</h2>
        </div>
        <span className="tag tag--soft">{sourceLabel}</span>
      </div>

      <div className="metric-grid metric-grid--light">
        <article className="metric-tile">
          <span>Symbol</span>
          <strong>{displaySymbol}</strong>
          <p>Directly mapped from the selected asset payload.</p>
        </article>
        <article className="metric-tile">
          <span>Mood label</span>
          <strong>{assetOutput.moodLabel}</strong>
          <p>Rendered as-is from the backend summary response when available.</p>
        </article>
        <article className="metric-tile">
          <span>Playbook label</span>
          <strong>{assetOutput.playbookLabel}</strong>
          <p>Used in both the watchlist card and the answer panel.</p>
        </article>
        <article className="metric-tile">
          <span>Risk flags</span>
          <strong>{assetOutput.riskFlags.length > 0 ? assetOutput.riskFlags.join(', ') : 'None'}</strong>
          <p>Only explicit flags from the payload are shown. No synthetic extractor scores.</p>
        </article>
      </div>

      <div className="detail-hero-row">
        <div>
          <p className="detail-key">{displayAssetKey}</p>
          <h3>Summary</h3>
          <p className="detail-copy">{assetOutput.summary}</p>
        </div>
        <div className="detail-stats">
          <article>
            <span>Confidence label</span>
            <strong>{assetOutput.confidenceLabel}</strong>
          </article>
          <article>
            <span>Source</span>
            <strong>{sourceLabel}</strong>
          </article>
        </div>
      </div>
    </section>
  )
}
