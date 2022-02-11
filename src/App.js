import React, { useState } from "react";
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
      <ButtonList
        setAccessoryName={setAccessoryName}
        names={"ACCESSORIZE THE ALPACA'S"}
        data={accessoryData}
      />
      <ButtonList names={"Style"} data={styleData} />
    </div>
  );
};

export default App;
