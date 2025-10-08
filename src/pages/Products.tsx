


import  { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, BadgeCheck } from 'lucide-react';

const Products = () => {


    const products = [
        {
            name: 'Kangen Water',
            description: 'Change your water, Change your life',
            usecases: [
                "100+ practical household & wellness uses",
                "Family hydration — clean mineral-rich drinking water",
                "Natural home cleaning — chemical-free cleaning solutions",
                "Skin care — supports toned, firmer skin",
            ],
            cta: "Request Demo"
        },
        {
            name: 'Premium Health Supplements',
            description: 'Science-informed, natural ingredients',
            usecases: [
                "Immune support",
                "Energy & stamina",
                "Clinically-informed blends",
            ],
            cta: "Explore Products"
        },
        {
            name: 'Advanced Wellness Devices',
            description: 'Everyday tech that supports your health',
            usecases: [
                "Wearables & trackers",
                "Home therapy devices",
                "Easy-to-use interfaces",
            ],
            cta: "Explore Devices"
        },
        // Kept a duplicate to ensure the carousel logic is tested with enough items
        {
            name: 'Proactive Health Monitoring',
            description: 'Cutting-edge diagnostics for better well-being.',
            usecases: [
                "Personalized wellness reports",
                "Early detection support",
                "Integrates with mobile apps",
            ],
            cta: "Learn More"
        },
    ];
    // --- End Data ---

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    // Get slides per view based on screen size
    const getSlidesPerView = () => {
        if (typeof window === 'undefined') return 3;
        if (window.innerWidth < 640) return 1;    // Mobile (sm)
        if (window.innerWidth < 1024) return 2;   // Tablet (md/lg)
        return 3;                                // Desktop (xl and above)
    };

    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(getSlidesPerView());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-scroll functionality
    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                // Use `products` here instead of `memories`
                const maxIndex = products.length - slidesPerView; 
                // Handle the case where maxIndex is negative or zero (e.g., when not enough items)
                if (maxIndex <= 0) return 0; 
                return prevIndex >= maxIndex ? 0 : prevIndex + 1;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [isPlaying, products.length, slidesPerView]); // Changed dependency to products.length

    const goToNext = () => {
        const maxIndex = products.length - slidesPerView;
        if (maxIndex <= 0) return; // Prevent movement if not enough slides
        setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1);
    };

    const goToPrevious = () => {
        const maxIndex = products.length - slidesPerView;
        if (maxIndex <= 0) return; // Prevent movement if not enough slides
        setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    // Calculate the percentage width for a single card, including the gap
    // We use a CSS variable `--card-width` to make the calculation cleaner
    const cardWidthPercentage = 100 / slidesPerView;

    // The transform calculation needs to account for the gap between slides
    // The gap is set to 1.25rem (gap-5 in tailwind, which is 20px)
    // The formula is: current position * (single card width + gap)
    // In CSS: translateX(-(currentIndex * (100% / slidesPerView + gap)))

    // A simpler approach is to use the calc() function in CSS if possible, 
    // but here we'll stick to dynamic JS for the main movement and use the Tailwind gap
    // The key is to include the margin/gap in the width calculation

    const transformValue = `translateX(calc(-${currentIndex * cardWidthPercentage}% - ${currentIndex * 1.25}rem))`; // 1.25rem = gap-5

    return (
        <div id="products" className="md:py-20 py-10 bg-gray-100">
            {/* Added horizontal padding to the main container */}
            <div className="relative max-w-7xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-8"> 
                {/* Header */}
                <div className="space-y-4 mb-8">
                    <p className="text-start">
                        <span className="p-2 font-bold rounded bg-gray-200 inline-block text-sm">
                            Innovative Wellness Products
                        </span>
                    </p>
                    <h2 className="text-2xl font-bold text-gray-800">
                        Curated Products for a Healthier You
                    </h2>
                    <p className="text-md text-gray-600 max-w-3xl">
                        We offer a curated range of products designed to support better health — from
                        Kangen water to high-quality health supplements and advanced devices designed to
                        support a healthier lifestyle.
                    </p>
                </div>

                {/* Main Carousel Container */}
                <div className="relative">
                    {/* Images Container - Made h-auto for flexible height */}
                    <div
                        className="flex transition-transform duration-500 ease-in-out gap-5 py-4"
                        style={{ transform: transformValue }} 
                    >
                        {products.map((product, index) => (
                            // **Key Responsiveness Change:** // Using flex-shrink-0 and explicit width calculation
                            <div 
                                key={index} 
                                className="flex-shrink-0 bg-white p-6 sm:p-8 space-y-6 shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl"
                                style={{ width: `calc(${cardWidthPercentage}% - 1.25rem)` }} // Calc: Card width minus the gap
                            >
                                <h3 className='font-extrabold text-xl text-orange-500'>{product.name}</h3>
                                <p className="text-gray-500 text-sm">{product.description}</p>
                                
                                <ul className="space-y-3 text-gray-700">
                                    {product.usecases.map((usecaseItem, usecaseIndex) => (
                                        <li key={usecaseIndex} className='flex items-start text-sm'>
                                            <BadgeCheck className='text-orange-400 mr-2 flex-shrink-0 mt-1' size={16} />
                                            <span>{usecaseItem}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <button className='flex items-center justify-center px-6 py-3 bg-orange-400 hover:bg-orange-500 rounded-full text-white font-semibold shadow-md transition-colors duration-200'>
                                    {product.cta}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows - Adjusted positioning and visibility */}
                    {/* Hide arrows on mobile when only 1 slide is shown */}
                    {slidesPerView > 1 && (
                        <>
                            <button
                                onClick={goToPrevious}
                                className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 transition-all duration-200 hover:bg-black/80"
                            >
                                <ChevronLeft size={24} />
                            </button>

                            <button
                                onClick={goToNext}
                                className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 transition-all duration-200 hover:bg-black/80"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </>
                    )}

                    {/* Play/Pause Button - Adjusted positioning */}
                    <button
                        onClick={togglePlayPause}
                        className="absolute top-0 right-0 sm:right-6 bg-black/50 text-white p-2 rounded-full transition-all duration-200 hover:bg-black/80"
                    >
                        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>

                    {/* Simple Mobile Navigation Dots (Optional) - Better for 1-per-view mode */}
                    {slidesPerView === 1 && (
                        <div className="flex justify-center mt-4 space-x-2">
                            {products.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                        index === currentIndex ? 'bg-orange-400' : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;