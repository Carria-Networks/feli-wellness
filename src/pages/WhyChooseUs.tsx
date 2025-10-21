import { CheckCircleIcon } from '@heroicons/react/24/solid';

const list = [
  {
    title: "Quality You Can Trust",
    content: "Our products are made with the finest natural ingredients, rigorously tested for safety and effectiveness.",
    icon: CheckCircleIcon,
  },
  {
    title: "Holistic Approach",
    content: "We go beyond products — focusing on physical health, mental wellness, and financial empowerment.",
    icon: null,
  },
  {
    title: "Innovation",
    content: "Our wellness devices like MagnoSeek and advanced supplements like Alfalfa Boost combine nature and technology for maximum results.",
    icon: null,
  },
  {
    title: "Empowerment",
    content: "Feli Wellness gives you the opportunity to grow personally and financially through our rewarding business model and mentorship programs.",
    icon: null,
  },
  {
    title: "Community and Support",
    content: "Join a supportive network of individuals who share the same goal — a healthier, happier, and more successful life.",
    icon: null,
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="bg-gray-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase text-primary tracking-wider mb-2">Our Promise</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800">
            Why Choose <span className="text-primary">Feli Wellness</span>
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {list.map((item, index) => (
            <div
              key={item.title}
              className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-primary transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0">
                  {item.icon ? (
                    <item.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                  ) : (
                    <span className="text-3xl font-bold text-primary">{index + 1}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
              </div>

              <p className="text-base text-gray-600">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs