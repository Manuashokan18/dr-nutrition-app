import React from 'react'

export default function LastBar() {
  return (
    
    <div className="w-[300px] h-[300px]  flex flex-col  bg-white">
         
     
        <div className='flex'>
            <img src='/static/omlete.png' className='w-20 h-20 '/>
            <div className='flex flex-col pt-3'>
            <div ><h1 className=''>Spicy Chicken Burger</h1></div>
            <div ><h1>100 kcal</h1></div>
            </div>
        </div>
        <div className='flex'>
            <img src='/static/omlete1.png' className='w-20 h-20' />
            <div className='flex flex-col pt-3'>
            <div ><h1 className=''>Spicy Chicken Burger</h1></div>
            <div ><h1>100 kcal</h1></div>
            </div>
        </div>
        {/* <div className="h-8 w-20 bg-green-300"></div> */}
    </div>
  )
}




