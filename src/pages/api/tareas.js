// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from "@/lib/supabaseClient";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET": {
      const { data } = await supabase.from("tareas").select();
      res.status(200).json(data);
      break;
    }
    case "POST": {
      const tarea = req.body;
      const { data, error } = await supabase
        .from("tareas")
        .insert({
          nombre: tarea.nombre,
          dificultad: tarea.dificultad,
          limite: tarea.limite,
          descripcion: tarea.descripcion,
        })
        .select();
      if (error !== null) {
        res.status(400).send(error.message);
      } else {
        res.status(200).json(data[0]);
      }
      break;
    }
    case "DELETE": {
      const id = req.query.id;
      const { error } = await supabase.from("tareas").delete().eq("id", id);
      res.status(200).json({ message: "Borrado exitosamente" });
      break;
    }
    default:
      res.status(200).json({ message: "metodo no soportado" });
  }
}

/*
rutas

GET /api/tareas
Lista de tareas en json

C POST
R GET
U PUT
D DElETE


POST /api/tareas
body:
{
  "nombre": "Diego",
  "prioridad": "Baja",
  "descripcion": "No muy dificil, que te parece?"
}
*/
