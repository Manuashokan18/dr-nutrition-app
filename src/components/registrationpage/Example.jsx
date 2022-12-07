import { Link } from 'react-router-dom';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {  Bars3Icon,XMarkIcon } from '@heroicons/react/24/outline'

import {useForm}  from "react-hook-form";
// import {yupResolver} from "@hookform/resolvers/yup";
// import * as yup from "yup";



const navigation = [
  { name: 'Why DrNutrition?', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Store', href: '#' },
  { name: 'Contact', href: '#' },
]

// const schema =yup.object().shape({
//   username: yup.string().required(' The name is required!') ,
//   email: yup.string().email().required(),
//   age: yup.number().positive().integer.required(),
//   lookingfor: yup.string().required() ,
//   countrycode: yup.number().required() ,
//   phonenumber: yup.number().positive().required() ,
//   password: yup.string().min(4).max(15).required()

// })


export default function Example() {
const { register,handleSubmit,formState: {errors}} = useForm();

console.log(errors);
const submitForm = (data) =>{
  console.log(data);

}

  return (
    <div className="bg-white  ">
      <Popover as="header" className="relative z-10">
        <div className="bg-white ">
          <nav
            className="relative mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 xl:px-8"
            aria-label="Global"
          >
            <div className=" flex w-full items-center justify-between lg:w-auto">         
            <a href="http://localhost:3000/">
                <span className="sr-only"></span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="/static/logo.jpg"
                  alt=""
                />
              </a>
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
                  <img
                    className="h-8 w-auto"
                    src="/static/logo.jpg"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grape-500">
                    <span className="sr-only"></span>
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
      </Popover>

      <main>
        {/* Header */}
        

        {/* Contact Section */}
        <div className="relative bg-white ">
          <div className=" relative flex flex-col-reverse px-4 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
            <div className=" ">
              <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0 ">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#67327E]">Sign Up </h2>
        
                <form  onSubmit={handleSubmit(submitForm)} className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div className='col-span-2 lg:md:col-span-1'>
                    <label htmlFor="first-name" className="block text-sm font-medium text-[#5E6E83E5]">
                      Fullname
                    </label>
                    <div className="mt-1">
                    <input
                    id="username"
                    name="username"
                    type="text"
                    
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    {...register("username", {required: true,pattern:/^[A-Z][a-zA-Z]+$/gm}) }
                  />
                  <p className='text-red-600'>{errors.username?.type==="required" && "!Enter your name"}</p>
                 <p className='text-red-600'>{errors.username?.type==="pattern" && "!Enter a valid username"}</p>
                  
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
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    {...register("email", {required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})}
                   
                  />
                 <p className='text-red-600'>{errors.email?.type==="required" && "!Enter a gmail address"}</p>
                 <p className='text-red-600'>{errors.email?.type==="pattern" && "!Enter a valid Gmail address"}</p>
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
                    className="block w-full  rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    {...register("age",{required: true, pattern:/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|100)$/})}
                  />
                  <p className='text-red-600'>{errors.age?.type==="required" && "!Enter your age"}</p>
                 <p className='text-red-600'>{errors.age?.type==="pattern" && "!Enter a valid age "}</p>
                </div>
                </div>
                <div className=' ml-12 w-3/4'>
                
                    <label htmlFor="first-name" className="block text-sm font-medium text-[#5E6E83E5]">
                    I'm looking for
                    </label>
                    <div className="mt-1 ">
                    <input
                    id="lookingfor"
                    name="lookingfor"
                    type="text"
                    className=" block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    {...register("lookingfor",{required:"!Fill out this  field "})}
                  />
                  <p className='text-red-600'>{errors.lookingfor?.message}</p>
          
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
                    id="countrycode"
                    name="countrycode"
                    type="number"
                    className="block w-full  rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    {...register("countrycode",{required: true, pattern:/^(\+?\d{1,3}|\d{1,4})$/})}
                  />
                  <p className='text-red-600'>{errors.countrycode?.type==="required" && "!Enter your countrycode"}</p>
                 <p className='text-red-600'>{errors.countrycode?.type==="pattern" && "!Enter a valid code "}</p>
                    </div>
                </div>
                <div className=' ml-12 w-3/4'>
                
                    <label htmlFor="first-name" className="block text-sm font-medium text-[#5E6E83E5]">
                   Phone Number
                    </label>
                    <div className="mt-1 ">
                    <input
                    id="phonenumber"
                    name="phonenumber"
                    type="number"
                    className=" block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    {...register("phonenumber",{required: true, pattern:/^(\+\d{1,3}[- ]?)?\d{10}$/})}
                 />
                 <p className='text-red-600'>{errors.phonenumber?.type==="required" && "!Enter your phone number"}</p>
                 <p className='text-red-600'>{errors.phonenumber?.type==="pattern" && "!Enter a valid phone number "}</p>
             
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
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    {...register("password",{required: true, pattern:/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,14}$/})}
                    />
                    <p className='text-red-600'>{errors.password?.type==="required" && "!Enter a password"}</p>
                    <p className='text-red-600'>{errors.password?.type==="pattern" && "!Password should contain an uppercase,a lowercase and a special character "}</p>
                    </div>
                  </div>
                  
                  <div className="flex  mb-5 sm:col-span-2 text-right md:lg:flex items-center justify-between">
                    
                    <span className="block text-sm font-medium text-[#5E6E83E5]">
                      Already a customer? <Link to="/login"><span className='text-[#67327E]'>Sign In</span></Link>
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
