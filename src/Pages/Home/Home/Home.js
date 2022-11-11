import React from "react";
import Banner from "../Banner/Banner";
import Care from "../Care/Care";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="mx-4">
      <Banner />
      <InfoCards />
      <Services />
      <Care />
    </div>
  );
};

export default Home;
