import { useState } from "react";
import ScheduleTile from "../components/ScheduleTile";
import map from "../assets/img/cet_map.jpg"

function Schedule({ scheduleData, sectionRef }) {
  const venues = [
    { title: "Main Stage", value: "mainStage" },
    { title: "DJ Hall", value: "djHall" },
    { title: "CGPU Hall", value: "cgpuHall" },
    { title: "CETAA Hall", value: "ceataaHall" },
    { title: "EC Seminar Hall", value: "ecSeminarHall" },
    { title: "PG Kuriakose Hall", value: "pgKuriakoseHall" },
    { title: "Mech Seminar Hall", value: "mechSeminarHall" },
    { title: "EEE PG Seminar Hall", value: "eeePgSeminarHall" },
    { title: "Civil Seminar Hall 1", value: "civilSeminarHall1" },
    { title: "Civil Seminar Hall 2", value: "civilSeminarHall2" },
    { title: "EC Conference Hall", value: "ecConferenceHall" },
    { title: "Archie Department", value: "archieDept" },
    { title: "CS", value: "cs" },
    { title: "MCA", value: "mca" },
    { title: "Dhwani Stage", value: "dhwaniStage" },
    { title: "Other Venues", value: "otherVenues" },
  ];
  const [selectedVenue, setSelectedVenue] = useState("mainStage");

  const handleOptionChange = (event) => {
    setSelectedVenue(event.target.value);
  };

  const filteredSchedules = scheduleData.filter(
    (schedule) => schedule.venue === selectedVenue
  );

  return (
    <div ref={sectionRef} className="relative px-6 sm:px-16 md:w-11/12 py-10 sm:py-20 font-darker-grotesque">
      <div className="w-full space-y-6 text-center self-center">
        <h1 className="inline font-[700] text-[75px] bg-gradient-to-tr from-[#0597F2] to-[#6F04D9] bg-clip-text text-transparent">
          THE SCHEDULE
        </h1>
      </div>
      <div className="flex flex-col md:flex-row ">
        <div className="hidden text-2xl font-bold  md:w-1/3 w-full  md:flex md:flex-col">
          <h1 className="mb-5 text-5xl    font-bold ">VENUES</h1>
          {venues.map((venueItem, index) => (
            <div
              key={index}
              className={`transition-colors cursor-pointer duration-500 ${
                selectedVenue === venueItem.value ? "text-blue-700" : "text-gray-400"
              }`}
              onClick={() => setSelectedVenue(venueItem.value)}
            >
              {venueItem.title}
            </div>
          ))}
        </div>
        <div className=" block md:hidden rounded-md text-xl  mx-auto w-1/2">
          <select
            className="p-2 text-center text-white w-full rounded-md bg-blue-700"
            value={selectedVenue}
            onChange={handleOptionChange}
          >
            {venues.map((venue, index) => (
              <option
                className="text-black bg-white"
                key={index}
                value={venue.value}
              >
                {venue.title}
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
      <div className="">
        <img src={map} className="rounded-xl lg:rounded-3xl" />
      </div>
    </div>
  );
}

export default Schedule;
