import React from "react";
import logo from "../assets/img/center.png";

const SponsorCard = ({ odd }) => {
  return (
    <div
      className={` px-12 py-8  ${
        odd ? "-ml-36 pl-44 self-start" : "-mr-40 pr-44 self-end"
      } flex gap-8 w-11/12 border-2 border-[#6294e8] rounded-[20px] relative`}
    >
      <img src={logo} className={`${odd ? "order-1" : "order-3"} w-[12%]`} />
      <div className="order-1">
        <div
          className={`${
            odd ? "" : "text-end"
          } text-[#454545] text-3xl font-bold`}
        >
          K-DISC
        </div>
        <div className={`${odd ? "" : "text-end"} text-lg font-medium`}>
          Kerala Startup Mission is organizing the eight edition of the flagship
          event- IEDC Summit 2023 and,College of Engineering Trivandrum,
          heartily welcome you to witness and be a part of Asia's largest summit
          for aspiring student innovators and entrepreneurs.
        </div>
      </div>
      <div
        className={`absolute rounded-[20px] w-full h-full border-2 border-white top-4 ${
          odd ? "-left-4" : "-right-4"
        }`}
      ></div>
    </div>
  );
};

export default SponsorCard;
