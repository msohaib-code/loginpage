// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss()],
  
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ NO tailwindcss here
export default defineConfig({
  plugins: [react()],
   server: {
    // historyApiFallback: true
  }
})

