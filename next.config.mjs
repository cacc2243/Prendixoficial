/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Permitir acesso do celular ao servidor de desenvolvimento
  allowedDevOrigins: ['192.168.0.221'],
}

export default nextConfig
