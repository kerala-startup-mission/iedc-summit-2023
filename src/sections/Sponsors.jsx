import React from "react";
import SponsorCard from "../components/SponsorCard";

const Sponsors = () => {
  return (
    <div className="font-darker-grotesque flex flex-col gap-12">
      <SponsorCard odd={true} />
      <SponsorCard odd={false} />
    </div>
  );
};

export default Sponsors;
