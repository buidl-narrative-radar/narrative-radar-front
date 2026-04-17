import type { AssetDetail, AssetState, FeatureVector, FlowStage, SourceDoc } from '../domain/types'
import type { NarrativeRadarRepository } from './repository'

const flowOverview: FlowStage[] = [
  {
    id: 'raw-data',
    title: 'Raw Data',
    description: '시장 담론 원문과 engagement 메타데이터를 그대로 보관합니다.'
  },
  {
    id: 'internal-doc',
    title: 'Internal Doc',
    description: 'source, asset_key, published_at을 포함한 내부 문서 구조로 정규화합니다.'
  },
  {
    id: 'feature-extractor',
    title: 'Feature Extractor',
    description: 'aux tags, mood, play, risk를 rule-based mock extractor로 계산합니다.'
  },
  {
    id: 'state-aggregator',
    title: 'State Aggregator',
    description: '문서별 feature를 asset 기준으로 묶어 가중 집계합니다.'
  },
  {
    id: 'final-asset-state',
    title: 'Final Asset State',
    description: '최종 mood/playbook/risk/confidence를 설명 가능한 요약으로 보여줍니다.'
  }
]

const docs: SourceDoc[] = [
  {
    docId: 'doc_001',
    assetKey: 'BTC',
    text: '에어드랍 이벤트 전에 다들 물량 모으는 느낌. 늦으면 끝일 수도 있다.',
    source: 'moltbook',
    publishedAt: '2026-04-16T10:00:00',
    engagement: { views: 1200, likes: 80, reposts: 10, comments: 12 }
  },
  {
    docId: 'doc_002',
    assetKey: 'BTC',
    text: '유동성이 얕고 스프레드가 커서 추격은 조심해야 한다.',
    source: 'moltbook',
    publishedAt: '2026-04-16T11:00:00',
    engagement: { views: 900, likes: 40, reposts: 5, comments: 7 }
  },
  {
    docId: 'doc_003',
    assetKey: 'BTC',
    text: '지금은 관망이 맞다. 급하게 들어갈 자리는 아닌 듯.',
    source: 'moltbook',
    publishedAt: '2026-04-16T12:00:00',
    engagement: { views: 700, likes: 30, reposts: 4, comments: 5 }
  },
  {
    docId: 'doc_004',
    assetKey: 'ETH',
    text: '다들 들어가는 분위기라 과열 느낌도 있다. 너무 늦게 타면 위험하다.',
    source: 'moltbook',
    publishedAt: '2026-04-16T10:30:00',
    engagement: { views: 1500, likes: 100, reposts: 18, comments: 20 }
  },
  {
    docId: 'doc_005',
    assetKey: 'ETH',
    text: '보안 이슈는 아직 없어 보이지만 지금은 추격 금지 쪽이 더 맞아 보인다.',
    source: 'moltbook',
    publishedAt: '2026-04-16T11:30:00',
    engagement: { views: 1100, likes: 60, reposts: 8, comments: 10 }
  }
]

