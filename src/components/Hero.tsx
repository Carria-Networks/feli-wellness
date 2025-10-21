'use client'

import { useState } from 'react';
import heroBg from "../assets/hero_background.mp4"

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800"
      aria-label="Hero Section"
    >
      <div className={`absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 transition-opacity duration-700 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}>
        <div className="animate-pulse flex items-center justify-center h-full">
          <div className="w-16 h-16 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>

      {/* Background Video */}
      <div aria-hidden="true">
        <video
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          src={heroBg}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          preload="auto"
        ></video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      {/* Content */}
      <div className="relative isolate md:px-6 px-2 pt-28 lg:pt-36 lg:px-8 z-10 h-full flex items-center justify-center">
        <div className="mx-auto max-w-4xl py-20 lg:py-24 flex items-center justify-center">
          <div className="text-center space-y-8 lg:space-y-10 animate-fade-in">
            <h1 className="tracking-tight text-balance text-white md:text-7xl text-5xl leading-tight">
              <span className="block mb-2 animate-slide-up">Uncover Complete</span>
              <span className="block text-white">
                <span className="inline-block font-extrabold text-primary animate-slide-up-delay-1">Wellness</span>
                <span className="inline-block mx-2 animate-slide-up-delay-2">&</span>
                <span className="inline-block font-extrabold text-primary animate-slide-up-delay-3">Healing</span>
              </span>
            </h1>

            <p className="text-pretty text-gray-200 md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
              At Feli Wellness, we improve health through innovative products and business opportunities. We provide high-quality health supplements and advanced wellness devices, and we empower individuals to build sustainable income through our rewarding business model.
            </p>

            <a
              href="#products"
              className="w-full sm:w-auto font-bold rounded-lg px-8 py-3 text-white border-2 border-orange-400 hover:bg-orange-400/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 transition-colors duration-300"
            >
              Explore Our Products
            </a>

          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;