import React from "react";
import appointment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor.png";
import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton";
const MakeAppointment = () => {
  return (
    <section
      className=" mt-10"
      style={{
        backgroundImage: `url(${appointment})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      }}
    >
      <div className="hero lg:mt-56 ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="-mt-44 -mb-4 hidden md:block lg:w-1/2 rounded-lg"
            alt=""
          />
          <div>
            <span className="text-xl text-primary">Appointment</span>
            <h1 className="text-5xl font-bold text-white">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
