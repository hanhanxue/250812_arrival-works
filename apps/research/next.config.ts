import type { NextConfig } from "next"
import { withPlausibleProxy } from "next-plausible"

const nextConfig: NextConfig = withPlausibleProxy({
  src: "https://plausible.gitpushoriginmain.com/js/script.js",
})({
  allowedDevOrigins: ["192.168.1.19"],
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.r2.dev",
      },
      {
        protocol: "https",
        hostname: "research-assets.arrival.works",
      },
    ],
  },
})

export default nextConfig


