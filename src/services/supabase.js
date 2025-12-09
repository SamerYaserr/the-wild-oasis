import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://igkagpczfxxurqnzfbak.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlna2FncGN6Znh4dXJxbnpmYmFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0NDYzODIsImV4cCI6MjA3ODAyMjM4Mn0.2NkclitLqMGzhm15V9Fd6E4tcztORGnZgNqxJjfAeuk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
