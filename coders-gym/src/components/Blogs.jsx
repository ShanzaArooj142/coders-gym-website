import React from 'react'
import { motion } from "framer-motion";
import { SlideRight } from '../utility/Animation';
import { SlideUp } from '../utility/Animation';
import { Slide } from '../utility/Animation';

const Blogs = ({img,heading,paragraph,button}) => {
  return (
  <div id="blogs" className="bg-neutral-50">
  <div className="flex items-center px-10 mt-14">
    
    <motion.div 
     variants={SlideRight(0.9)}
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true }}
    
     className="w-145">
      <img src={img} alt="" className='' />
    </motion.div>

    <div className="w-[50%] px-10">
      <motion.h1 
       variants={SlideUp(0.4)}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true }}
      
      
       className="font-bold text-4xl leading-14 text-gray-950 font-serif ">
        {heading}
      </motion.h1>

      <motion.p 
       variants={SlideUp(0.6)}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true }}
      
       className="mt-4 text-gray-700 text-lg">
        {paragraph}
      </motion.p>

      <motion.button 
      variants={Slide(0.8)}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true }}
      
       className="mt-5 bg-[#FF8901] text-white w-40 h-13 rounded-full font-bold hover:bg-[#f7a03c] transition duration-300 font-serif">
        {button}
      </motion.button>

    </div>
  </div>
</div>
  )
}

export default Blogs
