import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Overall layout for each page

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Timothy Chu',
    description: 'Portfolio for Timothy Chu',
    icons: {
        icon: '/favicon-32x32.png',
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <html lang='en'>
            <body className={inter.className}>
                <main className='flex min-h-screen flex-col items-center justify-between p-8 bg-sky-400'>
                    {children}
                </main>
            </body>
        </html>
  )
}
