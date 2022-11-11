import React from "react";

const InfoCard = ({ card }) => {
  const { img, title, description, bgClass } = card;
  return (
    <div
      className={`card p-4 text-white card-side bg-base-100 shadow-xl ${bgClass}`}
    >
      <figure>
        <img src={img} alt="info" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
