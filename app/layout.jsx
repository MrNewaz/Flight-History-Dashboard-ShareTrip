import { Murecho } from "next/font/google"
import Navbar from "./components/Navbar"
import "./globals.css"

const murecho = Murecho({ subsets: ["latin"] })

export const metadata = {
  title: "Share Trip - Dashboard",
  description: "An assignment for Share Trip",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${murecho.className} bg-[#EBF0F5] h-screen flex flex-col `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
