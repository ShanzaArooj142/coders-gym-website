import React from 'react'


const Blogs = ({img,heading,paragraph,button}) => {
  return (
  <div id="blogs" className="bg-neutral-50">
  <div className="flex items-center px-10 mt-14">
    
    <div className="w-155">
      <img src={img} alt="" />
    </div>

    <div className="w-1/2 px-6">
      <h1 className="font-bold text-4xl leading-relaxed text-gray-950 font-serif">
        {heading}</h1>

      <p className="mt-4 text-gray-700 text-lg ">
        {paragraph}</p>

      <button className="mt-5 bg-[#FF8901] text-white w-40 h-13 rounded-full font-bold hover:bg-[#f7a03c] transition duration-300">
        {button}</button>

    </div>
  </div>
</div>
  )
}

export default Blogs
