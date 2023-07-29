

import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: 'Home | Suditya',
  description: "This portfolio is created by Suditya Kumar.",
}


// const JosefinSans = Josefin_Sans(
//   {
//     weight: ['400', '500', '600', '700'],
//     subsets: ['latin']
//   }
// )

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`w-screen  overflow-x-hidden px-5 md:px-[120px]`}>
       
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  )
}
