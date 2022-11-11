import React from "react";
import Banner from "../Banner/Banner";
import Care from "../Care/Care";
import Contact from "../Contact/Contact";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-4">
      <Banner />
      <InfoCards />
      <Services />
      <Care />
      <MakeAppointment />
      <Testimonial></Testimonial>
      <Contact />
    </div>
  );
};

export default Home;
