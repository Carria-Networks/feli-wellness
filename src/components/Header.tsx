

// import { useState, useEffect } from 'react'

// import { Link } from 'react-scroll'

// import logoBg from '../assets/logo3-removebg-preview.png'
// import ScrolledLogoBg from '../assets/logo3.png'





// const Header = () => {

//   const [scrolled, setScrolled] = useState(false)


//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 10)
//     }

//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   return (
//     <header className={`fixed w-full z-20 top-0 start-0 transition-all duration-300 ${scrolled ? 'bg-primary shadow-md' : 'bg-transparent'}`}>
// <div className="w-7xl mx-auto flex justify-between items-center h-[85px] ">
// <div>
//   <img className='h-[85px]' src={scrolled? ScrolledLogoBg : logoBg} alt="" />
// </div>
// <ul className='flex text-white gap-8'>

    
//     <li>Home</li>
//     <li>
//   <Link activeClass="active" to="products"spy={true} > Products</Link>
//     </li>
//     <li>
//   <Link activeClass="active" to="partners"spy={true} > Partners</Link>
//     </li>
//     <li>
//   <Link activeClass="active" to="about"spy={true} >About Us</Link>
//     </li>



// </ul>
// <div>
// <li>
//   <Link activeClass="active" to="contact"spy={true} > 
  
//   <button className='bg-orange-400 px-5 py-2 text-white rounded-full'>Contact Us</button>
//   </Link>
//     </li>
// </div>
// </div>

//     </header>
//   )
// }
// export default Header
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import logoBg from "../assets/logo3-removebg-preview.png";
import ScrolledLogoBg from "../assets/greenBgLogo.png";



const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        scrolled ? "bg-primary shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-[70px] px-4 md:px-8 ">
        {/* Logo */}
        <img
          className="  h-[70px] w-[100px] cursor-pointer hidden md:block"
          src={scrolled ? ScrolledLogoBg : logoBg}
          alt="Logo"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-white gap-8 font-medium">
          {["home", "products", "partners", "about"].map((item) => (
            <li key={item} className="relative group cursor-pointer">
              <Link
                to={item}
                spy={true}
                smooth={true}
                duration={500}
                className="transition-colors duration-200"
              >
                {item === "about"
                  ? "About Us"
                  : item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <Link to="contact" spy={true} smooth={true}>
            <button className="bg-orange-400 px-5 py-2 text-white rounded-full hover:bg-orange-500 transition-colors">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden fixed top-[85px] left-0 w-full bg-primary text-white transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-start px-6 py-4 space-y-4 font-medium">
          {["home", "products", "partners", "about", "contact"].map((item) => (
            <li key={item} className="w-full">
              <Link
                to={item}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="block w-full pb-2 border-b border-white/20 hover:text-orange-400 transition-colors"
              >
                {item === "about"
                  ? "About Us"
                  : item === "contact"
                  ? "Contact Us"
                  : item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
