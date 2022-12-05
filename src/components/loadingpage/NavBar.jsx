import SideBar from './SideBar'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import SearchBar from './SearchBar'
import LastBar from './LastBar'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start " >
                <div className="flex flex-shrink-0 items-center align-items: center">
                  <img
                    className="block h-fit mt-[54px] ml-[116px] w-12 lg:hidden"
                    src='/static/logo.jpg'
                    alt="Your Companymobile"
                  />
                  <img
                    className="hidden h-[49] w-[120px] mt-[54px] ml-[116px] lg:block"
                    src='/static/logo.jpg'
                    alt="Your Companyweb"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="#"
                    className="inline-flex items-center justify-center ml-[100px] mt-[54px]  border-indigo-500 px-4 pt-1 text-sm font-medium text-[#67327E]"
                  >
                    Why Nutrition?
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-4 pt-1 mt-[54px] text-sm font-medium text-[#67327E] hover:border-gray-300 hover:text-gray-700"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-4 pt-1 mt-[54px] text-sm font-medium text-[#67327E] hover:border-gray-300 hover:text-gray-700"
                  >
                    Store
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-4 pt-1 mt-[54px] text-sm font-medium text-[#67327E] hover:border-gray-300 hover:text-gray-700"
                  >
                    Contact
                  </a>
                  
                </div>
                
              </div>
              <button class="bg-[#67327E] hover:bg-[#67327E] text-white h-9 w-[150px] font-bold mt-[45px] mr-[100px]  px-4 border-none border-blue-700 rounded-2xl ">
                    Login
                </button>
                
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <div>
            <div className='button-image'>
            <button class="bg-white hover:bg-gray-300 text-gray-800 font-ubuntu leading-4 py-2 px-4 border-none  border-gray-400 rounded shadow ml-[133px] mt-[120px]">
             more than health
             <img src="/static/apple-lady.png" alt="apple lady" className='h-5 ml-[145px] mt-[-15px]'/>
            </button>
            </div>
            <div className='w-[500px]  h-[213px] mt-[30px] ml-[120px]'>
              <h1 className='font-Ubuntu font-bold text-7xl leading-[73px]'>Lorem ipsum dolor sit amet,  <span className='text-[#67327E] font-ubuntu font-bold text-7xl leading-[73px]' > consectetur </span > </h1>
            </div>
            <div className='h-[42px] w-[400px] ml-[125px] mt-3'>
              <h3 className='text-[#5E6E83]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ligula aliquet, viverra odio a, mattis massa.
              </h3>
            </div>
            <div className='mt-[-90px] ml-[140px]'>
                <button class="bg-[#67327E] hover:bg-[#67327E] text-white h-9 font-bold   px-4 border-none border-blue-700 rounded-2xl  ">
                    Get started
                </button>
                <button class="bg-white hover:bg-gray-400 text-gray-800 h-9 font-ubuntu leading-4 py-2 px-4 border-none  border-gray-400 rounded-2xl shadow ml-[133px] mt-[120px]">
                  watch video 
                </button>
            </div>
          </div>
          <div className='bg-green-300 w-[550px] h-[150px] absolute ml-[680px] mt-[-400px]' >
            <img src='/static/vegitable-lady.jpg' />
          </div>
          <div className="flex justify-end w-full  pr-28 pt-32 text-blue-900 mb-5  ">
            Explore More
        </div>
          <div className=' w-full  flex  flex-between  bg-red-200'>
            <div className="rounded-md flex">
              <SideBar />
            </div>
            <div className="rounded-md flex" >
              <SearchBar />
            </div>
            
            <div className="rounded-md flex">
              <LastBar />
            </div>

          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Calendar
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
