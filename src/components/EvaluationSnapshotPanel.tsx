import type { EvaluationSummary } from '../domain/types'

type EvaluationSnapshotPanelProps = {
  evaluationSummary: EvaluationSummary
}

const metricFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

export function EvaluationSnapshotPanel({ evaluationSummary }: EvaluationSnapshotPanelProps) {
  const metrics = [
    { label: 'Mood match rate', value: evaluationSummary.moodMatchRate },
    { label: 'Playbook match rate', value: evaluationSummary.playbookMatchRate },
    { label: 'Risk overlap rate', value: evaluationSummary.riskOverlapRate },
    { label: 'Risk exact match rate', value: evaluationSummary.riskExactMatchRate }
  ]

  return (
    <section className="section-card">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker">Quality check</p>
          <h2>Evaluation Snapshot</h2>
        </div>
      </div>
      <div className="metric-grid metric-grid--light">
        {metrics.map((metric) => (
          <article className="metric-tile" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metricFormatter.format(metric.value)}</strong>
            <p>mock extractor가 hint labels와 얼마나 맞는지 보여주는 현재 기준입니다.</p>
          </article>
        ))}
      </div>
    </section>
  )
}
