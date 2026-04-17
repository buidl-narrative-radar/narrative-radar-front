import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('Narrative Radar demo', () => {
  it('renders the updated backend-informed pipeline and expanded asset set', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /narrative radar demo/i })).toBeInTheDocument()
    expect(screen.getByText('Mock Discussion Docs')).toBeInTheDocument()
    expect(screen.getByText('Adapter')).toBeInTheDocument()
    expect(screen.getByText('LLM Feature Extractor')).toBeInTheDocument()
    expect(screen.getByText('Document Features')).toBeInTheDocument()
    expect(screen.getByText('Group by Asset')).toBeInTheDocument()
    expect(screen.getByText('JSON + Summary')).toBeInTheDocument()

    const assetCardsHeading = screen.getByRole('heading', { name: /mock output.json preview/i })
    const assetCardsPanel = assetCardsHeading.closest('section')

    expect(assetCardsPanel).not.toBeNull()
    expect(within(assetCardsPanel as HTMLElement).getByRole('button', { name: /bnb/i })).toBeInTheDocument()
    expect(within(assetCardsPanel as HTMLElement).getByRole('button', { name: /lista/i })).toBeInTheDocument()
    expect(within(assetCardsPanel as HTMLElement).getByRole('button', { name: /koma/i })).toBeInTheDocument()
  })

  it('switches the selected asset detail when a card is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /lista/i }))

    const assetDetailHeading = screen.getByRole('heading', { name: /asset detail · lista/i })
    const assetDetailPanel = assetDetailHeading.closest('section')

    expect(assetDetailPanel).not.toBeNull()
    expect(within(assetDetailPanel as HTMLElement).getByText('bsc:LISTA')).toBeInTheDocument()
    expect(within(assetDetailPanel as HTMLElement).getByText('이벤트 선점')).toBeInTheDocument()
    expect(within(assetDetailPanel as HTMLElement).getByText('Low')).toBeInTheDocument()
  })

  it('shows evaluation and feature details for the selected source document', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /lista/i }))
    await user.click(screen.getByRole('button', { name: /doc_023/i }))

    const featureHeading = screen.getByRole('heading', { name: /feature breakdown/i })
    const featurePanel = featureHeading.closest('section')

    expect(featurePanel).not.toBeNull()
    expect(within(featurePanel as HTMLElement).getByText(/mood score/i)).toBeInTheDocument()
    expect(within(featurePanel as HTMLElement).getByText(/0.10/)).toBeInTheDocument()
    expect(within(featurePanel as HTMLElement).getByText(/event_front_run/)).toBeInTheDocument()
    expect(within(featurePanel as HTMLElement).getByText(/0.40/)).toBeInTheDocument()

    const evaluationHeading = screen.getByRole('heading', { name: /evaluation snapshot/i })
    const evaluationPanel = evaluationHeading.closest('section')

    expect(evaluationPanel).not.toBeNull()
    expect(within(evaluationPanel as HTMLElement).getByText(/playbook match rate/i)).toBeInTheDocument()
    expect(within(evaluationPanel as HTMLElement).getByText(/0.93/)).toBeInTheDocument()
  })
})
