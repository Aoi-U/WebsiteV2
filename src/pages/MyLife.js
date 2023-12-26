import React from "react";
import PageBase from "../components/PageBase.js";
import image1 from "../images/p4.jpg";

export default function MyLife() {
  return (
    <section className="page" id="MyLife">
      <img src={image1} className="page-img" />
      <PageBase pageTitle={"MyLife"} />
    </section>
  );
}
