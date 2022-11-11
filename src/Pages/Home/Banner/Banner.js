import React from "react";
import banner from "../../../assets/images/chair.png";
import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero banner py-5 lg:py-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <img src={banner} className="w-full rounded-lg shadow-2xl" alt="" />
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
