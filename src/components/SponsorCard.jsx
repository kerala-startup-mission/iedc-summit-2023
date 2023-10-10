import React from "react";
import logo from "../assets/img/center.png";

const SponsorCard = ({ odd }) => {
  return (
    <div
      className={` px-12 py-8  ${
        odd ? "-ml-36 pl-44 self-start" : "-mr-40 pr-44 self-end"
      } flex gap-8 w-11/12 border-2 border-red-700 rounded-[20px] relative`}
    >
      <img src={logo} className="w-[12%]" />
      <div>
        <div className="text-[#454545] text-2xl font-bold">K-DISC</div>
        <div className="text-lg font-medium">
          Kerala Startup Mission is organizing the eight edition of the flagship
          event- IEDC Summit 2023 and,College of Engineering Trivandrum,
          heartily welcome you to witness and be a part of Asia's largest summit
          for aspiring student innovators and entrepreneurs.
        </div>
        <div
          className={`absolute rounded-[20px] w-full h-full border-2 border-black top-4 ${
            odd ? "-left-4" : "-right-4"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default SponsorCard;
