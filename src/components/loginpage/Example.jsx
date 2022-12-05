
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'Why DrNutrition?', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Store', href: '#' },
  { name: 'Contact', href: '#' },
]


export default function Example() {
  return (
    <div className="bg-white ">
      <Popover as="header" className="relative z-10">
        <div className="bg-white">
          <nav
            className="relative mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 xl:px-8"
            aria-label="Global"
          >
            <div className=" flex w-full items-center justify-between lg:w-auto">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="/static/logo.jpg"
                  alt=""
                />
              </a>
              <div className="-mr-2 flex items-center lg:hidden">
                <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-grape-500">
                  <span className="sr-only">Open main menu</span>
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
              <a
                href="#"
                className="rounded-md border border-transparent bg-[#67327E] text-[#FFFFFF] py-2 px-6 text-base font-medium text-grape-600 shadow-md hover:bg-[#FFFFFF] hover:text-[#67327E]"
              >
                Login
              </a>
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
                  <img
                    className="h-8 w-auto"
                    src="/static/logo.jpg"
                    alt=""
                  />
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
                  <a
                    href="#"
                    className="bg-[#67327E] block w-full rounded-md border border-transparent bg-grape-500 py-2 px-4 text-center font-medium text-white shadow hover:bg-grape-600"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main>
        {/* Header */}
        

        {/* Contact Section */}
        <div className="relative bg-white ">
          <div className=" relative flex flex-col-reverse px-4 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
            <div className=" ">
              <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0 ">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#67327E]">Sign Up </h2>
        
                <form action="#" method="POST" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div className='col-span-2 lg:md:col-span-1'>
                    <label htmlFor="first-name" className="block text-sm font-medium text-[#5E6E83E5]">
                      Fullname
                    </label>
                    <div className="mt-1">
                    <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                    </div>
                  </div>
                  <div className='col-span-2 lg:md:col-span-1'>
                    <label htmlFor="last-name" className="block text-sm font-medium text-[#5E6E83E5]">
                      Email Address
                    </label>
                    <div className="mt-1">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                    </div>
                  </div>
                  
                  <div className='flex  col-span-2 '>
                    <div className='w-32'>
                    <label htmlFor="email" className="block text-sm font-medium text-[#5E6E83E5]">
                      Age
                    </label>
                    <div className="mt-1">
                    <input
                    id="age"
                    name="age"
                    type="number"
                    autoComplete="email"
                    required
                    className="block w-full  rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                    </div>
                </div>
                <div className=' ml-12 w-3/4'>
                
                    <label htmlFor="first-name" className="block text-sm font-medium text-[#5E6E83E5]">
                    I'm looking for
                    </label>
                    <div className="mt-1 ">
                    <input
                    id="text"
                    name="text"
                    type="text"
                    autoComplete="email"
                    required
                    className=" block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                    </div>
                  </div>
                  </div>
                  


                  <div className='flex  col-span-2 '>
                    <div className='w-32 '>
                    <label htmlFor="email" className="flex text-sm font-medium text-[#5E6E83E5]">
                     Country code
                    </label>
                    <div className="mt-1">
                    <input
                    id="age"
                    name="age"
                    type="number"
                    autoComplete="email"
                    required
                    className="block w-full  rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                    </div>
                </div>
                <div className=' ml-12 w-3/4'>
                
                    <label htmlFor="first-name" className="block text-sm font-medium text-[#5E6E83E5]">
                   Phone Number
                    </label>
                    <div className="mt-1 ">
                    <input
                    id="number"
                    name="number"
                    type="number"
                    autoComplete="email"
                    required
                    className=" block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                    </div>
                  </div>
                  </div>
                  
                  
                
                  
                  
                  <div className="col-span-2 sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-medium text-[#5E6E83E5]">
                      Password
                    </label>
                    <div className="mt-1">
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                    </div>
                  </div>
                  
                  <div className="flex  mb-5 sm:col-span-2 text-right md:lg:flex items-center justify-between">
                    
                    <span className="block text-sm font-medium text-[#5E6E83E5]">
                      Already a customer? <span className='text-[#67327E]'>Sign In</span>
                    </span>
                  
                  
                  <div className=' '>
                    <button
                      type="submit"
                      className="inline-flex bg-[#67327E] mt-0 rounded-md border border-transparent bg-grape-600 py-2 px-10 lg:md:py-3 lg:md:px-10 text-sm font-medium text-white shadow-sm hover:bg-grape-700 focus:outline-none focus:ring-2 focus:ring-grape-500 focus:ring-offset-2"
                    >
                      Sign Up
                    </button>

                    </div>
                  </div>
                </form>
                
              </div>
              
            </div>
            <div className='my-5 mx-2    '>
                <img src="./static/rejistartion.jpg" alt="" className='rounded-md md:lg:rounded-3xl'/>
              </div>
            </div>
        </div>

    
      
      </main>

      
    </div>
  )
}
