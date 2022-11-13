import { format } from "date-fns/esm";
import React from "react";
import toast from "react-hot-toast";

const AppointmentModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      email,
      patientName,
      phone,
      slot,
    };
    setTreatment(null);
    toast.success("Appointment Booking Successfully", { duration: 1500 });

    console.log(booking);
  };

  return (
    <>
      <input
        type="checkbox"
        id="booking-appointment"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-appointment"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="py-4 mt-6 flex flex-col gap-4"
          >
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="input input-bordered w-full"
            />
            <button className="btn btn-accent input-bordered w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
