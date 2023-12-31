import React from "react";
import PageBase from "../components/PageBase.js";
import Tile from "../components/Tiles.js";
import image1 from "../images/p2.jpg";
import { useState, useRef } from "react";

export default function AboutMe() {
  return (
    <section className="page" id="AboutMe">
      <img src={image1} className="page-img" alt="Page 2" />
      <PageBase title={"About Me"} />
      <Tile />
    </section>
  );
}
