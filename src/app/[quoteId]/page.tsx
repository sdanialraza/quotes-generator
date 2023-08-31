"use client"

import { useCallback } from "react"
import { useRouter } from "next/navigation"
import copy from "copy-to-clipboard"
import toast from "react-hot-toast"

import { rawQuotes } from "@/data/rawQuotes"
import Quote from "@/components/Quote"
import useRandomItem from "@/hooks/useRandomItem"

interface Props {
  params: {
    quoteId: string
  }
}

export default function Page({ params }: Props) {
  const router = useRouter()

  const filteredQuotes = rawQuotes.filter(quote => quote.verified)
  const { item: randomQuote, change: changeRandomQuote } = useRandomItem(filteredQuotes)
  const quote = rawQuotes.find(quote => quote.id === parseInt(params.quoteId))

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

  const handleClick = () => {
    changeRandomQuote()
    router.push(`/${randomQuote.id}`)
  }

  const handleCopy = useCallback(() => {
    const copied = copy(`${quote?.text} - ${quote?.author || "Unknown"}`)
    if (copied) notify("📋", "Quote copied to the clipboard!")
  }, [quote?.author, quote?.text])

  const handleShare = useCallback(() => {
    const copied = copy(`${window.location.host}/${quote?.id}`)
    if (copied) notify("🔗", "Quote link copied to the clipboard!")
  }, [quote?.id])

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <Quote quote={quote} onCopy={handleCopy} onShare={handleShare} />
      <button className="button bg-card-color hover:bg-gray-800" onClick={handleClick}>
        Generate another quote
      </button>
    </div>
  )
}
