import React from "react";
import PageBase from "../components/PageBase.js";
import image1 from "../images/p1.jpg";

export default function Home() {
  return (
    <section className="page" id="Home">
      <img src={image1} className="page-img" />
      <PageBase pageTitle={"Home"} />
    </section>
  );
}
