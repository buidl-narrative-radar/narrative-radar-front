// Auto-generated from narrative-radar backend mock pipeline
export const flowOverview = [
  {
    "id": "mock-discussion-docs",
    "title": "Mock Discussion Docs",
    "description": "Load distributed discussion documents from mock_data/moltbook_mock_docs.md."
  },
  {
    "id": "adapter",
    "title": "Adapter",
    "description": "Normalize submolt, asset_key, engagement, and labels into the internal document structure."
  },
  {
    "id": "llm-feature-extractor",
    "title": "LLM Feature Extractor",
    "description": "The current frontend mock recreates mood, play, and risk using the extractor's mode=mock output."
  },
  {
    "id": "document-features",
    "title": "Document Features",
    "description": "Inspect document-level feature vectors and hint-based evaluation inputs."
  },
  {
    "id": "group-by-asset",
    "title": "Group by Asset",
    "description": "Group documents by asset_key to create the market unit for the posture engine."
  },
  {
    "id": "state-aggregator",
    "title": "State Aggregator",
    "description": "Aggregate asset-level mood, play, and risk using engagement weights."
  },
  {
    "id": "asset-level-state",
    "title": "Asset-level State",
    "description": "Expose mood_label, playbook_label, risk_flags, and confidence as the posture state."
  },
  {
    "id": "json-summary",
    "title": "JSON + Summary",
    "description": "Preview a frontend shape close to output.json together with summary and confidence label."
  }
]

export const assetOutputs = [
  {
    "assetKey": "bsc:BNB",
    "symbol": "BNB",
    "moodLabel": "Crowded",
    "playbookLabel": "Unclear",
    "riskFlags": [],
    "summary": "bsc:BNB currently looks crowded, the crowd is leaning toward an unclear playbook, and the main risk is still undefined in this mock dataset.",
    "confidenceScore": 0.341,
    "confidenceLabel": "Low",
    "raw": {
      "mood": -0.1012986340555071,
      "play": {
        "small_repeat_trades": 0.15682138455940947,
        "wait": 0.27830568794347915,
        "event_front_run": 0.26752145070257005,
        "no_chase": 0.29735147679454144
      },
      "risk": {
        "liquidity": 0.08162164155459509,
        "point_competition": 0.0892646174692743,
        "security": 0.0,
        "execution": 0.2824097444760711
      }
    }
  },
  {
    "assetKey": "bsc:CAKE",
    "symbol": "CAKE",
    "moodLabel": "Crowded",
    "playbookLabel": "Unclear",
    "riskFlags": [],
    "summary": "bsc:CAKE currently looks crowded, the crowd is leaning toward an unclear playbook, and the main risk is still undefined in this mock dataset.",
    "confidenceScore": 0.314,
    "confidenceLabel": "Low",
    "raw": {
      "mood": -0.0351157836113418,
      "play": {
        "small_repeat_trades": 0.19688259564637606,
        "wait": 0.22347712385222063,
        "event_front_run": 0.30391630042736484,
        "no_chase": 0.2757239800740385
      },
      "risk": {
        "liquidity": 0.0823493491795523,
        "point_competition": 0.13529799529594116,
        "security": 0.0,
        "execution": 0.12121010146855273
      }
    }
  },
  {
    "assetKey": "bsc:LISTA",
    "symbol": "LISTA",
    "moodLabel": "Cautious Optimism",
    "playbookLabel": "Event Front-run",
    "riskFlags": [],
    "summary": "bsc:LISTA currently reads as cautious optimism, the crowd is leaning toward an event front-run playbook, and the main risk is still undefined in this mock dataset.",
    "confidenceScore": 0.419,
    "confidenceLabel": "Low",
    "raw": {
      "mood": 0.14517076955215635,
      "play": {
        "small_repeat_trades": 0.1410696982400069,
        "wait": 0.16383710929565656,
        "event_front_run": 0.5027968193491178,
        "no_chase": 0.1922963731152186
      },
      "risk": {
        "liquidity": 0.0,
        "point_competition": 0.1207063804121424,
        "security": 0.0,
        "execution": 0.2982787849762946
      }
    }
  },
  {
    "assetKey": "bsc:THE",
    "symbol": "THE",
    "moodLabel": "Crowded",
    "playbookLabel": "Unclear",
    "riskFlags": [],
    "summary": "bsc:THE currently looks crowded, the crowd is leaning toward an unclear playbook, and the main risk is still undefined in this mock dataset.",
    "confidenceScore": 0.299,
    "confidenceLabel": "Low",
    "raw": {
      "mood": -0.02893722952408128,
      "play": {
        "small_repeat_trades": 0.2105651065321431,
        "wait": 0.23984614691214273,
        "event_front_run": 0.2731412991685718,
        "no_chase": 0.2764474473871423
      },
      "risk": {
        "liquidity": 0.0,
        "point_competition": 0.0752991008335755,
        "security": 0.0,
        "execution": 0.11973760624118857
      }
    }
  },
  {
    "assetKey": "bsc:BANANA",
    "symbol": "BANANA",
    "moodLabel": "Crowded",
    "playbookLabel": "Event Front-run",
    "riskFlags": [],
    "summary": "bsc:BANANA currently looks crowded, the crowd is leaning toward an event front-run playbook, and the main risk is still undefined in this mock dataset.",
    "confidenceScore": 0.307,
    "confidenceLabel": "Low",
    "raw": {
      "mood": 0.03034387624416013,
      "play": {
        "small_repeat_trades": 0.2253134670530461,
        "wait": 0.2253134670530461,
        "event_front_run": 0.3009944336917947,
        "no_chase": 0.24837863220211315
      },
      "risk": {
        "liquidity": 0.0799592391834324,
        "point_competition": 0.09049288640692092,
        "security": 0.0,
        "execution": 0.0
      }
    }
  },
  {
    "assetKey": "bsc:KOMA",
    "symbol": "KOMA",
    "moodLabel": "Crowded",
    "playbookLabel": "Unclear",
    "riskFlags": [],
    "summary": "bsc:KOMA currently looks crowded, the crowd is leaning toward an unclear playbook, and the main risk is still undefined in this mock dataset.",
    "confidenceScore": 0.313,
    "confidenceLabel": "Low",
    "raw": {
      "mood": -0.05396444144944488,
      "play": {
        "small_repeat_trades": 0.21213816008795316,
        "wait": 0.226304146086323,
        "event_front_run": 0.2831064267265154,
        "no_chase": 0.2784512670992084
      },
      "risk": {
        "liquidity": 0.11939074685173383,
        "point_competition": 0.09007280640488459,
        "security": 0.0,
        "execution": 0.03956654227617207
      }
    }
  }
]

