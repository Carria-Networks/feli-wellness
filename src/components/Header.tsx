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
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${scrolled ? "bg-primary shadow-md" : "bg-transparent"
        }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-[70px] px-6 md:px-8">
        {/* Logo */}
        <a href="#home" className="outline-none focus:ring-2 focus:ring-orange-400 rounded flex items-center">
          <img
            className="h-[50px] w-[80px] md:h-[70px] md:w-[100px] cursor-pointer object-contain transition-opacity duration-300"
            src={scrolled ? ScrolledLogoBg : logoBg}
            alt="Feli Wellness Logo"
            width="100"
            height="70"
            loading="eager"
            onLoad={(e) => e.currentTarget.style.opacity = '1'}
            style={{ opacity: '0' }}
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <div className="flex text-white gap-8 font-medium">
            {["home", "products", "partners", "about"].map((item) => (
              <div key={item} className="relative group">
                <Link
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="transition-colors duration-200 outline-none rounded px-2 py-1"
                  tabIndex={0}
                  aria-label={item === "about" ? "About Us" : item.charAt(0).toUpperCase() + item.slice(1)}
                >
                  {item === "about"
                    ? "About Us"
                    : item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </div>
            ))}
          </div>
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="contact"
            spy={true}
            smooth={true}
          >
            <button
              className="bg-orange-400 px-5 py-2 text-white rounded-full hover:bg-orange-500 transition-colors focus:outline-none"
              aria-label="Contact Us"
            >
              Contact U
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <nav
        id="mobile-menu"
        className={`md:hidden fixed top-[70px] left-0 w-full bg-primary text-white transition-all duration-300 transform ${menuOpen ? "translate-y-0 opacity-100 shadow-lg" : "translate-y-[-10px] opacity-0 pointer-events-none"
          }`}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col items-start px-6 py-4 space-y-4 font-medium">
          {["home", "products", "partners", "about", "contact"].map((item) => {
            let displayName = item.charAt(0).toUpperCase() + item.slice(1);
            if (item === "about") displayName = "About Us";
            if (item === "contact") displayName = "Contact Us";

            return (
              <div key={item} className="w-full">
                <Link
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full pb-2 border-b border-white/20 active:text-orange-400 transition-colors relative overflow-hidden"
                >
                  <span className="relative z-10">{displayName}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
