import React from "react";
import PageBase from "../components/PageBase.js";
import Tile from "../components/Tile.js";
import image1 from "../images/p2.jpg";
import { useState, useRef } from "react";

export default function AboutMe() {
  const [tileList, setTileList] = useState([
    <Tile
      title="Education"
      subTitle={["University of Calgary", "Calgary Hoshuko Japanese School"]}
      desc="Majoring in Computer Science. Going into my 3rd year of university next fall!"
    />,
    <Tile
      title="Experience"
      subTitle={["Chicken On The Way", "Calgary Hoshuko Japanese School"]}
      desc="Attended Calgary Hoshuko from grade 1 to 6. Native and fluent in speaking Japanese"
    />,
    <Tile
      title="Skills"
      subTitle={["Programming Languages"]}
      desc="C, C++, Java, Python, JavaScript, HTML, CSS"
    />,
    <Tile
      title="Hobbies"
      subTitle={["Soccer", "Video Games", "Anime"]}
      desc="I play soccer in my free time. I also enjoy playing video games and watching anime."
    />,
  ]);

  const [selectedTile, setSelectedTile] = useState("0");

  const changeTile = (e) => {
    const index = e.target.value;
    setSelectedTile(index);

    const currTile = document.getElementById("tile" + index);
    const prevTile = document.getElementById("tile" + selectedTile);

    currTile.style.flexGrow = "1";
    prevTile.style.flexGrow = "0";
  };

  return (
    <section className="page" id="AboutMe">
      <img src={image1} className="page-img" alt="Page 2" />
      <PageBase title={"About Me"} />
      <div className="tile-container">
        {tileList.map((tile, index) => (
          <label className="tile" key={index} id={"tile" + index}>
            <input
              type="radio"
              value={index}
              checked={selectedTile === index.toString()}
              onChange={changeTile}
            />
            {tile}
          </label>
        ))}
      </div>
    </section>
  );
}