export const docs = [
  {
    "docId": "doc_001",
    "assetKey": "bsc:BNB",
    "assetSymbol": "BNB",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "bsc-traders",
    "text": "BNB still looks strong, but entries are getting worse\n\nThe tone is still optimistic, but the crowd is clearly less comfortable than before. Earlier entries looked clean; now new buyers sound more urgent. That usually shifts the playbook from aggressive chasing to waiting for a cleaner reset.",
    "publishedAt": "2026-04-17T10:29:00+09:00",
    "engagement": {
      "views": 848,
      "likes": 26,
      "reposts": 7,
      "comments": 10
    },
    "labels": {
      "mood_hint": "cautious_heat",
      "playbook_hint": "Event front-run",
      "risk_hints": [
        "Liquidity",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_002",
    "assetKey": "bsc:BNB",
    "assetSymbol": "BNB",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "narrative-desk",
    "text": "Crowding around BNB is rising again\n\nThis is not fear. It is crowded optimism. The structure still looks constructive, but fresh entries feel more fragile because short-term rotation is accelerating.",
    "publishedAt": "2026-04-17T13:04:00+09:00",
    "engagement": {
      "views": 681,
      "likes": 24,
      "reposts": 5,
      "comments": 12
    },
    "labels": {
      "mood_hint": "cautious_heat",
      "playbook_hint": "Wait-for-dip",
      "risk_hints": [
        "Execution",
        "Liquidity"
      ]
    }
  },
  {
    "docId": "doc_003",
    "assetKey": "bsc:BNB",
    "assetSymbol": "BNB",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "liquidity-watch",
    "text": "BNB setup is still constructive, not comfortable\n\nMy issue is not the direction of BNB. My issue is the quality of entries. If liquidity thins while everyone tries to front-run the same move, execution risk rises quickly.",
    "publishedAt": "2026-04-17T11:18:00+09:00",
    "engagement": {
      "views": 1826,
      "likes": 85,
      "reposts": 32,
      "comments": 38
    },
    "labels": {
      "mood_hint": "cautious_heat",
      "playbook_hint": "Event front-run",
      "risk_hints": [
        "Execution",
        "Liquidity"
      ]
    }
  },
  {
    "docId": "doc_004",
    "assetKey": "bsc:BNB",
    "assetSymbol": "BNB",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "perp-flow",
    "text": "This no longer feels like an easy BNB breakout\n\nBNB can still push higher, but I would rather buy a pullback than compete with emotional buyers on green candles. Late-entry pressure is the main tell here.",
    "publishedAt": "2026-04-17T12:01:00+09:00",
    "engagement": {
      "views": 938,
      "likes": 40,
      "reposts": 15,
      "comments": 9
    },
    "labels": {
      "mood_hint": "cautious_heat",
      "playbook_hint": "Wait-for-dip",
      "risk_hints": [
        "Execution",
        "Liquidity"
      ]
    }
  },
  {
    "docId": "doc_005",
    "assetKey": "bsc:BNB",
    "assetSymbol": "BNB",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "perp-flow",
    "text": "BNB is fine, but I would not chase here\n\nThe narrative remains strong, but that is exactly why I am more selective now. Strong stories can hide worsening entry quality.",
    "publishedAt": "2026-04-17T10:38:00+09:00",
    "engagement": {
      "views": 1161,
      "likes": 91,
      "reposts": 18,
      "comments": 19
    },
    "labels": {
      "mood_hint": "cautious_heat",
      "playbook_hint": "Wait-for-dip",
      "risk_hints": [
        "Execution",
        "Liquidity"
      ]
    }
  },
  {
    "docId": "doc_006",
    "assetKey": "bsc:BNB",
    "assetSymbol": "BNB",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "event-front-run",
    "text": "Short-term heat is building around BNB\n\nThe tone is still optimistic, but the crowd is clearly less comfortable than before. Earlier entries looked clean; now new buyers sound more urgent. That usually shifts the playbook from aggressive chasing to waiting for a cleaner reset.",
    "publishedAt": "2026-04-17T10:45:00+09:00",
    "engagement": {
      "views": 1013,
      "likes": 73,
      "reposts": 4,
      "comments": 12
    },
    "labels": {
      "mood_hint": "cautious_heat",
      "playbook_hint": "Wait-for-dip",
      "risk_hints": [
        "Liquidity",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_007",
    "assetKey": "bsc:BNB",
    "assetSymbol": "BNB",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "event-front-run",
    "text": "The BNB story is intact, the entry quality is not\n\nThis is not fear. It is crowded optimism. The structure still looks constructive, but fresh entries feel more fragile because short-term rotation is accelerating.",
    "publishedAt": "2026-04-17T11:35:00+09:00",
    "engagement": {
      "views": 1189,
      "likes": 68,
      "reposts": 20,
      "comments": 12
    },
    "labels": {
      "mood_hint": "cautious_heat",
      "playbook_hint": "Wait-for-dip",
      "risk_hints": [
        "Execution",
        "Liquidity"
      ]
    }
  },
  {
    "docId": "doc_008",
    "assetKey": "bsc:BNB",
    "assetSymbol": "BNB",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "perp-flow",
    "text": "BNB still works better on resets than on breakouts\n\nMy issue is not the direction of BNB. My issue is the quality of entries. If liquidity thins while everyone tries to front-run the same move, execution risk rises quickly.",
    "publishedAt": "2026-04-17T10:37:00+09:00",
    "engagement": {
      "views": 1920,
      "likes": 77,
      "reposts": 30,
      "comments": 20
    },
    "labels": {
      "mood_hint": "cautious_heat",
      "playbook_hint": "Avoid late chase",
      "risk_hints": [
        "Liquidity",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_009",
    "assetKey": "bsc:BNB",
    "assetSymbol": "BNB",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "event-front-run",
    "text": "Execution matters more than conviction on BNB now\n\nBNB can still push higher, but I would rather buy a pullback than compete with emotional buyers on green candles. Late-entry pressure is the main tell here.",
    "publishedAt": "2026-04-17T09:37:00+09:00",
    "engagement": {
      "views": 2193,
      "likes": 167,
      "reposts": 16,
      "comments": 18
    },
    "labels": {
      "mood_hint": "cautious_heat",
      "playbook_hint": "Avoid late chase",
      "risk_hints": [
        "Execution",
        "Liquidity"
      ]
    }
  },
  {
    "docId": "doc_010",
    "assetKey": "bsc:BNB",
    "assetSymbol": "BNB",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "perp-flow",
    "text": "Late BNB entries are starting to look fragile\n\nThe narrative remains strong, but that is exactly why I am more selective now. Strong stories can hide worsening entry quality.",
    "publishedAt": "2026-04-17T12:18:00+09:00",
    "engagement": {
      "views": 2490,
      "likes": 215,
      "reposts": 44,
      "comments": 33
    },
    "labels": {
      "mood_hint": "cautious_heat",
      "playbook_hint": "Avoid late chase",
      "risk_hints": [
        "Execution",
        "Liquidity"
      ]
    }
  },
  {
    "docId": "doc_011",
    "assetKey": "bsc:CAKE",
    "assetSymbol": "CAKE",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "dex-flow",
    "text": "CAKE still looks cleaner than the crowded majors\n\nWhat I like here is that people still sound interested rather than urgent. That usually means the setup is healthier than a straight momentum frenzy.",
    "publishedAt": "2026-04-17T12:05:00+09:00",
    "engagement": {
      "views": 905,
      "likes": 40,
      "reposts": 11,
      "comments": 11
    },
    "labels": {
      "mood_hint": "cautious_optimism",
      "playbook_hint": "Wait-for-dip",
      "risk_hints": [
        "Liquidity",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_012",
    "assetKey": "bsc:CAKE",
    "assetSymbol": "CAKE",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "pancake-watch",
    "text": "This still feels like optimism, not hype, on CAKE\n\nThe narrative is improving, but I would still size positions with discipline. Good setups can remain good while execution stays the main risk.",
    "publishedAt": "2026-04-17T12:16:00+09:00",
    "engagement": {
      "views": 903,
      "likes": 54,
      "reposts": 4,
      "comments": 7
    },
    "labels": {
      "mood_hint": "cautious_optimism",
      "playbook_hint": "Buy the dip",
      "risk_hints": [
        "Execution",
        "Liquidity"
      ]
    }
  },
  {
    "docId": "doc_013",
    "assetKey": "bsc:CAKE",
    "assetSymbol": "CAKE",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "narrative-desk",
    "text": "CAKE setup looks healthy, but size still matters\n\nCompared with more crowded names, CAKE still feels cleaner. The crowd tone is positive, but not reckless, which keeps the main playbook closer to buy-the-dip.",
    "publishedAt": "2026-04-17T10:40:00+09:00",
    "engagement": {
      "views": 750,
      "likes": 39,
      "reposts": 10,
      "comments": 11
    },
    "labels": {
      "mood_hint": "cautious_optimism",
      "playbook_hint": "Wait-for-dip",
      "risk_hints": [
        "Execution",
        "Liquidity"
      ]
    }
  },
  {
    "docId": "doc_014",
    "assetKey": "bsc:CAKE",
    "assetSymbol": "CAKE",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "pancake-watch",
    "text": "CAKE is constructive without feeling desperate\n\nI do not think this is a no-risk setup. A thinner book can still punish bad timing. But unlike crowded names, this does not look fully saturated yet.",
    "publishedAt": "2026-04-17T10:18:00+09:00",
    "engagement": {
      "views": 2432,
      "likes": 151,
      "reposts": 20,
      "comments": 45
    },
    "labels": {
      "mood_hint": "cautious_optimism",
      "playbook_hint": "Size selectively",
      "risk_hints": [
        "Liquidity",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_015",
    "assetKey": "bsc:CAKE",
    "assetSymbol": "CAKE",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "bsc-traders",
    "text": "The CAKE narrative is improving at the right speed\n\nIf everyone suddenly sounds certain, the edge shrinks. For now the tone still feels selective, which is a good sign.",
    "publishedAt": "2026-04-17T11:16:00+09:00",
    "engagement": {
      "views": 626,
      "likes": 54,
      "reposts": 11,
      "comments": 7
    },
    "labels": {
      "mood_hint": "cautious_optimism",
      "playbook_hint": "Wait-for-dip",
      "risk_hints": [
        "Execution",
        "Liquidity"
      ]
    }
  },
  {
    "docId": "doc_016",
    "assetKey": "bsc:CAKE",
    "assetSymbol": "CAKE",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "bsc-traders",
    "text": "CAKE still looks buy-the-dip, not chase-the-breakout\n\nWhat I like here is that people still sound interested rather than urgent. That usually means the setup is healthier than a straight momentum frenzy.",
    "publishedAt": "2026-04-17T09:37:00+09:00",
    "engagement": {
      "views": 1928,
      "likes": 116,
      "reposts": 13,
      "comments": 27
    },
    "labels": {
      "mood_hint": "cautious_optimism",
      "playbook_hint": "Wait-for-dip",
      "risk_hints": [
        "Execution",
        "Liquidity"
      ]
    }
  },
  {
    "docId": "doc_017",
    "assetKey": "bsc:CAKE",
    "assetSymbol": "CAKE",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "narrative-desk",
    "text": "The crowd is interested in CAKE, not euphoric yet\n\nThe narrative is improving, but I would still size positions with discipline. Good setups can remain good while execution stays the main risk.",
    "publishedAt": "2026-04-17T11:07:00+09:00",
    "engagement": {
      "views": 659,
      "likes": 24,
      "reposts": 6,
      "comments": 16
    },
    "labels": {
      "mood_hint": "cautious_optimism",
      "playbook_hint": "Buy the dip",
      "risk_hints": [
        "Execution",
        "Liquidity"
      ]
    }
  },
  {
    "docId": "doc_018",
    "assetKey": "bsc:CAKE",
    "assetSymbol": "CAKE",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "pancake-watch",
    "text": "CAKE has room, but execution still matters\n\nCompared with more crowded names, CAKE still feels cleaner. The crowd tone is positive, but not reckless, which keeps the main playbook closer to buy-the-dip.",
    "publishedAt": "2026-04-17T09:28:00+09:00",
    "engagement": {
      "views": 1781,
      "likes": 154,
      "reposts": 9,
      "comments": 28
    },
    "labels": {
      "mood_hint": "cautious_optimism",
      "playbook_hint": "Wait-for-dip",
      "risk_hints": [
        "Execution",
        "Liquidity"
      ]
    }
  },
  {
    "docId": "doc_019",
    "assetKey": "bsc:CAKE",
    "assetSymbol": "CAKE",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "dex-flow",
    "text": "This is why CAKE still feels early\n\nI do not think this is a no-risk setup. A thinner book can still punish bad timing. But unlike crowded names, this does not look fully saturated yet.",
    "publishedAt": "2026-04-17T10:24:00+09:00",
    "engagement": {
      "views": 1593,
      "likes": 138,
      "reposts": 10,
      "comments": 27
    },
    "labels": {
      "mood_hint": "cautious_optimism",
      "playbook_hint": "Buy the dip",
      "risk_hints": [
        "Execution",
        "Liquidity"
      ]
    }
  },
  {
    "docId": "doc_020",
    "assetKey": "bsc:CAKE",
    "assetSymbol": "CAKE",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "pancake-watch",
    "text": "CAKE remains positive without strong crowding\n\nIf everyone suddenly sounds certain, the edge shrinks. For now the tone still feels selective, which is a good sign.",
    "publishedAt": "2026-04-17T11:30:00+09:00",
    "engagement": {
      "views": 1995,
      "likes": 137,
      "reposts": 21,
      "comments": 33
    },
    "labels": {
      "mood_hint": "cautious_optimism",
      "playbook_hint": "Buy the dip",
      "risk_hints": [
        "Execution",
        "Liquidity"
      ]
    }
  },
  {
    "docId": "doc_021",
    "assetKey": "bsc:LISTA",
    "assetSymbol": "LISTA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "event-front-run",
    "text": "LISTA is trading more like an event than a trend\n\nThe market is treating LISTA like an upcoming catalyst trade. That can keep working, but it also means late entries are more exposed to timing mistakes.",
    "publishedAt": "2026-04-17T11:46:00+09:00",
    "engagement": {
      "views": 663,
      "likes": 43,
      "reposts": 5,
      "comments": 7
    },
    "labels": {
      "mood_hint": "event_driven",
      "playbook_hint": "Avoid late chase",
      "risk_hints": [
        "Execution",
        "Narrative timing"
      ]
    }
  },
  {
    "docId": "doc_022",
    "assetKey": "bsc:LISTA",
    "assetSymbol": "LISTA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "bsc-traders",
    "text": "The LISTA move looks catalyst-driven\n\nThis does not read like stable trend-following. It reads like people trying to position before the next trigger. In that environment, execution matters more than conviction.",
    "publishedAt": "2026-04-17T12:55:00+09:00",
    "engagement": {
      "views": 2474,
      "likes": 78,
      "reposts": 22,
      "comments": 41
    },
    "labels": {
      "mood_hint": "event_driven",
      "playbook_hint": "Avoid late chase",
      "risk_hints": [
        "Narrative timing",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_023",
    "assetKey": "bsc:LISTA",
    "assetSymbol": "LISTA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "yield-watch",
    "text": "People are front-running LISTA again\n\nLISTA still has a valid upside case, but the crowd behavior is changing from accumulation to event front-running. That changes the risk profile immediately.",
    "publishedAt": "2026-04-17T10:54:00+09:00",
    "engagement": {
      "views": 890,
      "likes": 65,
      "reposts": 16,
      "comments": 15
    },
    "labels": {
      "mood_hint": "event_driven",
      "playbook_hint": "Wait for reset",
      "risk_hints": [
        "Narrative timing",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_024",
    "assetKey": "bsc:LISTA",
    "assetSymbol": "LISTA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "event-front-run",
    "text": "LISTA still has upside, but timing is the whole game\n\nI do not hate the setup, but I do not want to be the last buyer into the same catalyst everyone is watching.",
    "publishedAt": "2026-04-17T12:48:00+09:00",
    "engagement": {
      "views": 818,
      "likes": 56,
      "reposts": 7,
      "comments": 12
    },
    "labels": {
      "mood_hint": "event_driven",
      "playbook_hint": "Avoid late chase",
      "risk_hints": [
        "Execution",
        "Narrative timing"
      ]
    }
  },
  {
    "docId": "doc_025",
    "assetKey": "bsc:LISTA",
    "assetSymbol": "LISTA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "yield-watch",
    "text": "This looks like event positioning, not relaxed accumulation\n\nThe story still works. The problem is that once the crowd agrees on the story, the quality of late entries gets worse very quickly.",
    "publishedAt": "2026-04-17T11:29:00+09:00",
    "engagement": {
      "views": 2111,
      "likes": 106,
      "reposts": 37,
      "comments": 25
    },
    "labels": {
      "mood_hint": "event_driven",
      "playbook_hint": "Avoid late chase",
      "risk_hints": [
        "Narrative timing",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_026",
    "assetKey": "bsc:LISTA",
    "assetSymbol": "LISTA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "narrative-desk",
    "text": "LISTA is attractive, but only if you respect timing\n\nThe market is treating LISTA like an upcoming catalyst trade. That can keep working, but it also means late entries are more exposed to timing mistakes.",
    "publishedAt": "2026-04-17T11:24:00+09:00",
    "engagement": {
      "views": 995,
      "likes": 46,
      "reposts": 7,
      "comments": 23
    },
    "labels": {
      "mood_hint": "event_driven",
      "playbook_hint": "Avoid late chase",
      "risk_hints": [
        "Execution",
        "Narrative timing"
      ]
    }
  },
  {
    "docId": "doc_027",
    "assetKey": "bsc:LISTA",
    "assetSymbol": "LISTA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "yield-watch",
    "text": "The LISTA crowd is leaning too hard into the next catalyst\n\nThis does not read like stable trend-following. It reads like people trying to position before the next trigger. In that environment, execution matters more than conviction.",
    "publishedAt": "2026-04-17T10:26:00+09:00",
    "engagement": {
      "views": 1727,
      "likes": 138,
      "reposts": 33,
      "comments": 41
    },
    "labels": {
      "mood_hint": "event_driven",
      "playbook_hint": "Event front-run",
      "risk_hints": [
        "Narrative timing",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_028",
    "assetKey": "bsc:LISTA",
    "assetSymbol": "LISTA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "event-front-run",
    "text": "LISTA is not dead, just more event-sensitive now\n\nLISTA still has a valid upside case, but the crowd behavior is changing from accumulation to event front-running. That changes the risk profile immediately.",
    "publishedAt": "2026-04-17T11:09:00+09:00",
    "engagement": {
      "views": 1057,
      "likes": 86,
      "reposts": 19,
      "comments": 11
    },
    "labels": {
      "mood_hint": "event_driven",
      "playbook_hint": "Wait for reset",
      "risk_hints": [
        "Narrative timing",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_029",
    "assetKey": "bsc:LISTA",
    "assetSymbol": "LISTA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "narrative-desk",
    "text": "This is why LISTA feels harder to buy late\n\nI do not hate the setup, but I do not want to be the last buyer into the same catalyst everyone is watching.",
    "publishedAt": "2026-04-17T11:59:00+09:00",
    "engagement": {
      "views": 1486,
      "likes": 106,
      "reposts": 23,
      "comments": 31
    },
    "labels": {
      "mood_hint": "event_driven",
      "playbook_hint": "Event front-run",
      "risk_hints": [
        "Execution",
        "Narrative timing"
      ]
    }
  },
  {
    "docId": "doc_030",
    "assetKey": "bsc:LISTA",
    "assetSymbol": "LISTA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "event-front-run",
    "text": "LISTA can still work, but it is no longer forgiving\n\nThe story still works. The problem is that once the crowd agrees on the story, the quality of late entries gets worse very quickly.",
    "publishedAt": "2026-04-17T12:17:00+09:00",
    "engagement": {
      "views": 739,
      "likes": 47,
      "reposts": 9,
      "comments": 15
    },
    "labels": {
      "mood_hint": "event_driven",
      "playbook_hint": "Event front-run",
      "risk_hints": [
        "Narrative timing",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_031",
    "assetKey": "bsc:THE",
    "assetSymbol": "THE",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "narrative-desk",
    "text": "THE still has narrative energy, but the move is messy\n\nTHE still has narrative strength, but the trade is becoming noisier. That usually means the thesis can survive while the execution quality gets worse.",
    "publishedAt": "2026-04-17T12:58:00+09:00",
    "engagement": {
      "views": 1660,
      "likes": 57,
      "reposts": 11,
      "comments": 30
    },
    "labels": {
      "mood_hint": "volatile_optimism",
      "playbook_hint": "Quick trim",
      "risk_hints": [
        "Execution",
        "Volatility"
      ]
    }
  },
  {
    "docId": "doc_032",
    "assetKey": "bsc:THE",
    "assetSymbol": "THE",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "bsc-traders",
    "text": "This feels like volatile optimism on THE\n\nThis is the kind of setup where people stay optimistic even while the path becomes jagged. It is not bearish, just harder to execute cleanly.",
    "publishedAt": "2026-04-17T10:44:00+09:00",
    "engagement": {
      "views": 1837,
      "likes": 59,
      "reposts": 9,
      "comments": 35
    },
    "labels": {
      "mood_hint": "volatile_optimism",
      "playbook_hint": "Quick trim",
      "risk_hints": [
        "Execution",
        "Volatility"
      ]
    }
  },
  {
    "docId": "doc_033",
    "assetKey": "bsc:THE",
    "assetSymbol": "THE",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "bsc-traders",
    "text": "THE is tradable, not comfortable\n\nThere is still upside energy here, but anyone treating this like a smooth trend is underestimating how quickly rotations can punish lazy entries.",
    "publishedAt": "2026-04-17T12:11:00+09:00",
    "engagement": {
      "views": 1163,
      "likes": 62,
      "reposts": 17,
      "comments": 15
    },
    "labels": {
      "mood_hint": "volatile_optimism",
      "playbook_hint": "Trade selectively",
      "risk_hints": [
        "Execution",
        "Volatility"
      ]
    }
  },
  {
    "docId": "doc_034",
    "assetKey": "bsc:THE",
    "assetSymbol": "THE",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "bsc-traders",
    "text": "Narrative strength is holding, but THE is not clean\n\nI would not call this broken. I would call it unstable. That is a very different risk profile.",
    "publishedAt": "2026-04-17T10:33:00+09:00",
    "engagement": {
      "views": 1773,
      "likes": 159,
      "reposts": 9,
      "comments": 20
    },
    "labels": {
      "mood_hint": "volatile_optimism",
      "playbook_hint": "Trade selectively",
      "risk_hints": [
        "Volatility",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_035",
    "assetKey": "bsc:THE",
    "assetSymbol": "THE",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "bsc-traders",
    "text": "THE still attracts attention, but timing is brutal\n\nTHE is still getting attention, but attention alone does not make a comfortable setup. The crowd tone is positive, the tape is less kind.",
    "publishedAt": "2026-04-17T09:27:00+09:00",
    "engagement": {
      "views": 1120,
      "likes": 58,
      "reposts": 7,
      "comments": 24
    },
    "labels": {
      "mood_hint": "volatile_optimism",
      "playbook_hint": "No blind chase",
      "risk_hints": [
        "Execution",
        "Volatility"
      ]
    }
  },
  {
    "docId": "doc_036",
    "assetKey": "bsc:THE",
    "assetSymbol": "THE",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "ai-agents",
    "text": "The crowd wants THE, but the path is unstable\n\nTHE still has narrative strength, but the trade is becoming noisier. That usually means the thesis can survive while the execution quality gets worse.",
    "publishedAt": "2026-04-17T09:14:00+09:00",
    "engagement": {
      "views": 1978,
      "likes": 71,
      "reposts": 35,
      "comments": 24
    },
    "labels": {
      "mood_hint": "volatile_optimism",
      "playbook_hint": "No blind chase",
      "risk_hints": [
        "Execution",
        "Volatility"
      ]
    }
  },
  {
    "docId": "doc_037",
    "assetKey": "bsc:THE",
    "assetSymbol": "THE",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "bsc-traders",
    "text": "THE is active, but the move is losing smoothness\n\nThis is the kind of setup where people stay optimistic even while the path becomes jagged. It is not bearish, just harder to execute cleanly.",
    "publishedAt": "2026-04-17T12:00:00+09:00",
    "engagement": {
      "views": 1858,
      "likes": 79,
      "reposts": 17,
      "comments": 36
    },
    "labels": {
      "mood_hint": "volatile_optimism",
      "playbook_hint": "No blind chase",
      "risk_hints": [
        "Volatility",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_038",
    "assetKey": "bsc:THE",
    "assetSymbol": "THE",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "bsc-traders",
    "text": "You can still be right on THE and lose on timing\n\nThere is still upside energy here, but anyone treating this like a smooth trend is underestimating how quickly rotations can punish lazy entries.",
    "publishedAt": "2026-04-17T09:21:00+09:00",
    "engagement": {
      "views": 2479,
      "likes": 200,
      "reposts": 13,
      "comments": 37
    },
    "labels": {
      "mood_hint": "volatile_optimism",
      "playbook_hint": "Trade selectively",
      "risk_hints": [
        "Execution",
        "Volatility"
      ]
    }
  },
  {
    "docId": "doc_039",
    "assetKey": "bsc:THE",
    "assetSymbol": "THE",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "perp-flow",
    "text": "THE still works better as a selective trade than a blind hold\n\nI would not call this broken. I would call it unstable. That is a very different risk profile.",
    "publishedAt": "2026-04-17T09:55:00+09:00",
    "engagement": {
      "views": 887,
      "likes": 60,
      "reposts": 7,
      "comments": 18
    },
    "labels": {
      "mood_hint": "volatile_optimism",
      "playbook_hint": "No blind chase",
      "risk_hints": [
        "Execution",
        "Volatility"
      ]
    }
  },
  {
    "docId": "doc_040",
    "assetKey": "bsc:THE",
    "assetSymbol": "THE",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "bsc-traders",
    "text": "This is not a calm trend on THE anymore\n\nTHE is still getting attention, but attention alone does not make a comfortable setup. The crowd tone is positive, the tape is less kind.",
    "publishedAt": "2026-04-17T12:53:00+09:00",
    "engagement": {
      "views": 2428,
      "likes": 173,
      "reposts": 15,
      "comments": 20
    },
    "labels": {
      "mood_hint": "volatile_optimism",
      "playbook_hint": "No blind chase",
      "risk_hints": [
        "Execution",
        "Volatility"
      ]
    }
  },
  {
    "docId": "doc_041",
    "assetKey": "bsc:BANANA",
    "assetSymbol": "BANANA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "alpha-hunters",
    "text": "BANANA is starting to feel too obvious\n\nThe setup still exists, but what used to be an edge is now common behavior. That lowers the clean return per participant.",
    "publishedAt": "2026-04-17T12:40:00+09:00",
    "engagement": {
      "views": 705,
      "likes": 34,
      "reposts": 12,
      "comments": 15
    },
    "labels": {
      "mood_hint": "crowded_alpha",
      "playbook_hint": "Optimize ranking",
      "risk_hints": [
        "Competition",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_042",
    "assetKey": "bsc:BANANA",
    "assetSymbol": "BANANA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "yield-watch",
    "text": "The BANANA edge is getting crowded\n\nI do not think BANANA is dead. I think the route is crowded. That is a different problem and it changes the posture from aggressive to selective.",
    "publishedAt": "2026-04-17T10:22:00+09:00",
    "engagement": {
      "views": 830,
      "likes": 42,
      "reposts": 10,
      "comments": 18
    },
    "labels": {
      "mood_hint": "crowded_alpha",
      "playbook_hint": "Selective participation",
      "risk_hints": [
        "Competition",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_043",
    "assetKey": "bsc:BANANA",
    "assetSymbol": "BANANA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "point-farming",
    "text": "BANANA still works, but expectancy is compressing\n\nOnce the crowd starts using the same checklist, the trade becomes more about ranking and execution than pure conviction.",
    "publishedAt": "2026-04-17T09:27:00+09:00",
    "engagement": {
      "views": 1464,
      "likes": 46,
      "reposts": 23,
      "comments": 19
    },
    "labels": {
      "mood_hint": "crowded_alpha",
      "playbook_hint": "Reduce size",
      "risk_hints": [
        "Competition",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_044",
    "assetKey": "bsc:BANANA",
    "assetSymbol": "BANANA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "point-farming",
    "text": "This is no longer hidden alpha on BANANA\n\nBANANA can still pay, but the days of broad participation producing easy edge are likely behind us.",
    "publishedAt": "2026-04-17T12:32:00+09:00",
    "engagement": {
      "views": 2232,
      "likes": 160,
      "reposts": 22,
      "comments": 19
    },
    "labels": {
      "mood_hint": "crowded_alpha",
      "playbook_hint": "Selective participation",
      "risk_hints": [
        "Competition",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_045",
    "assetKey": "bsc:BANANA",
    "assetSymbol": "BANANA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "yield-watch",
    "text": "BANANA is attractive, but the crowd is thicker now\n\nThis feels like crowded alpha rather than broken alpha. That usually means you should narrow participation, not go all-in.",
    "publishedAt": "2026-04-17T11:43:00+09:00",
    "engagement": {
      "views": 1245,
      "likes": 98,
      "reposts": 22,
      "comments": 14
    },
    "labels": {
      "mood_hint": "crowded_alpha",
      "playbook_hint": "Optimize ranking",
      "risk_hints": [
        "Execution",
        "Competition"
      ]
    }
  },
  {
    "docId": "doc_046",
    "assetKey": "bsc:BANANA",
    "assetSymbol": "BANANA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "point-farming",
    "text": "The setup on BANANA is real, the edge is smaller\n\nThe setup still exists, but what used to be an edge is now common behavior. That lowers the clean return per participant.",
    "publishedAt": "2026-04-17T09:31:00+09:00",
    "engagement": {
      "views": 762,
      "likes": 67,
      "reposts": 6,
      "comments": 14
    },
    "labels": {
      "mood_hint": "crowded_alpha",
      "playbook_hint": "Reduce size",
      "risk_hints": [
        "Execution",
        "Competition"
      ]
    }
  },
  {
    "docId": "doc_047",
    "assetKey": "bsc:BANANA",
    "assetSymbol": "BANANA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "bsc-traders",
    "text": "BANANA feels more competitive than before\n\nI do not think BANANA is dead. I think the route is crowded. That is a different problem and it changes the posture from aggressive to selective.",
    "publishedAt": "2026-04-17T12:43:00+09:00",
    "engagement": {
      "views": 2416,
      "likes": 213,
      "reposts": 16,
      "comments": 58
    },
    "labels": {
      "mood_hint": "crowded_alpha",
      "playbook_hint": "Selective participation",
      "risk_hints": [
        "Competition",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_048",
    "assetKey": "bsc:BANANA",
    "assetSymbol": "BANANA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "alpha-hunters",
    "text": "More people are running the same BANANA playbook\n\nOnce the crowd starts using the same checklist, the trade becomes more about ranking and execution than pure conviction.",
    "publishedAt": "2026-04-17T11:44:00+09:00",
    "engagement": {
      "views": 2112,
      "likes": 163,
      "reposts": 23,
      "comments": 52
    },
    "labels": {
      "mood_hint": "crowded_alpha",
      "playbook_hint": "Optimize ranking",
      "risk_hints": [
        "Competition",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_049",
    "assetKey": "bsc:BANANA",
    "assetSymbol": "BANANA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "yield-watch",
    "text": "BANANA still has interest, but less clean edge\n\nBANANA can still pay, but the days of broad participation producing easy edge are likely behind us.",
    "publishedAt": "2026-04-17T13:01:00+09:00",
    "engagement": {
      "views": 2071,
      "likes": 116,
      "reposts": 25,
      "comments": 44
    },
    "labels": {
      "mood_hint": "crowded_alpha",
      "playbook_hint": "Optimize ranking",
      "risk_hints": [
        "Execution",
        "Competition"
      ]
    }
  },
  {
    "docId": "doc_050",
    "assetKey": "bsc:BANANA",
    "assetSymbol": "BANANA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "alpha-hunters",
    "text": "The BANANA route is getting optimized by everyone\n\nThis feels like crowded alpha rather than broken alpha. That usually means you should narrow participation, not go all-in.",
    "publishedAt": "2026-04-17T09:10:00+09:00",
    "engagement": {
      "views": 1980,
      "likes": 168,
      "reposts": 27,
      "comments": 38
    },
    "labels": {
      "mood_hint": "crowded_alpha",
      "playbook_hint": "Reduce size",
      "risk_hints": [
        "Execution",
        "Competition"
      ]
    }
  },
  {
    "docId": "doc_051",
    "assetKey": "bsc:KOMA",
    "assetSymbol": "KOMA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "bsc-traders",
    "text": "KOMA still has attention, but the tape is dangerous\n\nKOMA still has fuel, but this is the kind of move where being right on direction does not guarantee a good result. Execution can ruin the trade quickly.",
    "publishedAt": "2026-04-17T10:22:00+09:00",
    "engagement": {
      "views": 1456,
      "likes": 72,
      "reposts": 22,
      "comments": 25
    },
    "labels": {
      "mood_hint": "high_beta_heat",
      "playbook_hint": "No blind chase",
      "risk_hints": [
        "Volatility",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_052",
    "assetKey": "bsc:KOMA",
    "assetSymbol": "KOMA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "meme-watch",
    "text": "This is pure heat on KOMA now\n\nThe crowd tone is loud and excited, which is exactly why I am more careful. Thin liquidity plus urgent buyers is a bad combination.",
    "publishedAt": "2026-04-17T10:19:00+09:00",
    "engagement": {
      "views": 2152,
      "likes": 181,
      "reposts": 29,
      "comments": 28
    },
    "labels": {
      "mood_hint": "high_beta_heat",
      "playbook_hint": "No blind chase",
      "risk_hints": [
        "Execution",
        "Liquidity"
      ]
    }
  },
  {
    "docId": "doc_053",
    "assetKey": "bsc:KOMA",
    "assetSymbol": "KOMA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "liquidity-watch",
    "text": "KOMA can still run, but not safely\n\nThis is not a calm narrative grind. This is a high-beta crowd trade. That means the reward is real, but the fragility is real too.",
    "publishedAt": "2026-04-17T11:22:00+09:00",
    "engagement": {
      "views": 2229,
      "likes": 144,
      "reposts": 32,
      "comments": 35
    },
    "labels": {
      "mood_hint": "high_beta_heat",
      "playbook_hint": "Trade small",
      "risk_hints": [
        "Liquidity",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_054",
    "assetKey": "bsc:KOMA",
    "assetSymbol": "KOMA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "perp-flow",
    "text": "The KOMA crowd is getting louder and less disciplined\n\nIf you are early, this is manageable. If you are late, you are relying on the crowd staying emotional for longer than you need.",
    "publishedAt": "2026-04-17T09:49:00+09:00",
    "engagement": {
      "views": 2465,
      "likes": 215,
      "reposts": 38,
      "comments": 47
    },
    "labels": {
      "mood_hint": "high_beta_heat",
      "playbook_hint": "Trade small",
      "risk_hints": [
        "Volatility",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_055",
    "assetKey": "bsc:KOMA",
    "assetSymbol": "KOMA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "bsc-traders",
    "text": "KOMA is no longer a comfortable trade\n\nKOMA is still very live, but it feels increasingly like a trade that demands speed rather than comfort.",
    "publishedAt": "2026-04-17T12:49:00+09:00",
    "engagement": {
      "views": 2296,
      "likes": 200,
      "reposts": 17,
      "comments": 30
    },
    "labels": {
      "mood_hint": "high_beta_heat",
      "playbook_hint": "Quick trim",
      "risk_hints": [
        "Liquidity",
        "Volatility"
      ]
    }
  },
  {
    "docId": "doc_056",
    "assetKey": "bsc:KOMA",
    "assetSymbol": "KOMA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "bsc-traders",
    "text": "This looks like high-beta heat on KOMA\n\nKOMA still has fuel, but this is the kind of move where being right on direction does not guarantee a good result. Execution can ruin the trade quickly.",
    "publishedAt": "2026-04-17T12:10:00+09:00",
    "engagement": {
      "views": 1593,
      "likes": 106,
      "reposts": 25,
      "comments": 25
    },
    "labels": {
      "mood_hint": "high_beta_heat",
      "playbook_hint": "Trade small",
      "risk_hints": [
        "Volatility",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_057",
    "assetKey": "bsc:KOMA",
    "assetSymbol": "KOMA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "meme-watch",
    "text": "KOMA still works until execution breaks you\n\nThe crowd tone is loud and excited, which is exactly why I am more careful. Thin liquidity plus urgent buyers is a bad combination.",
    "publishedAt": "2026-04-17T11:06:00+09:00",
    "engagement": {
      "views": 1438,
      "likes": 64,
      "reposts": 20,
      "comments": 11
    },
    "labels": {
      "mood_hint": "high_beta_heat",
      "playbook_hint": "No blind chase",
      "risk_hints": [
        "Liquidity",
        "Volatility"
      ]
    }
  },
  {
    "docId": "doc_058",
    "assetKey": "bsc:KOMA",
    "assetSymbol": "KOMA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "meme-watch",
    "text": "The KOMA move is alive, but entries look thin\n\nThis is not a calm narrative grind. This is a high-beta crowd trade. That means the reward is real, but the fragility is real too.",
    "publishedAt": "2026-04-17T09:47:00+09:00",
    "engagement": {
      "views": 2045,
      "likes": 124,
      "reposts": 9,
      "comments": 25
    },
    "labels": {
      "mood_hint": "high_beta_heat",
      "playbook_hint": "No blind chase",
      "risk_hints": [
        "Liquidity",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_059",
    "assetKey": "bsc:KOMA",
    "assetSymbol": "KOMA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "liquidity-watch",
    "text": "Late KOMA entries feel especially fragile\n\nIf you are early, this is manageable. If you are late, you are relying on the crowd staying emotional for longer than you need.",
    "publishedAt": "2026-04-17T10:22:00+09:00",
    "engagement": {
      "views": 1707,
      "likes": 152,
      "reposts": 23,
      "comments": 41
    },
    "labels": {
      "mood_hint": "high_beta_heat",
      "playbook_hint": "Trade small",
      "risk_hints": [
        "Volatility",
        "Execution"
      ]
    }
  },
  {
    "docId": "doc_060",
    "assetKey": "bsc:KOMA",
    "assetSymbol": "KOMA",
    "source": "mock_discussion",
    "sourceType": "discussion_document",
    "authorId": "liquidity-watch",
    "text": "You can see the heat building on KOMA\n\nKOMA is still very live, but it feels increasingly like a trade that demands speed rather than comfort.",
    "publishedAt": "2026-04-17T09:40:00+09:00",
    "engagement": {
      "views": 2477,
      "likes": 155,
      "reposts": 45,
      "comments": 51
    },
    "labels": {
      "mood_hint": "high_beta_heat",
      "playbook_hint": "No blind chase",
      "risk_hints": [
        "Execution",
        "Liquidity"
      ]
    }
  }
]

export const features = [
  {
    "docId": "doc_001",
    "assetKey": "bsc:BNB",
    "cleanText": "BNB still looks strong, but entries are getting worse The tone is still optimistic, but the crowd is clearly less comfortable than before. Earlier entries looked clean; now new buyers sound more urgent. That usually shifts the playbook from aggressive chasing to waiting for a cleaner reset.",
    "auxTags": [
      "crowd",
      "wait_signal",
      "warning"
    ],
    "moodScore": 0.04999999999999999,
    "playProbs": {
      "small_repeat_trades": 0.13071895424836602,
      "wait": 0.3464052287581699,
      "event_front_run": 0.20915032679738563,
      "no_chase": 0.3137254901960784
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.2
    }
  },
  {
    "docId": "doc_002",
    "assetKey": "bsc:BNB",
    "cleanText": "Crowding around BNB is rising again This is not fear. It is crowded optimism. The structure still looks constructive, but fresh entries feel more fragile because short-term rotation is accelerating.",
    "auxTags": [
      "crowd",
      "warning"
    ],
    "moodScore": -0.25,
    "playProbs": {
      "small_repeat_trades": 0.1694915254237288,
      "wait": 0.23728813559322032,
      "event_front_run": 0.27118644067796605,
      "no_chase": 0.3220338983050847
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.2
    }
  },
  {
    "docId": "doc_003",
    "assetKey": "bsc:BNB",
    "cleanText": "BNB setup is still constructive, not comfortable My issue is not the direction of BNB. My issue is the quality of entries. If liquidity thins while everyone tries to front-run the same move, execution risk rises quickly.",
    "auxTags": [
      "crowd",
      "warning",
      "liquidity",
      "event"
    ],
    "moodScore": -0.04999999999999996,
    "playProbs": {
      "small_repeat_trades": 0.10810810810810811,
      "wait": 0.15135135135135136,
      "event_front_run": 0.4702702702702703,
      "no_chase": 0.27027027027027023
    },
    "riskScores": {
      "liquidity": 0.4,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.6000000000000001
    }
  },
  {
    "docId": "doc_004",
    "assetKey": "bsc:BNB",
    "cleanText": "This no longer feels like an easy BNB breakout BNB can still push higher, but I would rather buy a pullback than compete with emotional buyers on green candles. Late-entry pressure is the main tell here.",
    "auxTags": [
      "wait_signal"
    ],
    "moodScore": 0.0,
    "playProbs": {
      "small_repeat_trades": 0.17391304347826086,
      "wait": 0.3913043478260869,
      "event_front_run": 0.17391304347826086,
      "no_chase": 0.2608695652173913
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.0,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_005",
    "assetKey": "bsc:BNB",
    "cleanText": "BNB is fine, but I would not chase here The narrative remains strong, but that is exactly why I am more selective now. Strong stories can hide worsening entry quality.",
    "auxTags": [
      "warning"
    ],
    "moodScore": -0.2,
    "playProbs": {
      "small_repeat_trades": 0.18867924528301888,
      "wait": 0.2641509433962264,
      "event_front_run": 0.18867924528301888,
      "no_chase": 0.3584905660377358
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.0,
      "security": 0.0,
      "execution": 0.4
    }
  },
  {
    "docId": "doc_006",
    "assetKey": "bsc:BNB",
    "cleanText": "Short-term heat is building around BNB The tone is still optimistic, but the crowd is clearly less comfortable than before. Earlier entries looked clean; now new buyers sound more urgent. That usually shifts the playbook from aggressive chasing to waiting for a cleaner reset.",
    "auxTags": [
      "crowd",
      "wait_signal"
    ],
    "moodScore": 0.25,
    "playProbs": {
      "small_repeat_trades": 0.15748031496062992,
      "wait": 0.3543307086614173,
      "event_front_run": 0.25196850393700787,
      "no_chase": 0.2362204724409449
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_007",
    "assetKey": "bsc:BNB",
    "cleanText": "The BNB story is intact, the entry quality is not This is not fear. It is crowded optimism. The structure still looks constructive, but fresh entries feel more fragile because short-term rotation is accelerating.",
    "auxTags": [
      "crowd",
      "warning"
    ],
    "moodScore": -0.25,
    "playProbs": {
      "small_repeat_trades": 0.1694915254237288,
      "wait": 0.23728813559322032,
      "event_front_run": 0.27118644067796605,
      "no_chase": 0.3220338983050847
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.4
    }
  },
  {
    "docId": "doc_008",
    "assetKey": "bsc:BNB",
    "cleanText": "BNB still works better on resets than on breakouts My issue is not the direction of BNB. My issue is the quality of entries. If liquidity thins while everyone tries to front-run the same move, execution risk rises quickly.",
    "auxTags": [
      "crowd",
      "warning",
      "liquidity",
      "event"
    ],
    "moodScore": -0.19999999999999998,
    "playProbs": {
      "small_repeat_trades": 0.10810810810810811,
      "wait": 0.15135135135135136,
      "event_front_run": 0.4702702702702703,
      "no_chase": 0.27027027027027023
    },
    "riskScores": {
      "liquidity": 0.4,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.6000000000000001
    }
  },
  {
    "docId": "doc_009",
    "assetKey": "bsc:BNB",
    "cleanText": "Execution matters more than conviction on BNB now BNB can still push higher, but I would rather buy a pullback than compete with emotional buyers on green candles. Late-entry pressure is the main tell here.",
    "auxTags": [
      "wait_signal"
    ],
    "moodScore": 0.0,
    "playProbs": {
      "small_repeat_trades": 0.17391304347826086,
      "wait": 0.3913043478260869,
      "event_front_run": 0.17391304347826086,
      "no_chase": 0.2608695652173913
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.0,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_010",
    "assetKey": "bsc:BNB",
    "cleanText": "Late BNB entries are starting to look fragile The narrative remains strong, but that is exactly why I am more selective now. Strong stories can hide worsening entry quality.",
    "auxTags": [
      "warning"
    ],
    "moodScore": -0.35,
    "playProbs": {
      "small_repeat_trades": 0.18867924528301888,
      "wait": 0.2641509433962264,
      "event_front_run": 0.18867924528301888,
      "no_chase": 0.3584905660377358
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.0,
      "security": 0.0,
      "execution": 0.4
    }
  },
  {
    "docId": "doc_011",
    "assetKey": "bsc:CAKE",
    "cleanText": "CAKE still looks cleaner than the crowded majors What I like here is that people still sound interested rather than urgent. That usually means the setup is healthier than a straight momentum frenzy.",
    "auxTags": [
      "crowd"
    ],
    "moodScore": 0.1,
    "playProbs": {
      "small_repeat_trades": 0.2173913043478261,
      "wait": 0.2173913043478261,
      "event_front_run": 0.3478260869565218,
      "no_chase": 0.2173913043478261
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_012",
    "assetKey": "bsc:CAKE",
    "cleanText": "This still feels like optimism, not hype, on CAKE The narrative is improving, but I would still size positions with discipline. Good setups can remain good while execution stays the main risk.",
    "auxTags": [
      "warning"
    ],
    "moodScore": -0.35,
    "playProbs": {
      "small_repeat_trades": 0.18867924528301888,
      "wait": 0.2641509433962264,
      "event_front_run": 0.18867924528301888,
      "no_chase": 0.3584905660377358
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.0,
      "security": 0.0,
      "execution": 0.2
    }
  },
  {
    "docId": "doc_013",
    "assetKey": "bsc:CAKE",
    "cleanText": "CAKE setup looks healthy, but size still matters Compared with more crowded names, CAKE still feels cleaner. The crowd tone is positive, but not reckless, which keeps the main playbook closer to buy-the-dip.",
    "auxTags": [
      "crowd"
    ],
    "moodScore": 0.25,
    "playProbs": {
      "small_repeat_trades": 0.2173913043478261,
      "wait": 0.2173913043478261,
      "event_front_run": 0.3478260869565218,
      "no_chase": 0.2173913043478261
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_014",
    "assetKey": "bsc:CAKE",
    "cleanText": "CAKE is constructive without feeling desperate I do not think this is a no-risk setup. A thinner book can still punish bad timing. But unlike crowded names, this does not look fully saturated yet.",
    "auxTags": [
      "crowd",
      "warning",
      "liquidity"
    ],
    "moodScore": -0.25,
    "playProbs": {
      "small_repeat_trades": 0.15384615384615385,
      "wait": 0.2153846153846154,
      "event_front_run": 0.24615384615384614,
      "no_chase": 0.3846153846153846
    },
    "riskScores": {
      "liquidity": 0.4,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.4
    }
  },
  {
    "docId": "doc_015",
    "assetKey": "bsc:CAKE",
    "cleanText": "The CAKE narrative is improving at the right speed If everyone suddenly sounds certain, the edge shrinks. For now the tone still feels selective, which is a good sign.",
    "auxTags": [
      "crowd"
    ],
    "moodScore": 0.1,
    "playProbs": {
      "small_repeat_trades": 0.2173913043478261,
      "wait": 0.2173913043478261,
      "event_front_run": 0.3478260869565218,
      "no_chase": 0.2173913043478261
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_016",
    "assetKey": "bsc:CAKE",
    "cleanText": "CAKE still looks buy-the-dip, not chase-the-breakout What I like here is that people still sound interested rather than urgent. That usually means the setup is healthier than a straight momentum frenzy.",
    "auxTags": [
      "crowd"
    ],
    "moodScore": 0.1,
    "playProbs": {
      "small_repeat_trades": 0.2173913043478261,
      "wait": 0.2173913043478261,
      "event_front_run": 0.3478260869565218,
      "no_chase": 0.2173913043478261
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_017",
    "assetKey": "bsc:CAKE",
    "cleanText": "The crowd is interested in CAKE, not euphoric yet The narrative is improving, but I would still size positions with discipline. Good setups can remain good while execution stays the main risk.",
    "auxTags": [
      "crowd",
      "warning"
    ],
    "moodScore": -0.25,
    "playProbs": {
      "small_repeat_trades": 0.1694915254237288,
      "wait": 0.23728813559322032,
      "event_front_run": 0.27118644067796605,
      "no_chase": 0.3220338983050847
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.2
    }
  },
  {
    "docId": "doc_018",
    "assetKey": "bsc:CAKE",
    "cleanText": "CAKE has room, but execution still matters Compared with more crowded names, CAKE still feels cleaner. The crowd tone is positive, but not reckless, which keeps the main playbook closer to buy-the-dip.",
    "auxTags": [
      "crowd"
    ],
    "moodScore": 0.1,
    "playProbs": {
      "small_repeat_trades": 0.2173913043478261,
      "wait": 0.2173913043478261,
      "event_front_run": 0.3478260869565218,
      "no_chase": 0.2173913043478261
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_019",
    "assetKey": "bsc:CAKE",
    "cleanText": "This is why CAKE still feels early I do not think this is a no-risk setup. A thinner book can still punish bad timing. But unlike crowded names, this does not look fully saturated yet.",
    "auxTags": [
      "crowd",
      "warning",
      "liquidity"
    ],
    "moodScore": -0.4,
    "playProbs": {
      "small_repeat_trades": 0.15384615384615385,
      "wait": 0.2153846153846154,
      "event_front_run": 0.24615384615384614,
      "no_chase": 0.3846153846153846
    },
    "riskScores": {
      "liquidity": 0.4,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.4
    }
  },
  {
    "docId": "doc_020",
    "assetKey": "bsc:CAKE",
    "cleanText": "CAKE remains positive without strong crowding If everyone suddenly sounds certain, the edge shrinks. For now the tone still feels selective, which is a good sign.",
    "auxTags": [
      "crowd"
    ],
    "moodScore": 0.25,
    "playProbs": {
      "small_repeat_trades": 0.2173913043478261,
      "wait": 0.2173913043478261,
      "event_front_run": 0.3478260869565218,
      "no_chase": 0.2173913043478261
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_021",
    "assetKey": "bsc:LISTA",
    "cleanText": "LISTA is trading more like an event than a trend The market is treating LISTA like an upcoming catalyst trade. That can keep working, but it also means late entries are more exposed to timing mistakes.",
    "auxTags": [
      "event"
    ],
    "moodScore": 0.2,
    "playProbs": {
      "small_repeat_trades": 0.14814814814814817,
      "wait": 0.14814814814814817,
      "event_front_run": 0.5555555555555556,
      "no_chase": 0.14814814814814817
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.0,
      "security": 0.0,
      "execution": 0.4
    }
  },
  {
    "docId": "doc_022",
    "assetKey": "bsc:LISTA",
    "cleanText": "The LISTA move looks catalyst-driven This does not read like stable trend-following. It reads like people trying to position before the next trigger. In that environment, execution matters more than conviction.",
    "auxTags": [
      "crowd",
      "event"
    ],
    "moodScore": 0.30000000000000004,
    "playProbs": {
      "small_repeat_trades": 0.1360544217687075,
      "wait": 0.1360544217687075,
      "event_front_run": 0.5918367346938777,
      "no_chase": 0.1360544217687075
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.2
    }
  },
  {
    "docId": "doc_023",
    "assetKey": "bsc:LISTA",
    "cleanText": "People are front-running LISTA again LISTA still has a valid upside case, but the crowd behavior is changing from accumulation to event front-running. That changes the risk profile immediately.",
    "auxTags": [
      "crowd",
      "warning",
      "event"
    ],
    "moodScore": 0.10000000000000003,
    "playProbs": {
      "small_repeat_trades": 0.11560693641618498,
      "wait": 0.161849710982659,
      "event_front_run": 0.5028901734104047,
      "no_chase": 0.21965317919075145
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.4
    }
  },
  {
    "docId": "doc_024",
    "assetKey": "bsc:LISTA",
    "cleanText": "LISTA still has upside, but timing is the whole game I do not hate the setup, but I do not want to be the last buyer into the same catalyst everyone is watching.",
    "auxTags": [
      "crowd",
      "event"
    ],
    "moodScore": 0.45,
    "playProbs": {
      "small_repeat_trades": 0.1360544217687075,
      "wait": 0.1360544217687075,
      "event_front_run": 0.5918367346938777,
      "no_chase": 0.1360544217687075
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.4
    }
  },
  {
    "docId": "doc_025",
    "assetKey": "bsc:LISTA",
    "cleanText": "This looks like event positioning, not relaxed accumulation The story still works. The problem is that once the crowd agrees on the story, the quality of late entries gets worse very quickly.",
    "auxTags": [
      "crowd",
      "warning"
    ],
    "moodScore": -0.25,
    "playProbs": {
      "small_repeat_trades": 0.1694915254237288,
      "wait": 0.23728813559322032,
      "event_front_run": 0.27118644067796605,
      "no_chase": 0.3220338983050847
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.2
    }
  },
  {
    "docId": "doc_026",
    "assetKey": "bsc:LISTA",
    "cleanText": "LISTA is attractive, but only if you respect timing The market is treating LISTA like an upcoming catalyst trade. That can keep working, but it also means late entries are more exposed to timing mistakes.",
    "auxTags": [
      "event"
    ],
    "moodScore": 0.2,
    "playProbs": {
      "small_repeat_trades": 0.14814814814814817,
      "wait": 0.14814814814814817,
      "event_front_run": 0.5555555555555556,
      "no_chase": 0.14814814814814817
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.0,
      "security": 0.0,
      "execution": 0.4
    }
  },
  {
    "docId": "doc_027",
    "assetKey": "bsc:LISTA",
    "cleanText": "The LISTA crowd is leaning too hard into the next catalyst This does not read like stable trend-following. It reads like people trying to position before the next trigger. In that environment, execution matters more than conviction.",
    "auxTags": [
      "crowd",
      "event"
    ],
    "moodScore": 0.30000000000000004,
    "playProbs": {
      "small_repeat_trades": 0.1360544217687075,
      "wait": 0.1360544217687075,
      "event_front_run": 0.5918367346938777,
      "no_chase": 0.1360544217687075
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.2
    }
  },
  {
    "docId": "doc_028",
    "assetKey": "bsc:LISTA",
    "cleanText": "LISTA is not dead, just more event-sensitive now LISTA still has a valid upside case, but the crowd behavior is changing from accumulation to event front-running. That changes the risk profile immediately.",
    "auxTags": [
      "crowd",
      "warning",
      "event"
    ],
    "moodScore": 0.10000000000000003,
    "playProbs": {
      "small_repeat_trades": 0.11560693641618498,
      "wait": 0.161849710982659,
      "event_front_run": 0.5028901734104047,
      "no_chase": 0.21965317919075145
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.4
    }
  },
  {
    "docId": "doc_029",
    "assetKey": "bsc:LISTA",
    "cleanText": "This is why LISTA feels harder to buy late I do not hate the setup, but I do not want to be the last buyer into the same catalyst everyone is watching.",
    "auxTags": [
      "crowd",
      "event"
    ],
    "moodScore": 0.30000000000000004,
    "playProbs": {
      "small_repeat_trades": 0.1360544217687075,
      "wait": 0.1360544217687075,
      "event_front_run": 0.5918367346938777,
      "no_chase": 0.1360544217687075
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.2
    }
  },
  {
    "docId": "doc_030",
    "assetKey": "bsc:LISTA",
    "cleanText": "LISTA can still work, but it is no longer forgiving The story still works. The problem is that once the crowd agrees on the story, the quality of late entries gets worse very quickly.",
    "auxTags": [
      "crowd",
      "warning"
    ],
    "moodScore": -0.25,
    "playProbs": {
      "small_repeat_trades": 0.1694915254237288,
      "wait": 0.23728813559322032,
      "event_front_run": 0.27118644067796605,
      "no_chase": 0.3220338983050847
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.2
    }
  },
  {
    "docId": "doc_031",
    "assetKey": "bsc:THE",
    "cleanText": "THE still has narrative energy, but the move is messy THE still has narrative strength, but the trade is becoming noisier. That usually means the thesis can survive while the execution quality gets worse.",
    "auxTags": [
      "warning"
    ],
    "moodScore": -0.35,
    "playProbs": {
      "small_repeat_trades": 0.18867924528301888,
      "wait": 0.2641509433962264,
      "event_front_run": 0.18867924528301888,
      "no_chase": 0.3584905660377358
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.0,
      "security": 0.0,
      "execution": 0.2
    }
  },
  {
    "docId": "doc_032",
    "assetKey": "bsc:THE",
    "cleanText": "This feels like volatile optimism on THE This is the kind of setup where people stay optimistic even while the path becomes jagged. It is not bearish, just harder to execute cleanly.",
    "auxTags": [
      "crowd"
    ],
    "moodScore": 0.25,
    "playProbs": {
      "small_repeat_trades": 0.2173913043478261,
      "wait": 0.2173913043478261,
      "event_front_run": 0.3478260869565218,
      "no_chase": 0.2173913043478261
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_033",
    "assetKey": "bsc:THE",
    "cleanText": "THE is tradable, not comfortable There is still upside energy here, but anyone treating this like a smooth trend is underestimating how quickly rotations can punish lazy entries.",
    "auxTags": [],
    "moodScore": 0.15,
    "playProbs": {
      "small_repeat_trades": 0.25,
      "wait": 0.25,
      "event_front_run": 0.25,
      "no_chase": 0.25
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.0,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_034",
    "assetKey": "bsc:THE",
    "cleanText": "Narrative strength is holding, but THE is not clean I would not call this broken. I would call it unstable. That is a very different risk profile.",
    "auxTags": [
      "warning"
    ],
    "moodScore": -0.35,
    "playProbs": {
      "small_repeat_trades": 0.18867924528301888,
      "wait": 0.2641509433962264,
      "event_front_run": 0.18867924528301888,
      "no_chase": 0.3584905660377358
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.0,
      "security": 0.0,
      "execution": 0.2
    }
  },
  {
    "docId": "doc_035",
    "assetKey": "bsc:THE",
    "cleanText": "THE still attracts attention, but timing is brutal THE is still getting attention, but attention alone does not make a comfortable setup. The crowd tone is positive, the tape is less kind.",
    "auxTags": [
      "crowd"
    ],
    "moodScore": 0.1,
    "playProbs": {
      "small_repeat_trades": 0.2173913043478261,
      "wait": 0.2173913043478261,
      "event_front_run": 0.3478260869565218,
      "no_chase": 0.2173913043478261
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.2
    }
  },
  {
    "docId": "doc_036",
    "assetKey": "bsc:THE",
    "cleanText": "The crowd wants THE, but the path is unstable THE still has narrative strength, but the trade is becoming noisier. That usually means the thesis can survive while the execution quality gets worse.",
    "auxTags": [
      "crowd",
      "warning"
    ],
    "moodScore": -0.25,
    "playProbs": {
      "small_repeat_trades": 0.1694915254237288,
      "wait": 0.23728813559322032,
      "event_front_run": 0.27118644067796605,
      "no_chase": 0.3220338983050847
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.2
    }
  },
  {
    "docId": "doc_037",
    "assetKey": "bsc:THE",
    "cleanText": "THE is active, but the move is losing smoothness This is the kind of setup where people stay optimistic even while the path becomes jagged. It is not bearish, just harder to execute cleanly.",
    "auxTags": [
      "crowd"
    ],
    "moodScore": 0.25,
    "playProbs": {
      "small_repeat_trades": 0.2173913043478261,
      "wait": 0.2173913043478261,
      "event_front_run": 0.3478260869565218,
      "no_chase": 0.2173913043478261
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_038",
    "assetKey": "bsc:THE",
    "cleanText": "You can still be right on THE and lose on timing There is still upside energy here, but anyone treating this like a smooth trend is underestimating how quickly rotations can punish lazy entries.",
    "auxTags": [],
    "moodScore": 0.15,
    "playProbs": {
      "small_repeat_trades": 0.25,
      "wait": 0.25,
      "event_front_run": 0.25,
      "no_chase": 0.25
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.0,
      "security": 0.0,
      "execution": 0.2
    }
  },
  {
    "docId": "doc_039",
    "assetKey": "bsc:THE",
    "cleanText": "THE still works better as a selective trade than a blind hold I would not call this broken. I would call it unstable. That is a very different risk profile.",
    "auxTags": [
      "warning"
    ],
    "moodScore": -0.35,
    "playProbs": {
      "small_repeat_trades": 0.18867924528301888,
      "wait": 0.2641509433962264,
      "event_front_run": 0.18867924528301888,
      "no_chase": 0.3584905660377358
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.0,
      "security": 0.0,
      "execution": 0.2
    }
  },
  {
    "docId": "doc_040",
    "assetKey": "bsc:THE",
    "cleanText": "This is not a calm trend on THE anymore THE is still getting attention, but attention alone does not make a comfortable setup. The crowd tone is positive, the tape is less kind.",
    "auxTags": [
      "crowd"
    ],
    "moodScore": 0.1,
    "playProbs": {
      "small_repeat_trades": 0.2173913043478261,
      "wait": 0.2173913043478261,
      "event_front_run": 0.3478260869565218,
      "no_chase": 0.2173913043478261
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_041",
    "assetKey": "bsc:BANANA",
    "cleanText": "BANANA is starting to feel too obvious The setup still exists, but what used to be an edge is now common behavior. That lowers the clean return per participant.",
    "auxTags": [],
    "moodScore": 0.0,
    "playProbs": {
      "small_repeat_trades": 0.25,
      "wait": 0.25,
      "event_front_run": 0.25,
      "no_chase": 0.25
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.0,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_042",
    "assetKey": "bsc:BANANA",
    "cleanText": "The BANANA edge is getting crowded I do not think BANANA is dead. I think the route is crowded. That is a different problem and it changes the posture from aggressive to selective.",
    "auxTags": [
      "crowd",
      "liquidity"
    ],
    "moodScore": -0.04999999999999999,
    "playProbs": {
      "small_repeat_trades": 0.19230769230769232,
      "wait": 0.19230769230769232,
      "event_front_run": 0.3076923076923077,
      "no_chase": 0.3076923076923077
    },
    "riskScores": {
      "liquidity": 0.4,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_043",
    "assetKey": "bsc:BANANA",
    "cleanText": "BANANA still works, but expectancy is compressing Once the crowd starts using the same checklist, the trade becomes more about ranking and execution than pure conviction.",
    "auxTags": [
      "crowd"
    ],
    "moodScore": 0.1,
    "playProbs": {
      "small_repeat_trades": 0.2173913043478261,
      "wait": 0.2173913043478261,
      "event_front_run": 0.3478260869565218,
      "no_chase": 0.2173913043478261
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_044",
    "assetKey": "bsc:BANANA",
    "cleanText": "This is no longer hidden alpha on BANANA BANANA can still pay, but the days of broad participation producing easy edge are likely behind us.",
    "auxTags": [],
    "moodScore": 0.0,
    "playProbs": {
      "small_repeat_trades": 0.25,
      "wait": 0.25,
      "event_front_run": 0.25,
      "no_chase": 0.25
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.0,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_045",
    "assetKey": "bsc:BANANA",
    "cleanText": "BANANA is attractive, but the crowd is thicker now This feels like crowded alpha rather than broken alpha. That usually means you should narrow participation, not go all-in.",
    "auxTags": [
      "crowd"
    ],
    "moodScore": 0.1,
    "playProbs": {
      "small_repeat_trades": 0.2173913043478261,
      "wait": 0.2173913043478261,
      "event_front_run": 0.3478260869565218,
      "no_chase": 0.2173913043478261
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_046",
    "assetKey": "bsc:BANANA",
    "cleanText": "The setup on BANANA is real, the edge is smaller The setup still exists, but what used to be an edge is now common behavior. That lowers the clean return per participant.",
    "auxTags": [],
    "moodScore": 0.0,
    "playProbs": {
      "small_repeat_trades": 0.25,
      "wait": 0.25,
      "event_front_run": 0.25,
      "no_chase": 0.25
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.0,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_047",
    "assetKey": "bsc:BANANA",
    "cleanText": "BANANA feels more competitive than before I do not think BANANA is dead. I think the route is crowded. That is a different problem and it changes the posture from aggressive to selective.",
    "auxTags": [
      "crowd",
      "liquidity"
    ],
    "moodScore": -0.04999999999999999,
    "playProbs": {
      "small_repeat_trades": 0.19230769230769232,
      "wait": 0.19230769230769232,
      "event_front_run": 0.3076923076923077,
      "no_chase": 0.3076923076923077
    },
    "riskScores": {
      "liquidity": 0.4,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_048",
    "assetKey": "bsc:BANANA",
    "cleanText": "More people are running the same BANANA playbook Once the crowd starts using the same checklist, the trade becomes more about ranking and execution than pure conviction.",
    "auxTags": [
      "crowd"
    ],
    "moodScore": 0.1,
    "playProbs": {
      "small_repeat_trades": 0.2173913043478261,
      "wait": 0.2173913043478261,
      "event_front_run": 0.3478260869565218,
      "no_chase": 0.2173913043478261
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_049",
    "assetKey": "bsc:BANANA",
    "cleanText": "BANANA still has interest, but less clean edge BANANA can still pay, but the days of broad participation producing easy edge are likely behind us.",
    "auxTags": [],
    "moodScore": 0.0,
    "playProbs": {
      "small_repeat_trades": 0.25,
      "wait": 0.25,
      "event_front_run": 0.25,
      "no_chase": 0.25
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.0,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_050",
    "assetKey": "bsc:BANANA",
    "cleanText": "The BANANA route is getting optimized by everyone This feels like crowded alpha rather than broken alpha. That usually means you should narrow participation, not go all-in.",
    "auxTags": [
      "crowd"
    ],
    "moodScore": 0.1,
    "playProbs": {
      "small_repeat_trades": 0.2173913043478261,
      "wait": 0.2173913043478261,
      "event_front_run": 0.3478260869565218,
      "no_chase": 0.2173913043478261
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_051",
    "assetKey": "bsc:KOMA",
    "cleanText": "KOMA still has attention, but the tape is dangerous KOMA still has fuel, but this is the kind of move where being right on direction does not guarantee a good result. Execution can ruin the trade quickly.",
    "auxTags": [
      "warning"
    ],
    "moodScore": -0.35,
    "playProbs": {
      "small_repeat_trades": 0.18867924528301888,
      "wait": 0.2641509433962264,
      "event_front_run": 0.18867924528301888,
      "no_chase": 0.3584905660377358
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.0,
      "security": 0.0,
      "execution": 0.2
    }
  },
  {
    "docId": "doc_052",
    "assetKey": "bsc:KOMA",
    "cleanText": "This is pure heat on KOMA now The crowd tone is loud and excited, which is exactly why I am more careful. Thin liquidity plus urgent buyers is a bad combination.",
    "auxTags": [
      "crowd",
      "liquidity"
    ],
    "moodScore": -0.04999999999999999,
    "playProbs": {
      "small_repeat_trades": 0.19230769230769232,
      "wait": 0.19230769230769232,
      "event_front_run": 0.3076923076923077,
      "no_chase": 0.3076923076923077
    },
    "riskScores": {
      "liquidity": 0.4,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_053",
    "assetKey": "bsc:KOMA",
    "cleanText": "KOMA can still run, but not safely This is not a calm narrative grind. This is a high-beta crowd trade. That means the reward is real, but the fragility is real too.",
    "auxTags": [
      "crowd"
    ],
    "moodScore": 0.1,
    "playProbs": {
      "small_repeat_trades": 0.2173913043478261,
      "wait": 0.2173913043478261,
      "event_front_run": 0.3478260869565218,
      "no_chase": 0.2173913043478261
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_054",
    "assetKey": "bsc:KOMA",
    "cleanText": "The KOMA crowd is getting louder and less disciplined If you are early, this is manageable. If you are late, you are relying on the crowd staying emotional for longer than you need.",
    "auxTags": [
      "crowd"
    ],
    "moodScore": 0.1,
    "playProbs": {
      "small_repeat_trades": 0.2173913043478261,
      "wait": 0.2173913043478261,
      "event_front_run": 0.3478260869565218,
      "no_chase": 0.2173913043478261
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_055",
    "assetKey": "bsc:KOMA",
    "cleanText": "KOMA is no longer a comfortable trade KOMA is still very live, but it feels increasingly like a trade that demands speed rather than comfort.",
    "auxTags": [],
    "moodScore": 0.0,
    "playProbs": {
      "small_repeat_trades": 0.25,
      "wait": 0.25,
      "event_front_run": 0.25,
      "no_chase": 0.25
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.0,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_056",
    "assetKey": "bsc:KOMA",
    "cleanText": "This looks like high-beta heat on KOMA KOMA still has fuel, but this is the kind of move where being right on direction does not guarantee a good result. Execution can ruin the trade quickly.",
    "auxTags": [],
    "moodScore": 0.0,
    "playProbs": {
      "small_repeat_trades": 0.25,
      "wait": 0.25,
      "event_front_run": 0.25,
      "no_chase": 0.25
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.0,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_057",
    "assetKey": "bsc:KOMA",
    "cleanText": "KOMA still works until execution breaks you The crowd tone is loud and excited, which is exactly why I am more careful. Thin liquidity plus urgent buyers is a bad combination.",
    "auxTags": [
      "crowd",
      "liquidity"
    ],
    "moodScore": -0.04999999999999999,
    "playProbs": {
      "small_repeat_trades": 0.19230769230769232,
      "wait": 0.19230769230769232,
      "event_front_run": 0.3076923076923077,
      "no_chase": 0.3076923076923077
    },
    "riskScores": {
      "liquidity": 0.4,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_058",
    "assetKey": "bsc:KOMA",
    "cleanText": "The KOMA move is alive, but entries look thin This is not a calm narrative grind. This is a high-beta crowd trade. That means the reward is real, but the fragility is real too.",
    "auxTags": [
      "crowd",
      "liquidity"
    ],
    "moodScore": -0.04999999999999999,
    "playProbs": {
      "small_repeat_trades": 0.19230769230769232,
      "wait": 0.19230769230769232,
      "event_front_run": 0.3076923076923077,
      "no_chase": 0.3076923076923077
    },
    "riskScores": {
      "liquidity": 0.4,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.0
    }
  },
  {
    "docId": "doc_059",
    "assetKey": "bsc:KOMA",
    "cleanText": "Late KOMA entries feel especially fragile If you are early, this is manageable. If you are late, you are relying on the crowd staying emotional for longer than you need.",
    "auxTags": [
      "crowd",
      "warning"
    ],
    "moodScore": -0.25,
    "playProbs": {
      "small_repeat_trades": 0.1694915254237288,
      "wait": 0.23728813559322032,
      "event_front_run": 0.27118644067796605,
      "no_chase": 0.3220338983050847
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.15,
      "security": 0.0,
      "execution": 0.2
    }
  },
  {
    "docId": "doc_060",
    "assetKey": "bsc:KOMA",
    "cleanText": "You can see the heat building on KOMA KOMA is still very live, but it feels increasingly like a trade that demands speed rather than comfort.",
    "auxTags": [],
    "moodScore": 0.0,
    "playProbs": {
      "small_repeat_trades": 0.25,
      "wait": 0.25,
      "event_front_run": 0.25,
      "no_chase": 0.25
    },
    "riskScores": {
      "liquidity": 0.0,
      "point_competition": 0.0,
      "security": 0.0,
      "execution": 0.0
    }
  }
]

export const evaluationSummary = {
  "moodMatchRate": 0.1,
  "playbookMatchRate": 0.933,
  "riskOverlapRate": 0.25,
  "riskExactMatchRate": 0.167
}
