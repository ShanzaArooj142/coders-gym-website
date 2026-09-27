import React from 'react';
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from '../utility/Animation'
const Offers2 = () => {
  return (
    <div className="w-full bg-white py-30 px-6 flex justify-center items-center">
      <div className="bg-[#f3f4f6] text-gray-900 w-full max-w-5xl h-120  py-20 px-8 text-center  flex flex-col items-center">
        
        <motion.h2 
          variants={SlideLeft(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        
         className="text-3xl md:text-5xl font-bold tracking-tight mb-10 leading-tight">
          GET <span className="text-[#FF8901]">20% DISCOUNT</span>  ON YOUR  <br /> FIRST ORDER!
        </motion.h2>

        
        <motion.p
          variants={SlideUp(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
         className="text-gray-600 text-lg max-w-3xl mb-8 leading-relaxed">
          We ensure you get the best quality workout products tailored to your fitness needs. Shop <br />now  and take your workouts to the next level!
        </motion.p>

        
        <motion.div
          variants={SlideUp(0.8)}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         className="flex flex-row gap-4 justify-center">
          <button className="bg-[#FF8901] hover:bg-[#f7a03c] text-white font-semibold px-9 py-4 rounded-md transition duration-300 shadow-md">
            Learn More
          </button>
          <button className="bg-white border-2 border-[#FF8901] hover:bg-[#FF8901] text-[#FF8901] hover:text-white font-semibold px-9 py-4 rounded-md  transition duration-300 shadow-sm">
            Order Now
          </button>

        </motion.div>

      </div>
    </div>
  );
};

export default Offers2;
