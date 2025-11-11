/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Permite que el build continúe incluso si hay warnings de ESLint
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Desoptimiza imágenes para compatibilidad con diferentes hosts
    unoptimized: true,
  },
}

export default nextConfig
