'use client'

const Hero = () => {

  return (
    <div className="">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              <span>Uncover Complete</span>
              <span className="text-green-400"> Wellness</span> and <span className="text-green-400">Health</span>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
              Feli Wellness improves health and wellbeing with innovative products —
              from Kangen Water to healthy products and advanced wellness devices.
              We also empower individuals with training and a sustainable business
              model to build income and personal growth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#products"
                className="text-2xl font-bold rounded-4xl bg-green-500 px-3.5 py-2.5 font-semibold text-white shadow-xs hover:bg-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
              >
                Explore Our Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Hero