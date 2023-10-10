import React, { useState } from "react";

function callCard(props) {
  const { eventName, eventImg, eventDescription, eventLink, buttonTitle } =
    props;

  return (
    <div className="flex-none mb-12  overflow-hidden relative flex flex-col h-[451px] bg-[#2c2c2c]  border-[1px] border-[#3866F266] shadow-lg hover:shadow-xl  md:w-[340px] w-12/12 rounded-lg lg:rounded-2xl ">
      <img
        src={eventImg}
        className=" shadow-lg h-full flex-1 bg-orange-300   rounded-t-md object-cover"
      />
      <div className="font-dm-sans flex-[2] flex items-center flex-col w-full">
        <div className="text-white w-11/12 h-fit mt-4 items-center  mx-auto">
          <h1 className="font-[900] text-xl text-center leading-tight">
            {eventName}
          </h1>
          
        </div>
        <div className="justify-center items-center  flex h-full relative w-full">
          <h
            href=""
            target="_blank"
            className="mx-text-center  text-white border-[1px] border-gray-200 bottom-2  lg:right-2  text-md font-medium w-24 h-6 rounded-md flex items-center justify-center  "
            rel="noreferrer"
          >
            {buttonTitle}
          </h>
        </div>
      </div>
    </div>
  );
}

export default callCard;