import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from '../utility/Animation'

const Home = () => {
  return (
    <div id='home'
      style={{ backgroundImage: "url('/bg.webp')" }}
      className="h-180 w-full bg-cover bg-center bg-no-repeat  "
    >
      <Navbar />
      <div className="mx-10 flex items-center justify-between">
        <div className="flex flex-col gap-5">

          <motion.h1 
           variants={SlideRight(0.4)}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}

           className="text-gray-900 font-semibold text-6xl mt-40 leading-20 font-serif">
            Gym Gives you the <br />
            perfect <span className="text-[#FF8901]">Health</span>
          </motion.h1>

          <motion.p
            variants={SlideRight(0.6)}
            initial="hidden"
            whileInView="visible"
           viewport={{ once: true }}
          
          
           className="mt-7 text-gray-500">
            It is a long established fact that a reader will be by readable content of a page <br />
            when are the best product.
          </motion.p>

          <motion.button
           variants={SlideRight(0.8)}
            initial="hidden"
            whileInView="visible"
           viewport={{ once: true }}

           className="mt-5 text-2xl font-semibold h-12 w-38 rounded-sm bg-[#FF8901] cursor-pointer">
            Order Now
          </motion.button>
        </div>

        <motion.div 
        variants={SlideLeft(0.8)}
            initial="hidden"
            whileInView="visible"
           viewport={{ once: true }}
        
        
        className="mt-40 mr-10">
          <img src="/img1.webp" alt="" className="w-130 h-98 cursor-pointer " />
        </motion.div>
      </div>
    </div>
  )
}

export default Home

