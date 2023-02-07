import React from "react";

function Tarea({ tarea, setTarea, eliminarTarea }) {
  const { nombre, dificultad, creacion, limite, descripcion, id } = tarea;
  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar esta tarea?");

    if (respuesta) {
      eliminarTarea(id);
    }
  };

  return (
    <div className="mx-5 my-10 bg-white px-10 py-12 rounded-md border-gray-600 border hover:border-t-8 transition-all ease-in-out duration-100">
      <p className="font-bold mb-4 text-gray-600 uppercase">
        Nombre {""}
        <span className="font-normal normal-case block">{nombre}</span>
      </p>

      <p className="font-bold mb-4 text-gray-600 uppercase">
        Dificultad {""}
        <span className="font-normal normal-case block">{dificultad}</span>
      </p>

      <p className="font-bold mb-4 text-gray-600 uppercase">
        Fecha Creación {""}
        <span className="font-normal normal-case block">{creacion}</span>
      </p>

      <p className="font-bold mb-4 text-gray-600 uppercase">
        Fecha Límite {""}
        <span className="font-normal normal-case block">{limite}</span>
      </p>

      <p className="font-bold mb-4 text-gray-600 uppercase">
        Descripción {""}
        <span className="font-normal normal-case block">{descripcion}</span>
      </p>

      <div className="flex  md:flex flex-col gap-6 lg:flex-row justify-between mt-10">
        <button
          type="button"
          className="bg-white py-2 px-10 text-indig-600 uppercase font-bold cursor-pointer rounded-md border-gray-600 border hover:border-indigo-600 hover:border-t-8 transition-all ease-in-out duration-100 hover:text-indigo-600 "
          onClick={() => setTarea(tarea)}
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-white py-2 px-10 text-gray-600 border-gray-600 uppercase font-bold cursor-pointer rounded-md  border hover:border-rose-600 hover:border-t-8 transition-all ease-in-out duration-100 hover:text-rose-600 "
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Tarea;
