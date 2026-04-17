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
          <p className="eyebrow">Source documents</p>
          <h2>Mock raw inputs</h2>
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
                <span>{doc.source}</span>
              </div>
              <p>{doc.text}</p>
              <dl className="doc-card__meta">
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
