// Configuração de conexão com o banco de dados (URL Limpa)
const SUPABASE_URL = "https://fqycxqprorfuwrjptckv.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxeWN4cXByb3JmdXdyanB0Y2t2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxMTU0MzEsImV4cCI6MjA5NzY5MTQzMX0.heywuqU_ONCJzxGs_EI9Dq11VWpL_ctngclf3eaz45c";

// Inicializa o cliente do Supabase globalmente
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
