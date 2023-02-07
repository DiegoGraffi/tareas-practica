import { useState, useEffect } from "react";
import Error from "./Error";
import ListadoPacientes from "./ListadoPacientes";

function Formulario({ tareas, setTareas, tarea, setTarea }) {
  const [nombre, setNombre] = useState("");
  const [dificultad, setDificultad] = useState("");
  const [creacion, setCreacion] = useState("");
  const [limite, setLimite] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(tarea).length > 0) {
      setNombre(tarea.nombre);
      setDificultad(tarea.dificultad);
      setCreacion(tarea.creacion);
      setLimite(tarea.limite);
      setDescripcion(tarea.descripcion);
    }
  }, [tarea]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion del formulario
    if ([nombre, dificultad, creacion, limite, descripcion].includes("")) {
      console.log("Hay al menos un campo vacio");

      setError(true);
      return;
    }

    setError(false);

    // Objeto de Tarea
    const objetoTarea = {
      nombre,
      dificultad,
      creacion,
      limite,
      descripcion,
    };

    if (tarea.id) {
      // Editando el registro
      objetoTarea.id = tarea.id;

      const tareasActualizadas = tareas.map((tareaState) =>
        tareaState.id === tarea.id ? objetoTarea : tareaState
      );

      setTareas(tareasActualizadas);
      setTarea({});
    } else {
      // Nuevo registro
      objetoTarea.id = generarId();
      setTareas([...tareas, objetoTarea]);
    }

    // Reiniciar formulario
    setNombre("");
    setDificultad("");
    setCreacion("");
    setLimite("");
    setDescripcion("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Formulario</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Tareas y {""}
        <span className="text-gray-600 font-bold ">Administralas</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white py-10 px-5 rounded-md border-gray-600 border mb-10"
      >
        {error && <Error mensaje="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label
            htmlFor="tarea"
            className="block text-gray-600 uppercase font-bold"
          >
            Nombre Tarea
          </label>
          <input
            id="tarea"
            type="text"
            placeholder="Nombre de la Tarea"
            className="w-full p-2 mt-2 placeholder-gray-600 rounded-md border-gray-600 border"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="dificultad"
            className="block text-gray-600 uppercase font-bold"
          >
            Dificultad
          </label>
          <select
            name="dificultad"
            id="dificultad"
            className="w-full p-2 mt-2 placeholder-gray-600 rounded-md border-gray-600 border
						placeholder:Seleccione la dificultad"
            required
            value={dificultad}
            onChange={(e) => setDificultad(e.target.value)}
          >
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
          </select>
        </div>

        <div className="mb-5">
          <label
            htmlFor="creacion"
            className="block text-gray-600 uppercase font-bold"
          >
            Fecha Creación
          </label>
          <input
            id="creacion"
            type="date"
            className="w-full p-2 mt-2 rounded-md border-gray-600 border"
            value={creacion}
            onChange={(e) => setCreacion(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="limite"
            className="block text-gray-600 uppercase font-bold"
          >
            Fecha Límite
          </label>
          <input
            id="limite"
            type="date"
            className="w-full p-2 mt-2 rounded-md border-gray-600 border"
            value={limite}
            onChange={(e) => setLimite(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="descripcion"
            className="block text-gray-600 uppercase font-bold"
          >
            Descripción Tarea
          </label>
          <textarea
            id="descripcion"
            className="w-full p-2 mt-2 placeholder-gray-600 rounded-md border-gray-600 border"
            placeholder="Describe la tarea a realizar"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <input
          value={tarea.id ? "Editar Tarea" : "Agregar Tarea"}
          type="submit"
          className="bg-white w-full p-3 text-gray-600 uppercase font-bold cursor-pointer rounded-md border-gray-600 border hover:border-indigo-600 hover:border-t-8 transition-all ease-in-out duration-100 hover:text-indigo-600 "
        />
      </form>
    </div>
  );
}

export default Formulario;
