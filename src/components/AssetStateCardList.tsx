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
    <section className="panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Output-ready asset states</p>
          <h2>Mock output.json preview</h2>
        </div>
      </div>
      <div className="asset-grid">
        {assetOutputs.map((assetOutput) => {
          const isSelected = assetOutput.assetKey === selectedAssetKey

          return (
            <button
              className={`asset-card ${isSelected ? 'asset-card--selected' : ''}`}
              key={assetOutput.assetKey}
              onClick={() => onSelectAsset(assetOutput.assetKey)}
              type="button"
            >
              <div className="asset-card__top">
                <div>
                  <span className="asset-card__symbol">{assetOutput.symbol}</span>
                  <p className="asset-card__subline">{assetOutput.assetKey}</p>
                </div>
                <span className="pill">{assetOutput.confidenceLabel}</span>
              </div>
              <dl className="asset-metadata">
                <div>
                  <dt>Mood</dt>
                  <dd>{assetOutput.moodLabel}</dd>
                </div>
                <div>
                  <dt>Playbook</dt>
                  <dd>{assetOutput.playbookLabel}</dd>
                </div>
                <div>
                  <dt>Risk</dt>
                  <dd>{assetOutput.riskFlags.length > 0 ? assetOutput.riskFlags.join(', ') : 'None flagged'}</dd>
                </div>
              </dl>
              <p className="asset-card__summary">{assetOutput.summary}</p>
            </button>
          )
        })}
      </div>
    </section>
  )
}
