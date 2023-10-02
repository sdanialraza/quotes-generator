"use client"

import Link from "next/link"

import { REPOSITORY_LINK } from "@/util"
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
      <Link
        className="text-md text-center font-semibold underline underline-offset-4 hover:text-card-color"
        href={REPOSITORY_LINK}
        rel="noopener noreferrer"
        target="_blank"
      >
        Source Code
      </Link>
    </div>
  )
}
