import { ArrowUp } from 'lucide-react';
import ScrolledLogoBg from "../assets/greenBgLogo.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="bg-primary py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-24 w-24">
              <img src={ScrolledLogoBg} alt="" />
            </div>
          </div>

          {/* Copyright */}
          <div className="text-white text-center">
            <p className="font-medium">
              <span className="text-sm sm:text-center">© {getCurrentYear()} <a href="/" className="hover:underline">Feli Wellness</a>. All Rights Reserved.
              </span>
            </p>
            <p className="text-sm mt-2">
              <span className="text-gray-200 sm:text-center">
                Designed and developed by{" "}
                <a 
                  href="https://carrianetworks.com" 
                  className="font-medium text-white hover:text-gray-200 transition-colors duration-200 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Carria Networks
                </a>
              </span>
            </p>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="bg-white cursor-pointer text-green-600 p-3 rounded-full shadow-lg hover:bg-green-50 transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
}