import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Spinner from "../../Spinner/Spinner";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import AvailableAppointmentDetails from "./AvailableAppointmentDetails";

const AvailableAppointment = ({ selectedDate }) => {
  const date = format(selectedDate, "PP");

  const [treatment, setTreatment] = useState(null);

  const {
    data: availableAppointment = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["availableAppointment", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointment-options?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

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
        {treatment && (
          <AppointmentModal
            treatment={treatment}
            setTreatment={setTreatment}
            selectedDate={selectedDate}
            refetch={refetch}
          />
        )}
      </div>
    </div>
  );
};

export default AvailableAppointment;
