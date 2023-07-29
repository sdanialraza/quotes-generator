"use client"

import { toast } from "react-hot-toast"
import { useCallback } from "react"
import copy from "copy-to-clipboard"

import { rawQuotes } from "@/data/rawQuotes"
import CardDetail from "@/components/CardDetail"

export default function Quote({ id }: { id: number }) {
  const quote = rawQuotes.find(quote => quote.id === id)

  const notify = (icon: string, text: string) =>
    toast.success(text, {
      duration: 2500,
      icon,
      position: "bottom-center",
      style: {
        background: "#27374b",
        borderRadius: "10px",
        color: "#fff",
      },
    })

  const handleCopy = useCallback(() => {
    const copied = copy(`${quote?.text} - ${quote?.author || "Unknown"}`)
    if (copied) notify("📋", "Quote copied to the clipboard!")
  }, [quote?.author, quote?.text])

  const handleShare = useCallback(() => {
    const copied = copy(`${window.location.host}/${quote?.id}`)
    if (copied) notify("🔗", "Quote link copied to the clipboard!")
  }, [quote?.id])

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
      <button className="button bg-background-color hover:bg-slate-500" onClick={handleCopy}>
        Copy
      </button>
      <button className="button bg-background-color hover:bg-slate-500" onClick={handleShare}>
        Share
      </button>
    </div>
  )
}
