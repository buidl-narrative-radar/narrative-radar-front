import type { AssetOutput } from '../domain/types'

type AssetStateCardListProps = {
  assetOutputs: AssetOutput[]
  selectedAssetKey: string
  onSelectAsset: (assetKey: string) => void
}

export function AssetStateCardList({
  assetOutputs,
  selectedAssetKey,
  onSelectAsset
}: AssetStateCardListProps) {
  return (
    <section className="section-card section-card--tinted watchlist-card">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker">Watchlist</p>
          <h2>Your Watchlist Today</h2>
        </div>
        <button className="ghost-link" type="button">
          See all
        </button>
      </div>
      <div className="watchlist-grid">
        {assetOutputs.map((assetOutput) => {
          const isSelected = assetOutput.assetKey === selectedAssetKey
          const topRisk = assetOutput.riskFlags[0] ?? 'Watch timing'

          return (
            <button
              className={`watchlist-item ${isSelected ? 'watchlist-item--selected' : ''}`}
              key={assetOutput.assetKey}
              onClick={() => onSelectAsset(assetOutput.assetKey)}
              type="button"
            >
              <div className="watchlist-item__top">
                <div>
                  <strong>{assetOutput.symbol}</strong>
                  <p>{assetOutput.assetKey}</p>
                </div>
                <span className="tag tag--status">{assetOutput.confidenceLabel}</span>
              </div>
              <div className="watchlist-item__meta">
                <span className="tag">{assetOutput.moodLabel}</span>
                <span className="tag tag--soft">{assetOutput.playbookLabel}</span>
              </div>
              <p className="watchlist-item__summary">{assetOutput.summary}</p>
              <div className="watchlist-item__footer">
                <span>{topRisk}</span>
                <span>{Math.round(assetOutput.confidenceScore * 100)} confidence</span>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
