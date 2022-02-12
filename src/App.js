import { toPng } from "dom-to-image";
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

  let styleData = [];
  let accessoryData = [];

  data.map((d) => {
    accessoryData.push(d.name);
    if (d.name === accessoryName) {
      styleData = d.items;
    }
    return null;
  });

  const random = () => {
    setParts({
      Hair: data[0].items[Math.floor(Math.random() * 7)],
      Leg: data[5].items[Math.floor(Math.random() * 6)],
      Neck: data[4].items[Math.floor(Math.random() * 4)],
      Mouth: data[3].items[Math.floor(Math.random() * 5)],
      Background: data[7].items[Math.floor(Math.random() * 17)],
      Accessories: data[6].items[Math.floor(Math.random() * 4)],
      Eyes: data[2].items[Math.floor(Math.random() * 6)],
      Ears: data[1].items[Math.floor(Math.random() * 3)],
    });
  };

  const download = () => {
    const element = document.getElementById("Alpaca__img");
    console.log(element);
    toPng(element).then((dataUrl) => {
      console.log(dataUrl);
      const link = document.createElement("a");
      link.download = "alpaca.jpeg";
      link.href = dataUrl;
      link.click();
      link.remove();
    });
  };

  return (
    <div>
      <h1>ALPACA GENERATOR</h1>
      <div className="cont">
        <div>
          <div id="Alpaca__img">
            <div>
              <AlpacaProfile parts={parts} />
            </div>
          </div>
          <div className="btn-container">
            <button className="btn-a" onClick={random}>
              Random
            </button>
            <button className="btn-a" onClick={download}>
              Download
            </button>
          </div>
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
