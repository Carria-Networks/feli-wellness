import enagicLogo from '../assets/enagic-logo.png'
import prife from '../assets/prife-logo.jpeg'
import feliLogo from "../assets/logo3-removebg-preview.png"


const Partners = () => {
  return (
    <div id="partners" className="bg-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Partnerships
            </h2>
            <p className="text-lg text-gray-600">Why partner with us</p>
          </div>

          <div className="space-y-6">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Feli Wellness, Prife International, and Enagic function as a single entity, combining their expertise to offer cutting-edge wellness solutions.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              This unified operation leverages Prife's global e-commerce platform and innovative consumer electronics with Enagic's pioneering water ionization technology, known for producing Kangen Water®️—electrolytically-reduced, hydrogen-rich drinking water.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Together, we provide a synergistic range of products tailored for diverse markets, including Africa, ensuring accessibility and impact.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid md:grid-cols-3 gap-8 items-center justify-items-center">
            <div className="w-full flex justify-center">
              <img
                className="h-32 md:h-44 object-contain transition-transform duration-300 hover:scale-105"
                src={enagicLogo}
                alt="Enagic logo"
              />
            </div>
            <div className="w-full flex justify-center">
              <img
                className="h-32 md:h-44 object-contain transition-transform duration-300 hover:scale-105"
                src={prife}
                alt="Prife logo"
              />
            </div>
            <div className="w-full flex justify-center">
              <img
                className="h-32 md:h-44 object-contain transition-transform duration-300 hover:scale-105"
                src={feliLogo}
                alt="Feli Wellness logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners