import { redirect } from "react-router-dom"
import { useCallback } from "react"
import copy from "copy-to-clipboard"

import { notify } from "../util"
import { rawQuotes } from "../data/rawQuotes"
import useRandomItem from "./useRandomItem"

export default function useQuotes(quoteId: string) {
  const filteredQuotes = rawQuotes.filter(quote => quote.verified)
  const { item: randomQuote, change: changeRandomQuote } = useRandomItem(filteredQuotes)

  const quote = filteredQuotes.find(quote => quote.id === parseInt(quoteId))

  const handleGenerate = () => {
    changeRandomQuote()
    redirect(`/${randomQuote.id}`)
  }

  const handleCopy = useCallback(() => {
    const copied = copy(`${quote?.text} - ${quote?.author || "Unknown"}`)
    if (copied) notify("📋", "Quote copied to the clipboard!")
  }, [quote?.text, quote?.author])

  const handleShare = useCallback(() => {
    const copied = copy(`${window.location.host}/${quote?.id}`)
    if (copied) notify("🔗", "Quote link copied to the clipboard!")
  }, [quote?.id])

  return { quote, handleCopy, handleGenerate, handleShare }
}
