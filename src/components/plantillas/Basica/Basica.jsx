import React from 'react';
import PropTypes from 'prop-types';
import Encabezado from '../../moleculas/Encabezado/Encabezado';
import TituloSeccion from '../../atomos/TituloSeccion/TituloSeccion';
import Boton from '../../atomos/Boton/Boton';
import Contenedor from '../../moleculas/Contenedor/Contenedor';
import styles from './Basica.module.css';

// Componente Basica que acepta props para el nombre del usuario, título de la sección, contenido del botón, contenido del contenedor y rol
const Basica = ({ nombreUsuario, tituloSeccion, contenidoBoton, contenidoContenedor, rol }) => {
  return (
    <div>
      {/* Componente Encabezado que muestra el nombre del usuario */}
      <Encabezado nombreUsuario={nombreUsuario} />
      <div className={styles.contenedor}>
        <div className={styles.columna1}></div>
        <div className={styles.columna2}>
          {/* Componente TituloSeccion que muestra el título de la sección */}
          <TituloSeccion tituloSeccion={tituloSeccion} />
        </div>
        <div className={styles.columna3}>
          {/* Componente Boton que muestra el contenido del botón */}
          <Boton contenidoBoton={contenidoBoton} backgroundColor="#1F2E43" color="#ffffff" />
        </div>
      </div>
      {/* Componente Contenedor que muestra el contenido del contenedor basado en el rol */}
      <Contenedor contenidoContenedor={contenidoContenedor} rol={rol} />
    </div>
  );
};

// Definición de los tipos de las propiedades del componente
Basica.propTypes = {
  nombreUsuario: PropTypes.string.isRequired, // El nombre del usuario es requerido y debe ser una cadena
  tituloSeccion: PropTypes.string.isRequired, // El título de la sección es requerido y debe ser una cadena
  contenidoBoton: PropTypes.string.isRequired, // El contenido del botón es requerido y debe ser una cadena
  contenidoContenedor: PropTypes.array.isRequired, // El contenido del contenedor es requerido y debe ser un array
  rol: PropTypes.string.isRequired, // El rol es requerido y debe ser una cadena
};

export default Basica; // Exportación del componente Basica