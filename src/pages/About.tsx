const content = [
  {
    id: 2,
    content: "Feli Wellness proudly serves as an independent distributor for Prife International and K2U Africa — two global leaders in the wellness and lifestyle industry. Through these partnerships, we bring innovative, science-backed products to local, regional markets and international markets, empowering individuals and families to live healthier and more balanced lives.",
  },
  {
    id: 3,
    content: "As part of our commitment, Feli Wellness also distributes Kangen Water — a revolutionary ionized alkaline water known for its over 100 uses, including hydration, detoxification, and home wellness applications.",
  },
  {
    id: 4,
    content: "At K2U Africa, the focus is on high-quality, highly effective health products guided by the philosophy of sustainable management and continuous progress. Meanwhile, Prife International strives to create health, beauty, and wealth for everyone through cutting-edge technology, a rewarding business model, and a shared vision of human advancement.",
  },
  {
    id: 5,
    content: "Feli Wellness bridges these world-class innovations with local communities — offering education, installation, after-sales support, and distribution while maintaining our independence and commitment to integrity, authenticity, and client satisfaction.",
  },
]

const About = () => {
  return (
    <section className="text-white container mx-auto p-4 mt-8">
      <h2 className="text-center mb-4 text-4xl font-extrabold tracking-tight xl:text-6xl">Official Distributor Relationships</h2>
      {
        content.map((paragraph) => (
          <p key={paragraph.id} className="mb-6 text-justify text-lg">
            {paragraph.content}
          </p>
        ))
      }
    </section>
  )
}


export default About