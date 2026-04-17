import type { SourceDoc } from '../domain/types'

type SourceDocListProps = {
  docs: SourceDoc[]
  selectedDocId: string | null
  onSelectDoc: (docId: string) => void
}

export function SourceDocList({ docs, selectedDocId, onSelectDoc }: SourceDocListProps) {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Normalized docs</p>
          <h2>Adapter output preview</h2>
        </div>
      </div>
      <div className="doc-list">
        {docs.map((doc) => {
          const isSelected = doc.docId === selectedDocId

          return (
            <button
              className={`doc-card ${isSelected ? 'doc-card--selected' : ''}`}
              key={doc.docId}
              onClick={() => onSelectDoc(doc.docId)}
              type="button"
            >
              <div className="doc-card__header">
                <strong>{doc.docId}</strong>
                <span>{doc.assetSymbol}</span>
              </div>
              <p>{doc.text}</p>
              <dl className="doc-card__meta">
                <div>
                  <dt>Author</dt>
                  <dd>{doc.authorId}</dd>
                </div>
                <div>
                  <dt>Published</dt>
                  <dd>{doc.publishedAt ?? 'N/A'}</dd>
                </div>
                <div>
                  <dt>Engagement</dt>
                  <dd>
                    {doc.engagement.views} views · {doc.engagement.likes} likes · {doc.engagement.comments} comments
                  </dd>
                </div>
              </dl>
            </button>
          )
        })}
      </div>
    </section>
  )
}
