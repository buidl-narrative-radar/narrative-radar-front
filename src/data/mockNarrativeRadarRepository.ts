import type { AssetDetail, AssetOutput, EvaluationSummary, FlowStage } from '../domain/types'
import type { NarrativeRadarRepository } from './repository'
import { assetOutputs, docs, evaluationSummary, features, flowOverview } from './mockGeneratedData'

class MockNarrativeRadarRepository implements NarrativeRadarRepository {
  getFlowOverview(): FlowStage[] {
    return [...flowOverview]
  }

  getAssetOutputs(): AssetOutput[] {
    return [...assetOutputs]
  }

  getAssetDetail(assetKey: string): AssetDetail | undefined {
    const assetOutput = assetOutputs.find((item) => item.assetKey === assetKey)

    if (!assetOutput) {
      return undefined
    }

    return {
      assetOutput,
      docs: docs.filter((item) => item.assetKey === assetKey),
      features: features.filter((item) => item.assetKey === assetKey)
    }
  }

  getEvaluationSummary(): EvaluationSummary {
    return evaluationSummary
  }
}

export const mockNarrativeRadarRepository = new MockNarrativeRadarRepository()
