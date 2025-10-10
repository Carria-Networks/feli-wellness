// kangen water images
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
// health supplements images
import himage1 from "../assets/healthysupllements/1.png"
import himage2 from "../assets/healthysupllements/2.png"
import himage3 from "../assets/healthysupllements/3.png"
import himage4 from "../assets/healthysupllements/4.png"
import himage5 from "../assets/healthysupllements/5.png"
import himage6 from "../assets/healthysupllements/6.png"
import himage7 from "../assets/healthysupllements/7.png"
import himage8 from "../assets/healthysupllements/8.png"
// wellness devices images
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
        <p className='text-orange-400 font-bold text-md'>Kangen Water</p>
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
        <p className='text-orange-400 font-bold text-md'>Health Supplements</p>
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
        <p className='text-orange-400 font-bold text-md'>Wellness Devices</p>
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

