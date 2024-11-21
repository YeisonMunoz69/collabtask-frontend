import React from "react";
import PropTypes from "prop-types";
import TextoSubrayado from "../../atomos/TextoSubrayado/TextoSubrayado";
import Boton from "../../atomos/Boton/Boton";
import styles from "./TarjetaClaseProfesor.module.css";

// Componente TarjetaClaseProfesor que acepta props para el nombre de la clase, horario y contenido del botón
const TarjetaClaseProfesor = ({ nombreClase, horario, contenidoBoton }) => {
  return (
    <div className={styles.tarjeta}>
      {/* Encabezado de la tarjeta */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <TextoSubrayado textoSubrayado={nombreClase} /> {/* Texto subrayado con el nombre de la clase */}
        </div>
        <div className={styles.headerContent}>
          <div className={styles.headerSubtitle}>{horario}</div> {/* Subtítulo con el horario */}
        </div>
      </div>
      {/* Pie de la tarjeta */}
      <div className={styles.footer}>
        <Boton contenidoBoton={contenidoBoton} backgroundColor="#1F2E43" color="#ffffff" /> {/* Botón principal */}
        <Boton contenidoBoton="Ver alumnos" backgroundColor="#F1F0E8" color="#000000" /> {/* Botón secundario */}
      </div>
    </div>
  );
};

// Definición de los tipos de las propiedades del componente
TarjetaClaseProfesor.propTypes = {
  nombreClase: PropTypes.string.isRequired, // El nombre de la clase es requerido y debe ser una cadena
  horario: PropTypes.string.isRequired, // El horario es requerido y debe ser una cadena
  contenidoBoton: PropTypes.string.isRequired, // El contenido del botón es requerido y debe ser una cadena
};

export default TarjetaClaseProfesor; // Exportación del componente TarjetaClaseProfesor