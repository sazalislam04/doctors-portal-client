import React from "react";

const AvailableAppointmentDetails = ({ appointment, setTreatment }) => {
  const { name, slots } = appointment;
  return (
    <div className="card bg-base-100 w-72 lg:w-full mx-auto shadow-xl mt-20">
      <div className="card-body text-center">
        <h2 className="text-2xl text-secondary text-center">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(appointment)}
            htmlFor="booking-appointment"
            className="btn btn-secondary text-white"
          >
            {" "}
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointmentDetails;