const features: FeatureVector[] = [
  {
    docId: 'doc_001',
    assetKey: 'BTC',
    cleanText: '에어드랍 이벤트 전에 다들 물량 모으는 느낌. 늦으면 끝일 수도 있다.',
    auxTags: ['event', 'crowd'],
    moodScore: 0.65,
    playProbs: {
      small_repeat_trades: 0.14705882352941174,
      wait: 0.14705882352941174,
      event_front_run: 0.5588235294117647,
      no_chase: 0.14705882352941174
    },
    riskScores: {
      liquidity: 0,
      point_competition: 0.15,
      security: 0,
      execution: 0.2
    }
  },
  {
    docId: 'doc_002',
    assetKey: 'BTC',
    cleanText: '유동성이 얕고 스프레드가 커서 추격은 조심해야 한다.',
    auxTags: ['warning', 'liquidity'],
    moodScore: -0.45,
    playProbs: {
      small_repeat_trades: 0.14285714285714285,
      wait: 0.34285714285714286,
      event_front_run: 0.14285714285714285,
      no_chase: 0.37142857142857144
    },
    riskScores: {
      liquidity: 0.4,
      point_competition: 0,
      security: 0.15,
      execution: 0.2
    }
  },
  {
    docId: 'doc_003',
    assetKey: 'BTC',
    cleanText: '지금은 관망이 맞다. 급하게 들어갈 자리는 아닌 듯.',
    auxTags: ['wait_signal'],
    moodScore: -0.05,
    playProbs: {
      small_repeat_trades: 0.14705882352941174,
      wait: 0.5,
      event_front_run: 0.14705882352941174,
      no_chase: 0.20588235294117643
    },
    riskScores: {
      liquidity: 0,
      point_competition: 0,
      security: 0,
      execution: 0
    }
  },
  {
    docId: 'doc_004',
    assetKey: 'ETH',
    cleanText: '다들 들어가는 분위기라 과열 느낌도 있다. 너무 늦게 타면 위험하다.',
    auxTags: ['warning', 'crowd'],
    moodScore: -0.25,
    playProbs: {
      small_repeat_trades: 0.1515151515151515,
      wait: 0.2727272727272727,
      event_front_run: 0.24242424242424243,
      no_chase: 0.3333333333333333
    },
    riskScores: {
      liquidity: 0,
      point_competition: 0.15,
      security: 0.15,
      execution: 0.2
    }
  },
  {
    docId: 'doc_005',
    assetKey: 'ETH',
    cleanText: '보안 이슈는 아직 없어 보이지만 지금은 추격 금지 쪽이 더 맞아 보인다.',
    auxTags: [],
    moodScore: -0.4,
    playProbs: {
      small_repeat_trades: 0.17857142857142858,
      wait: 0.17857142857142858,
      event_front_run: 0.17857142857142858,
      no_chase: 0.46428571428571436
    },
    riskScores: {
      liquidity: 0,
      point_competition: 0,
      security: 0.5,
      execution: 0
    }
  }
]

const assetStates: AssetState[] = [
  {
    assetKey: 'BTC',
    moodLabel: '혼잡',
    playbookLabel: '대기',
    riskFlags: [],
    confidence: 0.3,
    raw: {
      mood: 0.04292214357937311,
      play: {
        small_repeat_trades: 0.14561861144862392,
        wait: 0.33015438733632985,
        event_front_run: 0.28093057243119696,
        no_chase: 0.24329642878384922
      },
      risk: {
        liquidity: 0.13710819009100103,
        point_competition: 0.04929221435793731,
        security: 0.05141557128412538,
        execution: 0.13427704752275024
      }
    }
  },
  {
    assetKey: 'ETH',
    moodLabel: '공포 속 반등시도',
    playbookLabel: '추격금지',
    riskFlags: ['보안'],
    confidence: 0.2,
    raw: {
      mood: -0.3234186746987952,
      play: {
        small_repeat_trades: 0.16475805820685338,
        wait: 0.22664195744015023,
        event_front_run: 0.211170982631826,
        no_chase: 0.39742900172117035
      },
      risk: {
        liquidity: 0,
        point_competition: 0.07658132530120482,
        security: 0.3213102409638554,
        execution: 0.10210843373493977
      }
    }
  }
]

class MockNarrativeRadarRepository implements NarrativeRadarRepository {
  getFlowOverview(): FlowStage[] {
    return flowOverview
  }

  getAssetStates(): AssetState[] {
    return assetStates
  }

  getAssetDetail(assetKey: string): AssetDetail | undefined {
    const assetState = assetStates.find((item) => item.assetKey === assetKey)

    if (!assetState) {
      return undefined
    }

    return {
      assetState,
      docs: docs.filter((item) => item.assetKey === assetKey),
      features: features.filter((item) => item.assetKey === assetKey)
    }
  }
}

export const mockNarrativeRadarRepository = new MockNarrativeRadarRepository()
