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
    <section className="panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Feature extractor output</p>
          <h2>Feature Breakdown</h2>
        </div>
        <span className="pill">{feature.docId}</span>
      </div>

      <div className="feature-summary">
        <article className="metric-card metric-card--primary">
          <span className="metric-card__label">Mood score</span>
          <strong>{metricFormatter.format(feature.moodScore)}</strong>
          <p>clean_text 기반 규칙 추론 결과</p>
        </article>
        <article className="metric-card">
          <span className="metric-card__label">aux tags</span>
          <strong>{feature.auxTags.length > 0 ? feature.auxTags.join(', ') : 'None'}</strong>
          <p>텍스트 의미 추출을 돕는 보조 태그</p>
        </article>
      </div>

      <div className="score-columns">
        <div>
          <h3>play_probs</h3>
          <ul className="score-list">
            {Object.entries(feature.playProbs).map(([key, value]) => (
              <li key={key}>
                <span>{key}</span>
                <strong>{metricFormatter.format(value)}</strong>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>risk_scores</h3>
          <ul className="score-list">
            {Object.entries(feature.riskScores).map(([key, value]) => (
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
