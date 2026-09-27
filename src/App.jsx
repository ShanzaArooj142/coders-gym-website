import React from 'react'
import Home from './components/Home'
import Products from './components/Products'
import Programs from './components/Programs'
import Blogs from './components/Blogs'
import Offers from './components/Offers'
import Footer from './components/Footer'
import { FaDumbbell,FaBicycle,FaRunning,FaHeartbeat } from "react-icons/fa";
import Programs1 from './components/Programs1'
import Offers1 from './components/Offers1'
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Offers2 from './components/Offers2'

const App = () => {
  return (
    <div>
     
     <Home/>
     <Products/>
     <div className='border border-neutral-50 '>
          <Blogs
           img={"img2.webp"}
           heading={<h1>Transform Your Body &  <br /> Mind With Perfect Fitness</h1>}
           paragraph={<p>Achieve your fitness goals with expert guidance and premium <br /> equipment. Build strength, endurance, and confidence.</p>}
           button="Explore More"
          
          />
     </div>
     
     <Programs1/>
    <div className='flex flex-row gap-8 ml-30 mr-30 '>
    <Programs
      icon={<FaDumbbell  />}
      heading={<h1>Strength <br /> Training</h1>}
     
    paragraph={
     <p>Build muscle and <br /> improve endurance <br /> with our guided <br /> strength workouts.</p>
    }
    />

    <Programs
      icon={<FaBicycle />}
      heading={<h1>Cardio <br /> Workouts</h1>}
       paragraph={
     <p>Boost your heart <br /> health with our <br /> high-energy cardio <br /> sessions. </p>
    }
    />

     <Programs
      icon={ <FaHeartbeat/>}
      heading={<h1>Heart Health</h1>}
      paragraph={
     <p>Monitor your fitness<br /> progress and stay in <br />top condition.</p>
    }
    />

    <Programs
      icon={<FaRunning />}
      heading= {<h1>Endurance  <br /> Training</h1>}
       paragraph={
     <p>Improve your <br /> stamina with expert-  <br /> designed endurance <br />routines. </p>
    }
    />
    </div>


     <div className='border border-neutral-50 mt-10 bg-neutral-50 py-10'>
          <Blogs
           img={"https://codergym.netlify.app/3.webp"}
           heading={<h1>Your Health, Our Priority  -Stay Strong & Fit</h1>}
           paragraph={<p>A healthy lifestyle starts with the right mindset. Join us and take the first  step toward a stronger and happier you!</p>}
           button="Learn More"
          
          />
     </div>
      

      <Offers1/>

    
     
      <div className='flex flex-row bg-[#0b1220] py-20 px-10 justify-center gap-8'>
      <Offers
        icons={<FaQuoteLeft />}
        paragrapgh="This platform transformed my fitness journey. Highly recommended!"
        icon2={
          <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>}
        img="https://codergym.netlify.app/t1.webp"
        heading={<h1>John Doe</h1>}
      />

        <Offers
        icons={<FaQuoteLeft />}
        paragrapgh={<p>Amazing trainers and top-quality equipment. A game-changer!</p>}
        icon2={
          <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>}
        img="https://codergym.netlify.app/t2.webp"
        heading={<p>Sarah Johnson</p>}
      />

        <Offers
        icons={<FaQuoteLeft />}
        paragrapgh={<p>The workouts are challenging but so rewarding. Love it!</p>}
        icon2={
          <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>}
        img="https://codergym.netlify.app/t3.webp"
        heading={<h1>Michael Brown</h1>}
      />
    </div>

     <Offers2/>
     
    
        
    
     
     <Footer/>
    </div>
  )
}

export default App  
