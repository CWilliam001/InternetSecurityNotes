import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from "vite-plugin-mkcert"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), mkcert()],
    server: {
        https: {
            key: 'cert/key.pem',
            cert: 'cert/cert.pem'
        },
        host: true,
        port: 3000
    }
})
