import { format } from "date-fns/esm";
import React from "react";

const AppointmentModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
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
          <div className="py-4 mt-6 flex flex-col gap-4">
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full"
            />
            <select className="select select-bordered w-full">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <button className="btn btn-accent input-bordered w-full">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
