import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";

import bg from "../../../assets/images/bg.png";
import banner from "../../../assets/images/chair.png";

const AppointmentBanner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero  py-20">
        <div className="hero-content flex-col gap-12 lg:flex-row-reverse">
          <img
            src={banner}
            className="w-full max-w-lg rounded-lg shadow-2xl"
            alt=""
          />
          <div className="w-full lg:w-1/2">
            <DayPicker
              style={{ backgroundColor: "none" }}
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
            <p>You have Selected date: {format(selectedDate, "PP")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
