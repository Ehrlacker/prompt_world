import "@styles/globals.css"
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
  title: "prompt world",
  decription: "Discover and Share AI Prompts",
}

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
        <div className="">
          <div className="gradient" />
        </div>
        <Nav />
        <main className="app">{children}</main>
        </Provider>
      </body>
    </html>
  )
}

export default Rootlayout
