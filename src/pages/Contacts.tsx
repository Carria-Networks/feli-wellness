import { Mail, MapPin, Phone } from "lucide-react"



const Contacts = () => {
  return (
    <section
      id="contact"
      className="p-8 "
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">

            <h2 className="text-2xl font-bold">
              Contact Information
            </h2>
            <p className="">For questions about products, demos, or partnership opportunities, please reach out — we`re here to help.</p>

            <div className="mt-6 rounded-lg py-6">
              <h3 className="text-lg font-semibold mb-3">Contact details</h3>
              <ul className="space-y-2 ">
                <li>
                  <Phone className="inline-block mr-2 text-orange-400" size={16} />
                  <a href="tel:+254723456789" className=" hover:underline">+254768900700</a>
                </li>
                <li>
                  <Mail className="inline-block mr-2 text-orange-400" size={16} />
                  <a href="mailto:info@feliwellness.com" className="hover:underline">info@feliwellness.com</a>
                </li>
                <li>
                  <MapPin className="inline-block mr-2 text-orange-400" size={16} />
                  <span>Nairobi, Kenya</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
              <h2 className="mb-6 text-2xl font-extrabold text-gray-800">Get in Touch</h2>

              <form action="#" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-700">Full name</label>
                    <input
                      type="text"
                      id="fullName"
                      className="block w-full p-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg text-sm transition-colors duration-200 ease-in-out hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="block w-full p-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg text-sm transition-colors duration-200 ease-in-out hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
                      placeholder="+254 7xx xxx xxx"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your email</label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full p-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg text-sm transition-colors duration-200 ease-in-out hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
                    placeholder="Your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Your message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="block w-full p-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg text-sm transition-colors duration-200 ease-in-out hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
                    placeholder="How can we help?"
                  ></textarea>
                </div>

                <button type="submit" className="py-3 px-6 text-sm font-medium text-center rounded-4xl bg-orange-400 text-white focus:ring-4 focus:outline-none focus:ring-orange-200 hover:bg-orange-500 transition-colors duration-200">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Contacts
