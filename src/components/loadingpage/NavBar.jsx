import {Link} from 'react-router-dom'
import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {  Bars3Icon,XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'Why DrNutrition?', href: 'https://drnutrition.com/en-ae/about-us#:~:text=Weight%20Gainers-,Dr.,more%20than%20250%20international%20brands.' },
  { name: 'Services', href: 'https://drnutrition.com/en-sa' },
  { name: 'Store', href: 'https://drnutrition.com/en-ae' },
  { name: 'Contact', href: 'https://drnutrition.com/en-ae/contact' },
]
const NavBar = () => {
  return (
    <>
     <Popover as="header" className="relative z-10">
        <div className="bg-white">
          <nav
            className="relative mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 xl:px-8"
            aria-label="Global"
          >
            <div className=" flex w-full items-center justify-between lg:w-auto">         
            <Link to="/">
                <span className="sr-only"></span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="/static/logo.jpg"
                  alt=""
                />
              </Link>
              <div className="-mr-2 flex items-center lg:hidden">
                <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-grape-500">
                  <span className="sr-only"></span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              </div>
            <div className="hidden space-x-10 lg:ml-10 lg:flex">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-base font-medium text-[#67327E] hover:text-gray-600">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <Link
                to="/login"
                className="rounded-md border border-transparent bg-[#67327E] text-[#FFFFFF] py-2 px-6 text-base font-medium text-grape-600 shadow-md hover:bg-[#FFFFFF] hover:text-[#67327E]"
              >
                Login
              </Link>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top transform p-2 transition lg:hidden">
            <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                <Link to="/">
                  <img
                    className="h-8 w-auto"
                    src="/static/logo.jpg"
                    alt=""
                  />
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grape-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="space-y-1 px-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-[#67327E] hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 px-5">
                  <Link
                    to="/login"
                    className="bg-[#67327E] block w-full rounded-md border border-transparent bg-grape-500 py-2 px-4 text-center font-medium text-white shadow hover:bg-grape-600"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover></>
  )
}

export default NavBar