import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://etugfgijtnkwuvuyvnqw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0dWdmZ2lqdG5rd3V2dXl2bnF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc1NjY4MjUsImV4cCI6MTk4MzE0MjgyNX0.jeNxcC402TeCOkI3EqQC_kOoI2JQ7peLLd9zAEB7syk";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
