import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import Programs from './components/Programs'
import Blogs from './components/Blogs'
import Offers from './components/Offers'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
     
     <Home/>
     <Products/>
     <Blogs/>
     <Programs/>
     <Offers/>
     <Footer/>
    </div>
  )
}

export default App
