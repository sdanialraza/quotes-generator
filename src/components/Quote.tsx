import type { Quote } from "../util"

interface Props {
  quote: Quote | undefined
  onCopy: () => void
  onGenerate: () => void
  onShare: () => void
}

export default function Quote({ quote, onCopy, onGenerate, onShare }: Props) {
  if (!quote)
    return (
      <div className="m-1 flex flex-col gap-4 rounded-xl bg-card-color px-5 py-6 shadow-2xl md:gap-6">
        <p>Unable to find a quote with that ID.</p>
      </div>
    )

  return (
    <div>
      <div className="mt-1 flex flex-col rounded-xl bg-[#3a4c5e] px-5 py-6 shadow-2xl">
        <p className="text-white">
          {quote.text} - {quote.author ?? "Unknown"}
        </p>
        <p className="pb-2 text-center text-sm text-gray-300/85 dark:text-white">Submitted by {quote.submitter}</p>
        <div className="flex justify-center gap-1.5">
          <button className="button bg-card-color hover:bg-gray-800" onClick={onCopy}>
            Copy
          </button>
          <button className="button bg-card-color hover:bg-gray-800" onClick={onGenerate}>
            Generate
          </button>
          <button className="button bg-card-color hover:bg-gray-800" onClick={onShare}>
            Share
          </button>
        </div>
      </div>
    </div>
  )
}
