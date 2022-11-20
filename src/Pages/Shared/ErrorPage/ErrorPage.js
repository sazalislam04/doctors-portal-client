import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const ErrorPage = () => {
  const error = useRouteError();
  const { userLogOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="grid h-screen place-content-center bg-white">
      <p className="uppercase text-2xl tracking-widest text-gray-500">
        <i>{error.statusText || error.message}</i>
      </p>

      <button className="btn mt-5 w-full" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default ErrorPage;
