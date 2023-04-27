import './globals.css'
import Sidebar from '@/components/sidebar/sidebar'
import Header from '@/components/header/header'

export const metadata = {
  title: 'Croakodoro',
  description: 'Croakodoro - a simple pomodoro timer and todo-list app built with Next.js and TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
