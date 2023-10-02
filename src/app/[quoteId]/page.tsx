"use client"

import { REPOSITORY_LINK } from "@/util"
import ExternalLink from "@/components/ExternalLink"
import Quote from "@/components/Quote"
import useQuotes from "@/hooks/useQuotes"

interface Props {
  params: {
    quoteId: string
  }
}

export default function Page({ params }: Props) {
  const { quote, handleClick, handleCopy, handleShare } = useQuotes(params.quoteId)

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <Quote quote={quote} onCopy={handleCopy} onShare={handleShare} />
      <button className="button bg-card-color hover:bg-gray-800" onClick={handleClick}>
        Generate another quote
      </button>
      <ExternalLink href={REPOSITORY_LINK}>Source Code</ExternalLink>
    </div>
  )
}
