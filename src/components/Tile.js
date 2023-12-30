import React, { useState } from "react";

export default function Tiles(props) {
  return (
    <>
      <h2>{props.title}</h2>
      {props.subTitle.map((subTitle, index) => (
        <button key={index}>{subTitle}</button>
      ))}
    </>
  );
}
