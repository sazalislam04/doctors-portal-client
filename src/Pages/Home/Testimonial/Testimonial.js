import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import ClientReview from "./ClientReview";

const Testimonial = () => {
  const testimonialsData = [
    {
      id: 1,
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      client_name: "Winson Herry",
      location: "California",
      img: people1,
    },
    {
      id: 2,
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      client_name: "Winson Herry",
      location: "California",
      img: people2,
    },
    {
      id: 3,
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      client_name: "Winson Herry",
      location: "California",
      img: people3,
    },
  ];

  return (
    <div className="py-16">
      <div className="flex justify-between">
        <div>
          <span className="text-xl text-primary">Testimonial</span>
          <h2 className="text-3xl">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-32 h-32" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonialsData.map((data) => (
          <ClientReview key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
