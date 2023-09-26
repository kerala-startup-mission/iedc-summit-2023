import React from "react";
import TshirtVector from "../assets/img/tshirt.png";

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
      <div className="overflow-hidden flex flex-wrap text-7xl text-white text-justify italic font-extrabold w-full my-auto bg-gradient-to-tl from-blue-500 via-purple-600 to-blue-500 px-2 py-4">
        <h2 className="hidden md:block">
          GRAB{" "}
          <span className="opacity-10">
            YOUR TEES NOW GRAB YOUR TEES NOW GRAB YOUR {""}
          </span>
          TEES <span className="opacity-10"> NOW GRAB </span>YOUR
          <span className="opacity-10">
            {" "}
            TEES NOW GRAB YOUR TEES NOW GRAB YOUR TEES{" "}
          </span>
          NOW<span className="opacity-10"> GRAB YOUR TEES NOW GRAB YOUR</span>
        </h2>
      </div>
    </div>
  );
}

export default Tshirt;
