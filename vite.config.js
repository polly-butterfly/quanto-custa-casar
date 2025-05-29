import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/quanto-custa-casar/',
  plugins: [react()],
})
