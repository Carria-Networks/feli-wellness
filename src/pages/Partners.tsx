import { CheckIcon } from '@heroicons/react/24/outline'; // Using a simple checkmark icon

import enagicLogo from '../assets/enagic-logo.png'
import prife from '../assets/prife-logo.jpeg'
import feliLogo from "../assets/logo3-removebg-preview.png"

const Partners = () => {

  const benefits = [
    "Unified operation leveraging Prife's global e-commerce and consumer electronics expertise.",
    "Access to Enagic's pioneering water ionization technology, producing Kangen Water®️.",
    "Synergistic product range tailored for diverse markets, ensuring accessibility and maximum impact.",
    "Local support and expertise provided by Feli Wellness, specializing in African markets.",
  ];

  return (
    <div id="partners" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-primary">Partners</span>
          </h2>
          <p className="text-xl text-orange-400 font-bold mb-8">
            Why partner with us
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mx-auto max-w-2xl">
            Feli Wellness, Prife International, and Enagic function as a <span className="font-semibold">single, powerful entity</span>, combining our respective strengths to offer truly cutting-edge wellness solutions. This unified approach guarantees quality, innovation, and dedicated support worldwide.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 items-center justify-items-center mb-16 border-b border-t border-gray-200 py-8">
          <div className="w-full flex justify-center">
            <img
              className="h-20 md:h-28 object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
              src={enagicLogo}
              alt="Enagic logo"
            />
          </div>
          <div className="w-full flex justify-center">
            <img
              className="h-20 md:h-28 object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
              src={feliLogo}
              alt="Feli Wellness logo"
            />
          </div>
          <div className="w-full flex justify-center">
            <img
              className="h-20 md:h-28 object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
              src={prife}
              alt="Prife logo"
            />
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            The Synergistic Advantage
          </h3>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners;