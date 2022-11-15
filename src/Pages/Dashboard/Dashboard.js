import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard-container min-h-screen">
        <div className=" p-8 hidden lg:block">
          <h2>My Appointment</h2>
        </div>
        <div className="bg-gray-100 min-h-screen p-8 ">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl">My Appointment</h2>
            <button className="btn btn-outline">MAY 10, 2022</button>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Service</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>

                <tr className="hover">
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>

                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
