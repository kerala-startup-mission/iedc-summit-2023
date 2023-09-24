import React from "react";

import KSUMlogo from "../assets/img/footer/KSUM logo.png";
import IEDClogo from "../assets/img/footer/IEDC logo.png";
import cetLogo from "../assets/img/footer/Cet_emblem.png";
import IEDCcetLogo from "../assets/img/footer/IEDC CET logo.png";
import Team from "../components/Team";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1f1f1f] pt-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* First Grid Item */}
          <div className="flex w-1/2 p-5  flex-col">
            <div className="flex flex-wrap ">
              <img src={KSUMlogo} className="h-24 w-30" alt="KSUM Logo" />
              <img src={IEDClogo} className="h-28 w-30" alt="IEDC Logo" />
            </div>
            <div className="text-white ">
              <p className="text-base">Kerala Startup Mission | Government of Kerala</p>
              <p className="text-sm text-gray-300 pb-20">G3B, Thejaswini, Technopark Campus<br />Kariavattom, Trivandrum, Kerala, 695581</p>
              <p className="text-base text-gray-300">For Queries:</p>
              <p className="text-base text-white">iedckerala@startupmission.in</p>
              <p className="text-base text-white pt-5 pb-7">Bergin Russel<br />iedckerala@startupmission.in<br />6238998379</p>
              <a href="https://www.facebook.com/" className="text-gray-300 pl-4">Facebook</a>
              <a href="https://www.instagram.com/" className="text-gray-300 pl-1 pr-1">Instagram</a>
              <a href="https://www.twitter.com/" className="text-gray-300">Twitter</a>
              <a href="https://www.linkedin.com/" className="text-gray-300">LinkedIn</a>
            </div>
          </div>

          {/* Divider */}
          <div className="md:block hidden border-l border-gray-300"></div>

          {/* Second Grid Item */}
          <div className="flex w-1/2 p-5 flex-col">
            <div className="flex space-x-4">
              <img src={cetLogo} className="h-24 w-28" alt="CET Logo" />
              <img src={IEDCcetLogo} className="h-24 w-30" alt="IEDC CET Logo" style={{ paddingTop: 10 }} />
            </div>
            <div className="text-white pt-10 pl-4">
              <p className="text-base">Innovation and Entrepreneurship Development Centre | CET</p>
              <p className="text-sm text-gray-300 pb-20">College of Engineering Trivandrum, Sreekaryam, Thiruvananathapuram, Kerala, 695016</p>
              <p className="text-base text-gray-300">For Queries:</p>
              <p className="text-base text-white">iedcsummit@cet.ac.in</p>
              <p className="text-base text-white pt-5 pb-7">IEDC CET<br />iedc@cet.ac.in<br />+91 9995620503</p>
              <a href="https://www.facebook.com/iedccet/" className="text-gray-300 pl-4">Facebook</a>
              <a href="https://www.instagram.com/iedc_cet/?hl=en" className="text-gray-300 pl-1 pr-1"></a>
              <a href="https://twitter.com/CetIedc" className="text-gray-300"></a>
              <a href="https://www.linkedin.com/company/innovation-and-entrepreneurship-development-cell-cet/?originalSubdomain=in" className="text-gray-300">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-12">
          <p className="text-sm text-gray-600 text-center">
            &copy; {new Date().getFullYear()} Kerala Startup Mission. All Rights Reserved.
          </p>
          {/* Include the 'Team' component if needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;