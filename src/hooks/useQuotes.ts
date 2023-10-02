import { useCallback } from "react"
import copy from "copy-to-clipboard"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

import { rawQuotes } from "@/data/rawQuotes"
import useRandomItem from "@/hooks/useRandomItem"

export default function useQuotes(quoteId: string) {
  const filteredQuotes = rawQuotes.filter(quote => quote.verified)
  const { item: randomQuote, change: changeRandomQuote } = useRandomItem(filteredQuotes)

  const quote = filteredQuotes.find(quote => quote.id === parseInt(quoteId))
  const router = useRouter()

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
  }, [quote?.text, quote?.author])

  const handleShare = useCallback(() => {
    const copied = copy(`${window.location.host}/${quote?.id}`)
    if (copied) notify("🔗", "Quote link copied to the clipboard!")
  }, [quote?.id])

  return { quote, handleClick, handleCopy, handleShare }
}
