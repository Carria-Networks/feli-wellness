import { Button } from "@headlessui/react"

const About1 = () => {
  return (
    <section className="text-white py-8 px-4">
      <div className="max-w-screen-xl mx-auto lg:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight xl:text-6xl">Turn Wellness into Wealth</h1>
          <p className="mb-6 font-light text-lg">
            Beyond selling great products, Feli Wellness helps individuals build sustainable income via a structured
            distributor program.
          </p>

          <p className="mb-6 font-light text-lg">
            We provide training, mentoring, and marketing assets to help partners scale.
          </p>

          <div className="w-full max-w-prose mx-auto mb-6">
            <ul className="font-light text-lg list-disc list-inside text-left">
              <li className="mb-2">Structured onboarding & product certification</li>
              <li className="mb-2">Personal growth and sales training</li>
              <li className="mb-2">Marketing toolkits and lead-generation support</li>
            </ul>
          </div>

          <Button className="text-sm/6 font-semibold text-white bg-green-600 px-4 py-2 rounded-4xl">
            Request Info Pack
          </Button>
        </div>
      </div>
    </section>
  )
}


export default About1