import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('Narrative Radar redesign', () => {
  it('renders the light product shell with header, tabs, hero, and watchlist', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /^narrative radar$/i })).toBeInTheDocument()
    expect(screen.getByText(/ai copilot for bnb chain users/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^discover$/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^watchlist$/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /ask ai what today's posture means/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^ask ai$/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /explain bnb posture/i })).toBeInTheDocument()
    expect(screen.getByText(/assets tracked/i)).toBeInTheDocument()
    expect(screen.getByText(/documents parsed/i)).toBeInTheDocument()
    expect(screen.getByText(/signal quality/i)).toBeInTheDocument()

    const watchlistHeading = screen.getByRole('heading', { name: /your watchlist today/i })
    const watchlistPanel = watchlistHeading.closest('section')
    expect(watchlistPanel).not.toBeNull()
    expect(within(watchlistPanel as HTMLElement).getByRole('button', { name: /bnb/i })).toBeInTheDocument()
    expect(within(watchlistPanel as HTMLElement).getByRole('button', { name: /lista/i })).toBeInTheDocument()
  })

  it('updates the AI answer panel and detail card when a watchlist asset is selected', async () => {
    const user = userEvent.setup()
    render(<App />)

    const watchlistHeading = screen.getByRole('heading', { name: /your watchlist today/i })
    const watchlistPanel = watchlistHeading.closest('section')
    expect(watchlistPanel).not.toBeNull()

    await user.click(within(watchlistPanel as HTMLElement).getByRole('button', { name: /lista/i }))

    const answerHeading = screen.getByRole('heading', { name: /^ask ai$/i })
    const answerPanel = answerHeading.closest('section')
    expect(answerPanel).not.toBeNull()
    expect(within(answerPanel as HTMLElement).getByText(/bsc:lista/i)).toBeInTheDocument()
    expect(within(answerPanel as HTMLElement).getByText(/event-driven setup is still alive/i)).toBeInTheDocument()
    expect(within(answerPanel as HTMLElement).getByText(/confidence: low/i)).toBeInTheDocument()

    const detailHeading = screen.getByRole('heading', { name: /asset detail/i })
    const detailPanel = detailHeading.closest('section')
    expect(detailPanel).not.toBeNull()
    expect(within(detailPanel as HTMLElement).getAllByText(/event front run/i).length).toBeGreaterThan(0)
  })

  it('keeps evaluation and evidence visible below the hero layout', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getByRole('heading', { name: /how narrative radar works/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /evaluation snapshot/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /evidence feed/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /all posts/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /selected asset only/i })).toBeInTheDocument()

    const watchlistHeading = screen.getByRole('heading', { name: /your watchlist today/i })
    const watchlistPanel = watchlistHeading.closest('section')
    expect(watchlistPanel).not.toBeNull()
    await user.click(within(watchlistPanel as HTMLElement).getByRole('button', { name: /lista/i }))

    await user.click(screen.getByRole('button', { name: /selected asset only/i }))

    expect(screen.queryByRole('button', { name: /doc_001/i })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: /doc_023/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /doc_023/i }))

    const featureHeading = screen.getByRole('heading', { name: /feature breakdown/i })
    const featurePanel = featureHeading.closest('section')
    expect(featurePanel).not.toBeNull()
    expect(within(featurePanel as HTMLElement).getByText(/doc_023/i)).toBeInTheDocument()
    expect(within(featurePanel as HTMLElement).getByText(/0.10/)).toBeInTheDocument()
    expect(within(featurePanel as HTMLElement).getByText(/event_front_run/i)).toBeInTheDocument()

    const evaluationPanel = screen.getByRole('heading', { name: /evaluation snapshot/i }).closest('section')
    expect(evaluationPanel).not.toBeNull()
    expect(within(evaluationPanel as HTMLElement).getByText(/playbook match rate/i)).toBeInTheDocument()
    expect(within(evaluationPanel as HTMLElement).getByText(/0.93/)).toBeInTheDocument()
  })
})
