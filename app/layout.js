import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movies Speed',
  description: 'Your favorite anime, all in one place.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='max-w-7xl mx-auto bg-[#0f1117]'>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
