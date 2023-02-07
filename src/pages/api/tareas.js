// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from "@/lib/supabaseClient";

export default async function handler(req, res) {
  let { data } = await supabase.from("tareas").select();
  res.status(200).json(data);
}
