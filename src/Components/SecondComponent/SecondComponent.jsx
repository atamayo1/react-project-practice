import React, { useState } from "react";
import PropTypes from "prop-types";
import { LabelReturn } from "./SecondComponent.styled";

const SecondComponent = ({ actualYear }) => {
  const [newYear, setNewYear] = useState(actualYear);

  const handleNextYear = () => {
    setNewYear(newYear + 1);
  };
  const handlePrevYear = () => {
    setNewYear(newYear - 1);
  };
  const handleChangeYear = (e) => {
    let item = parseInt(e.target.value);
    if(Number.isInteger(item)){
      setNewYear(item)
    }else{
      setNewYear(actualYear)
    }
  }
  return (
    <div>
      <h2>Second Component (Exercise)</h2>
      <LabelReturn>{newYear}</LabelReturn>
      <p>
        <button onClick={handleNextYear}>Siguiente</button>{" "}
        <button onClick={handlePrevYear}>Anterior</button>
      </p>
      <p>Cambiar año: <input type="number" placeholder="cambiar el año" onChange={handleChangeYear} /></p>
    </div>
  );
};

export default SecondComponent;

SecondComponent.propTypes = {
  actualYear: PropTypes.number.isRequired,
};
