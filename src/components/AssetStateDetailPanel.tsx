import type { AssetOutput } from '../domain/types'

type AssetStateDetailPanelProps = {
  assetOutput: AssetOutput
}

export function AssetStateDetailPanel({ assetOutput }: AssetStateDetailPanelProps) {
  return (
    <section className="section-card detail-card">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker">Asset detail</p>
          <h2>Asset Detail</h2>
        </div>
        <div className="detail-badges">
          <span className="tag tag--strong">{assetOutput.symbol}</span>
          <span className="tag">{assetOutput.confidenceLabel}</span>
        </div>
      </div>

      <div className="detail-hero-row">
        <div>
          <p className="detail-key">{assetOutput.assetKey}</p>
          <h3>{assetOutput.playbookLabel}</h3>
          <p className="detail-copy">{assetOutput.summary}</p>
        </div>
        <div className="detail-stats">
          <article>
            <span>Confidence</span>
            <strong>{`Confidence: ${assetOutput.confidenceLabel}`}</strong>
          </article>
          <article>
            <span>Mood label</span>
            <strong>{assetOutput.moodLabel}</strong>
          </article>
        </div>
      </div>

      <div className="metric-grid metric-grid--light">
        <article className="metric-tile metric-tile--primary">
          <span>Playbook label</span>
          <strong>{assetOutput.playbookLabel}</strong>
          <p>This is the highest-level action hint currently exposed by the backend.</p>
        </article>
        <article className="metric-tile">
          <span>Risk flags</span>
          <strong>{assetOutput.riskFlags.length > 0 ? assetOutput.riskFlags.join(', ') : 'None'}</strong>
          <p>Only explicit risk flags from the current contract are shown here.</p>
        </article>
      </div>
    </section>
  )
}
