import React from "react"; 
import { FaDumbbell } from "react-icons/fa"; 
 
const Products = () => { 
  return ( 
    <div id="products" className="py-5"> 
      <div><h1 className='text-5xl font-bold text-[#030d28]  ml-100 mt-10'>What We Offer For You</h1></div> 
      <div className="flex flex-row ">
         <div className="bg-[#0b1220] text-white w-70 h-85 rounded-xl flex flex-col items-center text-center px-8 py-12 mt-9.5 ml-20 mr-20"> 
        <p className="text-3xl mb-3">  <FaDumbbell  /> </p>
      
        <h2 className="text-2xl font-bold mb-5 ">Dumbbells</h2> 
        <p className=" leading-6 text-sm"> 
          Perfect for strength training and <br /> muscle building. 
        </p>
        <p className="text-sm leading-6 mt-2"> 
          Dumbbells are essential <br /> workout tools used for <br />
          resistance training to build and <br /> tone muscles. 
          They come in <br /> various weights. 
        </p> 
      </div> 


      <div className="bg-[#0b1220] text-white w-70 h-85 rounded-xl flex flex-col items-center text-center px-8 py-12 mt-9.5 ml-20 mr-20"> 
        <p className="text-3xl mb-3">  <FaDumbbell  /> </p>
      
        <h2 className="text-2xl font-bold mb-5 ">Dumbbells</h2> 
        <p className=" leading-6 text-sm"> 
          Perfect for strength training and <br /> muscle building. 
        </p>
        <p className="text-sm leading-6 mt-2"> 
          Dumbbells are essential <br /> workout tools used for <br />
          resistance training to build and <br /> tone muscles. 
          They come in <br /> various weights. 
        </p> 
      </div> 


       


      
      </div>
     
    </div> 
  ); 
}; 
 
export default Products; 