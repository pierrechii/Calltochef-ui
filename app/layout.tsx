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
  title: "CallToChef - Le chef privé propulsé par l'IA",
  description: "Découvrez une expérience culinaire exceptionnelle avec nos chefs professionnels, assistés par une intelligence artificielle qui personnalise chaque repas selon vos goûts.",
  keywords: "chef privé, cuisine à domicile, IA, intelligence artificielle, gastronomie, réservation chef",
  openGraph: {
    title: "CallToChef - Le chef privé propulsé par l'IA",
    description: "Découvrez une expérience culinaire exceptionnelle avec nos chefs professionnels, assistés par une intelligence artificielle qui personnalise chaque repas selon vos goûts.",
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
