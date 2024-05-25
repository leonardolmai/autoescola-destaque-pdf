import type { Metadata } from 'next'
import { Open_Sans as OpenSans } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from '@/components/Header'

const opensans = OpenSans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Autoescola Destaque PDF',
  description: 'O sonho de dirigir ao seu alcance.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={opensans.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
