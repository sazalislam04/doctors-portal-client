import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import useToken from "../../../hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const { userLogin, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [token] = useToken(loginUserEmail);
  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    const { email, password } = data;
    setLoginError("");
    userLogin(email, password)
      .then((result) => {
        toast.success("User Login Successfully");
        setLoginUserEmail(email);
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        toast.success("Login Success");
        setLoginUserEmail(user?.email);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);
      });
  };

  return (
    <div className="min-h-screen py-10 lg:py-20 flex justify-center items-center">
      <div className="w-full md:w-96 p-5 py-8 rounded shadow-xl">
        <h2 className="text-4xl text-center mb-5">Login</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
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
            })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && (
            <p className="text-red-500 mt-1">{errors.password?.message}</p>
          )}
          <label className="label">
            <span className="label-text-alt">Forgot Password ?</span>
          </label>
          <div>
            {loginError && (
              <p className="text-red-500 text-center">{loginError}</p>
            )}
          </div>
          <input
            className="btn btn-accent w-full mt-4"
            value="Login"
            type="submit"
          />
        </form>
        <div className="text-center mt-2">
          <small>
            New to Doctors Portal?{" "}
            <Link className="text-secondary" to="/signup">
              Create new account
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

export default Login;
