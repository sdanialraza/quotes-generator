import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "react-hot-toast"
import type { Metadata } from "next"
import type { PropsWithChildren } from "react"

import "@/styles/globals.css"
import { inter } from "@/util/fonts"

export const metadata: Metadata = {
  appleWebApp: {
    title: "Quotes Generator",
  },
  applicationName: "Quotes Generator",
  authors: [{ name: "Danial Raza", url: "https://github.com/sdanialraza" }],
  category: "Entertainment",
  creator: "Danial Raza",
  description: "A quotes generator web app created by Danial Raza.",
  icons: {
    apple: [
      "/apple-touch-icon.png",
      {
        url: "/safari-pinned-tab.svg",
        rel: "mask-icon",
      },
    ],
    other: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
  keywords: ["Quotes", "Generator", "Quotes Generator", "sdanialraza", "Danial", "Raza"],
  manifest: "/site.manifest",
  openGraph: {
    description: "A quotes generator web app created by Danial Raza.",
    siteName: "Quotes Generator",
    title: "Quotes Generator",
    type: "website",
    url: "https://quotes.sdanialraza.dev",
  },
  other: {
    "msapplication-TileColor": "#27374b",
  },
  title: "Quotes Generator",
}

export const viewport = {
  colorScheme: "light",
  themeColor: "#27374b",
  viewport: {
    initialScale: 1,
    minimumScale: 1,
    width: "device-width",
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-background-color text-white antialiased`}>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
