import "./styles.css";
import React, { useState } from "react";

var f1Dictionary = {
  "F1 Flags": [
    {
      name: "Yellow Flag",
      description: `Single waved yellow flag means overtaking prohibited due to danger off the tracks. A speed reduction is required.
      Double waved yellow flag means overtaking prohibited due to danger on the track. A speed reduction is required.`,
      imgURL:
        "https://static.wikia.nocookie.net/f1wikia/images/c/c0/Yellow_flag.png"
    },
    {
      name: "Yellow and Red striped Flag",
      description:
        "Slippery track, due to oil, water or loose debris. Can be seen 'rocked' from side-to-side (not waved) to indicate a small animal on track",
      imgURL:
        "https://static.wikia.nocookie.net/f1wikia/images/e/ea/Yellow_and_Red_striped_flag.png"
    },
    {
      name: "Green Flag",
      description:
        "Normal racing conditions apply. This is always shown following a yellow flag to indicate that the hazard has been passed. A green flag is also shown at the start of the first session of the day.",
      imgURL:
        "https://static.wikia.nocookie.net/f1wikia/images/2/28/Green_flag.png"
    },
    {
      name: "Blue Flag",
      description:
        "A blue flag indicates that the driver in front who is one or more laps down must let faster cars behind pass. If the driver ignores 3 consecutive blue flags, a penalty is issued to the driver. In practice and qualifying, this is shown when a car is being hindered by a slower car.",
      imgURL:
        "https://static.wikia.nocookie.net/f1wikia/images/8/84/Blue_flag.png"
    },
    {
      name: "White Flag",
      description:
        "Slow moving vehicle ahead - often waved on the last corner during free practice when drivers do practice starts. Also used when a miscellaneous vehicle, such as the medical car or an ambulance, is on track.",
      imgURL:
        "https://static.wikia.nocookie.net/f1wikia/images/1/1e/White_flag.png"
    },
    {
      name: "Red Flag",
      description:
        "Session suspended or stopped due to imminent danger to competitors or spectators, or due to bad weather. All cars proceed to pits",
      imgURL:
        "https://static.wikia.nocookie.net/f1wikia/images/5/5d/Red_flag.png"
    },
    {
      name: "Black Flag",
      description:
        "Driver is disqualified and must return to pits immediately. This flag is accompanied by the driver's race number.",
      imgURL:
        "https://static.wikia.nocookie.net/f1wikia/images/d/dc/Black_flag.png"
    },
    {
      name: "Black with orange circle Flag",
      description:
        "Car is damaged or driver has a mechanical problem and must return to pits as soon as possible. This flag is accompanied by the driver's race number.",
      imgURL:
        "https://static.wikia.nocookie.net/f1wikia/images/1/1c/Black_Flag_with_Orange_Circle.png"
    },
    {
      name: "Half black/ Half white Flag",
      description:
        "Warns a driver for unsportsmanlike behaviour. May be followed by a black flag upon further infringement. Accompanied by the driver's race number.",
      imgURL:
        "https://static.wikia.nocookie.net/f1wikia/images/8/8f/Black_and_white_flag.png"
    },
    {
      name: "Chequered Flag",
      description:
        "Session is completed. In practice and qualifying, this means drivers are not allowed to start laps, but they are allowed to complete laps.",
      imgURL:
        "https://static.wikia.nocookie.net/f1wikia/images/7/75/Chequered_flag.png"
    }
  ],
  "F1 Dry Tyres": [
    {
      name: "Red Tyre",
      description:
        "These are the very softest tyres in the redeveloped range, designed for the slowest circuits with low wear and degradation where maximum mechanical grip is required from the rubber. These are normally seen at street circuits, most typically in Monaco, and also on circuits where the asphalt is exceptionally smooth.",
      imgURL:
        "https://d3nv2arudvw7ln.cloudfront.net/images/global/86/79/red-parentesi-4505517435254.png"
    },
    {
      name: "Yellow Tyre",
      description:
        "Medium - Slick tread - Less durable than white - Lesser grip than red. The middle compound, with an excellent balance between performance and versatility, is well-suited to a wide range of circumstances.",
      imgURL:
        "https://d3nv2arudvw7ln.cloudfront.net/images/global/435/683/yellow-parentesi-4505517436006.png"
    },
    {
      name: "White Tyre",
      description:
        "This is the hardest tyre in the range, which will be nominated for the circuits that take the most energy out of the tyres. These could typically include places like Silverstone or Suzuka. It’s designed to provide maximum resistance to heat and extreme forces, being capable of running very long stints with minimal drop-off in terms of performance.",
      imgURL:
        "https://d3nv2arudvw7ln.cloudfront.net/images/global/1006/199/white-parentesi-4505517435090.png"
    }
  ],
  "F1 Wet Tyres": [
    {
      name: "Green Tyre",
      description:
        "The intermediates are the most versatile of the rain tyres. They can be used on a wet track with no standing water, as well as a drying surface. The compound has been designed to have a wide working range, guaranteeing a wide crossover window both with the slicks and the full wets.",
      imgURL:
        "https://d3nv2arudvw7ln.cloudfront.net/images/global/380/862/cinturato-green-intermediate-4505508953587.png"
    },
    {
      name: "Blue Tyre",
      description:
        "The full wet tyres are the most effective for heavy rain, capable of dispersing impressive quantities of water. But if it rains heavily, visibility rather than grip causes issues, leading to race stoppages on occasions. The profile delivers increased resistance to aquaplaning, which gives the tyre more grip in heavy rain.",
      imgURL:
        "https://d3nv2arudvw7ln.cloudfront.net/images/global/968/233/cinturato-blue-wet-4505508953865.png"
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
      <div className="header">
        <div className="header-inner">
          <img src="f1-logo-white.svg" alt="logo" />
          <h1>
            <a
              href="https://f1.fandom.com/wiki/Formula_1_Wiki"
              target="_blank"
              rel="noopener"
            >
              Wiki
            </a>
          </h1>
        </div>
      </div>
      <nav className="categories-nav">
        {f1Categories.map((category) => (
          <ul className="categories-ul">
            <li
              className="categories-li"
              onClick={() => categoryClickHandler(category)}
            >
              {category}
            </li>
          </ul>
        ))}
      </nav>

      <div className="content-container">
        <div className="content">
          {f1Dictionary[category].map((category) => (
            <div className="content-inner-div">
              <h3>{category.name}</h3>
              <div className="content-inner-inner-div">
                <img src={category.imgURL} alt="img" />
                <p>{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <div className="footer-inner">
          <div className="link-source">
            <b>Made using React</b>
            <ul>
              Sources:
              <li>
                <a
                  href="https://f1.fandom.com/wiki/Flag_system"
                  target="_blank"
                >
                  F1 Fandom Wiki
                </a>
              </li>
              <li>
                <a
                  href="https://www.pirelli.com/tyres/en-ww/motorsport/f1/tyres"
                  target="_blank"
                >
                  Pirelli
                </a>
              </li>
              <br />
              Theme:
              <li>
                <a href="https://www.formula1.com/" target="_blank">
                  Formula1
                </a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="link-social">
            <b>SOCIALS</b>
            <ul>
              <li>
                <a
                  href="https://github.com/rshashank11"
                  target="_blank"
                  rel="noopener"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shashank-r-7736a21b3"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/rshank1111"
                  target="_blank"
                  rel="noopener"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
