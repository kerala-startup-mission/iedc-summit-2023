import React from "react";
import background from "../assets/img/partners/background.png";
import iia from "../assets/img/partners/iia.png";
import cdac from "../assets/img/partners/cdac-logo.png";
import cdacVega from "../assets/img/partners/cdac.png";
import dapp from "../assets/img/partners/secureDapp.png";
import gdsc from "../assets/img/partners/gdsc.png";
import kagazee from "../assets/img/partners/kagazee.png";
import pheonix from "../assets/img/partners/pheonixGuild.png";
import polygon from "../assets/img/partners/polygon.png";
import riglabs from "../assets/img/partners/riglabs.png";
import tie from "../assets/img/partners/tie.jpg";
import tinkerhub from "../assets/img/partners/tinkerhub.png";
import ulearn from "../assets/img/partners/ulearn.png";
import microsoft from "../assets/img/partners/microsoft.png";
import ola from "../assets/img/partners/ola.png";
import microsoft2 from "../assets/img/partners/microsoft2.png";
import genRobotics from "../assets/img/partners/genRobotics.png";
import urbanTrash from "../assets/img/partners/urbanTrash.png";
import drone from "../assets/img/partners/drone.png";
import careStack from "../assets/img/partners/careStack.png";
import entri from "../assets/img/partners/entri.png";
import haeal from "../assets/img/partners/haeal.png";
import pronetin from "../assets/img/partners/pronetin.png";
import milma from "../assets/img/partners/milma.svg";
import royalEnfield from "../assets/img/partners/royalEnfield.png";

const Partners = () => {
  const partnerLogos = [
    cdac,
    careStack,
    dapp,
    entri,
    gdsc,
    ola,
    kagazee,
    iia,
    pheonix,
    polygon,
    genRobotics,
    drone,
    riglabs,
    tie,
    tinkerhub,
    ulearn,
    microsoft,
    microsoft2,milma,royalEnfield
  ];
  const ecoPartnersLogos = [urbanTrash];
  const industryPartner = [cdacVega];
  const giftPartner = [haeal];
  const certificatePartner=[pronetin]
  return (
    <div className=" w-full py-10 font-darker-grotesque bg-gradient-to-r from-[#0597f266] to-[#6f04d966] space-y-4 mb-14 ">
      <div className="relative w-full">
      
      <h1 className="font-bold text-5xl text-[#0597F2] text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#0597F2] to-[#6F04D9] mb-12">
      COMMUNITY PARTNERS
      </h1>

      <div className="px-10 my-10 flex flex-wrap gap-6 justify-center items-center">
        {partnerLogos.map((partner) => (
          <div className="w-24 md:w-32 my-6 mx-3 flex justify-center items-center">
            <img width={20} className="w-40" src={partner} />
          </div>
        ))}
      </div>
      </div>
      
      <h1 className="font-bold text-5xl text-[#0597F2] text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#0597F2] to-[#6F04D9] mb-12">
      INDUSTRY PARTNERS
      </h1>

      <div className="px-10 my-10 flex flex-wrap gap-6 justify-center items-center">
        {industryPartner.map((partner) => (
          <div className="w-24 md:w-32 my-6 mx-3 flex justify-center items-center">
            <img width={20} className="w-40" src={partner} />
          </div>
        ))}
      </div>
      
      <h1 className="font-bold text-5xl text-[#0597F2] text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#0597F2] to-[#6F04D9] mb-12">
      GIFT PARTNER
      </h1>

      <div className="px-10 flex flex-wrap gap-6 justify-center items-center">
        {giftPartner.map((partner) => (
          <div className="w-24 md:w-32 mx-3 flex justify-center items-center">
            <img width={20} className="w-40" src={partner} />
          </div>
        ))}
      </div>
      <h1 className="font-bold text-5xl text-[#0597F2] text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#0597F2] to-[#6F04D9] mb-12">
      CERTIFICATE PARTNER
      </h1>

      <div className="px-10 flex flex-wrap gap-6 justify-center items-center">
        {certificatePartner.map((partner) => (
          <div className="w-24 md:w-32 mx-3 flex justify-center items-center">
            <img width={20} className="w-40" src={partner} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
