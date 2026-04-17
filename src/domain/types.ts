export interface SourceDoc {
  docId: string
  assetKey: string
  text: string
  source: string
  publishedAt: string | null
  engagement: {
    views: number
    likes: number
    reposts: number
    comments: number
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

export interface AssetState {
  assetKey: string
  moodLabel: string
  playbookLabel: string
  riskFlags: string[]
  confidence: number
  raw: {
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

export interface AssetDetail {
  assetState: AssetState
  docs: SourceDoc[]
  features: FeatureVector[]
}
