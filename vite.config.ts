import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const proxy = {
    '/': {
      target: env.VITE_BLOCKCHAIN_HOST,
      changeOrigin: true,
      secure: false,
      rewrite: (p: any) => p.replace(/^\/api/, ''),
      bypass: (req: any) => {
        if (req.method !== 'POST') {
          return req.url
        }
      }
    }
  }

  return {
    plugins: [react(), nodePolyfills()],
    server: {
      proxy
    },
    preview: {
      proxy
    }
  }
})
