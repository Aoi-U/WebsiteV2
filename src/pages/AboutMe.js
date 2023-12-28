import React from "react";
import PageBase from "../components/PageBase.js";
import Tile from "../components/Tile.js";
import image1 from "../images/p2.jpg";

export default function AboutMe() {
  const educationDescription = new Map([
    [
      "University of Calgary",
      "Majoring in Computer Science. Going into my 3rd year of university next fall!",
    ],
    [
      "Calgary Hoshuko Japanese School",
      "Attended Calgary Hoshuko from grade 1 to 6. Native and fluent in speaking Japanese.",
    ],
  ]);

  const experienceDescription = new Map([
    [
      "Chicken On The Way",
      "Worked as a cashier and cook for 4 years. Handled cash and credit card transactions. Cooked and prepared food for customers.",
    ],
    [
      "Volunteer Work",
      "Volunteered during a sports festival hosted by the Calgary Hoshuko Japanese School.",
    ],
  ]);

  const [tileList, setTileList] = React.useState([
    <Tile title="Education" subTitles={educationDescription} />,
    <Tile title="Experience" subTitles={experienceDescription} />,
  ]);

  return (
    <section className="page" id="AboutMe">
      <img src={image1} className="page-img" alt="Page 2" />
      <PageBase title={"About Me"} />
      <div className="tile-container">
        {tileList.map((tile, index) => (
          <span className="tile">{tile}</span>
        ))}
      </div>
    </section>
  );
}
