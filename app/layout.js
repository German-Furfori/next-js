import { Navigation } from "../components/navigation/Navigation"
import '../styles/global.css'

export const metadata = {
  title: 'Next App',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Navigation />
        {children}  
      </body>
    </html>
  )
}
