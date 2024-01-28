import { createClient } from "@supabase/supabase-js";

// Load environment variables from .env file
const supabaseUrl = "https://jnlgnhvqzfushmscndtb.supabase.co";

const APIKEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpubGduaHZxemZ1c2htc2NuZHRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5MjM2MTAsImV4cCI6MjAxOTQ5OTYxMH0.ukhumLszOSE6dO_iglRJBXLfyAxqIVC0h3bkE2SL4SQ";
const supabase = createClient(supabaseUrl, APIKEY);

export default supabase;
