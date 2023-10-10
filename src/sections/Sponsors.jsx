import React from "react";
import SponsorCard from "../components/SponsorCard";

const Sponsors = () => {
  return (
    <div className="relative font-darker-grotesque flex flex-col gap-12 bg-gradient-to-r from-[#0597f266] to-[#6f04d966] py-16 mb-14">
      <div className="absolute overflow-hidden  opacity-5 text-[#0597F2] lg:top-[-70px] md:top-[-20px] top-0 w-full text-center self-center">
        <h1 className="lg:text-[200px] sm:text-[120px] whitespace-nowrap font-bold">
          OUR SPONSORS
        </h1>
      </div>
      <h1 className="font-bold text-5xl text-[#0597F2] text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#0597F2] to-[#6F04D9] mb-12">
        OUR SPONSORS
      </h1>
      <SponsorCard odd={true} />
      <SponsorCard odd={false} />
    </div>
  );
};

export default Sponsors;
