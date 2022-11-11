import React from "react";

const SecondaryButton = ({ children }) => {
  return (
    <button className="btn btn-primary bg-gradient-to-t from-primary to-secondary text-gray-800">
      {children}
    </button>
  );
};

export default SecondaryButton;
