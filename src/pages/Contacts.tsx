import { Mail, MapPin, Phone } from "lucide-react"

const Contacts = () => {

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.857005758215!2d36.841818811914095!3d-1.2577738355931594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f16ecfb93861b%3A0x25442ca3392f343!2sWambui%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1761224210525!5m2!1sen!2ske";
  return (
    <section
      id="contact"
      className="bg-gray-50 py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-lg text-gray-600">
            For questions about products, demos, or partnership opportunities, please reach out — we're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div className="space-y-10 p-4">

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Direct Contact</h3>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <Phone className="flex-shrink-0 mr-4 text-orange-500 mt-1" size={24} />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Call Us</p>
                    <a href="tel:+254768900700" className="text-lg font-semibold text-gray-900 hover:text-orange-500 transition-colors">+254 768 900 700</a>
                  </div>
                </li>

                <li className="flex items-start">
                  <Mail className="flex-shrink-0 mr-4 text-orange-500 mt-1" size={24} />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email Address</p>
                    <a href="mailto:info@feliwellness.com" className="text-lg font-semibold text-gray-900 hover:text-orange-500 transition-colors">info@feliwellness.com</a>
                  </div>
                </li>

                <li className="flex items-start">
                  <MapPin className="flex-shrink-0 mr-4 text-orange-500 mt-1" size={24} />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Location</p>
                    <span className="text-lg font-semibold text-gray-900">Nairobi, Kenya</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Find Our Office</h3>
              <div className="h-64 w-full overflow-hidden rounded-xl shadow-lg border border-gray-300">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                ></iframe>
              </div>
            </div>

          </div>

          <div className=''>
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 border border-gray-100">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">Send Us a Message</h2>

              <form action="#" className="space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-700">Full name</label>
                    <input
                      type="text"
                      id="fullName"
                      className="block w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500 transition-all duration-200"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="block w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500 transition-all duration-200"
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
                    className="block w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500 transition-all duration-200"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Your message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="block w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500 transition-all duration-200"
                    placeholder="How can we help you achieve wellness?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 text-base font-semibold text-center rounded-lg bg-orange-500 text-white shadow-lg shadow-orange-200/50 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-200 transition-all duration-300"
                >
                  Send Message
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