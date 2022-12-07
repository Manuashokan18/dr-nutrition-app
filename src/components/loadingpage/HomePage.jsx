
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'
import ProfileAvatar from './ProfileAvatar'

const HomePage = () => {
  return (
    <>
    <div><NavBar /></div>
    <div className=' w-full '>
        <div><img src="/static/vegitable-lady.jpg" alt="" className='md:lg:flex float-right md:lg:w-[650px] md:lg:h-[431px] sm:md:w-full rounded-xl md:lg:mt-10'  />
        </div>
        <div className='md:lg:mx-20 md:lg:w- [586px] md:lg:flex flex-col md:lg:my-10  md:lg:py-14 mx-4' >
            <span className='text-4xl md:lg:text-7xl text-[#202A39] mt-20 md:lg:mt-0  '>Lorem ipsum dolor sit amet,</span> 
            <span className='text-4xl md:lg:text-7xl text-[#67327E] '> consectetur </span>
            <span className='text-base text-[#5E6E83] md:lg:text-lg leading-6  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ligula aliquet, 
                viverra odio a, mattis massa.</span>
            <div className='flex  '>
                <Link to="/registration">
                <button type="button" className="inline-flex items-center rounded-xl md:rounded-xl border border-transparent w-36 md:w-40 md:text-sm mt-10 ml-5 h-14 md:h-12  bg-[#67327E] md:px-11 px-7 md:mt-12   py-2 text-base font-normal text-[#FFFFFF] shadow-sm  ">
                Get started</button> </Link>
                <a href='https://www.youtube.com/@Dr.Nutrition'>
                <button type="button" className="inline-flex items-center rounded-xl md:rounded-xl border border-transparent w-36 md:w-44 md:text-sm mt-10 ml-5 h-14 md:h-12 bg-[#D9D9D933] md:px-11 px-6 md:mt-12   py-2 text-base font-normal text-[#67327E] shadow-sm ">
                Watch video</button></a>
            </div>
        </div>
    </div>
    <div className='w-full mx-3 mt-2 md:lg:flex '>
        <div className='md:lg:ml-20'>
          <img src="static/fruty-lady.png" alt="" className='w-[485px] md:lg:w-full'/>
        </div>
        <div className='flex flex-col mx-3 mt-8 items-start  md:lg:ml-28  md:lg:mt-0  md:lg:mx-0'>
          <span className='text-[#67327E] text-lg font-normal leading-5	pl-32'>WHAT THEY SAY</span>
          <span className='text-[#202A39] text-4xl md:lg:text-7xl  '>What Our Customers Say About Us</span>
          <span className='text-[#5E6E83] text-base md:lg:text-lg leading-6 my-7'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. "</span>
          <span className='mt-3 ml-5 md:lg:mt-0'><ProfileAvatar /></span>
        </div>
    </div>
    <div className='flex mx-5'>
      <div><Footer /></div>
    </div>
    </>
  )
}

export default HomePage