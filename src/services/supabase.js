import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yctfjymrviahkfbwayaq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljdGZqeW1ydmlhaGtmYndheWFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0NDMyNzAsImV4cCI6MjA3ODAxOTI3MH0.gO_IUiOGEfxiBDjDqTzr7mKJ0sdsEi_hat_gpXzHQ8E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
