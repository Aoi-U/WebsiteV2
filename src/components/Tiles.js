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
          desc: "Java, Python, JavaScript, HTML, CSS, React",
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

  const changeTile = (e, activeTile) => {
    // e.preventDefault();
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

  const tileShrunk = {
    transition: "0.7s",
    transform: "rotate(-90deg)",
    position: "absolute",
  }

  const tileExpanded = {
    font: "bold 2rem 'Rajdhani', sans-serif",
    margin: "1rem",
    padding: "0.5rem 0 0.5rem 1rem",
    color: "black",
    borderRadius: "1rem",
    borderBottom: "2px solid black",
    background: "white",
    transform: "rotate(0deg)",
    transition: "0.7s",
  }

  return (
    <div className="tile-container">
      {selectedTile.map((tile, index) => (
        <span
          style={tile.active ? { flexGrow: "1" } : { flexGrow: "0" }}
          className="tile"
          id={"tile" + index}
          key={index}
          onClick={(e) => changeTile(e, index)}
        >
          <div className="tile-content">
            <h2 className="tile-title" style={tile.active ? tileExpanded : tileShrunk }>{tile.title}</h2>
            {tile.content.map((content) => (
              <div
                className="tile-desc"
                style={
                  tile.active
                    ? { opacity: "1", transition: "0.5s" }
                    : { opacity: "0", transition: "0.5s" }
                }
              >
                <h3>{content.sub}</h3>
                <p>{content.desc}</p>
              </div>
            ))}
          </div>
        </span>
      ))}
    </div>
  );
}
