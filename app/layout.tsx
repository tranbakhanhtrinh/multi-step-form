import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Multi-step form',
  description: 'Multi-step form'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): React.JSX.Element {
  return (
    <html lang="en">
      <body className={`${inter.className} flex lg:items-center lg:h-screen`}>{children}</body>
    </html>
  )
}
