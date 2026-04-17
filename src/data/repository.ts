import type { AssetDetail, AssetOutput, EvaluationSummary, FeatureVector, FlowStage, SourceDoc } from '../domain/types'

export interface NarrativeRadarRepository {
  getFlowOverview(): FlowStage[]
  getAssetOutputs(): AssetOutput[]
  getAssetDetail(assetKey: string): AssetDetail | undefined
  getAllDocs(): SourceDoc[]
  getFeatureByDocId(docId: string): FeatureVector | undefined
  getEvaluationSummary(): EvaluationSummary
}
