import './App.css'
import { Footer, Header } from './components'
import { DistributorRelationships, About, Contacts, Home, Partners, Products, Testimonies } from './pages'

import { heroBackground } from './assets'

function App() {

  return (
    <main className="">

      <div className="">
        <div className="relative w-full h-auto">
          <video
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            src={heroBackground}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
          <div className="relative">
            <Header />
            <Home />
          </div>
        </div>
        <Products />
        <DistributorRelationships />
        <Partners />
        <About />
        <Testimonies />
        <Contacts />
      </div>

      <Footer />
    </main>
  )
}

export default App
