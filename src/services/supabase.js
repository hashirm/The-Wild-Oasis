import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tpsmskszaouwqmyavfnl.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwc21za3N6YW91d3FteWF2Zm5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczNjUxODMsImV4cCI6MjA5Mjk0MTE4M30.4GGWlY2wdN5NDNYXVGi2fLeAGfqZ5UgKaIWmmIw6qS0";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;