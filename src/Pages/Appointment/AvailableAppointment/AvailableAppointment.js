import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import AvailableAppointmentDetails from "./AvailableAppointmentDetails";

const AvailableAppointment = ({ selectedDate }) => {
  const [availableAppointment, setAvailableAppointment] = useState([]);

  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appointment.json")
      .then((res) => res.json())
      .then((data) => {
        setAvailableAppointment(data);
      });
  }, []);

  return (
    <div className="py-20">
      <p className="text-center text-secondary text-xl px-4">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableAppointment.map((appointment) => (
          <AvailableAppointmentDetails
            key={appointment._id}
            appointment={appointment}
            setTreatment={setTreatment}
          />
        ))}
        {treatment && <AppointmentModal treatment={treatment} />}
      </div>
    </div>
  );
};

export default AvailableAppointment;
