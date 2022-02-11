import React from "react";
import Button from "./Button";
import "./ButtonList.css";

const ButtonList = ({ data, names, selected }) => {
  return (
    <>
      <h1 className="heading">{names}</h1>
      <div className="list">
        {data.map((d, i) => (
          <Button selected={selected} key={i} name={d} />
        ))}
      </div>
    </>
  );
};

export default ButtonList;
