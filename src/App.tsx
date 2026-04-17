import { useMemo, useState } from 'react'
import { AssetStateCardList } from './components/AssetStateCardList'
import { AssetStateDetailPanel } from './components/AssetStateDetailPanel'
import { FeatureBreakdownPanel } from './components/FeatureBreakdownPanel'
import { FlowStageStrip } from './components/FlowStageStrip'
import { SourceDocList } from './components/SourceDocList'
import { mockNarrativeRadarRepository } from './data/mockNarrativeRadarRepository'

function App() {
  const repository = mockNarrativeRadarRepository
  const flowOverview = repository.getFlowOverview()
  const assetStates = repository.getAssetStates()
  const [selectedAssetKey, setSelectedAssetKey] = useState(assetStates[0]?.assetKey ?? '')

  const selectedAssetDetail = useMemo(
    () => repository.getAssetDetail(selectedAssetKey),
    [repository, selectedAssetKey]
  )

  const [selectedDocId, setSelectedDocId] = useState(selectedAssetDetail?.docs[0]?.docId ?? null)

  const handleSelectAsset = (assetKey: string) => {
    setSelectedAssetKey(assetKey)
    const nextAssetDetail = repository.getAssetDetail(assetKey)
    setSelectedDocId(nextAssetDetail?.docs[0]?.docId ?? null)
  }

  const selectedFeature =
    selectedAssetDetail?.features.find((feature) => feature.docId === selectedDocId) ??
    selectedAssetDetail?.features[0]

  if (!selectedAssetDetail || !selectedFeature) {
    return (
      <main className="app-shell empty-state">
        <h1>Narrative Radar Demo</h1>
        <p>Mock repository is empty.</p>
      </main>
    )
  }

  return (
    <main className="app-shell">
      <section className="hero panel panel--hero">
        <div>
          <p className="eyebrow">Mock-data-only frontend prototype</p>
          <h1>Narrative Radar Demo</h1>
          <p className="hero-copy">
            README와 현재 파이프라인 구조를 바탕으로, source docs → extracted features → final asset state 흐름을
            한 화면에서 설명하는 React 데모입니다.
          </p>
        </div>
        <div className="hero-stats">
          <article>
            <strong>{assetStates.length}</strong>
            <span>Tracked assets</span>
          </article>
          <article>
            <strong>{selectedAssetDetail.docs.length}</strong>
            <span>Docs for {selectedAssetDetail.assetState.assetKey}</span>
          </article>
          <article>
            <strong>Mock</strong>
            <span>Replaceable data provider seam</span>
          </article>
        </div>
      </section>

      <FlowStageStrip activeStageId="final-asset-state" stages={flowOverview} />

      <div className="main-grid">
        <div className="main-grid__primary">
          <AssetStateCardList
            assetStates={assetStates}
            onSelectAsset={handleSelectAsset}
            selectedAssetKey={selectedAssetKey}
          />
          <AssetStateDetailPanel assetState={selectedAssetDetail.assetState} />
        </div>
        <div className="main-grid__secondary">
          <SourceDocList
            docs={selectedAssetDetail.docs}
            onSelectDoc={setSelectedDocId}
            selectedDocId={selectedDocId}
          />
          <FeatureBreakdownPanel feature={selectedFeature} />
        </div>
      </div>
    </main>
  )
}

export default App
