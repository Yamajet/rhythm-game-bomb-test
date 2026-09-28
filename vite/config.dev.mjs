import { defineConfig } from 'vite';

export default defineConfig({
    base: '/rhythm-game-bomb-test/',
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    phaser: ['phaser']
                }
            }
        },
    },
    server: {
        port: 8080
    }
});
