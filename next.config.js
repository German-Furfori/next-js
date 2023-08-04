/** @type {import('next').NextConfig} */
const nextConfig = {
    // Para poder configurar las rutas con la nueva forma de la versión 13 de next.js, pongo esta config. Antes nextConfig estaba = {}
    experimental: {
        appDir: true
    }
}

module.exports = nextConfig
