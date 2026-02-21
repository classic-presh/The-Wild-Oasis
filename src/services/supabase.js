import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://afgorqazwhqmgccnsgof.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmZ29ycWF6d2hxbWdjY25zZ29mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxNzA1NDMsImV4cCI6MjA4NTc0NjU0M30.UdkHe0pCwGqPDjdoC90u79p2hFgABpiWzqSR-x4ER1Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
