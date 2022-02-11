import React from "react";
import "./Button.css";

const Button = ({ name, setAccessoryName }) => {
  return (
    <button onClick={(e) => setAccessoryName(name)} className="btn">
      {name}
    </button>
  );
};

export default Button;
