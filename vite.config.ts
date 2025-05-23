import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig(({ mode }) => {
    const base = mode === "production" ? "/savant/" : "/"

    return {
        root: "./src/docs",
        base: base,
        plugins: [tailwindcss()],
    }
})
