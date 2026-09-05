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
     <Blogs/>
     <Programs1/>
    <div className='flex flex-row gap-8 ml-30 mr-30 '>
    <Programs
      icon={<FaDumbbell  />}
      heading="Strength Training"
     
    paragraph={
     <>Build muscle and <br /> improve endurance <br /> with our guided <br /> strength workouts.</>
    }
    />

    <Programs
      icon={<FaBicycle />}
      heading="Cardio Workouts"
       paragraph={
     <>Boost your heart <br /> health with our <br /> high-energy cardio <br /> sessions. </>
    }
    />

     <Programs
      icon={ <FaHeartbeat/>}
      heading="Heart Health"
       paragraph={
     <>Monitor your fitness<br /> progress and stay in <br />top condition.</>
    }
    />

    <Programs
      icon={<FaRunning />}
      heading="Endurance Training"
       paragraph={
     <>Improve your <br /> stamina with expert-  <br /> designed endurance <br />routines. </>
    }
    />
    </div>
     <Offers/>
     <Footer/>
    </div>
  )
}

export default App  
