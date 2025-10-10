import { Button } from "@headlessui/react"
import { aboutBackground } from "../assets"

const About = () => {
  return (
    <section id="about" className="text-white py-8 px-4"
      style={{
        background: `
          linear-gradient(
          rgba(0, 0, 0, 0.5) 80%,
          rgba(0, 0, 0, 0.2) 100%
          ),
          url(${aboutBackground})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className="max-w-7xl mx-auto lg:py-16">
        <div className=" mx-auto ">
          <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Turn Wellness into Wealth</h1>
          <p className="mb-6 font-light text-lg">
            Beyond selling great products, Feli Wellness helps individuals build sustainable income via a structured
            distributor program.
          </p>

          <p className="mb-6 font-light text-lg">
            We provide training, mentoring, and marketing assets to help partners scale.
          </p>

          <div className="w-full mb-6">
            <ul className="font-light text-lg list-disc list-inside text-left">
              <li className="mb-2">Structured onboarding & product certification</li>
              <li className="mb-2">Personal growth and sales training</li>
              <li className="mb-2">Marketing toolkits and lead-generation support</li>
            </ul>
          </div>

          <Button className="text-sm/6 text-white bg-orange-400 px-4 py-2 rounded-4xl">
            Request Info Pack
          </Button>
        </div>
      </div>
    </section>
  )
}


export default About