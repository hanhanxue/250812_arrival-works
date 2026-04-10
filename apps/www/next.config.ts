import type { NextConfig } from "next"
import { withPlausibleProxy } from "next-plausible"

const nextConfig: NextConfig = withPlausibleProxy({
  customDomain: "https://plausible.gitpushoriginmain.com",
})({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.hanhanxue.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
})

export default nextConfig
