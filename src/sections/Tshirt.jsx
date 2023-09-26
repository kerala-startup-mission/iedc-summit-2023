import React from "react";
import TshirtVector from "../assets/img/tshirt.png"

// import { useMediaQuery } from "react-responsive";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

function Tshirt() {
  
  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // if (!isMobile) {
  return (
    <div className="relative w-full flex  h-[578px]  ">
      
        <div className="absolute left-[35%] w-1/3 h-full z-10 ">
        <img src={TshirtVector} className="w-full h-full"></img>
        </div>
    
        
       <div className=" overflow-hidden flex flex-wrap text-7xl text-white italic   font-extrabold h-[312px] w-full my-auto rounded-lg bg-gradient-to-tl from-blue-500 via-purple-600 to-blue-500">
           <h>GRAB <span className="opacity-30"> YOUR TEES NOW GRAB YOUR TEES NOWGRAB </span>YOUR<span className="opacity-30"> TEES NOW GRAB YOUR TEES NOW GRAB YOUR TEES NOW GRAB YOUR </span>TEES <span className="opacity-30">NOW GRAB YOUR TEES</span> NOW </h>
           
             
       </div>
    </div>
  );
 
}

export default Tshirt;
