import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to https://<USERNAME>.github.io/<REPO>/
// replace <REPO> with your repository name below.
export default defineConfig({
  plugins: [react()],
  base: '/volleyball_resume_site/', 
})
