import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline'
import React from 'react'



const navigation = [
  { name: 'Pizzas', icon: HomeIcon, href: '#', current: false },
  { name: 'Desserts', icon: UsersIcon, href: '#', current: false },
  { name: 'Nudles', icon: FolderIcon, href: '#', current: false },
  { name: 'Salads', icon: CalendarIcon, href: '#', current: false },
  
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SideBar() {
  return (
    
    <div className="w-[300px] h-[300px]  flex flex-grow flex-col overflow-y-auto border-none border-gray-200 bg-green-300  pl-10  ">
      <div className="flex flex-shrink-0 items-center px-4">
      <h2 className='text-2xl font-semibold ' >Our Meals</h2>
      </div>
      <div className="mt-3 flex flex-grow flex-col">
        <nav className="flex-1 space-y-8 bg-green-300 px-2" aria-label="Sidebar">
          <div className="space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                <item.icon
                  className={classNames(
                    item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                    'mr-3 flex-shrink-0 h-6 w-6'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}
