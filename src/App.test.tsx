import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('Narrative Radar demo', () => {
  it('renders the pipeline stages and mock asset cards', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /narrative radar demo/i })).toBeInTheDocument()
    expect(screen.getByText('Raw Data')).toBeInTheDocument()
    expect(screen.getByText('Internal Doc')).toBeInTheDocument()
    expect(screen.getByText('Feature Extractor')).toBeInTheDocument()
    expect(screen.getByText('State Aggregator')).toBeInTheDocument()
    expect(screen.getByText('Final Asset State')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /btc/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /eth/i })).toBeInTheDocument()
  })

  it('switches the selected asset detail when a card is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /eth/i }))

    const assetDetailHeading = screen.getByRole('heading', { name: /asset detail · eth/i })
    const assetDetailPanel = assetDetailHeading.closest('section')

    expect(assetDetailPanel).not.toBeNull()
    expect(within(assetDetailPanel as HTMLElement).getByText('공포 속 반등시도')).toBeInTheDocument()
    expect(within(assetDetailPanel as HTMLElement).getByText('추격금지')).toBeInTheDocument()
    expect(within(assetDetailPanel as HTMLElement).getByText('보안')).toBeInTheDocument()
  })

  it('shows feature breakdown for the selected source document', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /eth/i }))
    await user.click(screen.getByRole('button', { name: /doc_005/i }))

    const featureHeading = screen.getByRole('heading', { name: /feature breakdown/i })
    const featurePanel = featureHeading.closest('section')

    expect(featurePanel).not.toBeNull()
    expect(within(featurePanel as HTMLElement).getByText(/mood score/i)).toBeInTheDocument()
    expect(within(featurePanel as HTMLElement).getByText(/-0.40/)).toBeInTheDocument()
    expect(within(featurePanel as HTMLElement).getByText(/security/)).toBeInTheDocument()
    expect(within(featurePanel as HTMLElement).getByText(/no_chase/)).toBeInTheDocument()
  })
})
