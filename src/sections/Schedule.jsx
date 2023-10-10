import { useState } from "react";
import ScheduleTile from "../components/ScheduleTile";

function Schedule({ scheduleData }) {
  const venues = [
    { name: "DJ Hall", id: "djHall" },
    { name: "CETAA Hall", id: "cetaaHall" },
    { name: "Sargam Stage", id: "sargamStage" },
    { name: "CGPU", id: "cgpuHall" },
    { name: "Substage", id: "substage" }
  ];
  const [selectedVenue, setSelectedVenue] = useState("cetaaHall");

  const handleOptionChange = (event) => {
    setSelectedVenue(event.target.value);
  };

  const filteredSchedules = scheduleData.filter(
    (schedule) => schedule.venue === selectedVenue
  );

  return (
    <div className="relative px-6 sm:px-16 md:w-11/12 py-10 sm:py-20 font-darker-grotesque">
      <div className="w-full space-y-6 text-center self-center">
        <h1 className="inline font-[700] text-[75px] bg-gradient-to-tr from-[#0597F2] to-[#6F04D9] bg-clip-text text-transparent">
          THE SCHEDULE
        </h1>
      </div>
      <div className="flex flex-col md:flex-row ">
        <div className="hidden text-3xl md:w-1/3 w-full  md:flex md:flex-col">
          <h1 className="mb-5 text-5xl font-bold">VENUES</h1>
          {venues.map((venueItem) => ( 
            <div
              key={venueItem.id}
              className={`transition-colors cursor-pointer duration-500 ${
                selectedVenue === venueItem.id ? "" : "text-theme-blue2"
              }`}
              onClick={() => setSelectedVenue(venueItem.id)}
            >
              {venueItem.name}
            </div>
          ))}
        </div>
        <div className=" block md:hidden rounded-md text-xl  mx-auto w-1/2">
          <select className="p-2 text-center text-white w-full rounded-md bg-blue-700" value={selectedVenue} onChange={handleOptionChange}>
            {venues.map((venue) => (
              <option className="text-black bg-white" key={venue.id} value={venue.id}>
                {venue.name}
              </option>
            ))}
          </select>
        </div>
        <div className="md:w-2/3 w-full flex flex-col lg:flex-row text-lg sm:text-xl lg:text-2xl font-medium">
          <div className="flex-1 lg:order-first">
            {filteredSchedules.map((schedule, index) => (
              <ScheduleTile
                key={index}
                schedule={schedule}
                num={index + 1}
                top={index === 0}
                bottom={index + 1 === filteredSchedules.length}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
