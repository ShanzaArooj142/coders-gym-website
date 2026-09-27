import React from 'react'
import { motion } from "framer-motion";
import { SlideUp } from '../utility/Animation'

const Offers1 = () => {
  return (
    <div className='bg-[#0b1220]'>
        <div className='flex flex-col gap-3 justify-between items-center '>
         <motion.h1
           variants={SlideUp(0.1)}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
                
         className='text-4xl font-bold text-[#FF8901] mt-10'>What Our Clients Say
         </motion.h1>
          <motion.p
           variants={SlideUp(0.2)}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
      
          className='text-lg text-gray-400'>Hear from people who transformed their fitness journey with us.</motion.p>
        </div>
    </div>
  )
}

export default Offers1
