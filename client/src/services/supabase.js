import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cdrgadgetimpzdsorwbh.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkcmdhZGdldGltcHpkc29yd2JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY5MjU2MDMsImV4cCI6MjA0MjUwMTYwM30.EFqAQs29zOPPlxHhRL5ndvw8iHQZGGhQph6mkGDC-8Q";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
