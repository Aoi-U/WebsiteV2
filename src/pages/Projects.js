import React from "react";
import PageBase from "../components/PageBase.js";
import image1 from "../images/p5.jpg";

export default function Projects() {
  return (
    <section className="page" id="Projects">
      <img src={image1} className="page-img" />
      <PageBase pageTitle={"Projects"} />
    </section>
  );
}
