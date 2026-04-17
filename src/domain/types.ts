export interface SourceDoc {
  docId: string
  assetKey: string
  assetSymbol: string
  source: string
  sourceType: string
  authorId: string
  text: string
  publishedAt: string | null
  engagement: {
    views: number
    likes: number
    reposts: number
    comments: number
  }
  labels: {
    mood_hint?: string | null
    playbook_hint?: string | null
    risk_hints?: string[]
  }
}

export interface FeatureVector {
  docId: string
  assetKey: string
  cleanText: string
  auxTags: string[]
  moodScore: number
  playProbs: Record<string, number>
  riskScores: Record<string, number>
}

export interface AssetOutput {
  assetKey: string
  symbol: string
  moodLabel: string
  playbookLabel: string
  riskFlags: string[]
  summary: string
  confidenceScore: number
  confidenceLabel: string
  backendAssetKey?: string
  backendSymbol?: string
  raw?: {
    mood: number
    play: Record<string, number>
    risk: Record<string, number>
  }
}

export interface FlowStage {
  id: string
  title: string
  description: string
}

export interface EvaluationSummary {
  moodMatchRate: number
  playbookMatchRate: number
  riskOverlapRate: number
  riskExactMatchRate: number
}

export interface AssetDetail {
  assetOutput: AssetOutput
  docs: SourceDoc[]
  features: FeatureVector[]
}
