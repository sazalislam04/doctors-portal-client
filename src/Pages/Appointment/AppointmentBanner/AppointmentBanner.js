import React from "react";
import { DayPicker } from "react-day-picker";
import bg from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";
const AppointmentBanner = ({ setSelectedDate, selectedDate }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-12 lg:flex-row-reverse">
          <img
            src={chair}
            className="w-full lg:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div className="">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
