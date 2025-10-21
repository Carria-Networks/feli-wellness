import './App.css'
import { Footer, Header, Hero } from './components'
import {
  DistributorRelationships,
  About,
  Contacts,
  Partners,
  NewProduct,
  Mission,
  Vision,
  WhyChooseUs,
  ChangingLives,
  FeliwellnessProductOverview
} from './pages'

function App() {

  return (
    <main className="">
      <Header />
      <Hero />
      <About />
      <Mission />
      <Vision />
      <WhyChooseUs />
      <ChangingLives />
      <NewProduct />
      <FeliwellnessProductOverview />
      <DistributorRelationships />
      <Partners />
      <Contacts />
      <Footer />
    </main>
  )
}

export default App
