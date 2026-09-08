import React from 'react'
import Home from './components/Home'
import Products from './components/Products'
import Programs from './components/Programs'
import Blogs from './components/Blogs'
import Offers from './components/Offers'
import Footer from './components/Footer'
import { FaDumbbell,FaBicycle,FaRunning,FaHeartbeat } from "react-icons/fa";
import Programs1 from './components/Programs1'

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
     <Offers/>
     <Footer/>
    </div>
  )
}

export default App  
