import React from "react";
import logo from "../assets/img/center.png";

const SponsorCard = ({ odd, data }) => {
  return (
    <div
      className={` p-12  ${
        odd ? "-ml-36 pl-44 self-start" : "-mr-40 pr-44 self-end"
      } flex flex-col sm:flex-row gap-4 md:gap-8 lg:w-11/12 border-2 border-[#6294e8] rounded-[20px] relative`}
    >
      <img
        src={data.img}
        className={`${
          odd ? "order-1" : "order-1 sm:order-3"
        } sm:w-[25%] md:w-[12%] rounded-[10px] object-contain`}
      />
      <div className="order-1">
        <div
          className={`${
            odd ? "" : "text-end"
          } text-[#454545] text-2xl md:text-3xl font-bold`}
        >
          {data.title}
        </div>
        <div className={`${odd ? "" : "text-end"} sm:text-lg font-medium`}>
          {data.desc}
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
