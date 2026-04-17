import type { AssetDetail, AssetState, FlowStage } from '../domain/types'

export interface NarrativeRadarRepository {
  getFlowOverview(): FlowStage[]
  getAssetStates(): AssetState[]
  getAssetDetail(assetKey: string): AssetDetail | undefined
}
