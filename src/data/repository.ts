import type { AssetDetail, AssetOutput, EvaluationSummary, FlowStage } from '../domain/types'

export interface NarrativeRadarRepository {
  getFlowOverview(): FlowStage[]
  getAssetOutputs(): AssetOutput[]
  getAssetDetail(assetKey: string): AssetDetail | undefined
  getEvaluationSummary(): EvaluationSummary
}
