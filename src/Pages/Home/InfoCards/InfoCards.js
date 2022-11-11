import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cards = [
    {
      id: 1,
      img: clock,
      bgClass: "bg-primary bg-graident-to-r from-primary to-secondary",
      title: "Opening Hours",
      description: "Lorem Ipsum is simply dummy text of the pri",
    },
    {
      id: 2,
      img: marker,
      bgClass: "bg-accent bg-graident-to-r from-accent to-primary",
      title: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
    },
    {
      id: 3,
      img: phone,
      bgClass: "bg-primary bg-graident-to-r from-primary to-secondary",
      title: "Contact us now",
      description: "+000 123 456789",
    },
  ];
  return (
    <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => (
        <InfoCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default InfoCards;
