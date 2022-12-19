import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// import istanbul from "vite-plugin-istanbul"

export default defineConfig({
    base: '/recipe-browser/',
    plugins: [
        vue(),
        // istanbul({
        //     include: "src/*",
        //     exclude: ["node_modules", "test/"],
        //     extension: [".js", ".ts", ".vue"],
        //     requireEnv: true
        // }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    test: {
        // enable jest-like global test APIs
        globals: true,
        // simulate DOM with happy-dom
        // (requires installing happy-dom as a peer dependency)
        environment: "happy-dom",
        coverage: {
            provider: "istanbul", // or 'c8',
            reporter: ["text", "json", "html"],
        },
    },
});
