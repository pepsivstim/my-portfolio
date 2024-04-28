import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import Template from '@/components/Template';


// Overall layout for each page

const raleway = Raleway({ subsets: ['latin'] })

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
            <body className={raleway.className}>
                <Template> {children} </Template>
            </body>
        </html>
  )
}
