import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Select, MenuItem, Slider } from "@mui/material";

const items = [
  {
    name: "Air Canada Aeroplan",
    value: 1.5,
    alliance: "Star Alliance",
    image: "images/aircanada.jpg",
  },
  {
    name: "Alaska Airlines Mileage Plan",
    value: 1.5,
    alliance: "Oneworld",
    image: "images/alaska.jpg",
  },
  {
    name: "American Airlines AAdvantage",
    value: 1.55,
    alliance: "Oneworld",
    image: "images/american.jpg",
  },
  {
    name: "All Nippon Airways Mileage Club",
    value: 1.4,
    alliance: "Star Alliance",
    image: "images/ANA.jpg",
  },
  {
    name: "Asia Miles",
    value: 1.3,
    alliance: "Oneworld",
    image: "images/cathay.jpg",
  },
  {
    name: "Avianca LifeMiles",
    value: 1.7,
    alliance: "Star Alliance",
    image: "images/avianca.jpg",
  },
  {
    name: "Avios*",
    value: 1.4,
    alliance: "Oneworld",
    image: "images/avios.jpg",
  },
  {
    name: "Delta Air Lines SkyMiles",
    value: 1.5,
    alliance: "SkyTeam",
    image: "images/delta.jpg",
  },
  {
    name: "Emirates Skywards",
    value: 1.2,
    alliance: "Independent",
    image: "images/emirates.png",
  },
  {
    name: "Etihad Airways Guest",
    value: 1.2,
    alliance: "Independent",
    image: "images/etihad.jpg",
  },
  {
    name: "Flying Blue",
    value: 1.2,
    alliance: "SkyTeam",
    image: "images/flyingblue.jpg",
  },
  {
    name: "Frontier Airlines Frontier Miles",
    value: 1.1,
    alliance: "Independent",
    image: "images/frontier.jpg",
  },
  {
    name: "Hawaiian Airlines HawaiianMiles",
    value: 0.9,
    alliance: "Independent",
    image: "images/hawaiian.jpg",
  },
  {
    name: "JetBlue TrueBlue",
    value: 1.35,
    alliance: "Independent",
    image: "images/jetblue.webp",
  },
  {
    name: "Korean Air SkyPass",
    value: 1.7,
    alliance: "SkyTeam",
    image: "images/korean.png",
  },
  {
    name: "Singapore Airlines KrisFlyer",
    value: 1.3,
    alliance: "Star Alliance",
    image: "images/singapore.jpg",
  },
  {
    name: "Southwest Airlines Rapid Rewards",
    value: 1.35,
    alliance: "Independent",
    image: "images/southwest.jpg",
  },
  {
    name: "Spirit Airlines Free Spirit",
    value: 1.1,
    alliance: "Independent",
    image: "images/spirit.jpg",
  },
  {
    name: "Turkish Airlines Miles&Smiles",
    value: 1.2,
    alliance: "Star Alliance",
    image: "images/turkish.jpg",
  },
  {
    name: "United Airlines MileagePlus",
    value: 1.4,
    alliance: "Star Alliance",
    image: "images/united.jpg",
  },
  {
    name: "Virgin Atlantic Flying Club",
    value: 1.5,
    alliance: "SkyTeam",
    image: "images/virginatlantic.jpg",
  },
];

// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => {
//     images[item.replace("./", "")] = r(item);
//   });
//   return images;
// }

// const images = importAll(
//   require.context("./images", false, /\.(png|jpe?g|svg)$/)
// );

function App() {
  const [filteredItems, setFilteredItems] = useState(items);
  const [alliance, setAlliance] = useState("All");
  const [mincpp, setMincpp] = useState(0.9);

  useEffect(() => {
    if (alliance.match(/^All$/)) {
      const filtered = items.filter((item) => item.value >= mincpp);
      setFilteredItems(filtered);
    } else {
      const filtered = items.filter(
        (item) => item.value >= mincpp && item.alliance.match(alliance)
      );
      setFilteredItems(filtered);
    }
  }, [alliance, mincpp]);

  // useEffect(() => {
  //   const filtered = items.filter(
  //     (item) => item.value >= mincpp && item.alliance.match(alliance)
  //   );
  //   setFilteredItems(filtered);
  // }, [mincpp]);

  function Cards() {
    return (
      <div className="card-container">
        {filteredItems.map((item) => (
          <div key={item.name} className="card">
            <img src={item.image} alt={item.name} className="card-image"></img>
            <p className="card-title">{item.name}</p>
            <p className="card-text">
              {item.alliance} &nbsp;&nbsp;&nbsp; {item.value}&#162;/pp
            </p>
            <i className="fa heart" style={{ fontSize: "24px" }}>
              &#xf08a;
            </i>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      <Select
        className="select"
        defaultValue={"All"}
        onChange={(e) => {
          setAlliance(e.target.value);
        }}
      >
        <MenuItem className="menuitem" value={"All"}>
          All Alliances
        </MenuItem>
        <MenuItem className="menuitem" value={"SkyTeam"}>
          SkyTeam
        </MenuItem>
        <MenuItem className="menuitem" value={"Star Alliance"}>
          Star Alliance
        </MenuItem>
        <MenuItem className="menuitem" value={"Oneworld"}>
          Oneworld
        </MenuItem>
        <MenuItem className="menuitem" value={"Independent"}>
          Independent
        </MenuItem>
      </Select>
      <div className="slider-container">
        <Slider
          className="slider"
          defaultValue={0.9}
          aria-label="slider"
          valueLabelDisplay="auto"
          step={0.1}
          min={0.9}
          max={1.7}
          onChange={(e) => {
            setMincpp(e.target.value);
          }}
        />
      </div>
      <Cards></Cards>
    </div>
  );
}

export default App;
