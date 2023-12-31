import React, { useState } from "react";

export default function Tiles(props) {
  const [selectedTile, setSelectedTile] = useState([
    {
      title: "Education",
      subTitle: ["University of Calgary", "Calgary Hoshuko Japanese School"],
      desc: "Majoring in Computer Science. Going into my 3rd year of university next fall!",
      active: true,
    },
    {
      title: "Experience",
      subTitle: ["Chicken On The Way", "Calgary Hoshuko Japanese School"],
      desc: "Attended Calgary Hoshuko from grade 1 to 6. Native and fluent in speaking Japanese",
      active: false,
    },
    {
      title: "Skills",
      subTitle: ["Programming Languages"],
      desc: "C, C++, Java, Python, JavaScript, HTML, CSS",
      active: false,
    },
    {
      title: "Hobbies",
      subTitle: ["Soccer", "Video Games", "Anime"],
      desc: "I play soccer in my free time. I also enjoy playing video games and watching anime.",
      active: false,
    },
  ]);

  const expandStyle = {
    flexGrow: "1",
  };

  const shrinkStyle = {
    flexGrow: "0",
  };

  const changeTile = (e) => {
    setSelectedTile(
      selectedTile.map((tile, index) => {
        if ("tile" + index == e.target.id) {
          tile.active = true;
        } else {
          tile.active = false;
        }
        return tile;
      })
    );
  };

  return (
    <div className="tile-container">
      {selectedTile.map((tile, index) => (
        <span
          style={selectedTile[index].active ? expandStyle : shrinkStyle}
          className="tile"
          id={"tile" + index}
          key={index}
          onClick={changeTile}
        >
          <h2>{tile.title}</h2>
        </span>
      ))}
    </div>
  );
}
