import React from "react";
import PageBase from "../components/PageBase.js";
import image1 from "../images/p3.jpg";

export default function Education() {
  return (
    <section className="page" id="Education">
      <img src={image1} className="page-img" alt="Page 3" />
      <PageBase title={"Education"} />
    </section>
  );
}
