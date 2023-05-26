import './globals.css'
import { Prompt } from 'next/font/google'

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900',],
})

export const metadata = {
  title: 'My Shopping App',
  description: 'My Shopping App Desc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={prompt.className}>
        {children}
      </body>
    </html>
  )
}
