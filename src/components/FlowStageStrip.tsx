import type { FlowStage } from '../domain/types'

type FlowStageStripProps = {
  stages: FlowStage[]
  activeStageId: string
}

export function FlowStageStrip({ stages, activeStageId }: FlowStageStripProps) {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Pipeline overview</p>
          <h2>How Narrative Radar works</h2>
        </div>
      </div>
      <div className="stage-strip" aria-label="Narrative Radar pipeline stages">
        {stages.map((stage, index) => (
          <article
            className={`stage-card ${stage.id === activeStageId ? 'stage-card--active' : ''}`}
            key={stage.id}
          >
            <span className="stage-index">0{index + 1}</span>
            <h3>{stage.title}</h3>
            <p>{stage.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
