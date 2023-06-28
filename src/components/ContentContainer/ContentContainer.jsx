import React from "react";
import "./ContentContainer.css";

export default function ContentContainer({ children, className, id, style }) {
  // custom container for each section of the portfolio website
  return (
    <div
      className={`content-container ${className ? className : ""}`}
      style={style ? style : null}
      id={id}
    >
      {children}
    </div>
  );
}
