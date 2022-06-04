import "./styles.css";
import React, { useState } from "react";

var f1Dictionary = {
  "F1 Flags": [
    {
      name: "Yellow Flag",
      description: `Single waved yellow flag means overtaking prohibited due to danger off the tracks. A speed reduction is required.
      Double waved yellow flag means overtaking prohibited due to danger on the track. A speed reduction is required.`,
      imgURL: "https://f1.fandom.com/wiki/Flag_system?file=Yellow_flag.png"
    },
    {
      name: "Yellow and Red striped Flag",
      description:
        "Slippery track, due to oil, water or loose debris. Can be seen 'rocked' from side-to-side (not waved) to indicate a small animal on track"
    },
    {
      name: "Green Flag",
      description:
        "Normal racing conditions apply. This is always shown following a yellow flag to indicate that the hazard has been passed. A green flag is also shown at the start of the first session of the day."
    },
    {
      name: "Blue Flag",
      description:
        "A blue flag indicates that the driver in front who is one or more laps down must let faster cars behind pass. If the driver ignores 3 consecutive blue flags, a penalty is issued to the driver. In practice and qualifying, this is shown when a car is being hindered by a slower car."
    },
    {
      name: "White Flag",
      description:
        "Slow moving vehicle ahead - often waved on the last corner during free practice when drivers do practice starts. Also used when a miscellaneous vehicle, such as the medical car or an ambulance, is on track."
    },
    {
      name: "Red Flag",
      description:
        "Session suspended or stopped due to imminent danger to competitors or spectators, or due to bad weather. All cars proceed to pits"
    },
    {
      name: "Black Flag",
      description:
        "Driver is disqualified and must return to pits immediately. This flag is accompanied by the driver's race number."
    },
    {
      name: "Black with orange circle Flag",
      description:
        "Car is damaged or driver has a mechanical problem and must return to pits as soon as possible. This flag is accompanied by the driver's race number."
    },
    {
      name: "Half black/ Half white Flag",
      description:
        "Warns a driver for unsportsmanlike behaviour. May be followed by a black flag upon further infringement. Accompanied by the driver's race number."
    },
    {
      name: "Chequered Flag",
      description:
        "Session is completed. In practice and qualifying, this means drivers are not allowed to start laps, but they are allowed to complete laps."
    }
  ],
  "F1 Dry Tyres": [
    {
      name: "Red Tyre",
      description: "Soft - Slick tread - Least durable - Most grip."
    },
    {
      name: "Yellow Tyre",
      description:
        "Medium - Slick tread - Less durable than white - Lesser grip than red."
    },
    {
      name: "White Tyre",
      description: "Hard - Slick tread - Most durable - Least grip."
    }
  ],
  "F1 Wet Tyres": [
    {
      name: "Green Tyre",
      description: "Intermediate - Treaded - Light rain conditions."
    },
    {
      name: "Blue Tyre",
      description: "Wet - Treaded - Heavy rain conditions."
    }
  ]
};

var f1Categories = Object.keys(f1Dictionary);

export default function App() {
  var [category, setCategory] = useState("F1 Flags");

  function categoryClickHandler(category) {
    setCategory(category);
  }

  return (
    <div className="App">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "red"
        }}
      >
        F1 Wiki
      </h1>

      <div>
        {f1Categories.map((category) => (
          <ul>
            <li
              style={{ cursor: "pointer" }}
              className="categories"
              onClick={() => categoryClickHandler(category)}
            >
              {category}
            </li>
          </ul>
        ))}
      </div>
      <hr />
      <div>
        {f1Dictionary[category].map((category) => (
          <p>
            {category.name}
            <hr />
            {category.description}
          </p>
        ))}
      </div>
      <hr />
    </div>
  );
}
