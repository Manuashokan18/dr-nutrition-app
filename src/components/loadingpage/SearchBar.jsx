
//import { EnvelopeIcon } from '@heroicons/react/20/solid'

export default function SearchBar() {
  return (
    <div>
      <div className="relative ml-2  rounded-md shadow-sm ">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pl-2 text-[#5E6E83]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

        </div>
        <input
          type="text"
          className="block   rounded-md border-gray-600 pl-14 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder-text-[#5E6E83]"
          placeholder="Explore Your Food Items"
        />
      </div>
      <div className="searchcard     bg-white">
        <div className="burger  ">
            <img className="w-40 h-48" src="/static/burger.png" alt="burger" />
        </div>
        <div className="pl-2">
            <h1 >Spicy Chicken Burger</h1>
            <h2 className="text-xs text-[#5E6E83]">100 KCL</h2>
            <h2 className="text-xs text-[#5E6E83]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod .</h2>
        </div>
        
    </div>
    </div>
    
  )
}
