import type { FeatureVector } from '../domain/types'

type FeatureBreakdownPanelProps = {
  feature: FeatureVector
}

const metricFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

export function FeatureBreakdownPanel({ feature }: FeatureBreakdownPanelProps) {
  return (
    <section className="section-card">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker">Feature extractor</p>
          <h2>Feature Breakdown</h2>
        </div>
        <span className="tag">{feature.docId}</span>
      </div>

      <div className="feature-header-grid">
        <article className="metric-tile metric-tile--primary">
          <span>Mood score</span>
          <strong>{metricFormatter.format(feature.moodScore)}</strong>
          <p>clean_text 기반 규칙 추론 결과</p>
        </article>
        <article className="metric-tile">
          <span>Aux tags</span>
          <strong>{feature.auxTags.length > 0 ? feature.auxTags.join(', ') : 'None'}</strong>
          <p>crowd behavior를 설명하는 보조 태그</p>
        </article>
      </div>

      <div className="detail-bars-grid">
        <div>
          <h4>play_probs</h4>
          <ul className="bar-list">
            {Object.entries(feature.playProbs).map(([key, value]) => (
              <li key={key}>
                <div className="bar-list__label-row">
                  <span>{key}</span>
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
          <h4>risk_scores</h4>
          <ul className="bar-list">
            {Object.entries(feature.riskScores).map(([key, value]) => (
              <li key={key}>
                <div className="bar-list__label-row">
                  <span>{key}</span>
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
