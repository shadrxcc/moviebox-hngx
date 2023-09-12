import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        globals: {
          "import.meta.env.VITE_API_URL": JSON.stringify(
            import.meta.env.VITE_API_URL
          ),
          "import.meta.env.VITE_IMAGE_URL": JSON.stringify(
            import.meta.env.VITE_IMAGE_URL
          ),
          "import.meta.env.VITE_ACCESS_TOKEN": JSON.stringify(
            import.meta.env.VITE_ACCESS_TOKEN
          ),
          "import.meta.env.VITE_MOVIE_DETAILS": JSON.stringify(
            import.meta.env.MOVIE_DETAILS
          ),
          "import.meta.env.VITE_SEARCH_API": JSON.stringify(
            import.meta.env.VITE_SEARCH_API
          ),
        },
      },
    },
  },
});
