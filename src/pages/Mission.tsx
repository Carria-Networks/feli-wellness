import { missionImage } from "../assets"

const Mission = () => {
  return (
    <section id="mission" className="bg-white py-20 md:py-32 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid gap-12 md:gap-16 lg:grid-cols-12 items-center">

        <div className="lg:col-span-7">

          <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Our Story & <span className="text-primary">Mission</span>
            </h2>
          </div>

          <p className="mb-8 p-4 bg-primary/10 border-l-4 border-primary text-gray-700 font-semibold italic text-xl md:text-2xl">
            To enhance the health, wellness, and prosperity of individuals and families by offering safe, effective, and affordable wellness products, while providing a platform for personal growth and financial empowerment.          </p>

          <p className="mb-6 text-gray-600 text-lg">
            <span className="font-semibold">Feli Wellness</span>, operating as a unified entity with Prife International and Enagic, is a dynamic health and wellness company dedicated to enhancing lives through innovative products and empowering business opportunities.
          </p>

          <p className="text-gray-600 text-lg">
            We deliver science-backed solutions for healthier lifestyles by integrating advanced technology and natural supplements. Our mission is to promote personal health while fostering financial independence and community growth through a cohesive brand identity.
          </p>
        </div>

        <div className="lg:col-span-5 md:order-last">
          <img
            src={missionImage}
            alt="Our Mission"
            className="w-full h-full object-cover rounded-xl shadow-2xl transform hover:scale-[1.01] transition duration-300 ease-in-out aspect-[4/3] md:aspect-auto border-4 border-white/50"
          />
        </div>
      </div>
    </section>
  )
}

export default Mission