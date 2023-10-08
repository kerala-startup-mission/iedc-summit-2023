// import Schedule from "./sections/Schedule";
import Events from "../sections/Events";
import Calls from "../sections/Calls";
import LandingPage from "../sections/landingPage";
import AboutSummit from "../sections/AboutSummit";
import IedcCircle from "../components/IedcCircle";
import About from "../sections/About";
import Footer from "../sections/Footer";
import Directions from "../sections/Directions";
import PrevSummut from "../sections/prevSummits";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { joinUs, faqData, eventData } from "../data";
import LoadingScreen from "../sections/loadingScreen";
import FAQ from "../sections/FAQ";
import Speakers from "../sections/Speakers";
import Schedule from "../sections/Schedule";

import { client, getData, urlToImage } from "../../sanityConfig.js";
import Partners from "../sections/Partners";


function mainPage() {
  const [loading, setLoading] = useState(false);

  const [speakers, setSpeakers] = useState([]);
  const [events, setEvents] = useState([]);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    setLoading(true);
    getData('*[_type == "speaker"] | order(order asc)')
      .then((data) => {
        setSpeakers(data);
        return data;
      })
      .then((data) => urlToImage(data))
      .then(() => setLoading(false))
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
    getData('*[_type == "schedule"] | order(order asc)')
      .then((data) => {
        setSchedule(data);
        return data;
      })
      .then((data) => urlToImage(data))
      .then(() => setLoading(false))
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  // const fetchData = (query, setData) => {
  //   setLoading((prevLoading) => prevLoading + 1); // Increment loading count for each request
  //   getData(query)
  //     .then((data) => setData(urlToImage(data)))
  //     .catch((error) => console.error("Error:", error))
  //     .finally(() => {
  //       setLoading((prevLoading) => prevLoading - 1); // Decrement loading count after each request
  //       if (loading === 0) setLoading(false); // Set loading to false if all requests are completed
  //     });
  // };
  
  // useEffect(() => {
  //   setLoading(3); // Set loading count to the number of requests (3 in this case)
  //   fetchData('*[_type == "speaker"] | order(order asc)', setSpeakers);
  //   fetchData('*[_type == "event"]', setEvents);
  //   fetchData('*[_type == "schedule"] | order(order asc)', setSchedule);
  // }, []);
  

  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const speakersSectionRef = useRef(null);
  const eventsSectionRef = useRef(null);
  const venueSectionRef = useRef(null);
  const navbarItems = [
    { text: "HOME", href: "#", sectionRef: homeSectionRef },
    { text: "ABOUT", href: "#about", sectionRef: aboutSectionRef },
    { text: "SPEAKERS", href: "#speakers", sectionRef: speakersSectionRef },
    { text: "EVENTS", href: "#events", sectionRef: eventsSectionRef },
    { text: "VENUE", href: "#venue", sectionRef: venueSectionRef },
  ];
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden bg-zinc-50">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar navbarItems={navbarItems} />
          <LandingPage sectionRef={homeSectionRef} />
          <AboutSummit sectionRef={aboutSectionRef} />
          <IedcCircle />
          <loadingScreen />
          <Events
            title="Events"
            button="Register Now"
            eventData={eventData}
            sectionRef={eventsSectionRef}
            eventDescrition=""
          />
          <Speakers sectionRef={speakersSectionRef} speakersData={speakers} />
          <Schedule scheduleData={schedule}/>
          <Calls title="Join Us" eventData={joinUs} eventDescrition="" />
          <PrevSummut />
          <About />
          <Directions sectionRef={venueSectionRef} />
          <Partners />
          <FAQ faqData={faqData} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default mainPage;
