import React, { useEffect, useState } from "react";
import AlpacaProfile from "./components/AlpacaProfile";
import ButtonList from "./components/ButtonList";

const data = [
  {
    name: "Hair",
    items: ["bang", "curls", "default", "elegant", "fancy", "quiff", "short"],
  },
  {
    name: "Ears",
    items: ["default", "tilt-backward", "tilt-forward"],
  },
  {
    name: "Eyes",
    items: ["angry", "default", "naughty", "panda", "smart", "star"],
  },
  {
    name: "Mouth",
    items: ["astonished", "default", "eating", "laugh", "tongue"],
  },
  {
    name: "Neck",
    items: ["bend-backward", "bend-forward", "default", "thick"],
  },
  {
    name: "Leg",
    items: [
      "default",
      "cookie",
      "bubble-tea",
      "game-console",
      "tilt-backward",
      "tilt-forward",
    ],
  },
  {
    name: "Accessories",
    items: ["earings", "flower", "glasses", "headphone"],
  },
  {
    name: "Background",
    items: [
      "blue50",
      "blue60",
      "blue70",
      "darkblue30",
      "darkblue50",
      "darkblue70",
      "green50",
      "green60",
      "green70",
      "grey40",
      "grey70",
      "grey80",
      "red50",
      "red60",
      "red70",
      "yellow50",
      "yellow60",
      "yellow70",
    ],
  },
];

const App = () => {
  const [accessoryName, setAccessoryName] = useState("Eyes");
  const [styleName, setStyleName] = useState("default");

  const [parts, setParts] = useState({
    Hair: "default",
    Leg: "default",
    Neck: "default",
    Mouth: "default",
    Background: "darkblue50",
    Accessories: "headphone",
    Eyes: "default",
    Ears: "default",
  });

  useEffect(() => {
    setParts((prev) => ({ ...prev, [accessoryName]: styleName }));
  }, [styleName]);

  console.log(styleName);

  let styleData = [];
  let accessoryData = [];

  data.map((d) => {
    accessoryData.push(d.name);
    if (d.name === accessoryName) {
      styleData = d.items;
    }
    return null;
  });

  console.log(styleData, accessoryData);

  return (
    <div>
      <h1>ALPACA GENERATOR</h1>
      <div className="cont">
        <div>
          <AlpacaProfile parts={parts} />
        </div>
        <div>
          <ButtonList
            selected={setAccessoryName}
            names={"ACCESSORIZE THE ALPACA'S"}
            data={accessoryData}
          />
          <ButtonList
            selected={setStyleName}
            names={"Style"}
            data={styleData}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
