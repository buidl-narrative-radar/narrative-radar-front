import type { AssetOutput } from '../domain/types'

type AssetStateDetailPanelProps = {
  assetOutput: AssetOutput
}

const metricFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

const playLabelMap: Record<string, string> = {
  small_repeat_trades: 'Small repeat trades',
  wait: 'Wait for reset',
  event_front_run: 'Event front run',
  no_chase: 'Avoid late chase'
}

export function AssetStateDetailPanel({ assetOutput }: AssetStateDetailPanelProps) {
  const dominantPlay = Object.entries(assetOutput.raw.play).sort((a, b) => b[1] - a[1])[0]
  const dominantPlayLabel = dominantPlay ? playLabelMap[dominantPlay[0]] ?? dominantPlay[0] : 'Unknown'

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
          <h3>{dominantPlayLabel}</h3>
          <p className="detail-copy">{assetOutput.summary}</p>
        </div>
        <div className="detail-stats">
          <article>
            <span>Confidence</span>
            <strong>{`Confidence: ${assetOutput.confidenceLabel}`}</strong>
          </article>
          <article>
            <span>Dominant play</span>
            <strong>{dominantPlayLabel}</strong>
          </article>
        </div>
      </div>

      <div className="detail-bars-grid">
        <div>
          <h4>Play signals</h4>
          <ul className="bar-list">
            {Object.entries(assetOutput.raw.play).map(([key, value]) => (
              <li key={key}>
                <div className="bar-list__label-row">
                  <span>{playLabelMap[key] ?? key}</span>
                  <strong>{metricFormatter.format(value)}</strong>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${Math.max(value * 100, 4)}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Risk profile</h4>
          <ul className="bar-list">
            {Object.entries(assetOutput.raw.risk).map(([key, value]) => (
              <li key={key}>
                <div className="bar-list__label-row">
                  <span>{key.replace('_', ' ')}</span>
                  <strong>{metricFormatter.format(value)}</strong>
                </div>
                <div className="bar-track bar-track--warm">
                  <div className="bar-fill bar-fill--warm" style={{ width: `${Math.max(value * 100, 4)}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
