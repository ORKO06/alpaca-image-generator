import React from "react";
import "./Button.css";

const Button = ({ name, selected }) => {
  return (
    <button onClick={(e) => selected(name)} className="btn">
      {name}
    </button>
  );
};

export default Button;
