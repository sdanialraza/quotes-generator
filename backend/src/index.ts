import { config } from "dotenv"
import express from "express"
import cors from "cors"

import { router } from "./quote/quote.router"

config()

if (!process.env.PORT) process.exit(1)

const PORT: number = parseInt(process.env.PORT, 10)

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/quotes", router)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
