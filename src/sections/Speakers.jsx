import { useInView } from "react-intersection-observer";
import Speaker from "../components/SpeakerCard";
import WaveLine from "../components/WaveLine";
import "../assets/css/animations.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState,useEffect } from "react";

function Speakers({ sectionRef ,speakersData }) {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });
  const [slides, setSlidesPerView] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 600) {
        setSlidesPerView(1);
      } else if (screenWidth <= 1200) {
        setSlidesPerView(2);
      } else if (screenWidth <= 1550) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // if (!isMobile) {
  return (
    <div
      ref={sectionRef}
      className="relative w-full mt-10 flex-shrink-0 bg-gradient-to-r from-[#0597F2] to-[#6F04D9]  px-7 py-12 overflow-hidden"
    >
      <div
        ref={ref}
        className={`${inView ? "animate-right" : "animate-right-return"}`}
      >
        <WaveLine
          position="absolute top-16 md:top-0 -right-48"
          direction={true}
        />
        <WaveLine
          position="absolute top-20 md:top-4 -right-48"
          direction={true}
        />
        <WaveLine
          position="absolute top-24 md:top-8 -right-48"
          direction={true}
        />
        <WaveLine
          position="absolute top-28 md:top-12 -right-48"
          direction={true}
        />
        <WaveLine
          position="absolute top-32 md:top-16 -right-48"
          direction={true}
        />
      </div>
      <div
        className={`flex justify-center text-white text-6xl font-darker-grotesque text-center font-medium whitespace-nowrap ${
          // inView ? "animate-move" : "animate-move-return"
          ""
        }`}
      >
        <h1>The Speakers</h1>
      </div>
      <div className="absolute overflow-hidden opacity-5 text-white xl:top-[-100px] lg:top-[-70px] md:top-[-20px] hidden-xs top-0 w-full space-y-6 text-center self-center">
        <h1 className="xl:text-[250px] lg:text-[200px] md:text-[150px] sm:text-[120px] whitespace-nowrap font-bold ">
          The Speakers
        </h1>
      </div>
      <div className="  lg:h-3/4 4/5">
        <div
          className={` hidden  mb-20 lg:mb-40 mt-10 lg:grid lg:grid-cols-4 flex flex-col items-center gap-20 lg:ml-10`}
        >
          {speakersData.map((speaker, index) => (
            <Speaker speaker={speaker} key={index} />
          ))}
        </div>
        <div
          className="lg:hidden flex"
        >
          <Swiper
          
            slidesPerView={slides}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
          {speakersData.map((speaker, index) => (
            <SwiperSlide>
            <Speaker  speaker={speaker} key={index} /></SwiperSlide>
          ))}
          </Swiper>
        </div>
        
      </div>

      <div className={`${inView ? "animate-left" : "animate-left-return"}`}>
        <WaveLine position="absolute bottom-0 -left-48" direction={false} />
        <WaveLine position="absolute bottom-4 -left-48" direction={false} />
        <WaveLine position="absolute bottom-8 -left-48" direction={false} />
        <WaveLine position="absolute bottom-12 -left-48" direction={false} />
        <WaveLine position="absolute bottom-16 -left-48" direction={false} />
      </div>
    </div>
  );
}

export default Speakers;
