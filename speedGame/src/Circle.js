import React from "react";

const Circle = (props) => {
  return (
    <div
      className={`circle ${props.active ? "active" : ""}`}
      onClick={props.onClick}
      style={{
        backgroundColor: props.color,
        pointerEvents: props.disabled ? "auto" : "none",
      }}
    >
      <p>{props.id}</p>
    </div>
  );
};

export default Circle;
