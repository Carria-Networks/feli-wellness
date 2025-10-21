import { CheckCircleIcon, GlobeAltIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const content = [
  {
    id: 2,
    content: "Feli Wellness proudly serves as an independent distributor for Prife International and K2U Africa — two global leaders in the wellness and lifestyle industry. Through these partnerships, we bring innovative, science-backed products to local, regional markets and international markets, empowering individuals and families to live healthier and more balanced lives.",
    icon: GlobeAltIcon,
  },
  {
    id: 3,
    content: "As part of our commitment, Feli Wellness also distributes Kangen Water — a revolutionary ionized alkaline water known for its over 100 uses, including hydration, detoxification, and home wellness applications.",
    icon: CheckCircleIcon,
  },
  {
    id: 5,
    content: "Feli Wellness bridges these world-class innovations with local communities — offering education, installation, after-sales support, and distribution while maintaining our independence and commitment to integrity, authenticity, and client satisfaction.",
    icon: RocketLaunchIcon,
  },
];

const DistributorRelationships = () => {
  return (
    <div className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Our <span className="text-primary">Official Distributor Relationships</span>
          </h2>
          <p className="text-lg text-gray-600">
            Partnering with global industry leaders to bring innovative, science-backed products directly to your community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

          <div className="bg-gray-50 p-6 rounded-xl shadow-md border-t-4 border-primary">
            <p className="text-xl font-bold text-gray-800 mb-3">Prife International & K2U Africa</p>
            <p className="text-base text-gray-600">
              We are the independent distributor for these two global leaders, delivering cutting-edge <span className="font-semibold">health and lifestyle products</span> built on sustainable management and a vision of human advancement.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-md border-t-4 border-blue-500">
            <p className="text-xl font-bold text-gray-800 mb-3">Enagic (Kangen Water)</p>
            <p className="text-base text-gray-600">
              We proudly distribute <span className="font-semibold">Kangen Water systems</span> — providing revolutionary ionized alkaline water known for its over 100 uses, supporting superior hydration and home wellness.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-md border-t-4 border-primary">
            <p className="text-xl font-bold text-gray-800 mb-3">Our Commitment to You</p>
            <p className="text-base text-gray-600">
              Feli Wellness bridges these world-class innovations with local communities, offering <span className="font-semibold">education, installation, and dedicated after-sales support</span> while maintaining our commitment to integrity and client satisfaction.
            </p>
          </div>
        </div>

        <div className='max-w-5xl mx-auto mt-16'>
          <div className='relative space-y-12 md:space-y-16'>
            {content.map((paragraph) => (
              <div key={paragraph.id} className="flex relative items-start">
                <div className="hidden md:block absolute left-4 top-0 bottom-0 w-px bg-gray-300 transform translate-x-1/2"></div>

                <div className="flex-shrink-0 bg-primary p-2 rounded-full z-10 shadow-lg mr-6 mt-1">
                  {paragraph.icon && <paragraph.icon className="w-5 h-5 text-white" />}
                </div>

                <p className="font-light text-gray-700 text-base md:text-lg leading-relaxed pt-1 flex-grow">
                  {paragraph.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


export default DistributorRelationships