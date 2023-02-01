import './globals.css'
import './style.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="bg-sky-600 px-14 ">{children}</body>
    </html>
  )
}
