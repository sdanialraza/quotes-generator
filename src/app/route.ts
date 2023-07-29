import { redirect } from "next/navigation"
import type { NextRequest } from "next/server"

import { rawQuotes } from "@/data/rawQuotes"

export async function GET(_request: NextRequest) {
  const filteredIds = rawQuotes.filter(quote => quote.verified).map(quote => quote.id)
  const randomId = Math.floor(Math.random() * filteredIds.length)

  redirect(`/${randomId}`)
}
