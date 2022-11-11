import React from "react";

const InfoCard = ({ card }) => {
  const { img, title, description, bgClass } = card;
  return (
    <div
      className={`card p-4 text-white md:card-side bg-base-100 shadow-xl ${bgClass}`}
    >
      <figure>
        <img src={img} alt="info" />
      </figure>
      <div className="card-body md:text-left text-center">
        <h2 className="text-2xl">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
