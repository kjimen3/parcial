import React from "react";

const Card = ({ nombre, descripcion }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
    </div>
  );
};

export default Card;