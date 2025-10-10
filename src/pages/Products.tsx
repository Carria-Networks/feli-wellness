


// import  { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Pause, Play, BadgeCheck } from 'lucide-react';

// const Products = () => {


//     const products = [
//         {
//             name: 'Kangen Water',
//             description: 'Change your water, Change your life',
//             usecases: [
//                 "100+ practical household & wellness uses",
//                 "Family hydration — clean mineral-rich drinking water",
//                 "Natural home cleaning — chemical-free cleaning solutions",
//                 "Skin care — supports toned, firmer skin",
//             ],
//             cta: "Request Demo"
//         },
//         {
//             name: 'Premium Health Supplements',
//             description: 'Science-informed, natural ingredients',
//             usecases: [
//                 "Immune support",
//                 "Energy & stamina",
//                 "Clinically-informed blends",
//             ],
//             cta: "Explore Products"
//         },
//         {
//             name: 'Advanced Wellness Devices',
//             description: 'Everyday tech that supports your health',
//             usecases: [
//                 "Wearables & trackers",
//                 "Home therapy devices",
//                 "Easy-to-use interfaces",
//             ],
//             cta: "Explore Devices"
//         },
//         // Kept a duplicate to ensure the carousel logic is tested with enough items
//         {
//             name: 'Proactive Health Monitoring',
//             description: 'Cutting-edge diagnostics for better well-being.',
//             usecases: [
//                 "Personalized wellness reports",
//                 "Early detection support",
//                 "Integrates with mobile apps",
//             ],
//             cta: "Learn More"
//         },
//     ];
//     // --- End Data ---

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isPlaying, setIsPlaying] = useState(false);

//     // Get slides per view based on screen size
//     const getSlidesPerView = () => {
//         if (typeof window === 'undefined') return 3;
//         if (window.innerWidth < 640) return 1;    // Mobile (sm)
//         if (window.innerWidth < 1024) return 2;   // Tablet (md/lg)
//         return 3;                                // Desktop (xl and above)
//     };

//     const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView);

//     // Handle window resize
//     useEffect(() => {
//         const handleResize = () => {
//             setSlidesPerView(getSlidesPerView());
//         };

//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     // Auto-scroll functionality
//     useEffect(() => {
//         if (!isPlaying) return;

//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => {
//                 // Use `products` here instead of `memories`
//                 const maxIndex = products.length - slidesPerView; 
//                 // Handle the case where maxIndex is negative or zero (e.g., when not enough items)
//                 if (maxIndex <= 0) return 0; 
//                 return prevIndex >= maxIndex ? 0 : prevIndex + 1;
//             });
//         }, 3000);

//         return () => clearInterval(interval);
//     }, [isPlaying, products.length, slidesPerView]); // Changed dependency to products.length

//     const goToNext = () => {
//         const maxIndex = products.length - slidesPerView;
//         if (maxIndex <= 0) return; // Prevent movement if not enough slides
//         setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1);
//     };

//     const goToPrevious = () => {
//         const maxIndex = products.length - slidesPerView;
//         if (maxIndex <= 0) return; // Prevent movement if not enough slides
//         setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
//     };

//     const togglePlayPause = () => {
//         setIsPlaying(!isPlaying);
//     };

//     // Calculate the percentage width for a single card, including the gap
//     // We use a CSS variable `--card-width` to make the calculation cleaner
//     const cardWidthPercentage = 100 / slidesPerView;

//     // The transform calculation needs to account for the gap between slides
//     // The gap is set to 1.25rem (gap-5 in tailwind, which is 20px)
//     // The formula is: current position * (single card width + gap)
//     // In CSS: translateX(-(currentIndex * (100% / slidesPerView + gap)))

//     // A simpler approach is to use the calc() function in CSS if possible, 
//     // but here we'll stick to dynamic JS for the main movement and use the Tailwind gap
//     // The key is to include the margin/gap in the width calculation

//     const transformValue = `translateX(calc(-${currentIndex * cardWidthPercentage}% - ${currentIndex * 1.25}rem))`; // 1.25rem = gap-5

//     return (
//         <div id="products" className="md:py-20 py-10 bg-gray-100">
//             {/* Added horizontal padding to the main container */}
//             <div className="relative max-w-7xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-8"> 
//                 {/* Header */}
//                 <div className="space-y-4 mb-8">
//                     {/* <p className="text-start">
//                         <span className="p-2 font-bold rounded bg-gray-200 inline-block text-sm">
//                             Innovative Wellness Products
//                         </span>
//                     </p> */}
//                     <h2 className="text-2xl font-bold text-gray-800">
//                     Innovative Wellness Products
//                     </h2>
//                     <p className="text-md text-gray-600 max-w-3xl">
//                     Feli Wellness offers high-quality health supplements and advanced wellness devices designed to support detoxification, immunity, energy boosting, and preventive health.
//                     </p>
//                 </div>

