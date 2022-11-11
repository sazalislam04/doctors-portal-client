import React from "react";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      id: 1,
      img: fluoride,
      title: "Fluoride Treatment",
      text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      img: cavity,
      title: "Cavity Filling",
      text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 1,
      img: whitening,
      title: "Teeth Whitening",
      text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="py-20">
      <div className="text-center mb-10">
        <h5 className="text-primary">OUR SERVICES</h5>
        <h2 className="text-accent text-3xl">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
