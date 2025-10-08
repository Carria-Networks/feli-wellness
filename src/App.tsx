import './App.css'
import { Footer, Header, Hero } from './components'
import { DistributorRelationships, About, Contacts, Partners, Products, Testimonies } from './pages'

function App() {

  return (
    <main className="">
        <Header />
        <Hero />
        <Products />
        <DistributorRelationships />
        <About />
        <Testimonies />
        <Contacts />
        <Partners />


      <Footer />
    </main>
  )
}

export default App
