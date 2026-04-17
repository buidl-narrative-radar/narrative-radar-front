import type { AssetOutput } from '../domain/types'

export type AssetSource = 'backend' | 'mock'

export type HydratedAssetResult = {
  assetOutput: AssetOutput
  source: AssetSource
}

export interface AssetSummaryRepository {
  hydrateAssetOutputs(fallbackAssetOutputs: AssetOutput[], signal: AbortSignal): Promise<HydratedAssetResult[]>
}
