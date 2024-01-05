import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  href: string
  title?: string
}

export default function ExternalLink({ children, href, title }: Props) {
  return (
    <a
      className="text-md text-center font-semibold text-card-color underline underline-offset-4 hover:text-white dark:text-white dark:hover:text-card-color"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      title={title}
    >
      {children}
    </a>
  )
}
