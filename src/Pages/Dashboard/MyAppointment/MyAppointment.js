import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Spinner from "../../Spinner/Spinner";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const [date, setDate] = useState(new Date());
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
      return function cleanup() {
        clearInterval(timer);
      };
    }, 1000);
  }, []);

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen">
      <div className="bg-gray-100 min-h-screen p-8 ">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl">My Appointment</h2>
          <button className="btn btn-outline">{date.toLocaleString()}</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Treatment</th>
                <th>Date</th>
                <th>Time</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {bookings &&
                bookings?.map((booking, index) => (
                  <tr key={booking._id}>
                    <th>{index + 1}</th>
                    <td>{booking.patientName}</td>
                    <td>{booking.treatment}</td>
                    <td>{booking.appointmentDate}</td>
                    <td>{booking.slot}</td>
                    <td>
                      {booking?.price && !booking.paid && (
                        <Link to={`/dashboard/payment/${booking._id}`}>
                          <button className="btn btn-primary btn-sm">
                            pay
                          </button>
                        </Link>
                      )}
                      {booking.price && booking.paid && (
                        <span className="text-green-500">Paid</span>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAppointment;
