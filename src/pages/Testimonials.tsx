

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight,  Star, Quote, CircleUser } from 'lucide-react';
const Testimonials = () => {
      const memories = [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
          alt: "Mountain Lake",
          title: "Summer Adventure"
        },
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
          alt: "Ocean Sunset",
          title: "Beach Memories"
        },
        {
          id: 3,
          src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
          alt: "Forest Path",
          title: "Nature Walk"
        },
        {
          id: 4,
          src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&h=600&fit=crop",
          alt: "City Lights",
          title: "City Adventure"
        },
        {
          id: 5,
          src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
          alt: "Desert Landscape",
          title: "Desert Journey"
        }
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const [isPlaying] = useState(true);
    
      // Get slides per view based on screen size
      const getSlidesPerView = () => {
        if (typeof window === 'undefined') return 4;
        if (window.innerWidth < 640) return 1; // sm
        if (window.innerWidth < 768) return 1; // md
        if (window.innerWidth < 1024) return 1; // lg
        return 1; // xl and above
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
            const maxIndex = memories.length - slidesPerView;
            return prevIndex >= maxIndex ? 0 : prevIndex + 1;
          });
        }, 3000);
    
        return () => clearInterval(interval);
      }, [isPlaying, memories.length, slidesPerView]);
    
      const goToNext = () => {
        const maxIndex = memories.length - slidesPerView;
        setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1);
      };
    
      const goToPrevious = () => {
        const maxIndex = memories.length - slidesPerView;
        setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
      };
    

  return (

          <div className='max-w-7xl mx-auto py-16'>
            <div className='space-y-3  mb-7'>
            <p>
                <a className='bg-gray-200 rounded p-2 font-bold' >TESTIMONIALS</a>
            </p>
            <h1 className='text-md '>What Our Clients Say</h1>

            </div>
            <div className="grid px-1 md:grid-cols-2 gap-2 items-center">
            <div className="relative h-96 overflow-hidden">
          {/* Images Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
          >
            {memories.map((memory) => (
              <div
                key={memory.id}
                className="h-full flex-shrink-0 relative p-7"
                style={{ width: `${100 / slidesPerView}%` }}
              >
<div className='flex justify-between '>
    <div className='flex space-x-2 bg-[#fdf6d1] text-yellow-400  p-1 rounded'>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
    </div>
    <div className='text-yellow-400'>
        <Quote />
    </div>
</div>

<p className='py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa amet doloribus quas tempora cumque earum deleniti inventore quia dolores corporis! Lorem ipsum dolor sit amet. </p>
     <div className='flex items-center space-x-3 '>
      <CircleUser size={50} className='bg-gray-200 p-2 rounded-full'/>
      <div>
        <p className='font-bold'>John Doe</p>
        <p className='text-sm text-gray-500'>CEO, Company</p>
      </div>

     </div>
  
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-3 bottom-10 transform -translate-y-1/2 bg-mainBrown text-white p-3 rounded-full  transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute left-20 bottom-10 transform -translate-y-1/2 bg-mainBrown text-white p-3 rounded-full  transition-all duration-200 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>


        </div>

                <div>
                    <img className='rounded' src="https://t4.ftcdn.net/jpg/14/40/39/31/360_F_1440393156_FNg1xu8BhCSVJPvBx8CTbbsMWAGh2gVL.jpg" alt="" />
                    
                    </div>
            </div>



          </div>


  )
}

export default Testimonials