import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Gaja-yeohaeng/',
  //연동되어 있는 레포지토리 이름
})
