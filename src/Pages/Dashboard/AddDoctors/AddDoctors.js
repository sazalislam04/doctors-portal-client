import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";

const AddDoctors = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imgHostKey = process.env.REACT_APP_imgbb;
  const navigate = useNavigate();
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctors = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };

          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctors),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success(`Added New Doctors`);
                navigate("/dashboard/managedoctors");
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl">Add A Doctor</h1>
      <div className="w-96 p-7 border mt-5">
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <label className="label">
            <span className="label-text-alt">Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("name", { required: "Name is required" })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <p className="text-red-500 mt-1">{errors.name?.message}</p>
          )}
          <label className="label">
            <span className="label-text-alt">Email</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("email", { required: "Email Address is required" })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p className="text-red-500 mt-1">{errors.email?.message}</p>
          )}
          <label className="label">
            <span className="label-text-alt">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="select select-bordered w-full max-w-xs"
          >
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
          <label className="label">
            <span className="label-text-alt">Photo</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full"
            {...register("img", { required: "Photo is required" })}
            aria-invalid={errors.img ? "true" : "false"}
          />
          {errors.img && (
            <p className="text-red-500 mt-1">{errors.img?.message}</p>
          )}
          <input
            className="btn btn-accent w-full mt-4"
            value="Add Doctor"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctors;
