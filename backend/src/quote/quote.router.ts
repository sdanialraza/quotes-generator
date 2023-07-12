import { Router, type Request, type Response } from "express"

import { getQuote, listQuotes } from "./quote.service"
import type { Quote } from "../types"

export const router = Router()

router.get("/", async (_request: Request, response: Response) => {
  try {
    const quotes = await listQuotes()
    return response.status(200).json(quotes)
  } catch (error) {
    return response.status(500).json(error.message)
  }
})

router.get("/:id", async (request: Request, response: Response) => {
  const id: Quote["id"] = parseInt(request.params.id, 10)

  try {
    const quote = await getQuote(id)
    if (quote) return response.status(200).json(quote)
    else return response.status(404).json({ message: "Quote not found" })
  } catch (error) {
    return response.status(500).json(error.message)
  }
})
