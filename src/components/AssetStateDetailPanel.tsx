import type { AssetState } from '../domain/types'

type AssetStateDetailPanelProps = {
  assetState: AssetState
}

const metricFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

export function AssetStateDetailPanel({ assetState }: AssetStateDetailPanelProps) {
  return (
    <section className="panel asset-detail-panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Selected asset</p>
          <h2>{`Asset Detail · ${assetState.assetKey}`}</h2>
        </div>
        <div className="detail-summary">
          <span className="pill pill--accent">{assetState.moodLabel}</span>
          <span className="pill">{assetState.playbookLabel}</span>
        </div>
      </div>

      <div className="detail-grid">
        <article className="metric-card metric-card--primary">
          <span className="metric-card__label">raw.mood</span>
          <strong>{metricFormatter.format(assetState.raw.mood)}</strong>
          <p>집계된 정서 스코어입니다.</p>
        </article>
        <article className="metric-card">
          <span className="metric-card__label">Risk flags</span>
          <strong>{assetState.riskFlags.length > 0 ? assetState.riskFlags.join(', ') : 'None'}</strong>
          <p>지금 플로우에서 강조되는 리스크 요약입니다.</p>
        </article>
      </div>

      <div className="score-columns">
        <div>
          <h3>Play distribution</h3>
          <ul className="score-list">
            {Object.entries(assetState.raw.play).map(([key, value]) => (
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
            {Object.entries(assetState.raw.risk).map(([key, value]) => (
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
