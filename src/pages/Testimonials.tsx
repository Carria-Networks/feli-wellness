import { partnerTestimonialsBackground } from "../assets"

const testimonials = [
  {
    client: "Grace N.",
    feedback: "Since switching to Kangen Water our household energy and digestion improved significantly. The kids drink more water now!"
  },
  {
    client: "Daniel M.",
    feedback: "Feli's business program helped me start earning extra income and learn real business skills."
  },
  {
    client: "Amina O.",
    feedback: "The supplements are high quality and I can feel a difference in my stamina"
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="p-8 text-black "
      style={{
        background: `url(${partnerTestimonialsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      <h2 className="text-3xl font-bold mb-6 text-center">What Our Customers & Partners Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.client} className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">"{testimonial.feedback}"</p>
            <h3 className="text-xl font-semibold">- {testimonial.client}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials