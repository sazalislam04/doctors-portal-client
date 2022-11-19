import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import useToken from "../../../hooks/useToken";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser, googleLogin, updateUser } = useContext(AuthContext);
  const [signupError, setSignupError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [createUserToken, setCreateUserToken] = useState("");
  const [token] = useToken(createUserToken);

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Created Successfully");

        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
        setSignupError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Success");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreateUserToken(email);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen py-10 lg:py-20 flex justify-center items-center">
      <div className="w-full md:w-96 p-5 py-8 rounded shadow-xl">
        <h2 className="text-4xl text-center mb-5">Sign Up</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
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
            <span className="label-text-alt">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password should be at least 6 characters or longer",
              },
              pattern: {
                value: /(?=.*[A-Z])(?=.*[0-9])/,
                message:
                  "Password contains should be UpperCase, Number and special characters",
              },
            })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && (
            <p className="text-red-500 mt-1">{errors.password?.message}</p>
          )}
          <label className="label">
            <span className="label-text-alt">Forgot Password ?</span>
          </label>
          <input
            className="btn btn-accent w-full mt-4"
            value="Sign Up"
            type="submit"
          />
          <div>
            {signupError && (
              <p className="text-center text-red-500">{signupError.message}</p>
            )}
          </div>
        </form>
        <div className="text-center mt-2">
          <small>
            Have an account
            <Link className="text-secondary" to="/login">
              Please Login
            </Link>
          </small>
        </div>
        <div className="divider">OR</div>
        <div>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-accent w-full"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
