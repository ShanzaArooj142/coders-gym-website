import React from 'react'

const Navbar = () => {
  return (
    <div className="pt-4 mx-20">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.svg" alt="" className="h-8 w-8" />
          <h1 className="uppercase font-bold text-2xl ml-4">
            Coders <span className="text-[#FF8901]">Gym</span>
          </h1>
        </div>

        <ul className="flex items-center gap-8">
          <li> <a href="#home" className="text-gray-500 hover:text-[#FF8901] font-semibold">Home </a></li>
          <li><a href="#products" className="text-gray-500 hover:text-[#FF8901] font-semibold">Products</a></li>
          <li><a href="#programs" className="text-gray-500 hover:text-[#FF8901] font-semibold">Programs</a> </li>
          <li><a href="#blogs" className="text-gray-500 hover:text-[#FF8901] font-semibold">Blogs</a></li>
          <li> <a href="#offers" className="text-gray-500 hover:text-[#FF8901] font-semibold"> Offers</a></li>
        </ul>

        <div className="flex items-center gap-6">
          <img src="/logo1.svg" alt="" className="h-7 w-7" />
          <img src="/logo2.svg" alt="" className="h-7 w-7" />
        </div>
      </nav>
    </div>
  )
}

export default Navbar