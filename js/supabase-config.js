// Configuração de conexão com o banco de dados
const SUPABASE_URL = "SUA_PROJECT_URL_AQUI";
const SUPABASE_KEY = "SUA_ANON_PUBLIC_KEY_AQUI";

// Inicializa o cliente do Supabase globalmente
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
