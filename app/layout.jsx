import "@styles/globals.css"
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
  title: "prompt world",
  decription: "Discover and Share AI Prompts",
}

const Rootlayout = ({ children }) => {
  return (
    <html Lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <Nav />
        <main className="app">{children}</main>
      </body>
    </html>
  )
}

export default Rootlayout
