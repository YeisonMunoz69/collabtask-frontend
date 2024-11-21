import React from 'react';
import Basica from '../../plantillas/Basica/Basica';

// Array de objetos que representa las clases con sus horarios
const clases = [
  {
    id: 1,
    nombreClase: "Matemáticas",
    horario: {
      horaEntrada: "08:00am",
      horaSalida: "09:30am"
    }
  },
  {
    id: 2,
    nombreClase: "Ciencias",
    horario: {
      horaEntrada: "10:00am",
      horaSalida: "11:30am"
    }
  },
  {
    id: 3,
    nombreClase: "Historia",
    horario: {
      horaEntrada: "12:00pm",
      horaSalida: "01:30pm"
    }
  },
  {
    id: 4,
    nombreClase: "Geografía",
    horario: {
      horaEntrada: "02:00pm",
      horaSalida: "03:30pm"
    }
  },
  {
    id: 5,
    nombreClase: "Inglés",
    horario: {
      horaEntrada: "04:00pm",
      horaSalida: "05:30pm"
    }
  },
  {
    id: 6,
    nombreClase: "Educación Física",
    horario: {
      horaEntrada: "06:00pm",
      horaSalida: "07:30pm"
    }
  },
  {
    id: 7,
    nombreClase: "Arte",
    horario: {
      horaEntrada: "08:00am",
      horaSalida: "09:30am"
    }
  },
  {
    id: 8,
    nombreClase: "Música",
    horario: {
      horaEntrada: "10:00am",
      horaSalida: "11:30am"
    }
  },
  {
    id: 9,
    nombreClase: "Biología",
    horario: {
      horaEntrada: "12:00pm",
      horaSalida: "01:30pm"
    }
  },
  {
    id: 10,
    nombreClase: "Química",
    horario: {
      horaEntrada: "02:00pm",
      horaSalida: "03:30pm"
    }
  }
];

// Componente PaginaClases que renderiza el componente Basica con las props necesarias
const PaginaClases = ({rol}) => {
  return (
    <Basica 
      nombreUsuario="Fabian Armando Hoyos Ceron" 
      tituloSeccion="Listado de Clases" 
      contenidoBoton="Agregar Clase"
      contenidoContenedor={clases}
      rol={rol}
    />
  );
};

export default PaginaClases; // Exportación del componente PaginaClases