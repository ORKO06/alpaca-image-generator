import React from "react";
import "./AlpacaProfile.css";

const AlpacaProfile = ({ parts }) => {
  console.log(parts.Background);
  return (
    <div className="Alpaca__img">
      <img
        className="background"
        src={`./alpaca/backgrounds/${parts.Background}.png`}
        alt=""
      />
      <img className="ears" src={`./alpaca/ears/${parts.Ears}.png`} alt="" />
      <img className="eyes" src={`./alpaca/eyes/${parts.Eyes}.png`} alt="" />
      <img className="hair" src={`./alpaca/hair/${parts.Hair}.png`} alt="" />
      <img
        className="accessories"
        src={`./alpaca/accessories/${parts.Accessories}.png`}
        alt=""
      />
      <img className="leg" src={`./alpaca/leg/${parts.Leg}.png`} alt="" />
      <img className="neck" src={`./alpaca/neck/${parts.Neck}.png`} alt="" />
      <img className="mouth" src={`./alpaca/mouth/${parts.Mouth}.png`} alt="" />
      <img className="nose" src="./alpaca/nose.png" alt="" />
    </div>
  );
};

export default AlpacaProfile;
