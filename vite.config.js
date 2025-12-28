import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/pastebin': {
				target: 'https://pastebin.com',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/pastebin/, ''),
			},
		},
	},
});
