type LiveApiCoveragePanelProps = {
  liveAssetCount: number
  fallbackAssetCount: number
}

const liveCapabilities = [
  'Per-asset posture summary from /asset/{symbol}',
  'Mood label, playbook label, risk flags, and confidence label',
  'Per-symbol fallback when the deployed backend is unavailable'
]

const pendingCapabilities = [
  'Evidence feed / raw discussion documents',
  'Feature vectors and extractor-level scores',
  'Evaluation snapshot and benchmark metrics'
]

export function LiveApiCoveragePanel({ liveAssetCount, fallbackAssetCount }: LiveApiCoveragePanelProps) {
  return (
    <section className="section-card">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker">Backend contract</p>
          <h2>Live API Coverage</h2>
        </div>
        <span className="tag">{`${liveAssetCount} live / ${fallbackAssetCount} fallback`}</span>
      </div>

      <div className="metric-grid metric-grid--light">
        <article className="metric-tile">
          <span>Live summaries</span>
          <strong>{liveAssetCount}</strong>
          <p>These assets are currently hydrated from the deployed backend contract.</p>
        </article>
        <article className="metric-tile">
          <span>Fallback assets</span>
          <strong>{fallbackAssetCount}</strong>
          <p>Fallback stays local so the watchlist still renders even when Render flakes.</p>
        </article>
      </div>

      <div className="detail-bars-grid">
        <div>
          <h4>Live now</h4>
          <ul className="answer-bullets">
            {liveCapabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Not yet exposed</h4>
          <ul className="answer-bullets">
            {pendingCapabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
