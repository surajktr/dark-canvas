import { defineConfig } from "vite";
// Force rebuild after Cloud enable
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  define: {
    'import.meta.env.VITE_SUPABASE_URL': JSON.stringify('https://cmelvyrqkelhpfwvkkii.supabase.co'),
    'import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY': JSON.stringify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtZWx2eXJxa2VsaHBmd3Zra2lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzExMjI4NzQsImV4cCI6MjA4NjY5ODg3NH0.Yo_iziUlgofyo6MIjb-tGxELS70OmX2Z9fBV5INp5Yk'),
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
