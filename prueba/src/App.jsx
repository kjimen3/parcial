import React, { useState } from "react";
import Formulario from "./Componentes/Formulario";
import Card from "./Componentes/Card";

const App = () => {
  const [datos, setDatos] = useState(null);
  const [error, setError] = useState(null);

  const handleValidSubmit = (datos) => {
    setDatos(datos);
    setError(null);
  };

  const handleErrorSubmit = (error) => {
    setError(error);
    setDatos(null);
  };

  return (
    <div>
      <h1>¡Queremos conocer más sobre tu mascota, brindanos la siguiente información!</h1>
      {error && <p>{error}</p>}
      {!datos ? (
        <Formulario
          onValidSubmit={handleValidSubmit}
          onErrorSubmit={handleErrorSubmit}
        />
      ) : (
        <Card nombre={datos.nombre} descripcion={datos.descripcion} />
      )}
    </div>
  );
};

export default App;
