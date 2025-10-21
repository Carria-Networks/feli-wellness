import { Leaf, FlaskConical, Zap, Coffee, Bone, Shield, Footprints, Users, ArrowRight } from 'lucide-react';

const productCategories = [
  {
    key: 'supplements',
    title: "Natural Nutritional Supplements",
    icon: FlaskConical,
    description: "Focusing on internal balance and vitality using powerful, natural, and highly concentrated ingredients.",
    items: [
      { name: "Alfalfa Concentrated", icon: Leaf },
      { name: "Nano Calcium", icon: Bone },
      { name: "Florazen Probiotics", icon: Users },
      { name: "Feli Wellness 6-in-1 Coffee", icon: Coffee },
    ],
  },
  {
    key: 'herbal',
    title: "Herbal & Specialized Solutions",
    icon: Leaf,
    description: "Targeted remedies and specialized care, drawing from traditional wisdom to enhance specific aspects of wellness.",
    items: [
      { name: "Takara Patch", icon: Footprints },
      { name: "V-Gel", icon: Shield },
      { name: "Katuaba Plus", icon: Zap },
      { name: "Pro Stemcel", icon: Users },
    ],
  },
  {
    key: 'devices',
    title: "Innovative Wellness Devices",
    icon: Zap,
    description: "Advanced devices utilizing cutting-edge technology for holistic healing, protection, and improved energy flow.",
    items: [
      { name: "iTeracare", icon: Zap },
      { name: "Ion Shield Pendant", icon: Shield },
      { name: "Ionspecs", icon: Users },
      { name: "K-769 Energy Booster", icon: Zap },
    ],
  },
];

const FeliWellnessProductOverview = () => {
  return (
    <section id="feli-wellness-products" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Feli Wellness Product <span className="text-orange-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600">
            A curated range of solutions integrating <span className="text-orange-500">nature, science, and technology</span> to enhance your wellness and vitality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <div
              key={category.key}
              className="bg-white p-8 border border-gray-200 rounded-xl transition-all duration-300 hover:border-orange-500 hover:shadow-lg"
            >

              <div className="flex items-center space-x-4 mb-4 border-b pb-4">
                <category.icon className="w-7 h-7 text-orange-500 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <p className="text-base text-gray-600 mb-6">
                {category.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase text-gray-500 tracking-wider mb-2">Key Products:</h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700 group cursor-pointer transition-colors">
                      <ArrowRight className="w-4 h-4 mr-2 text-gray-400 group-hover:text-orange-500 transition-colors" />
                      <span className="text-base font-medium group-hover:text-orange-500">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center pt-8 border-t border-gray-200 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 italic">
            "Our selection of products reflects the mission to integrate nature, science, and technology in enhancing <span className="text-orange-500">Feli Wellness</span> and vitality."
          </p>
        </div>

      </div>
    </section>
  );
}

export default FeliWellnessProductOverview;