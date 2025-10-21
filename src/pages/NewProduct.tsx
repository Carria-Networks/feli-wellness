import { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'; // Importing icons for navigation


// kangen water images
import image1 from "../assets/kangen/1.png";
import image2 from "../assets/kangen/2.png";
import image3 from "../assets/kangen/3.png";
import image4 from "../assets/kangen/4.png";
import image5 from "../assets/kangen/5.png";
import image6 from "../assets/kangen/6.png";
import image7 from "../assets/kangen/7.png";
import image8 from "../assets/kangen/8.png";
import image9 from "../assets/kangen/9.png";
import image10 from "../assets/kangen/10.png";
// health supplements images
import himage1 from "../assets/healthysupllements/1.png";
import himage2 from "../assets/healthysupllements/2.png";
import himage3 from "../assets/healthysupllements/3.png";
import himage4 from "../assets/healthysupllements/4.png";
import himage5 from "../assets/healthysupllements/5.png";
import himage6 from "../assets/healthysupllements/6.png";
import himage7 from "../assets/healthysupllements/7.png";
import himage8 from "../assets/healthysupllements/8.png";
// wellness devices images
import wimage1 from "../assets/wellnessdevice/1.png";
import wimage2 from "../assets/wellnessdevice/2.png";
import wimage3 from "../assets/wellnessdevice/3.png";
import wimage4 from "../assets/wellnessdevice/4.png";
import wimage5 from "../assets/wellnessdevice/5.png";
import wimage6 from "../assets/wellnessdevice/6.png";
import wimage7 from "../assets/wellnessdevice/7.png";
import wimage8 from "../assets/wellnessdevice/8.png";


// --- ProductCard Component Refinement ---

interface ProductCardProps {
  images: string[];
  productName: string;
}

const ProductCard = ({ images, productName }: ProductCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState<Map<number, boolean>>(() => new Map());

  const totalImages = images.length;

  const handleNext = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation(); // Prevent interaction from bubbling up
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleImageLoad = (index: number) => {
    setIsLoaded((prev) => {
      const newLoaded = new Map(prev);
      newLoaded.set(index, true);
      return newLoaded;
    });
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[450px] perspective-1000 p-4">

      {/* Image Stack Container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => {
          const isActive = index === currentIndex;
          const offset = index - currentIndex;
          const isVisible = Math.abs(offset) < 3; // Show a few cards stacked behind

          return (
            <div
              key={index}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out 
                ${isActive ? 'z-30' : offset > 0 ? 'z-20' : 'z-10'}
                ${!isVisible ? 'hidden' : ''}
              `}
              style={{
                width: isActive ? '320px' : '300px', // Slightly scale down non-active cards
                height: isActive ? '380px' : '360px',
                transform: `
                  translateX(${offset * 20}px)
                  translateY(${offset * 20}px)
                  rotate(${offset * 3}deg)
                  scale(${isActive ? 1 : 0.95})
                `,
                opacity: isVisible ? (isActive ? 1 : 0.8 - Math.abs(offset) * 0.2) : 0,
                pointerEvents: isActive ? 'auto' : 'none',
              }}
            >
              <div
                className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${isLoaded.get(index) ? '' : 'bg-gray-200 animate-pulse'
                  }`}
              >
                <img
                  src={image}
                  alt={`${productName} ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isLoaded.get(index) ? 'opacity-100' : 'opacity-0'
                    }`}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => handleImageLoad(index)}
                />

                {/* Product name overlay - only on active card */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg sm:text-xl">{productName} {index + 1}</h3>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls (UX Improvement) */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-40 flex space-x-4">
        <button
          onClick={handlePrev}
          className="p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-lg text-gray-800 hover:bg-white transition-colors duration-200"
          aria-label="Previous product image"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-lg text-gray-800 hover:bg-white transition-colors duration-200"
          aria-label="Next product image"
        >
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary scale-110' : 'bg-gray-400 opacity-60'
              }`}
          />
        ))}
      </div>
    </div>
  );
};


// --- ProductSection Component Refinement ---

interface ProductSectionProps {
  title: string;
  description: string;
  extraInfo?: string;
  images: string[];
  link?: string;
  titleColor?: string;
  reverseLayout: boolean; // New prop for alternating layout
}

const ProductSection = ({ title, description, extraInfo, images, link = "#", titleColor, reverseLayout }: ProductSectionProps) => {
  return (
    // Use the `md:flex-row-reverse` class conditionally for alternating layout
    <div className={`flex flex-col md:flex-row gap-8 md:gap-12 mb-16 items-center ${reverseLayout ? 'md:flex-row-reverse' : ''}`}>

      {/* Product Card Column (Order changes based on reverseLayout) */}
      <div className="w-full md:w-1/2 flex justify-center">
        <ProductCard images={images} productName={title} />
      </div>

      {/* Text Content Column */}
      <div className="w-full md:w-1/2 space-y-4 px-4 md:px-0">

        {/* Title Link */}
        <a
          href={link}
          target={link === "#" ? "_self" : "_blank"}
          rel={link === "#" ? "" : "noopener noreferrer"}
          className="inline-block font-bold text-3xl md:text-4xl mb-2 hover:opacity-80 transition-opacity duration-200"
          style={{ color: titleColor || '#333' }} // Use a fallback color
        >
          {title}
        </a>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">{description}</p>
          {extraInfo && <p className="text-gray-700 leading-relaxed">{extraInfo}</p>}
        </div>

        {/* Learn More Link */}
        {link !== "#" && (
          <div className="mt-6">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className='inline-block text-blue-500 font-semibold hover:text-blue-600 transition-colors duration-300'
            >
              Learn More →
            </a>
          </div>
        )}
      </div>
    </div>
  );
};


// --- NewProduct Component (Main component) ---

const NewProduct = () => {
  const kangenImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
  const healthImages = [himage1, himage2, himage3, himage4, himage5, himage6, himage7, himage8];
  const wellnessImages = [wimage1, wimage2, wimage3, wimage4, wimage5, wimage6, wimage7, wimage8];

  return (
    <div id="products" className="md:py-24 py-12 bg-white"> {/* Changed to bg-white for cleaner look */}
      <div className="relative max-w-7xl mx-auto overflow-hidden px-4 md:px-8">

        {/* Header Block */}
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Our Innovative <span className='text-primary'>Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Feli Wellness, in partnership with Prife International and Enagic, offers a curated selection of solutions to promote holistic well-being, from advanced wellness devices to high-quality health supplements.
          </p>
        </div>

        {/* Product Sections - Now with Alternating Layout */}
        <div className="space-y-24 md:space-y-32">

          {/* Section 1: Kangen Water (Image Left, Text Right) */}
          <ProductSection
            title="Kangen Water"
            description="Kangen Water is alkaline, hydrogen-rich water produced through the process of electrolysis using innovative ionization systems developed by Enagic. This process separates ordinary tap water into alkaline and acidic streams."
            extraInfo="This technology results in water rich in antioxidants and negative ions that help neutralize free radicals, potentially supporting superior hydration, detoxification, and overall well-being by balancing the body's pH levels."
            images={kangenImages}
            link="https://kangenwaterkenya.com/"
            titleColor='#318de4'
            reverseLayout={false} // Default layout
          />

          {/* Section 2: Health Supplements (Image Right, Text Left - Alternating) */}
          <ProductSection
            title="Health Supplements"
            description="A curated selection of health supplements designed to support overall vitality and wellness. Products like Alfalfa Concentrate, Takara Patch, Nano Calcium, and 6-in-1 Coffee are formulated to enhance energy levels, improve circulation, and strengthen the body."
            images={healthImages}
            titleColor='#63b32e'
            reverseLayout={true} // Reverse layout
          />

          {/* Section 3: Wellness Devices (Image Left, Text Right) */}
          <ProductSection
            title="Wellness Devices"
            description="Innovative tools such as the iTeraCare, which integrates terahertz, quantum, and optical technologies for body purification and metabolism enhancement."
            extraInfo="We also offer complementary solutions like Kangen Water ionizers and ionizer pendants/oxygen-generating devices to combat environmental stressors and electromagnetic radiation, promoting a balanced physical state."
            images={wellnessImages}
            titleColor='#63b32e'
            reverseLayout={false} // Default layout
          />
        </div>
      </div>
    </div>
  );
};

export default NewProduct;