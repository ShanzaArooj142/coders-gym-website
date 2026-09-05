import React from 'react'

const Blogs = () => {
  return (
    <div id='blogs' className='bg-gray-50 py-18 px-8'>
      <div className='flex '>
        <div className='w-140 '>
         <img src="/img2.webp" alt="" className='mr-10' />
        </div>
        <div className='ml-11 mt-30 flex flex-col gap-6'>
          <h1 className='font-bold text-5xl leading-tight text-gray-950'>Transform Your Body & <br /> Mind With Perfect Fitness</h1>
          <p className='text-gray-700 text-lg'>Achieve your fitness goals with expert guidance and premium <br /> equipment. Build strength, endurance, and confidence.</p>

         
          <button className="bg-[#FF8901] text-white w-40 h-13 rounded-full font-bold hover:bg-[#f7a03c] transition duration-300"> Explore More</button>
        </div>

      </div>
      
    </div>
  )
}

export default Blogs
