import { useState } from "react";
import ScheduleTile from "../components/ScheduleTile";

function Schedule({ scheduleData }) {
  const [venue, setVenue] = useState("cetaaHall");
  let filteredSchedules = scheduleData.filter(
    (schedule) => schedule.venue === venue
  );
  const selectVenue = (e) => {
    setVenue(e.target.getAttribute("venue"));
    filteredSchedules = scheduleData.filter(
      (schedule) => schedule.venue === venue
    );
  };
  return (
    <div className="px-6 sm:px-16 md:w-11/12 py-10 sm:py-20 font-darker-grotesque">
      <h1 className="text-2xl sm:text-4xl lg:text-6xl text-start font-semibold">
        THE SCHEDULE
      </h1>

      <div className="flex gap-4 py-6 sm:py-8 lg:py-16 justify-between text-xl sm:text-2xl lg:text-3xl font-semibold lg:mx-[16vw]">
        <div
          className={`transition-colors	cursor-pointer	duration-500 ${
            venue === "djHall" ? "" : "text-theme-blue2"
          }`}
          onClick={selectVenue}
          venue={"djHall"}
        >
          DJ Hall
        </div>
        <div
          className={`transition-colors	cursor-pointer	duration-500 ${
            venue === "cetaaHall" ? "" : "text-theme-blue2"
          }`}
          onClick={selectVenue}
          venue={"cetaaHall"}
        >
          CETAA Hall
        </div>
        <div
          className={`transition-colors	cursor-pointer	duration-500 ${
            venue === "sargamStage" ? "" : "text-theme-blue2"
          }`}
          onClick={selectVenue}
          venue={"sargamStage"}
        >
          Sargam Stage
        </div>
        <div
          className={`transition-colors	cursor-pointer	duration-500 ${
            venue === "cgpuHall" ? "" : "text-theme-blue2"
          }`}
          onClick={selectVenue}
          venue={"cgpuHall"}
        >
          CGPU
        </div>
        <div
          className={`transition-colors	cursor-pointer	duration-500 ${
            venue === "substage" ? "" : "text-theme-blue2"
          }`}
          onClick={selectVenue}
          venue={"substage"}
        >
          Substage
        </div>
      </div>
      <div className="flex flex-col lg:flex-row text-lg sm:text-xl lg:text-2xl font-medium">
        <div className="flex-1 lg:order-first">
          {filteredSchedules.map((schedule, index) => {
            return (
              <ScheduleTile
                key={index}
                schedule={schedule}
                num={index + 1}
                top={index === 0}
                bottom={index + 1 === filteredSchedules.length}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Schedule;
