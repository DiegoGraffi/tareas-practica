import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://miukkudbfcplygircpwe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pdWtrdWRiZmNwbHlnaXJjcHdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU3MTM4MjcsImV4cCI6MTk5MTI4OTgyN30.dkDxa4eha9oPSd0XjSXV964kjYwaCLbqvlEhOI2hkOI"
);
