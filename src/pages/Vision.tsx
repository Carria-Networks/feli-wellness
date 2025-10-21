import { visionImage } from "../assets"

const Vision = () => {
  return (
    <section id="vision" className="bg-white py-20 md:py-32 border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid gap-12 md:gap-16 lg:grid-cols-12 items-center">

        <div className="lg:col-span-7 md:order-last">

          <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Our <span className="text-primary">Vision</span>
            </h2>
          </div>

          <p className="mb-8 p-4 bg-primary/10 border-l-4 border-primary text-gray-700 font-semibold italic text-xl md:text-2xl">
            To be a global leader in wellness innovation — building a healthier, wealthier world by inspiring people to live vibrant, purposeful lives through the power of natural products and community-driven success.          </p>
        </div>

        <div className="lg:col-span-5 md:order-first">
          <img
            src={visionImage}
            alt="Our Vision"
            className="w-full h-full object-cover rounded-xl shadow-2xl aspect-[4/3] md:aspect-auto border-4 border-white/50"
          />
        </div>
      </div>
    </section>
  )
}


export default Vision