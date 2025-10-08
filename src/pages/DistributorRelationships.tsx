


import distributor from "../assets/20.jpg"

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

const DistributorRelationships = () => {
  return (
    <div className="bg-gray-100 py-10"> 
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
 
<div className="my-5">
            <a href="" className="p-2 font-bold rounded bg-gray-200 ">
            Official Distributor Relationships
            </a>

</div>

        {content.map((paragraph) => (
          <p key={paragraph.id} className="mb-5 font-light text-gray-700 sm:text-lg">
            {paragraph.content}
          </p>
        ))}
      </div>
      <div>
        <img className="h-full object-cover rounded" src={distributor} alt="" />
      </div>


    </div>

    </div>

  )
}


export default DistributorRelationships