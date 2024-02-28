import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";
import AutoImport from 'unplugin-auto-import/vite'
import { configAutoImport } from './src/config/autoimport';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport(configAutoImport as any),
    svgr({
      include: "**/*.svg?react",
    })],
  resolve: {
    alias:  [
      { find: '@', replacement: '/src' }
    ]
  }
})
