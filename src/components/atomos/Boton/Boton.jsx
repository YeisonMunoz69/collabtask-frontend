import React from "react";
import PropTypes from "prop-types";
import styles from "./Boton.module.css";

// Componente Boton que acepta props para el contenido del botón, color de fondo y color del texto
const Boton = ({ contenidoBoton, backgroundColor, color }) => {
  return (
    // Botón con estilos aplicados desde el archivo CSS y estilos en línea para el color de fondo y el color del texto
    <button
      className={styles.boton}
      style={{
        backgroundColor: backgroundColor, // Color de fondo del botón
        color: color // Color del texto del botón
      }}
    >
      {contenidoBoton} {/* Contenido del botón */}
    </button>
  );
};

// Definición de los tipos de las propiedades del componente
Boton.propTypes = {
  contenidoBoton: PropTypes.string.isRequired, // El contenido del botón es requerido y debe ser una cadena
  backgroundColor: PropTypes.string.isRequired, // El color de fondo es requerido y debe ser una cadena
  color: PropTypes.string.isRequired // El color del texto es requerido y debe ser una cadena
};

export default Boton; // Exportación del componente Boton
