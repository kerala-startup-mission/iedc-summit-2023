import React, { useState } from "react";

function callCard(props) {
  const { eventName, eventImg, eventDescription, eventLink, buttonTitle } =
    props;

  return (
    <div className="flex-none mb-6  overflow-hidden relative flex flex-col h-[451px] bg-[#2c2c2c]  border-[1px] border-[#3866F266] shadow-lg hover:shadow-xl  w-[340px] rounded-lg lg:rounded-2xl ">
      <img
        src={eventImg}
        className=" shadow-lg h-full flex-1 h-1/2 bg-orange-300   rounded-t-md object-cover"
      />
      <div className="font-dm-sans flex-[2] flex items-center flex-col w-full">
        <div className="text-white w-11/12 h-fit mt-4 items-center  mx-auto">
          <h1 className="font-[900] text-left text-2xl leading-tight">
            {eventName}
          </h1>
          <p className=" font-[300] block  text-sm text-lg">
            {eventDescription}
          </p>
        </div>
        <div className="justify-center flex h-full relative w-full">
          <a
            href=""
            target="_blank"
            className="text-center absolute border-[1px] border-black bottom-2  lg:right-2 lg:right-11 text-md font-medium w-[151px] h-8 rounded-md flex items-center justify-center bg-gray-200 "
            rel="noreferrer"
          >
            {buttonTitle}
          </a>
        </div>
      </div>
    </div>
  );
}

export default callCard;