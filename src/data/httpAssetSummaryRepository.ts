import type { AssetOutput } from '../domain/types'
import type { AssetSummaryRepository, HydratedAssetResult } from './assetSummaryRepository'

const API_BASE_URL = import.meta.env.VITE_NARRATIVE_RADAR_API_BASE_URL ?? 'https://narrative-radar-backend.onrender.com'

type BackendAssetPayload = {
  asset_key?: string
  symbol?: string
  mood_label?: string
  playbook_label?: string
  risk_flags?: string[]
  summary?: string
  confidence_score?: number
  confidence_label?: string
}

function mergeBackendAssetOutput(
  fallbackAssetOutput: AssetOutput,
  backendAssetPayload: BackendAssetPayload
): AssetOutput {
  return {
    ...fallbackAssetOutput,
    backendAssetKey: backendAssetPayload.asset_key ?? fallbackAssetOutput.assetKey,
    backendSymbol: backendAssetPayload.symbol ?? fallbackAssetOutput.symbol,
    moodLabel: backendAssetPayload.mood_label ?? fallbackAssetOutput.moodLabel,
    playbookLabel: backendAssetPayload.playbook_label ?? fallbackAssetOutput.playbookLabel,
    riskFlags: backendAssetPayload.risk_flags ?? fallbackAssetOutput.riskFlags,
    summary: backendAssetPayload.summary ?? fallbackAssetOutput.summary,
    confidenceScore: backendAssetPayload.confidence_score ?? fallbackAssetOutput.confidenceScore,
    confidenceLabel: backendAssetPayload.confidence_label ?? fallbackAssetOutput.confidenceLabel
  }
}

async function loadAssetOutputFromBackend(
  fallbackAssetOutput: AssetOutput,
  signal: AbortSignal
): Promise<HydratedAssetResult> {
  try {
    const response = await fetch(`${API_BASE_URL}/asset/${fallbackAssetOutput.symbol}`, { signal })

    if (!response.ok) {
      throw new Error(`Failed to load ${fallbackAssetOutput.symbol}: ${response.status}`)
    }

    const backendAssetPayload = (await response.json()) as BackendAssetPayload

    return {
      assetOutput: mergeBackendAssetOutput(fallbackAssetOutput, backendAssetPayload),
      source: 'backend'
    }
  } catch {
    return {
      assetOutput: fallbackAssetOutput,
      source: 'mock'
    }
  }
}

class HttpAssetSummaryRepository implements AssetSummaryRepository {
  async hydrateAssetOutputs(
    fallbackAssetOutputs: AssetOutput[],
    signal: AbortSignal
  ): Promise<HydratedAssetResult[]> {
    return Promise.all(
      fallbackAssetOutputs.map((fallbackAssetOutput) => loadAssetOutputFromBackend(fallbackAssetOutput, signal))
    )
  }
}

export const httpAssetSummaryRepository = new HttpAssetSummaryRepository()
