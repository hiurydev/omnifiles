import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server: {
        host: '0.0.0.0', // escuta dentro do container
        port: 5173,
        hmr: {
            host: 'localhost', // ESSENCIAL: browser acessa localhost
            protocol: 'ws',    // WebSocket
        },
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
