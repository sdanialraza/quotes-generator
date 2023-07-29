"use client"

import { useRouter } from "next/navigation"

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

  const filteredIds = rawQuotes.filter(quote => quote.verified).map(quote => quote.id)
  const { item: quoteId, change: changeQuoteId } = useRandomItem(filteredIds)

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <Quote id={parseInt(params.quoteId)} />
      <button
        className="button bg-card-color hover:bg-gray-800"
        onClick={() => {
          changeQuoteId()
          router.push(`/${quoteId}`)
        }}
      >
        Generate another quote
      </button>
    </div>
  )
}
