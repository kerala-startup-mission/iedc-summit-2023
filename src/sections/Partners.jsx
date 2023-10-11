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
import pronetin from "../assets/img/partners/pronetin.jpg";
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
    microsoft2,
  ];
  const ecoPartnersLogos = [urbanTrash];
  const industryPartner = [cdacVega];
  const giftPartner = [haeal];
  const certificatePartner=[pronetin]
  return (
    <div className="w-full py-10 bg-gradient-to-tr from-[#0597F2] to-[#6F04D9] space-y-4">
      <h1 className="font-medium md:font-[500] text-center text-white font-darker-grotesque text-5xl md:text-[60px]">
        Community Partners
      </h1>

      <div className="px-10 my-10 flex flex-wrap gap-6 justify-center items-center">
        {partnerLogos.map((partner) => (
          <div className="w-24 md:w-32 my-6 mx-3 flex justify-center items-center">
            <img width={20} className="w-40" src={partner} />
          </div>
        ))}
      </div>
      <h1 className="font-medium md:font-[500] text-center text-white font-darker-grotesque text-5xl md:text-[60px]">
        Ecosystem Partners
      </h1>

      <div className="px-10 my-10 flex flex-wrap gap-6 justify-center items-center">
        {ecoPartnersLogos.map((partner) => (
          <div className="w-24 md:w-32 my-6 mx-3 flex justify-center items-center">
            <img width={20} className="w-40" src={partner} />
          </div>
        ))}
      </div>
      <h1 className="font-medium md:font-[500] text-center text-white font-darker-grotesque text-5xl md:text-[60px]">
        Industry Partner
      </h1>

      <div className="px-10 my-10 flex flex-wrap gap-6 justify-center items-center">
        {industryPartner.map((partner) => (
          <div className="w-24 md:w-32 my-6 mx-3 flex justify-center items-center">
            <img width={20} className="w-40" src={partner} />
          </div>
        ))}
      </div>
      <h1 className="font-medium md:font-[500] text-center text-white font-darker-grotesque text-5xl md:text-[60px]">
        Gift Partner
      </h1>

      <div className="px-10 flex flex-wrap gap-6 justify-center items-center">
        {giftPartner.map((partner) => (
          <div className="w-24 md:w-32 mx-3 flex justify-center items-center">
            <img width={20} className="w-40" src={partner} />
          </div>
        ))}
      </div>
      <h1 className="font-medium md:font-[500] text-center text-white font-darker-grotesque text-5xl md:text-[60px]">
        Certificate Partner
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
