import React from "react";
import styles from "./TextoSubrayado.module.css";

// Componente TextoSubrayado que acepta una prop para el texto
const TextoSubrayado = ({ textoSubrayado }) => {
  return (
    <div>
      {/* Div que aplica los estilos de subrayado al texto */}
      <div className={styles.texto}>{textoSubrayado}</div>
    </div>
  );
};

export default TextoSubrayado; // Exportación del componente TextoSubrayado
