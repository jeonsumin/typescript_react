import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'
import vitePluginSvgr from 'vite-plugin-svgr'
import tsconfigpaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginSvgr(), tsconfigpaths()],
  base: './',
  server: {
    port: 3000,
  },
  build: {
    minify: 'esbuild',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  resolve: {
    alias: {
      'app': path.resolve('src/app'),
      'entities': path.resolve('src/entities'),
      'features': path.resolve('src/features'),
      'pages': path.resolve('src/pages'),
      'shared': path.resolve('src/shared'),
      'widgets': path.resolve('src/widgets'),
    },
  },
})
