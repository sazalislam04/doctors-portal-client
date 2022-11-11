import React from "react";

const Service = ({ service }) => {
  const { img, title, text } = service;
  return (
    <div className="card bg-base-100 text-center shadow-md">
      <figure>
        <img src={img} alt="service" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl">{title}</h2>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Service;
