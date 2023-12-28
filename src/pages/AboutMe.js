import React from "react";
import PageBase from "../components/PageBase.js";
import Tile from "../components/Tile.js";
import image1 from "../images/p2.jpg";
import { useState, useRef } from "react";

export default function AboutMe() {
  const [tileList, setTileList] = useState([
    <Tile
      title="Education"
      subTitles="University of Calgary"
      desc="Majoring in Computer Science. Going into my 3rd year of university next fall!"
    />,
    <Tile
      title="Experience"
      subTitles="Calgary Hoshuko Japanese School"
      desc="Attended Calgary Hoshuko from grade 1 to 6. Native and fluent in speaking Japanese"
    />,
  ]);

  const expand = (index) => {
    console.log(index);
  };

  return (
    <section className="page" id="AboutMe">
      <img src={image1} className="page-img" alt="Page 2" />
      <PageBase title={"About Me"} />
      <div className="tile-container">
        {tileList.map((tile, index) => (
          <span className="tile" key={index} onClick={expand}>
            {tile}
          </span>
        ))}
      </div>
    </section>
  );
}
