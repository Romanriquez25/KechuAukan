import React, { useState } from "react";
import "../styles/calendario.css"; // Importa el archivo CSS

function BasicDateCalendar({ onChange }) {
  const [value, setValue] = useState(""); // Inicializa como string vacío

  const handleDateChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="date-calendar-container">
      <label htmlFor="fecha" className="date-label">Fecha:</label>
      <input
        type="date"
        id="fecha"
        name="fecha"
        value={value}
        onChange={handleDateChange}
        className="date-input"
      />
    </div>
  );
}

export default BasicDateCalendar;
