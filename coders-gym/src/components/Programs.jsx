import React from 'react'

const Programs = ({icon,heading,paragraph}) => {
  return (
    <div id='programs' className='bg-white py-10'>
       
     <div className='border-t-6 border-t-amber-600 pt-6 h-80 w-57 rounded-xl bg-gray-900 text-white  mt-17 cursor-pointer duration-300 ease-in-out transition-all  hover:-translate-y-2 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center gap-y-4'>
    
      <p className='text-5xl text-orange-500'>{icon}</p>
      <h1 className='font-semibold text-2xl'>{heading}</h1>
     <p className='text-base'>{paragraph}</p>
     </div>
    </div>
  
  )
}

export default Programs