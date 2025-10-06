import { Hero } from "../components"

const Home = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Welcome to Feli Wellness</h1>
      <Hero />
      <p className="mt-4">Your journey to wellness starts here.</p>
      {/* Add more content as needed */}
    </main>
  )
}

export default Home