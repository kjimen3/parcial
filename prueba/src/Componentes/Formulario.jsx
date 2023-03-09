import React, { useState } from "react";

const Formulario = ({ onValidSubmit, onErrorSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim().length < 3 || /^\s/.test(nombre)) {
      onErrorSubmit("Por favor chequea que la información sea correcta");
      return;
    }

    if (descripcion.trim().length < 6) {
      onErrorSubmit("Por favor chequea que la información sea correcta");
      return;
    }

    onValidSubmit({ nombre, descripcion });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre (Ingresar mínimo 3 cáracteres) :
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <br />
      <label>
        Descripción(Color, raza, edad (Ingresar mínimo 6 cáracteres.)):
        <input
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;