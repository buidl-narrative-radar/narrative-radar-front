import { useMemo, useState } from 'react'
import { AssetStateCardList } from './components/AssetStateCardList'
import { AssetStateDetailPanel } from './components/AssetStateDetailPanel'
import { EvaluationSnapshotPanel } from './components/EvaluationSnapshotPanel'
import { FeatureBreakdownPanel } from './components/FeatureBreakdownPanel'
import { FlowStageStrip } from './components/FlowStageStrip'
import { SourceDocList } from './components/SourceDocList'
import { mockNarrativeRadarRepository } from './data/mockNarrativeRadarRepository'

function App() {
  const repository = mockNarrativeRadarRepository
  const flowOverview = repository.getFlowOverview()
  const assetOutputs = repository.getAssetOutputs()
  const evaluationSummary = repository.getEvaluationSummary()
  const [selectedAssetKey, setSelectedAssetKey] = useState(assetOutputs[0]?.assetKey ?? '')

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
          <p className="eyebrow">Backend-informed mock frontend</p>
          <h1>Narrative Radar Demo</h1>
          <p className="hero-copy">
            업데이트된 backend 구조를 기준으로 mock discussion docs → adapter normalization → feature extraction →
            aggregation → JSON + summary 출력까지를 한 화면에서 설명하는 React 데모입니다.
          </p>
        </div>
        <div className="hero-stats">
          <article>
            <strong>{assetOutputs.length}</strong>
            <span>Tracked assets</span>
          </article>
          <article>
            <strong>{selectedAssetDetail.docs.length}</strong>
            <span>Docs for {selectedAssetDetail.assetOutput.symbol}</span>
          </article>
          <article>
            <strong>{(evaluationSummary.playbookMatchRate * 100).toFixed(0)}%</strong>
            <span>Playbook match snapshot</span>
          </article>
        </div>
      </section>

      <FlowStageStrip activeStageId="json-summary" stages={flowOverview} />

      <div className="main-grid">
        <div className="main-grid__primary">
          <AssetStateCardList
            assetOutputs={assetOutputs}
            onSelectAsset={handleSelectAsset}
            selectedAssetKey={selectedAssetKey}
          />
          <AssetStateDetailPanel assetOutput={selectedAssetDetail.assetOutput} />
        </div>
        <div className="main-grid__secondary">
          <EvaluationSnapshotPanel evaluationSummary={evaluationSummary} />
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
