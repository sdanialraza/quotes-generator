import { FaGithub } from "react-icons/fa"
import { useParams } from "react-router-dom"

import { REPOSITORY_LINK } from "../util"
import ExternalLink from "../components/ExternalLink"
import Quote from "../components/Quote"
import useQuotes from "../hooks/useQuotes"

export default function QuotesShow() {
  const { quoteId } = useParams<{ quoteId: string }>()
  const { quote, handleCopy, handleGenerate, handleShare } = useQuotes(quoteId!)

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <Quote quote={quote} onCopy={handleCopy} onGenerate={handleGenerate} onShare={handleShare} />
      <ExternalLink href={REPOSITORY_LINK}>
        <FaGithub size={24} />
      </ExternalLink>
    </div>
  )
}
