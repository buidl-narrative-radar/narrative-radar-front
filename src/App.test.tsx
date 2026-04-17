import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'

const backendPayloads: Record<string, Record<string, unknown>> = {
  BNB: {
    asset_key: 'bsc:BNB',
    symbol: 'BNB',
    mood_label: '조심스러운 낙관',
    playbook_label: '이벤트 선점',
    risk_flags: ['유동성', '포인트 경쟁', '실행 리스크'],
    summary:
      'Backend summary for BNB. LLM-generated positioning context should be shown directly in the frontend.',
    confidence_score: 0.5,
    confidence_label: 'Medium'
  },
  CAKE: {
    asset_key: 'bsc:CAKE',
    symbol: 'CAKE',
    mood_label: '조심스러운 낙관',
    playbook_label: '대기',
    risk_flags: ['유동성', '실행 리스크'],
    summary: 'Backend summary for CAKE.',
    confidence_score: 0.42,
    confidence_label: 'Low'
  },
  LISTA: {
    asset_key: 'live:LISTA',
    symbol: 'LISTA-LIVE',
    mood_label: '조심스러운 낙관',
    playbook_label: '이벤트 선점',
    risk_flags: ['유동성', '포인트 경쟁', '실행 리스크'],
    summary:
      'Backend summary for LISTA. Event-driven setup is still alive and the summary text comes from the backend.',
    confidence_score: 0.51,
    confidence_label: 'Medium'
  },
  THE: {
    asset_key: 'bsc:THE',
    symbol: 'THE',
    mood_label: '조심스러운 낙관',
    playbook_label: '이벤트 선점',
    risk_flags: ['유동성', '실행 리스크'],
    summary: 'Backend summary for THE.',
    confidence_score: 0.44,
    confidence_label: 'Low'
  },
  BANANA: {
    asset_key: 'bsc:BANANA',
    symbol: 'BANANA',
    mood_label: '조심스러운 낙관',
    playbook_label: '이벤트 선점',
    risk_flags: ['유동성', '포인트 경쟁', '실행 리스크'],
    summary: 'Backend summary for BANANA.',
    confidence_score: 0.41,
    confidence_label: 'Low'
  },
  KOMA: {
    asset_key: 'bsc:KOMA',
    symbol: 'KOMA',
    mood_label: '조심스러운 낙관',
    playbook_label: '이벤트 선점',
    risk_flags: ['유동성', '포인트 경쟁', '실행 리스크'],
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

function stubBackendWithFailure(symbolsThatFail: string[]) {
  return vi.fn(async (input: string | URL | Request) => {
    const url = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url
    const symbol = url.split('/').pop()?.toUpperCase() ?? 'BNB'

    if (symbolsThatFail.includes(symbol)) {
      throw new Error(`backend unavailable for ${symbol}`)
    }

    return {
      ok: true,
      json: async () => backendPayloads[symbol]
    }
  })
}

describe('Narrative Radar redesign', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', stubBackendSuccess())
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('renders a backend-first shell and removes unsupported mock analysis sections', async () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /^narrative radar$/i })).toBeInTheDocument()
    expect(screen.getByText(/ai copilot for bnb chain users/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^discover$/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^watchlist$/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /ask ai what today's posture means/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^ask ai$/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /explain bnb posture/i })).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText(/assets tracked/i)).toBeInTheDocument()
      expect(screen.getAllByText(/live summaries/i).length).toBeGreaterThan(0)
      expect(screen.getAllByText(/fallback assets/i).length).toBeGreaterThan(0)
      expect(screen.getAllByText(/backend summary for bnb/i).length).toBeGreaterThan(0)
    })

    expect(screen.getByRole('heading', { name: /live api coverage/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /selected asset response/i })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /evaluation snapshot/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /evidence feed/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /feature breakdown/i })).not.toBeInTheDocument()

    const watchlistHeading = screen.getByRole('heading', { name: /your watchlist today/i })
    const watchlistPanel = watchlistHeading.closest('section')
    expect(watchlistPanel).not.toBeNull()
    expect(within(watchlistPanel as HTMLElement).getByRole('button', { name: /bnb/i })).toBeInTheDocument()
    expect(within(watchlistPanel as HTMLElement).getByRole('button', { name: /lista/i })).toBeInTheDocument()
  })

  it('updates the AI answer panel and response contract when a watchlist asset is selected', async () => {
    const user = userEvent.setup()
    render(<App />)

    const watchlistHeading = screen.getByRole('heading', { name: /your watchlist today/i })
    const watchlistPanel = watchlistHeading.closest('section')
    expect(watchlistPanel).not.toBeNull()

    await user.click(within(watchlistPanel as HTMLElement).getByRole('button', { name: /lista/i }))

    const answerHeading = screen.getByRole('heading', { name: /^ask ai$/i })
    const answerPanel = answerHeading.closest('section')
    expect(answerPanel).not.toBeNull()

    await waitFor(() => {
      expect(within(answerPanel as HTMLElement).getByText(/live:lista/i)).toBeInTheDocument()
      expect(
        within(answerPanel as HTMLElement).getByText(/backend summary for lista/i)
      ).toBeInTheDocument()
      expect(within(answerPanel as HTMLElement).getByText(/confidence: medium/i)).toBeInTheDocument()
      expect(within(answerPanel as HTMLElement).getByText(/live answer/i)).toBeInTheDocument()
      expect(within(answerPanel as HTMLElement).getByText(/lista-live posture summary/i)).toBeInTheDocument()
      expect(
        within(answerPanel as HTMLElement).getByText(/source: backend \/asset\/\{symbol\} summary/i)
      ).toBeInTheDocument()
    })

    const responseHeading = screen.getByRole('heading', { name: /selected asset response/i })
    const responsePanel = responseHeading.closest('section')
    expect(responsePanel).not.toBeNull()
    expect(within(responsePanel as HTMLElement).getByText(/symbol/i)).toBeInTheDocument()
    expect(within(responsePanel as HTMLElement).getByText(/^lista-live$/i)).toBeInTheDocument()
    expect(within(responsePanel as HTMLElement).getByText(/playbook label/i)).toBeInTheDocument()
    expect(within(responsePanel as HTMLElement).getByText(/risk flags/i)).toBeInTheDocument()
    expect(within(responsePanel as HTMLElement).getByText(/live:LISTA/i)).toBeInTheDocument()
    expect(within(responsePanel as HTMLElement).getByText(/이벤트 선점/i)).toBeInTheDocument()

    const detailHeading = screen.getByRole('heading', { name: /asset detail/i })
    const detailPanel = detailHeading.closest('section')
    expect(detailPanel).not.toBeNull()
    expect(within(detailPanel as HTMLElement).getByText(/backend summary for lista/i)).toBeInTheDocument()
  })

  it('falls back to the mock asset content when backend requests fail', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => {
        throw new Error('backend unavailable')
      })
    )

    render(<App />)

    await waitFor(() => {
      expect(screen.getAllByText(/bsc:BNB는 현재 혼잡 상태이며/i).length).toBeGreaterThan(0)
      expect(screen.getByText(/fallback answer/i)).toBeInTheDocument()
      expect(screen.getByText(/source: mock summary fallback/i)).toBeInTheDocument()
      expect(screen.getAllByText(/fallback assets/i).length).toBeGreaterThan(0)
    })

    expect(screen.getByRole('heading', { name: /live api coverage/i })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /evaluation snapshot/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /evidence feed/i })).not.toBeInTheDocument()
  })

  it('keeps selected-asset source labels honest during partial backend failures', async () => {
    const user = userEvent.setup()
    vi.stubGlobal('fetch', stubBackendWithFailure(['LISTA']))

    render(<App />)

    const watchlistHeading = screen.getByRole('heading', { name: /your watchlist today/i })
    const watchlistPanel = watchlistHeading.closest('section')
    expect(watchlistPanel).not.toBeNull()

    await user.click(within(watchlistPanel as HTMLElement).getByRole('button', { name: /lista/i }))

    const answerPanel = screen.getByRole('heading', { name: /^ask ai$/i }).closest('section')
    expect(answerPanel).not.toBeNull()

    await waitFor(() => {
      expect(
        within(answerPanel as HTMLElement).getByText(/bsc:LISTA는 현재 조심스러운 낙관 상태이며/i)
      ).toBeInTheDocument()
      expect(within(answerPanel as HTMLElement).getByText(/fallback answer/i)).toBeInTheDocument()
      expect(within(answerPanel as HTMLElement).getByText(/source: mock summary fallback/i)).toBeInTheDocument()
    })
  })
})
