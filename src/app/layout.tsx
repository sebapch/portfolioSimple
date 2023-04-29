'use client'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-stone-900'>
        <ThemeProvider enableSystem={true} attribute='class'>
        <Navbar />

        {children}
        <Footer />
        </ThemeProvider>
        </body>
    </html>
  )
}
