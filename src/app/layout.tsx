import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Template from '@/components/Template';


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
                <Template children={children} />
            </body>
        </html>
  )
}
