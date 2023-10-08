import Tickets from "../components/Tickets";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import EventSearch from "../components/EventSearch";

function Events(props) {
  const { title, sectionRef, eventData } = props;

  const [activeLink, setActiveLink] = useState("summitDayEvents");

  const links = [
    { title: "Summit Day Events", value: "summitDayEvents" },
    { title: "Road to summit", value: "roadToSummit" },
    {
      title: "Everything is Entreprenuership",
      value: "everythingIsEntreprenuership",
    },
  ];
  const [categorisedEvents, setCategorisedEvents] = useState(
    eventData.filter((event) => event.category === activeLink)
  );
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setCategorisedEvents(eventData.filter((event) => event.category === link));
  };
  console.log(categorisedEvents);
  return (
    <div className="mt-4 md:pt-4 bg-zinc-50 w-full flex justify-center">
      <div
        ref={sectionRef}
        className="relative space-y-10 font-dm-sans  lg:w-10/12 w-11/12  flex flex-col "
      >
        <div className="absolute overflow-hidden z-10 opacity-5 text-[#0597F2] xl:top-[-100px] lg:top-[-70px] md:top-[-20px] hidden-xs top-0 w-full space-y-6 text-center self-center">
          <h1 className="xl:text-[250px] lg:text-[200px] md:text-[150px] sm:text-[120px] whitespace-nowrap font-bold">
            {title}
          </h1>
        </div>
        <h1 className="font-[700] text-[75px] text-center text-[#0065B2]">
          {title}
        </h1>
        <EventSearch eventData={eventData} />
        <div className="w-full flex flex-col">
          <div className="flex flex-col p-0 w-full  custom2:p-10">
            <nav>
              <div className=" w-full">
                <div className=" items-start text-2xl flex flex-wrap flex-col md:flex-row  font-darker-grotesque font-semibold custom1:flex-row custom2:flex-col custom2:items-center custom1:items-start">
                  {links.map((link) => (
                    <button
                      key={link.value}
                      onClick={() => handleLinkClick(link.value)}
                      className={` w-full md:w-1/3 nav-link ml-0 p-2 custom1:ml-0 ${
                        activeLink === link.value
                          ? "text-[#3866F2] bg-white rounded-md shadow-md"
                          : "text-[#858585]"
                      }`}
                    >
                      {link.title}
                    </button>
                  ))}
                  <hr className="w-full border-[1px] mt-2 opacity-30 border-black"></hr>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="hidden md:flex md:flex-wrap gap-16 md:gap-0 pb-8 md:justify-evenly horiz-scroll ">
          {categorisedEvents &&
            categorisedEvents.length > 0 &&
            categorisedEvents.map(
              (ticket, index) =>
                ticket.category === activeLink && (
                  <Tickets
                    key={index}
                    eventName={ticket.title}
                    eventImg={ticket.poster}
                    eventDescription={ticket.description}
                    eventLink={ticket.link}
                    eventButton={ticket.buttonText}
                  />
                )
            )}
        </div>
        <div className="md:hidden flex md:flex-wrap gap-16 md:gap-0 pb-8 md:justify-evenly horiz-scroll ">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {categorisedEvents &&
              categorisedEvents.length > 0 &&
              categorisedEvents.map(
                (ticket, index) =>
                  ticket.category === activeLink && (
                    <SwiperSlide>
                      <Tickets
                        key={index}
                        eventName={ticket.title}
                        eventImg={ticket.image}
                        eventDescription={ticket.description}
                        eventLink={ticket.link}
                        eventButton={ticket.buttonText}
                      />
                    </SwiperSlide>
                  )
              )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Events;
