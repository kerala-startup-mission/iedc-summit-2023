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
import { joinUs, faqData } from "../data";
import LoadingScreen from "../sections/loadingScreen";
import FAQ from "../sections/FAQ";
import Speakers from "../sections/Speakers";
import Schedule from "../sections/Schedule";

import { getData, urlToImage } from "../../sanityConfig.js";
import Partners from "../sections/Partners";
import Sponsors from "../sections/Sponsors";

function mainPage() {
  const [loading, setLoading] = useState(false);

  const [speakers, setSpeakers] = useState([]);
  const [events, setEvents] = useState([]);
  const [schedule, setSchedule] = useState([]);

  const fetchData = (query, setData) => {
    // Increment loading count for each request
    getData(query)
      .then((data) => setData(urlToImage(data)))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    setLoading(true);
    fetchData('*[_type == "speaker"] | order(order asc)', setSpeakers);
    fetchData('*[_type == "event"]', setEvents);
    fetchData('*[_type == "schedule"] | order(order asc)', setSchedule);
    setTimeout(() => setLoading(false), 4000); // Wait for all requests to finish
  }, []);

  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const speakersSectionRef = useRef(null);
  const eventsSectionRef = useRef(null);
  const scheduleSectionRef = useRef(null);
  const venueSectionRef = useRef(null);
  const navbarItems = [
    { text: "HOME", href: "#", sectionRef: homeSectionRef },
    { text: "ABOUT", href: "#about", sectionRef: aboutSectionRef },
    { text: "EVENTS", href: "#events", sectionRef: eventsSectionRef },
    { text: "SPEAKERS", href: "#speakers", sectionRef: speakersSectionRef },
    { text: "SCHEDULE", href: "#schedule", sectionRef: scheduleSectionRef },
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
            eventData={events}
            sectionRef={eventsSectionRef}
          />
          <Speakers sectionRef={speakersSectionRef} speakersData={speakers} />
          <Schedule scheduleData={schedule} sectionRef={scheduleSectionRef} />
          <Calls title="Join Us" eventData={joinUs} eventDescrition="" />
          <PrevSummut />
          <About />
          <Directions sectionRef={venueSectionRef} />
          <Partners />
          <Sponsors />
          <FAQ faqData={faqData} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default mainPage;
