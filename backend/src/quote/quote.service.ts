import { db } from "../utils/db.server"
import { Quote } from "@prisma/client"

export async function listQuotes(): Promise<Quote[]> {
  return db.quote.findMany({})
}

export async function getQuote(id: Quote["id"]): Promise<Quote | null> {
  return db.quote.findUnique({
    where: {
      id,
    },
  })
}
