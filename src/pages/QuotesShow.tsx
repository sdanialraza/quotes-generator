import { FaGithub } from "react-icons/fa"
import { Link, useParams } from "react-router-dom"

import { REPOSITORY_LINK } from "../util"
import ExternalLink from "../components/ExternalLink"
import Quote from "../components/Quote"
import useQuotes from "../hooks/useQuotes"

export default function QuotesShow() {
  const { quoteId } = useParams<{ quoteId: string }>()
  const { quote, isFavorite, handleCopy, handleFavorite, handleGenerate, handleShare } = useQuotes(quoteId!)

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="mb-4 text-3xl font-bold text-hover-color dark:text-white">Quotes Generator</h1>
      <Quote
        quote={quote}
        isFavorite={isFavorite}
        onCopy={handleCopy}
        onFavorite={handleFavorite}
        onGenerate={handleGenerate}
        onShare={handleShare}
      />
      <Link className="mb-2 text-xl font-semibold text-hover-color dark:text-white" to="/favorites">
        Your Favorite Quotes
      </Link>
      <ExternalLink href={REPOSITORY_LINK}>
        <FaGithub size={24} />
      </ExternalLink>
    </div>
  )
}
