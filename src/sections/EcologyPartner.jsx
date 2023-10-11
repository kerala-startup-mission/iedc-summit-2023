import React from "react";
import SponsorCard from "../components/SponsorCard";

import logo from "../assets/img/partners/urbanTrash2.png";

const EcologyPartner = () => {
  const data = {
    img: logo,
    title: "Urban Trash",
    desc: "Urban Trash, a Kerala-based waste aggregation startup, is leading a revolution in the waste management sector. Their comprehensive approach connects every aspect, from waste collection to treatment. With their technology-driven platform, they don't just streamline services for businesses; they also open doors to employment opportunities for the youth and cultivate an environment for innovation. Their strong focus on recycling and an extensive vendor network makes a substantial contribution to environmental preservation and sustainable practices. Urban Trash is not just a waste management service; it's a visionary catalyst for transformation.",
  };

  return (
    <div className="relative font-darker-grotesque flex flex-col gap-12 bg-gradient-to-r from-[#0597f266] to-[#6f04d966] py-16 ">
      <div className="absolute overflow-hidden  opacity-5 text-[#0597F2] lg:top-[-70px] md:top-[-20px] top-0 w-full text-center self-center">
        <h1 className="lg:text-[200px] sm:text-[120px] whitespace-nowrap font-bold">
          ECOLOGY PARTNER
        </h1>
      </div>
      <h1 className="font-bold text-5xl text-[#0597F2] text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#0597F2] to-[#6F04D9] mb-12">
        ECOLOGY PARTNER
      </h1>
      <SponsorCard data={data} odd />
    </div>
  );
};

export default EcologyPartner;
