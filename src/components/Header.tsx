'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  Button,
  DisclosurePanel
} from '@headlessui/react'

import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid'
import logo from '../assets/web/icon-512-maskable.png';
import mobileLogo from '../assets/web/icon-512.png';

const products = [
  { name: 'Product A' },
  { name: 'Product B' },
  { name: 'Product C' },
  { name: 'Product D' },
  { name: 'Product E' },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed w-full z-20 top-0 start-0 transition-colors duration-300 ${scrolled ? 'bg-green-600 shadow-md' : 'bg-transparent'}`}>
      <nav aria-label="Global" className="w-full flex items-center justify-between px-4 py-0">
        <div className="flex lg:hidden">
          <a href="/" className="-m-0 p-0">
            <img
              alt=""
              src={logo}
              className="h-14 sm:h-16 md:h-20 w-auto"
              style={{ display: 'block' }}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-4 lg:w-full">
          <div className="flex items-center justify-center flex-1">
            <a href="/" className="-m-0 p-0">
              <img
                alt=""
                src={logo}
                className="h-24 sm:h-16 md:h-32 w-auto"
                style={{ display: 'block' }}
              />
            </a>
          </div>

          <div className="flex items-center justify-center flex-1">
            <a href="#home" className="text-2xl font-bold text-white text-center w-full">
              <span className="nav-underline">Home</span>
            </a>
          </div>

          <div className="flex items-center justify-center flex-1">
            <div
              className="relative"
              role="menu"
              tabIndex={0}
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setProductsOpen(true)
                }
                if (e.key === 'Escape') setProductsOpen(false)
              }}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={productsOpen}
                onFocus={() => setProductsOpen(true)}
                onBlur={() => setProductsOpen(false)}
                className="flex items-center gap-x-1 text-2xl font-bold text-white"
              >
                <span className="nav-underline">Products</span>
                <ChevronDownIcon aria-hidden="true" className="size-7 flex-none text-gray-500" />
              </button>

              {productsOpen && (
                <div
                  className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition"
                >
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5"
                      >
                        <div className="flex-auto">
                          <p className="block font-semibold text-white">
                            {item.name}
                            <span className="absolute inset-0" />
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center flex-1">
            <a href="#partners" className="text-2xl font-bold text-white text-center w-full">
              <span className="nav-underline">Partners</span>
            </a>
          </div>

          <div className="flex items-center justify-center flex-1">
            <a href="#about" className="text-2xl font-bold text-white text-center w-full">
              <span className="nav-underline">About</span>
            </a>
          </div>

          <div className="flex items-center justify-center flex-1">
            <Button
              className={`text-2xl font-bold px-4 py-2 rounded-4xl transition-colors duration-200 ${scrolled ? 'bg-white text-green-600 hover:bg-gray-100' : 'bg-green-600 text-white hover:bg-green-700'}`}>
              Contact Us
            </Button>
          </div>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-0 p-0">
              <img
                alt=""
                src={mobileLogo}
                className="h-16 w-auto"
                style={{ display: 'block' }}
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">

                <a
                  href="#home"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  <span className="nav-underline">Home</span>
                </a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5">
                    <span className="nav-underline">Products</span>
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {products.map((item) => {
                      const slug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                      return (
                        <a
                          key={item.name}
                          href={`#product-${slug}`}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                        >
                          <span className="nav-underline">{item.name}</span>
                        </a>
                      )
                    })}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#partners"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  <span className="nav-underline">Partners</span>
                </a>
                <a
                  href="#about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  <span className="nav-underline">About</span>
                </a>
              </div>
              <div className="py-6">
                <Button
                  className={`rounded-4xl px-4 py-2 text-sm transition-colors duration-200 ${scrolled ? 'bg-white text-green-600 hover:bg-gray-100' : 'bg-green-600 text-white data-active:bg-green-700 data-hover:bg-green-500'}`}>
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
export default Header