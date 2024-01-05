import CardDetail from "./CardDetail"

import type { Quote } from "../util"

interface Props {
  quote: Quote | undefined
  onCopy: () => void
  onShare: () => void
}

export default function Quote({ quote, onCopy, onShare }: Props) {
  if (!quote)
    return (
      <div className="m-1 flex flex-col gap-4 rounded-xl bg-card-color px-5 py-6 shadow-2xl md:gap-6">
        <p>Unable to find a quote with that ID.</p>
      </div>
    )

  return (
    <div className="m-1 flex flex-col gap-4 rounded-xl bg-card-color px-5 py-6 shadow-2xl md:gap-4">
      <p>{quote.text}</p>
      <div className="grid grid-cols-3 gap-1">
        <CardDetail heading="Author" value={quote.author || "Unknown"} />
        <CardDetail heading="Category" value={quote.category.join(", ") || "None"} />
        <CardDetail heading="Submitter" value={quote.submitter} />
      </div>
      <button className="button bg-background-color hover:bg-slate-500" onClick={onCopy}>
        Copy
      </button>
      <button className="button bg-background-color hover:bg-slate-500" onClick={onShare}>
        Share
      </button>
    </div>
  )
}
