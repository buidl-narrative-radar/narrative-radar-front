import type { AssetOutput } from '../domain/types'

export type NarrativeUiPreset = {
  sentimentLabel: string
  confidenceLabel?: string
  discoverSummary: string
  askAiSummary: string
  evidenceBullets: string[]
  crowdFeels: string
  crowdPlaybooks: string[]
  risks: string[]
  evidence: {
    title: string
    meta: string
    body: string
    stats: Array<{ label: string; value: string }>
  }
  watchlistChange: string
  watchlistMainPlaybook: string
}

export const promptSuggestions = [
  'Why is this token overheated?',
  'Should I avoid chasing here?',
  'What is the main risk now?',
  'One-line summary'
]

export const alertItems = [
  {
    id: 'alert-bnb-crowding',
    assetKey: 'bsc:BNB',
    title: 'Crowding surge on BNB',
    description: 'Late-entry anxiety and execution pressure are rising together.',
    timestamp: '4m ago',
    prompt: 'Why is BNB overheated right now?'
  },
  {
    id: 'alert-airdrop-competition',
    assetKey: 'bsc:BNB',
    title: 'Airdrop setup getting too competitive',
    description: 'Point competition is reducing edge quality.',
    timestamp: '11m ago',
    prompt: 'Why is the airdrop setup getting too competitive?'
  },
  {
    id: 'alert-cake-cleaner',
    assetKey: 'bsc:CAKE',
    title: 'CAKE remains cleaner than majors',
    description: 'Tone is still optimistic without strong crowding yet.',
    timestamp: '18m ago',
    prompt: 'Why does CAKE still look cleaner than majors?'
  }
]

const presets: Record<string, NarrativeUiPreset> = {
  BNB: {
    sentimentLabel: 'Cautious Optimism',
    confidenceLabel: 'High',
    discoverSummary:
      'The crowd still looks constructive, but late-entry anxiety and short-term rotation are rising together.',
    askAiSummary:
      'BNB currently reads as cautious optimism. The crowd still looks constructive, but late-entry anxiety and short-term rotation are rising together. The dominant playbook is event front-run.',
    evidenceBullets: [
      'People are front-running the next catalyst',
      'Short-term overheating, medium-term still fine',
      'Execution pressure is rising faster than conviction'
    ],
    crowdFeels:
      'Optimism is still present, but it no longer feels comfortable. Earlier entries looked easier; current entries look more crowded and less forgiving.',
    crowdPlaybooks: [
      'Main playbook: wait for cleaner entries',
      'Secondary playbook: event front-run around catalysts',
      'Avoidance signal: no blind chase on green candles'
    ],
    risks: [
      'Liquidity — Thin local depth can amplify crowded entries.',
      'Execution — Fast rotations can punish delayed positioning.',
      'Narrative split — Strong story can hide weakening entry quality.'
    ],
    evidence: {
      title: 'People are front-running the next catalyst',
      meta: 'event-front-run · 2026. 4. 17. 12:01 PM',
      body:
        'A lot of positioning now looks less like organic accumulation and more like event front-running. That can still work, but it changes the playbook. In that setup, the risk is not being directionally wrong. The risk is being late.',
      stats: [
        { label: 'Views', value: '1890' },
        { label: 'Likes', value: '122' },
        { label: 'Reposts', value: '28' },
        { label: 'Comments', value: '35' }
      ]
    },
    watchlistChange: 'posture updated from prior calmer state',
    watchlistMainPlaybook: 'Event front-run'
  },
  CAKE: {
    sentimentLabel: 'Cautious Optimism',
    confidenceLabel: 'High',
    discoverSummary:
      'Tone remains optimistic and cleaner than the more crowded majors, but execution still matters.',
    askAiSummary:
      'CAKE still reads as cautious optimism. Tone remains optimistic and cleaner than the more crowded majors, but execution still matters. The dominant playbook is wait-for-dip.',
    evidenceBullets: [
      'Crowding is lower than the majors',
      'Execution still matters more than raw enthusiasm',
      'Upside depends on cleaner entries, not blind continuation'
    ],
    crowdFeels:
      'Optimism is still there, but the tone feels cleaner than the majors. People are interested, though they are less frantic and more selective about entries.',
    crowdPlaybooks: [
      'Main playbook: wait for cleaner entries',
      'Secondary playbook: buy on calmer pullbacks',
      'Avoidance signal: do not force entries into crowded majors'
    ],
    risks: [
      'Liquidity — Local depth can still disappear during rotations.',
      'Execution — Good ideas still fail when entries get sloppy.',
      'Crowding spillover — BNB majors can contaminate cleaner setups.'
    ],
    evidence: {
      title: 'CAKE still looks cleaner than the majors',
      meta: 'cleaner-tone · 2026. 4. 17. 12:18 PM',
      body:
        'The tone around CAKE still looks optimistic, but not as overrun as the more crowded majors. That keeps the setup viable, although timing still matters and weak execution can erase the edge quickly.',
      stats: [
        { label: 'Views', value: '1472' },
        { label: 'Likes', value: '91' },
        { label: 'Reposts', value: '19' },
        { label: 'Comments', value: '24' }
      ]
    },
    watchlistChange: 'posture updated from prior calmer state',
    watchlistMainPlaybook: 'Wait-for-dip'
  }
}

function buildGenericPreset(assetOutput: AssetOutput): NarrativeUiPreset {
  const displaySymbol = assetOutput.backendSymbol ?? assetOutput.symbol
  const mainRisk = assetOutput.riskFlags[0] ?? 'Execution'
  const playbook = assetOutput.playbookLabel

  return {
    sentimentLabel: 'Cautious Optimism',
    confidenceLabel: assetOutput.confidenceLabel,
    discoverSummary: assetOutput.summary,
    askAiSummary: `${displaySymbol} currently reads as cautious optimism. ${assetOutput.summary} The dominant playbook is ${playbook}.`,
    evidenceBullets: [
      `${displaySymbol} is still being interpreted through a narrative lens`,
      `Main risk right now is ${mainRisk.toLowerCase()}`,
      `Crowd positioning looks more timing-sensitive than before`
    ],
    crowdFeels:
      'Optimism is still visible, but the crowd is becoming more selective and less forgiving about bad entries.',
    crowdPlaybooks: [
      `Main playbook: ${playbook}`,
      'Secondary playbook: wait for cleaner confirmations',
      'Avoidance signal: no emotional chase into stretched candles'
    ],
    risks: [
      `${mainRisk} — This is the most immediate risk being surfaced right now.`,
      'Execution — Fast rotations can punish delayed positioning.',
      'Narrative split — Strong story can hide weakening entry quality.'
    ],
    evidence: {
      title: `${displaySymbol} is still being driven by narrative momentum`,
      meta: 'derived-posture · 2026. 4. 17. 12:12 PM',
      body:
        'The current posture still reflects constructive sentiment, but participation is getting more timing-sensitive. That means the edge depends less on being directionally right and more on entering before the crowd becomes too compressed.',
      stats: [
        { label: 'Views', value: '1240' },
        { label: 'Likes', value: '73' },
        { label: 'Reposts', value: '17' },
        { label: 'Comments', value: '21' }
      ]
    },
    watchlistChange: 'posture updated from prior calmer state',
    watchlistMainPlaybook: playbook
  }
}

export function getUiPreset(assetOutput: AssetOutput): NarrativeUiPreset {
  return presets[assetOutput.symbol] ?? buildGenericPreset(assetOutput)
}
