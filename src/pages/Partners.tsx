import { Award, Rocket, Target, Users } from "lucide-react"
import enagicLogo from '../assets/enagic-logo.png'
import prife from '../assets/prife-logo.jpeg'


const Partners = () => {

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Strategic Growth',
      description: 'Access new markets and scale your business with our extensive network and resources.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative Support',
      description: 'Work closely with our team to develop solutions that benefit both our customers.'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'Stay ahead with early access to new features, tools, and market insights.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Recognition & Rewards',
      description: 'Gain visibility through co-marketing opportunities and partner showcases.'
    }
  ]
  return (
<section id="partners">
  <div  className="bg-primary ">
  <div className="max-w-7xl mx-auto py-16 space-y-6" >
<div className="flex justify-between items-center mb-10">
<p>
                <a className=' text-gray-100 font-bold text-lg' >PARTNERS</a>
                <p className="text-md">Why partner with us</p>
            </p>
            <button className="border md:px-6 px-2 py-2 rounded-full border-white text-white cursor-pointer">BECOME A PARTNER</button>

</div>
      

            <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className=" backdrop-blur-lg rounded-2xl p-6 transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <div className="text-orange-400 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
              <p className="text-purple-200">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
      <div className="w-7xl mx-auto md:flex  md:flex-col justify-center items-center py-16">
        <p>Our Trusted Partners</p>
        <div className="grid md:grid-cols-2">
          <div>
            <img className="h-44 m-4" src={enagicLogo} alt="airbnb logo" />
          </div>
          <div>
            <img className="h-44 m-4" src={prife} alt="netflix logo" />
          </div>
        </div>


      </div>
</section>
  )
}

export default Partners