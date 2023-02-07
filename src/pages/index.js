import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Formulario from "@/components/Formulario";
import ListadoPacientes from "@/components/ListadoPacientes";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({});

  const pedirTareas = async () => {
    const response = await fetch("/api/tareas", {
      method: "GET",
    });
    const json = await response.json();
    setTareas(json);
  };

  useEffect(() => {
    pedirTareas();
  }, []);

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          tareas={tareas}
          setTareas={setTareas}
          tarea={tarea}
          setTarea={setTarea}
        />
        <ListadoPacientes
          tareas={tareas}
          setTarea={setTarea}
          eliminarTarea={eliminarTarea}
        />
      </div>
    </div>
  );
}
