


'use client'


import heroBg from "../assets/hero_background.mp4"

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-full md:h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroBg}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative isolate md:px-6 px-2 mt-20 lg:px-8 z-10">
        <div className="mx-auto max-w-4xl py-24 flex items-center justify-center">
          <div className="text-center space-y-10">
            <h1 className=" tracking-tight text-balance text-white text-2xl ">
              <span className="md:text-7xl text-5xl font-bold block">Uncover Complete</span>
              <span className="block text-white">
                <span className="block lg:inline font-semibold text-orange-400">Wellness</span>
                <span className="block lg:inline">&nbsp;and&nbsp;</span>
                <span className="block lg:inline font-semibold text-primary">Healing</span>
              </span>
            </h1>

            <p className=" text-pretty text-white  text-md max-w-3xl mx-auto leading-relaxed">
              Feli Wellness improves health and wellbeing with innovative products — from Kangen Water to healthy products and advanced wellness devices. We also empower individuals with training and a sustainable business model to build income and personal growth.
            </p>

            <div className=" flex items-center justify-center gap-x-6">
              <a
                href="#products"
                className=" font-bold bg-transparent border rounded px-6 py-3 font-semibold text-white shadow-xs hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
              >
                Explore Our Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
