import React from 'react';
import { motion } from "framer-motion";
import { FaStar } from 'react-icons/fa';
import { SlideUp } from '../utility/Animation'

const Offers = ({ icons, paragrapgh, img, heading }) => {
  return (
    <motion.div
      variants={SlideUp(0.8)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
    
     className='bg-slate-800 p-8 rounded-2xl border border-gray-400 shadow-xl w-92.5 flex flex-col items-center text-center'>

      <div className='text-yellow-400 text-3xl mb-4'>{icons}</div>
      <p className='text-gray-200 text-lg  mb-6 leading-relaxed italic'>{paragrapgh}</p>

      <div className='flex text-yellow-400 mb-6 gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>

      <div className='flex flex-col items-center gap-3'>
        <img src={img} alt="" className='w-14 h-14 rounded-full object-cover border-2 border-yellow-400 shadow-md cursor-pointer' />
        <h4 className='font-bold text-lg text-white'>{heading}</h4>
      </div>

    </motion.div>
  );
};

export default Offers;