import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <section
      className="py-8 mt-5"
      style={{
        backgroundImage: `url(${appointment})`,
        backgrounSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        backgroundAttachment: "fixed",
        height: "100%",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <span className="text-primary">Contact Us</span>
        <h2 className="text-3xl text-white">Stay connected with us</h2>
        <div className="">
          <div className="card lg:w-96 flex-shrink-0 w-full  shadow-2xl">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <PrimaryButton>Login</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
