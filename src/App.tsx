import './App.css'
import { Footer, Header, Hero } from './components'
import { DistributorRelationships, About, Contacts, Partners, Products } from './pages'

function App() {

  return (
    <main className="">
      <Header />
      <Hero />
      <Products />
      <DistributorRelationships />
      <About />
      {/* <Testimonies /> */}
      <Partners />
      <Contacts />
      <Footer />
    </main>
  )
}

export default App
