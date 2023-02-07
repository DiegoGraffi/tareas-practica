import React from "react";
import Tarea from "./Tarea";

const ListadoPacientes = ({ tareas, setTarea, eliminarTarea }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {tareas && tareas.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Tareas</h2>

          <p className="text-lg mt-5 text-center mb-10">
            Administra tus {""}
            <span className="text-gray-600 font-bold">Tareas</span>
          </p>

          {tareas.map((tarea) => (
            <Tarea
              key={tarea.id}
              tarea={tarea}
              setTarea={setTarea}
              eliminarTarea={eliminarTarea}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Tareas</h2>

          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando {""}
            <span className="text-gray-600 font-bold">Tareas</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