//                 {/* Main Carousel Container */}
//                 <div className="relative">
//                     {/* Images Container - Made h-auto for flexible height */}
//                     <div
//                         className="flex transition-transform duration-500 ease-in-out gap-5 py-4"
//                         style={{ transform: transformValue }} 
//                     >
//                         {products.map((product, index) => (
//                             // **Key Responsiveness Change:** // Using flex-shrink-0 and explicit width calculation
//                             <div 
//                                 key={index} 
//                                 className="flex-shrink-0 bg-white p-6 sm:p-8 space-y-6 shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl"
//                                 style={{ width: `calc(${cardWidthPercentage}% - 1.25rem)` }} // Calc: Card width minus the gap
//                             >
//                                 <h3 className='font-extrabold text-xl text-orange-500'>{product.name}</h3>
//                                 <p className="text-gray-500 text-sm">{product.description}</p>
                                
//                                 <ul className="space-y-3 text-gray-700">
//                                     {product.usecases.map((usecaseItem, usecaseIndex) => (
//                                         <li key={usecaseIndex} className='flex items-start text-sm'>
//                                             <BadgeCheck className='text-orange-400 mr-2 flex-shrink-0 mt-1' size={16} />
//                                             <span>{usecaseItem}</span>
//                                         </li>
//                                     ))}
//                                 </ul>
                                
//                                 <button className='flex items-center justify-center px-6 py-3 bg-orange-400 hover:bg-orange-500 rounded-full text-white font-semibold shadow-md transition-colors duration-200'>
//                                     {product.cta}
//                                 </button>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Navigation Arrows - Adjusted positioning and visibility */}
//                     {/* Hide arrows on mobile when only 1 slide is shown */}
//                     {slidesPerView > 1 && (
//                         <>
//                             <button
//                                 onClick={goToPrevious}
//                                 className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 transition-all duration-200 hover:bg-black/80"
//                             >
//                                 <ChevronLeft size={24} />
//                             </button>

//                             <button
//                                 onClick={goToNext}
//                                 className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 transition-all duration-200 hover:bg-black/80"
//                             >
//                                 <ChevronRight size={24} />
//                             </button>
//                         </>
//                     )}

//                     {/* Play/Pause Button - Adjusted positioning */}
//                     <button
//                         onClick={togglePlayPause}
//                         className="absolute top-0 right-0 sm:right-6 bg-black/50 text-white p-2 rounded-full transition-all duration-200 hover:bg-black/80"
//                     >
//                         {isPlaying ? <Pause size={20} /> : <Play size={20} />}
//                     </button>

//                     {/* Simple Mobile Navigation Dots (Optional) - Better for 1-per-view mode */}
//                     {slidesPerView === 1 && (
//                         <div className="flex justify-center mt-4 space-x-2">
//                             {products.map((_, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() => setCurrentIndex(index)}
//                                     className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//                                         index === currentIndex ? 'bg-orange-400' : 'bg-gray-300 hover:bg-gray-400'
//                                     }`}
//                                     aria-label={`Go to slide ${index + 1}`}
//                                 />
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Products;

// import React from 'react';








import image1 from "../assets/kangen/1.png"
import image2 from "../assets/kangen/2.png"
import image3 from "../assets/kangen/3.png"
import image4 from "../assets/kangen/4.png"
import image5 from "../assets/kangen/5.png"
import image6 from "../assets/kangen/6.png"
import image7 from "../assets/kangen/7.png"
import image8 from "../assets/kangen/8.png"
import image9 from "../assets/kangen/9.png"
import image10 from "../assets/kangen/10.png"

import himage1 from "../assets/healthysupllements/1.png"
import himage2 from "../assets/healthysupllements/2.png"
import himage3 from "../assets/healthysupllements/3.png"
import himage4 from "../assets/healthysupllements/4.png"
import himage5 from "../assets/healthysupllements/5.png"
import himage6 from "../assets/healthysupllements/6.png"
import himage7 from "../assets/healthysupllements/7.png"
import himage8 from "../assets/healthysupllements/8.png"

