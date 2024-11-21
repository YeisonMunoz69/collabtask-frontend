import React from "react";
import frame from "./frame.svg";
import styles from "./Encabezado.module.css";
import TextoSubrayado from "../../atomos/TextoSubrayado/TextoSubrayado.jsx";

// Componente Encabezado que acepta una prop para el nombre del usuario
const Encabezado = ({ nombreUsuario }) => {
  return (
    <div className={styles.encabezado}>
      {/* Primera columna del encabezado */}
      <div className={styles.columna1}>
        <img className={styles.frame} alt="Frame" src={frame} /> {/* Imagen del logo */}
        <div className={styles.textWrapper}>CollabTask</div> {/* Texto del logo */}
      </div>
      {/* Segunda columna del encabezado */}
      <div className={styles.columna2}>
        <TextoSubrayado textoSubrayado={nombreUsuario} /> {/* Texto subrayado con el nombre del usuario */}
      </div>
      {/* Tercera columna del encabezado */}
      <div className={styles.columna3}></div>
    </div>
  );
};

export default Encabezado; // Exportación del componente Encabezado
