import { useNavigate } from "react-router-dom"
import { useCallback } from "react"
import copy from "copy-to-clipboard"

import { notify } from "../util"
import { rawQuotes } from "../data/rawQuotes"
import useFavoriteQuotes from "./useFavoriteQuotes"
import useRandomItem from "./useRandomItem"

export default function useQuotes(quoteId: string) {
  const navigate = useNavigate()

  const filteredQuotes = rawQuotes.filter(quote => quote.verified)
  const { item: randomQuote, change: changeRandomQuote } = useRandomItem(filteredQuotes)
  const { favoriteQuoteIds, addFavoriteQuote } = useFavoriteQuotes()

  const quote = filteredQuotes.find(quote => quote.id === parseInt(quoteId))

  const isFavorite = quote ? favoriteQuoteIds.includes(quote.id) : false

  const handleCopy = useCallback(() => {
    const copied = copy(`${quote?.text} - ${quote?.author || "Unknown"}`)
    if (copied) notify("📋", "Quote copied to the clipboard!")
  }, [quote?.text, quote?.author])

  const handleFavorite = useCallback(() => {
    if (quote) addFavoriteQuote(quote.id)
  }, [addFavoriteQuote, quote])

  const handleGenerate = () => {
    changeRandomQuote()
    navigate(`/${randomQuote.id}`)
  }

  const handleShare = useCallback(() => {
    const copied = copy(`${window.location.host}/${quote?.id}`)
    if (copied) notify("🔗", "Quote link copied to the clipboard!")
  }, [quote?.id])

  return { quote, isFavorite, handleCopy, handleFavorite, handleGenerate, handleShare }
}
