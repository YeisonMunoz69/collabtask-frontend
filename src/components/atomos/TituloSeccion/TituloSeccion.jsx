import React from 'react';
import styles from './TituloSeccion.module.css';

// Componente TituloSeccion que acepta una prop para el título de la sección
const TituloSeccion = ({ tituloSeccion }) => {
  return (
    <div>
      {/* Encabezado h4 que aplica los estilos al título de la sección */}
      <h4 className={styles.tituloSeccion}>{tituloSeccion}</h4>
    </div>
  );
};

export default TituloSeccion; // Exportación del componente TituloSeccion