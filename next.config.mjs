/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Para desenvolvimento local
  ...(process.env.NODE_ENV === 'development' && {
    allowedDevOrigins: ['192.168.0.221'],
  }),
  // Otimização para produção
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
}

export default nextConfig
