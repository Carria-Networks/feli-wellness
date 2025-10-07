import { Button } from "@headlessui/react"

import { productsBackground } from "../assets"


type Product = {
  name: string
  description: string
  usecases: string[],
  cta: string
}


interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-left text-black bg-white rounded-2xl shadow-xl xl:p-8">
      <h3 className="mb-4 text-2xl font-semibold">{product.name}</h3>
      <p className="font-light text-black sm:text-lg mb-6">{product.description}</p>

      <ul className="list-disc list-inside mb-8 space-y-4 text-left">
        {product.usecases.map((usecaseItem) => (
          <li key={usecaseItem}>
            {usecaseItem}
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Button className="text-sm/6 font-semibold text-white bg-green-600 px-4 py-2 rounded-4xl w-full">
          {product.cta}
        </Button>
      </div>
    </div>
  )
}

const Products = () => {
  const products: Product[] = [
    {
      name: 'Kangen Water',
      description: 'Change your water, Change your life',
      usecases: [
        "100+ practical household & wellness uses",
        "Family hydration — clean mineral-rich drinking water",
        "Natural home cleaning — chemical-free cleaning solutions",
        "Skin care — supports toned, firmer skin",
      ],
      cta: "Request Demo"
    },
    {
      name: 'Premium Health Supplements',
      description: 'Science-informed, natural ingredients',
      usecases: [
        "Immune support",
        "Energy & stamina",
        "Clinically-informed blends",
      ],
      cta: "Explore Products"
    },
    {
      name: 'Advanced Wellness Devices',
      description: 'Everyday tech that supports your health',
      usecases: [
        "Wearables & trackers",
        "Home therapy devices",
        "Easy-to-use interfaces",
      ],
      cta: "Explore Devices"
    },
  ]

  return (
    <section
      id="products"
      className="w-full"
      style={{
        backgroundImage: `url(${productsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Innovative Wellness Products</h2>
          <p className="mb-5 font-light text-white sm:text-xl">
            We offer a curated range of products designed to support better health — from
            Kangen water to high-quality health supplements and advanced devices designed to
            support a healthier lifestyle.</p>
        </div>

        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products