import wimage1 from "../assets/wellnessdevice/1.png"
import wimage2 from "../assets/wellnessdevice/2.png"
import wimage3 from "../assets/wellnessdevice/3.png"
import wimage4 from "../assets/wellnessdevice/4.png"
import wimage5 from "../assets/wellnessdevice/5.png"
import wimage6 from "../assets/wellnessdevice/6.png"
import wimage7 from "../assets/wellnessdevice/7.png"
import wimage8 from "../assets/wellnessdevice/8.png"














const Products = () => {
const kangenImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
const healthImages = [himage1, himage2, himage3, himage4, himage5, himage6, himage7, himage8];
const wellnessImages = [wimage1, wimage2, wimage3, wimage4, wimage5, wimage6, wimage7, wimage8];




    return (
        <div id="products" className="md:py-20 py-10 bg-gray-100">
            {/* Added horizontal padding to the main container */}
            <div className="relative max-w-7xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-8"> 
                {/* Header */}
                <div className="space-y-4 mb-8">
                    {/* <p className="text-start">
                        <span className="p-2 font-bold rounded bg-gray-200 inline-block text-sm">
                            Innovative Wellness Products
                        </span>
                    </p> */}
                    <h2 className="text-2xl font-bold text-gray-800">
                    Innovative Wellness Products
                    </h2>
                    <p className="text-md text-gray-600 max-w-3xl">
                    Feli Wellness offers high-quality health supplements and advanced wellness devices designed to support detoxification, immunity, energy boosting, and preventive health.
                    </p>
                </div>

<section className="space-y-30" >
{/* kangen water */}
<div>
    <div className='space-y-3'>
        <p className='text-orange-400 font-bold text-lg'>Kangen Water</p>
        <p>Kangen Water is alkaline water produced through a process of electrolysis using an innovative water ionization system developed by Enagic</p>
        <p>This process separates ordinary tap water into alkaline and acidic components, resulting in water rich in antioxidants and negative ions that help neutralize free radicals in the body. Kangen Water is often valued for its potential to support hydration, detoxification, and overall well-being by helping to balance the body’s pH levels</p>
        <p>Many users also appreciate its smooth taste and versatility for drinking, cooking, and even skincare.</p>
    </div>
    <div>
        <div className="overflow-hidden mt-6">
  <div className="flex gap-4 animate-slide">
    {kangenImages.concat(kangenImages).map((image, index) => (
      <div key={index} className="bg-white p-2 rounded-lg shadow-lg min-w-[250px]">
        <img
          src={image}
          alt={`Kangen Water ${index + 1}`}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>
    ))}
  </div>
</div>
</div>

</div>

{/* Health supplements */}
<div>
    <div className='space-y-3'>
        <p className='text-orange-400 font-bold text-lg'>Health Supplements</p>
  <p>A curated selection of health supplements designed to support overall vitality and wellness. Products such as Alfalfa Concentrate, Takara Patch, Nano Calcium, 6-in-1 Coffee, and Katuaba Plus are formulated to enhance energy levels, improve circulation, strengthen the body, and promote better physical performance and endurance.</p>
    </div>
    <div>
        <div className="overflow-hidden mt-6">
  <div className="flex gap-4 animate-slide">
    {healthImages.concat(kangenImages).map((image, index) => (
      <div key={index} className="bg-white p-2 rounded-lg shadow-lg min-w-[250px]">
        <img
          src={image}
          alt={`Kangen Water ${index + 1}`}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>
    ))}
  </div>
</div>
</div>

</div> 
{/* Wellness devices */}
<div>
    <div className='space-y-3'>
        <p className='text-orange-400 font-bold text-lg'>Wellness Devices</p>
        <p>Innovative tools such as the iTeraCare, which integrates terahertz, quantum, and optical technologies for body purification and metabolism enhancement</p>
        <p>Complementary offerings include Kangen Water ionizers for producing antioxidant-rich water, alongside ionizer pendants and oxygen-generating devices to combat environmental stressors like PM2.5 particles and electromagnetic radiation.</p>
    </div>
    <div>
        <div className="overflow-hidden mt-6">
  <div className="flex gap-4 animate-slide">
    {wellnessImages.concat(kangenImages).map((image, index) => (
      <div key={index} className="bg-white p-2 rounded-lg shadow-lg min-w-[250px]">
        <img
          src={image}
          alt={`Kangen Water ${index + 1}`}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>
    ))}
  </div>
</div>
</div>

</div>



    </section>
            
            </div>
        </div>
    );
};

export default Products;

