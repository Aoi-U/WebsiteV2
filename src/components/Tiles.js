import React, { useState } from "react";

export default function Tiles(props) {
  const [selectedTile, setSelectedTile] = useState([
    {
      title: "Education",

      content: [
        {
          sub: "University of Calgary",
          desc: "Majoring in Computer Science. Going into my 3rd year of University next fall!",
        },
        {
          sub: "Calgary Hoshuko Japanese School",
          desc: "Attended from grade 1 to 6. Native and fluent in speaking Japanese",
        },
      ],
      active: true,
    },
    {
      title: "Experience",
      content: [
        {
          sub: "Chicken On The Way",
          desc: "Worked for 4 years as a cashier and cook at Chicken On The Way",
        },
        {
          sub: "Calgary Hoshuko Japanese School",
          desc: "Volunteered at Calgary Hoshuko's annual sports festival as a demonstrator",
        },
        {
          sub: "Summer Camp",
          desc: "Volunteered looking after children and helping with activities",
        },
        {
          sub: "News Paper Delivery",
          desc: "Bundled and delivered newspapers around my neighborhood for 2 years",
        },
        {
          sub: "Vending machine software",
          desc: "Designed and implemented a full scale vending machine software for a university project",
        },
      ],
      active: false,
    },
    {
      title: "Skills",
      content: [
        {
          sub: "Programming languages",
          desc: "C, C++, Java, Python, JavaScript, HTML, CSS, React",
        },
        {
          sub: "Thinking",
          desc: "Calm and collected, able to think clearly and logically under pressure",
        },
        {
          sub: "Teamwork",
          desc: "Able to work well with others and communicate effectively",
        },
      ],
      active: false,
    },
    {
      title: "Hobbies",
      content: [
        {
          sub: "Video Games",
          desc: "Mainly play League of Legends and Apex Legends but also many more!",
        },
        {
          sub: "Anime",
          desc: "Watched hundreds of anime series and read many manga series as well!",
        },
      ],
      active: false,
    },
  ]);

  const expandStyle = {
    flexGrow: "1",
  };

  const shrinkStyle = {
    flexGrow: "0",
  };

  const changeTile = (activeTile) => {
    setSelectedTile(
      selectedTile.map((tile, index) => {
        if (index == activeTile) {
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
          onClick={() => changeTile(index)}
        >
          <h2>{tile.title}</h2>
          {tile.content.map((content) => (
            <div className="tile-content">
              <h3>{content.sub}</h3>
              <p>{content.desc}</p>
            </div>
          ))}
        </span>
      ))}
    </div>
  );
}
