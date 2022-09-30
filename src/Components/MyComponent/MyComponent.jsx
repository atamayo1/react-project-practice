import React, { useState } from "react";
import PropTypes from "prop-types";
import { LabelReturn } from "./MyComponent.styled";

const MyComponent = ({ name }) => {
  const [newname, setNewName] = useState(name);

  const handleChangeName = (e, otherName) => {
    setNewName(otherName);
  };

  return (
    <div>
      <h2>First Component</h2>
      <LabelReturn className="label">Nombre completo: {newname}</LabelReturn>
      <p>
        <input
          type="text"
          placeholder="cambia el nombre"
          onChange={(e) => handleChangeName(e, e.target.value)}
        />{" "}
        <button onClick={(e) => handleChangeName(e, name)}>
          Cambiar a nombre inicial
        </button>
      </p>
    </div>
  );
};

export default MyComponent;

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
};
