import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  href: string
  title?: string
}

export default function ExternalLink({ children, href, title }: Props) {
  return (
    <a
      className="text-md text-center font-semibold text-card-color underline underline-offset-4 dark:text-white"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      title={title}
    >
      {children}
    </a>
  )
}
