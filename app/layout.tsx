import type { Metadata } from "next"
import { Inter, Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "CallToChef",
  description: "Votre assistant IA disponible 24h/24 pour répondre aux clients, gérer les réservations et synchroniser avec vos systèmes existants. Installation rapide et simple.",
  keywords: "assistant IA restaurant, réservations automatiques, gestion client IA, chatbot restaurant, intelligence artificielle restauration",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "CallToChef",
    description: "Votre assistant IA disponible 24h/24 pour répondre aux clients, gérer les réservations et synchroniser avec vos systèmes existants.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
