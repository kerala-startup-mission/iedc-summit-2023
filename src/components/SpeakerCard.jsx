import React, { useState } from "react";

function Speaker({ speaker }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" flex flex-col space-y-2 items-center">
    <div className="bg-white w-[240px] h-[240px] rounded-[240px] p-[8px]">
      <div
        className="group hover:animate-shrink-circle relative w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="w-full h-full object-cover rounded-full border border-[6px] border-blue-700"
          src={speaker.img}
          alt="Speaker"
        />
        <div
          className={`${
            isHovered ? "animate-grow-circle opacity-100" : "opacity-0"
          } absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center rounded-full overflow-hidden`}
        >
          <p className="text-white text-center font-dm-sans text-lg font-medium leading-[1.05]">
            {speaker.title1}
          </p>
          <p className="text-white text-center font-dm-sans text-lg font-medium leading-[1.05]">
            {speaker.title2}
          </p>
        </div>
      </div>
   
    </div>
            <h className="text-xl font-[600] text-white font-dm-sans">{speaker.name}</h>
    </div>
  );
}

export default Speaker;
