import type { SourceDoc } from '../domain/types'

type FeedMode = 'all' | 'asset'

type SourceDocListProps = {
  docs: SourceDoc[]
  selectedDocId: string | null
  onSelectDoc: (docId: string) => void
  feedMode: FeedMode
  onChangeFeedMode: (mode: FeedMode) => void
}

export function SourceDocList({
  docs,
  selectedDocId,
  onSelectDoc,
  feedMode,
  onChangeFeedMode
}: SourceDocListProps) {
  return (
    <section className="section-card">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker">Ground truth</p>
          <h2>Evidence Feed</h2>
        </div>
        <div className="feed-filter-row" aria-label="Evidence feed filters">
          <button
            className={`chip ${feedMode == 'all' ? 'chip--active' : ''}`}
            onClick={() => onChangeFeedMode('all')}
            type="button"
          >
            All posts
          </button>
          <button
            className={`chip ${feedMode == 'asset' ? 'chip--active' : ''}`}
            onClick={() => onChangeFeedMode('asset')}
            type="button"
          >
            Selected asset only
          </button>
        </div>
      </div>
      <div className="evidence-feed">
        {docs.map((doc) => {
          const isSelected = doc.docId === selectedDocId

          return (
            <button
              className={`evidence-item ${isSelected ? 'evidence-item--selected' : ''}`}
              key={doc.docId}
              onClick={() => onSelectDoc(doc.docId)}
              type="button"
            >
              <div className="evidence-item__top">
                <div>
                  <strong>{doc.docId}</strong>
                  <p>{doc.assetSymbol}</p>
                </div>
                <span className="tag tag--soft">{doc.authorId}</span>
              </div>
              <p className="evidence-item__body">{doc.text}</p>
              <div className="evidence-item__meta">
                <span>{doc.publishedAt ?? 'N/A'}</span>
                <span>{doc.engagement.views} views</span>
                <span>{doc.engagement.likes} likes</span>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
