import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contenedor.module.css';
import TituloSeccion from '../../atomos/TituloSeccion/TituloSeccion'; // Componente para mostrar un título
import TarjetaClaseProfesor from '../../organismos/TarjetaClaseProfesor/TarjetaClaseProfesor'; // Componente para mostrar la tarjeta de cada clase

// Componente Contenedor que acepta props para el contenido y el rol
const Contenedor = ({ contenidoContenedor, rol }) => {
  // Verificar si el contenidoContenedor es un array y tiene elementos
  const noHayClases = !Array.isArray(contenidoContenedor) || contenidoContenedor.length === 0;

  // Si no hay clases disponibles o el array está vacío, mostrar un mensaje
  if (noHayClases) {
    return (
      <div>
        <TituloSeccion tituloSeccion="No hay clases disponibles." /> {/* Título que indica que no hay clases */}
      </div>
    );
  }

  // Variable para almacenar el contenido renderizado dependiendo del rol
  let contenidoRenderizado;

  // Renderizar contenido basado en el rol
  if (rol === 'profesor') {
    // Si el rol es 'profesor', mostrar las tarjetas de clases
    contenidoRenderizado = contenidoContenedor.map((clase) => (
      <TarjetaClaseProfesor
        key={clase.id} // Clave única para cada tarjeta
        nombreClase={clase.nombreClase} // Nombre de la clase
        horario={`${clase.horario.horaEntrada} - ${clase.horario.horaSalida}`} // Formato de horario de la clase
        contenidoBoton="Ingresar" // Texto del botón
      />
    ));
  } else {
    // Si el rol no es 'profesor', mostrar un mensaje de acceso restringido
    contenidoRenderizado = (
      <div>
        <TituloSeccion tituloSeccion="No tienes acceso a las clases." /> {/* Mensaje de acceso denegado */}
      </div>
    );
  }

  return (
    <div className={styles.contenedor}> {/* Contenedor principal del componente */}
      {contenidoRenderizado} {/* Renderiza el contenido según el rol y la disponibilidad */}
    </div>
  );
};

// Definición de los tipos de las propiedades del componente
Contenedor.propTypes = {
  contenidoContenedor: PropTypes.array.isRequired, // 'contenidoContenedor' debe ser un array y es obligatorio
  rol: PropTypes.string.isRequired, // 'rol' debe ser una cadena y es obligatorio
};

export default Contenedor; // Exportación del componente Contenedor
