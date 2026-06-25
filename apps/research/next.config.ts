import type { NextConfig } from "next"
import { withPlausibleProxy } from "next-plausible"

const nextConfig: NextConfig = withPlausibleProxy({
  customDomain: "https://plausible.gitpushoriginmain.com",
})({
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


