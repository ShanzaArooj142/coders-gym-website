import React from 'react'
import Navbar from './Navbar'


const Home = () => {
  return (
    <div id='home'
      style={{ backgroundImage: "url('/bg.webp')" }}
      className="h-190 w-full bg-cover bg-center bg-no-repeat"
    >
      <Navbar />
      <div className="mx-18 flex items-center justify-between">
        <div className="flex flex-col gap-5">

          <h1 
          className="text-gray-900 font-bold text-6xl mt-40 leading-20">
            Gym Gives you the <br />
            perfect <span className="text-[#FF8901]">Health</span>
          </h1>

          <p className="mt-7 text-gray-500">
            It is a long established fact that a reader will be by readable content of a page <br />
            when are the best product.
          </p>

          <button
          
          className="mt-5 text-2xl font-semibold h-12 w-38 rounded-sm bg-[#FF8901]">
            Order Now
          </button>
        </div>

        <div className="mt-20 mr-10">
          <img src="/img1.webp" alt="" className="w-130 h-125 object-contain" />
        </div>
      </div>
    </div>
  )
}

export default Home

