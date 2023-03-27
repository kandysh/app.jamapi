import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		watch: {
			usePolling: true,
		},
		host: true,
		port: 5273,
		hmr: {
			port: 5273,
			host: 'localhost',
		},
	},
});
