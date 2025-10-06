import './App.css'
import { Footer, Header } from './components'
import { About, About1, Contacts, Home, Partners, Products, Testimonies } from './pages'

function App() {

  return (
    <main className="container mx-auto p-4">
      <Header />

      <div className="content">
        <Home />
        <Products />
        <About />
        <Partners />
        <About1 />
        <Testimonies />
        <Contacts />
      </div>

      <Footer />
    </main>
  )
}

export default App
