import React from "react";
import PageBase from "../components/PageBase.js";
import Tiles from "../components/Tiles.js";
import image1 from "../images/p1.jpg";

export default function Home() {
  const [tileList, setTileList] = React.useState([
    <Tiles title="Java" description="Extensive knowledge in Java. " />,
    <Tiles title="Python" description="" />,
    <Tiles title="HTML" description="" />,
    <Tiles title="CSS" description="" />,
    <Tiles title="JavaScript" description="" />,
    <Tiles title="React" description="" />,
  ]);

  return (
    <section className="page" id="Home">
      <img src={image1} className="page-img" alt="Page 1" />
      <PageBase title={"Home"} />
    </section>
  );
}
