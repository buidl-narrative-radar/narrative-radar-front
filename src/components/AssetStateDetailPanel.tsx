import type { AssetOutput } from '../domain/types'

type AssetStateDetailPanelProps = {
  assetOutput: AssetOutput
}

const metricFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

export function AssetStateDetailPanel({ assetOutput }: AssetStateDetailPanelProps) {
  return (
    <section className="panel asset-detail-panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Selected asset output</p>
          <h2>{`Asset Detail · ${assetOutput.symbol}`}</h2>
        </div>
        <div className="detail-summary">
          <span className="pill pill--accent">{assetOutput.moodLabel}</span>
          <span className="pill">{assetOutput.playbookLabel}</span>
          <span className="pill">{assetOutput.confidenceLabel}</span>
        </div>
      </div>

      <div className="detail-grid">
        <article className="metric-card metric-card--primary">
          <span className="metric-card__label">asset_key</span>
          <strong>{assetOutput.assetKey}</strong>
          <p>프론트가 바로 소비할 output row의 식별자입니다.</p>
        </article>
        <article className="metric-card">
          <span className="metric-card__label">confidence_score</span>
          <strong>{metricFormatter.format(assetOutput.confidenceScore)}</strong>
          <p>confidence_label과 함께 사용자 출력에 전달됩니다.</p>
        </article>
      </div>

      <article className="detail-callout">
        <span className="metric-card__label">summary</span>
        <p>{assetOutput.summary}</p>
      </article>

      <div className="score-columns">
        <div>
          <h3>Play distribution</h3>
          <ul className="score-list">
            {Object.entries(assetOutput.raw.play).map(([key, value]) => (
              <li key={key}>
                <span>{key}</span>
                <strong>{metricFormatter.format(value)}</strong>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Risk distribution</h3>
          <ul className="score-list">
            {Object.entries(assetOutput.raw.risk).map(([key, value]) => (
              <li key={key}>
                <span>{key}</span>
                <strong>{metricFormatter.format(value)}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
