import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://yxjqqszkiragsavrnomj.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4anFxc3praXJhZ3NhdnJub21qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2MTU3NDcsImV4cCI6MjA2ODE5MTc0N30.Ypv-YNRm-UUg1PuChzdW0mWFZLOdFPdYSHjvrQLRf6I'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  
})
