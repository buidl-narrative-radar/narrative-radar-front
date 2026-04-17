import type { AssetState } from '../domain/types'

type AssetStateCardListProps = {
  assetStates: AssetState[]
  selectedAssetKey: string
  onSelectAsset: (assetKey: string) => void
}

export function AssetStateCardList({
  assetStates,
  selectedAssetKey,
  onSelectAsset
}: AssetStateCardListProps) {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Final asset states</p>
          <h2>Mock summary cards</h2>
        </div>
      </div>
      <div className="asset-grid">
        {assetStates.map((assetState) => {
          const isSelected = assetState.assetKey === selectedAssetKey

          return (
            <button
              className={`asset-card ${isSelected ? 'asset-card--selected' : ''}`}
              key={assetState.assetKey}
              onClick={() => onSelectAsset(assetState.assetKey)}
              type="button"
            >
              <div className="asset-card__top">
                <span className="asset-card__symbol">{assetState.assetKey}</span>
                <span className="pill">confidence {(assetState.confidence * 100).toFixed(0)}%</span>
              </div>
              <dl className="asset-metadata">
                <div>
                  <dt>Mood</dt>
                  <dd>{assetState.moodLabel}</dd>
                </div>
                <div>
                  <dt>Playbook</dt>
                  <dd>{assetState.playbookLabel}</dd>
                </div>
                <div>
                  <dt>Risk</dt>
                  <dd>{assetState.riskFlags.length > 0 ? assetState.riskFlags.join(', ') : 'None flagged'}</dd>
                </div>
              </dl>
            </button>
          )
        })}
      </div>
    </section>
  )
}
