import { useState, useEffect } from "react";
import Error from "./Error";
import ListadoPacientes from "./ListadoPacientes";

function Formulario({ agregarTarea }) {
  const [nombre, setNombre] = useState("");
  const [dificultad, setDificultad] = useState("");
  const [limite, setLimite] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validacion del formulario
    if ([nombre, dificultad, limite, descripcion].includes("")) {
      console.log("Hay al menos un campo vacio");
      setError(true);
      return;
    }

    setError(false);

    // Objeto de Tarea
    const objetoTarea = {
      nombre,
      dificultad,
      limite,
      descripcion,
    };

    // Enviar tarea al api
    const response = await fetch("/api/tareas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(objetoTarea),
    });

    const json = await response.json();
    agregarTarea(json);

    // Reiniciar formulario
    setNombre("");
    setDificultad("");
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
            <option value="">-- Seleccionar dificultad --</option>
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
          </select>
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
          value="Agregar Tarea"
          type="submit"
          className="bg-white w-full p-3 text-gray-600 uppercase font-bold cursor-pointer rounded-md border-gray-600 border hover:border-indigo-600 hover:border-t-8 transition-all ease-in-out duration-100 hover:text-indigo-600 "
        />
      </form>
    </div>
  );
}

export default Formulario;
