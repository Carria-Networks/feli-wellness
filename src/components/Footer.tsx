
const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="w-full rounded-none shadow-sm ">
      <div className="mx-auto max-w-7xl  p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-black sm:text-center">© {getCurrentYear()} <a href="/" className="hover:underline">Feli Wellness</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black sm:mt-0">
          <li>
            <a href="#home" className="hover:underline me-4 md:me-6">Home</a>
          </li>
          <li>
            <a href="#products" className="hover:underline me-4 md:me-6">Products</a>
          </li>
          <li>
            <a href="#partners" className="hover:underline me-4 md:me-6">Partners</a>
          </li>
          <li>
            <a href="#about" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#contacts" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      <hr className="my-4 border-gray-800 sm:mx-auto" />
      <div className="w-full mx-auto max-w-screen-xl p-2 text-center">
        <span className="text-sm text-black sm:text-center">Developed by <a href="https://carrianetworks.com" className="underline  text-blue-500">Carria Networks</a></span>
      </div>
    </footer>
  )
}

export default Footer
