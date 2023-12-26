import React from "react";
import PageBase from "../components/PageBase.js";
import image1 from "../images/p2.jpg";

export default function AboutMe() {
  return (
    <section className="page" id="AboutMe">
      <img src={image1} className="page-img" />
      <PageBase pageTitle={"About Me"} />
    </section>
  );
}
