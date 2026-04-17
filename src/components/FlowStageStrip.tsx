import type { FlowStage } from '../domain/types'

type FlowStageStripProps = {
  stages: FlowStage[]
  activeStageId: string
}

export function FlowStageStrip({ stages, activeStageId }: FlowStageStripProps) {
  return (
    <section className="section-card compact-flow-card">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker">How it works</p>
          <h2>How Narrative Radar works</h2>
        </div>
      </div>
      <div className="compact-flow-grid" aria-label="Narrative Radar pipeline stages">
        {stages.map((stage, index) => (
          <article
            className={`compact-flow-step ${stage.id === activeStageId ? 'compact-flow-step--active' : ''}`}
            key={stage.id}
          >
            <span className="compact-flow-step__index">0{index + 1}</span>
            <div>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
