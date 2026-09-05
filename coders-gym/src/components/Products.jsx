import React from "react";
import { FaDumbbell,FaBicycle,FaRunning,FaHeartbeat } from "react-icons/fa";

const Products = () => {
  return (
    <div id="products" className="py-10 px-10">
      <h1 className="text-5xl font-bold text-[#030d28] text-center mt-10">
        What We Offer For You
      </h1>
      
      <div className="flex justify-between items-center mt-20 ml-10 mr-10">
      
       {/* Card 1 */}
       <div className="bg-[#0b1220] text-white w-65  rounded-xl flex flex-col items-center text-center px-6 py-10  cursor-pointer  hover:bg-white  duration-300 ease-in-out hover:text-black shadow-xl transition-all  hover:-translate-y-2 hover:scale-104 hover:shadow-2xl">
        <p className="text-4xl "><FaDumbbell  /></p>
        <h2 className="text-2xl font-bold mt-5 ">Dumbbells</h2>
        <p className="text-sm leading-5 mt-2">Perfect for strength training and muscle building.</p>
        <p className="text-sm leading-5 mt-2">
          Dumbbells are essential <br /> workout tools used for <br />
          resistance training to build and <br /> tone muscles.
          They come in <br /> various weights.
        </p>
       </div>

       {/* Card 2 */}
       <div className="bg-[#0b1220] text-white w-65 rounded-xl flex flex-col items-center text-center px-6 py-10  cursor-pointer  hover:bg-white  duration-300 ease-in-out hover:text-black shadow-xl transition-all  hover:-translate-y-2 hover:scale-104 hover:shadow-2xl">
        <p className="text-4xl "><FaBicycle /></p>
        <h2 className="text-2xl font-bold mt-5 ">Exercise Bike</h2>
        <p className="text-sm leading-5 mt-2">Great for cardio workouts and endurance training.</p>
        <p className="text-sm leading-5 mt-2">
          An exercise bike is a stationary <br /> bicycle designed to simulate <br /> outdoor cycling while providing <br /> a low-impact, high-intensity <br /> cardio workout.
        </p>
       </div>

       {/* Card 3 */}
       <div className="bg-[#0b1220] text-white w-65 rounded-xl flex flex-col items-center text-center px-6 py-10 cursor-pointer  hover:bg-white  duration-300 ease-in-out hover:text-black shadow-xl transition-all  hover:-translate-y-2 hover:scale-104 hover:shadow-2xl">
        <p className="text-4xl "><FaRunning /></p>
        <h2 className="text-2xl font-bold mt-5 ">Treadmill</h2>
        <p className="text-sm leading-6 mt-2">Ideal for running, jogging, and burning calories.</p>
        <p className="text-sm leading-6 mt-2">
         A treadmill is one of the most <br /> effective fitness machines for <br /> indoor cardiovascular exercise. <br /> It allows users to walk.
        </p>
       </div>

       {/* Card 4 */}
       <div className="bg-[#0b1220] text-white w-65 rounded-xl flex flex-col items-center text-center px-6 py-10  cursor-pointer  hover:bg-white  duration-300 ease-in-out hover:text-black shadow-xl transition-all  hover:-translate-y-2 hover:scale-104 hover:shadow-2xl">
        <p className="text-4xl "><FaHeartbeat/></p>
        <h2 className="text-xl font-bold mt-5 ">Heart Rate Monitor</h2>
        <p className="text-sm leading-6 mt-2">Helps track your heart rate and workouts.</p>
        <p className="text-sm leading-5 mt-2">
        A heart rate monitor is a fitness <br /> device that tracks your <br /> heartbeat in real-time, helping <br /> you optimize your workouts <br /> and maintain.
        </p>
       </div>

      </div>
    </div>
  );
};

export default Products; 
