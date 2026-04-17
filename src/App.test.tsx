import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'

const backendPayloads: Record<string, Record<string, unknown>> = {
  BNB: {
    asset_key: 'bsc:BNB',
    symbol: 'BNB',
    mood_label: 'Cautious Optimism',
    playbook_label: 'Event Front-run',
    risk_flags: ['Liquidity', 'Execution Risk'],
    summary:
      'Backend summary for BNB. LLM-generated positioning context should be shown directly in the frontend.',
    confidence_score: 0.5,
    confidence_label: 'High'
  },
  CAKE: {
    asset_key: 'bsc:CAKE',
    symbol: 'CAKE',
    mood_label: 'Cautious Optimism',
    playbook_label: 'Wait',
    risk_flags: ['Liquidity', 'Execution Risk'],
    summary: 'Backend summary for CAKE.',
    confidence_score: 0.42,
    confidence_label: 'High'
  },
  LISTA: {
    asset_key: 'bsc:LISTA',
    symbol: 'LISTA',
    mood_label: 'Cautious Optimism',
    playbook_label: 'Event Front-run',
    risk_flags: ['Liquidity', 'Points Competition', 'Execution Risk'],
    summary: 'Backend summary for LISTA.',
    confidence_score: 0.51,
    confidence_label: 'Medium'
  },
  THE: {
    asset_key: 'bsc:THE',
    symbol: 'THE',
    mood_label: 'Cautious Optimism',
    playbook_label: 'Event Front-run',
    risk_flags: ['Liquidity', 'Execution Risk'],
    summary: 'Backend summary for THE.',
    confidence_score: 0.44,
    confidence_label: 'Low'
  },
  BANANA: {
    asset_key: 'bsc:BANANA',
    symbol: 'BANANA',
    mood_label: 'Cautious Optimism',
    playbook_label: 'Event Front-run',
    risk_flags: ['Liquidity', 'Points Competition', 'Execution Risk'],
    summary: 'Backend summary for BANANA.',
    confidence_score: 0.41,
    confidence_label: 'Low'
  },
  KOMA: {
    asset_key: 'bsc:KOMA',
    symbol: 'KOMA',
    mood_label: 'Cautious Optimism',
    playbook_label: 'Event Front-run',
    risk_flags: ['Liquidity', 'Points Competition', 'Execution Risk'],
    summary: 'Backend summary for KOMA.',
    confidence_score: 0.54,
    confidence_label: 'Medium'
  }
}

function stubBackendSuccess() {
  return vi.fn(async (input: string | URL | Request) => {
    const url = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url
    const symbol = url.split('/').pop()?.toUpperCase() ?? 'BNB'
    const payload = backendPayloads[symbol]

    return {
      ok: true,
      json: async () => payload
    }
  })
}

describe('Narrative Radar UI redesign', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', stubBackendSuccess())
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('keeps mock and fallback data files English-only', () => {
    const filesToCheck = [
      'src/data/fallbackAssetOutputs.ts',
      'src/data/uiContent.ts',
      'src/data/mockGeneratedData.ts'
    ]

    filesToCheck.forEach((relativePath) => {
      const content = readFileSync(join(process.cwd(), relativePath), 'utf8')
      expect(content).not.toMatch(/[가-힣]/)
    })
  })

  it('renders the Discover screen like the provided concept with watchlist and Ask AI panels', async () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /^narrative radar$/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^discover$/i })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('heading', { name: /ask ai what today’s posture means/i })).toBeInTheDocument()
    expect(screen.getByDisplayValue(/why is this token overheated\?/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /one-line summary/i })).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /your watchlist today/i })).toBeInTheDocument()
      expect(screen.getByText(/2 assets are shifting from cautious optimism to more crowded conditions/i)).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /^ask ai$/i })).toBeInTheDocument()
      expect(screen.getByText(/plain-language explanation layer on top of today’s posture/i)).toBeInTheDocument()
      expect(screen.getByText(/people are front-running the next catalyst/i)).toBeInTheDocument()
      expect(screen.getByText(/short-term overheating, medium-term still fine/i)).toBeInTheDocument()
    })

    const watchlistHeading = screen.getByRole('heading', { name: /your watchlist today/i })
    const watchlistPanel = watchlistHeading.closest('section')
    expect(watchlistPanel).not.toBeNull()
    expect(within(watchlistPanel as HTMLElement).getByText(/^bnb$/i)).toBeInTheDocument()
    expect(within(watchlistPanel as HTMLElement).getByText(/^cake$/i)).toBeInTheDocument()
    expect(within(watchlistPanel as HTMLElement).getAllByText(/cautious optimism/i).length).toBeGreaterThan(0)
  })

  it('navigates through Asset Detail, Alerts, Watchlist, and Profile views that match the provided concepts', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /^asset detail$/i }))

    expect(screen.getByRole('heading', { name: /^bnb$/i })).toBeInTheDocument()
    expect(screen.getByText(/confidence: high/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /what the crowd feels/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /what can go wrong now/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /evidence/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /^alerts$/i }))

    expect(screen.getByText(/crowding surge on bnb/i)).toBeInTheDocument()
    expect(screen.getByText(/airdrop setup getting too competitive/i)).toBeInTheDocument()
    expect(screen.getByText(/cake remains cleaner than majors/i)).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /ask ai why/i }).length).toBe(3)

    await user.click(screen.getByRole('button', { name: /^watchlist$/i }))

    expect(screen.getAllByText(/change:/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/main playbook:/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/event front-run/i)).toBeInTheDocument()
    expect(screen.getByText(/wait-for-dip/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /^profile$/i }))

    expect(screen.getByRole('heading', { name: /^profile$/i })).toBeInTheDocument()
    expect(screen.getByText(/minimal profile surface for mvp/i)).toBeInTheDocument()
    expect(screen.getByText(/saved watchlist assets: 2/i)).toBeInTheDocument()
    expect(screen.getByText(/preferred explanation style: plain-language guidance/i)).toBeInTheDocument()
  })

  it('opens the Asset Detail screen from the Discover watchlist card', async () => {
    const user = userEvent.setup()
    render(<App />)

    const watchlistPanel = screen.getByRole('heading', { name: /your watchlist today/i }).closest('section')
    expect(watchlistPanel).not.toBeNull()

    const cakeCard = within(watchlistPanel as HTMLElement).getByText(/^cake$/i).closest('article')
    expect(cakeCard).not.toBeNull()

    await user.click(within(cakeCard as HTMLElement).getByRole('button', { name: /view detail/i }))

    expect(screen.getByRole('button', { name: /^asset detail$/i })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('heading', { name: /^cake$/i })).toBeInTheDocument()
    expect(screen.getByText(/what the crowd is trying to do/i)).toBeInTheDocument()
  })

  it('still renders the redesigned screens when backend requests fail', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => {
        throw new Error('backend unavailable')
      })
    )

    render(<App />)

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /your watchlist today/i })).toBeInTheDocument()
      expect(
        screen.getAllByText(/the crowd still looks constructive, but late-entry anxiety and short-term rotation are rising together/i).length
      ).toBeGreaterThan(0)
      expect(screen.getByText(/bnb currently reads as cautious optimism/i)).toBeInTheDocument()
    })
  })
})
