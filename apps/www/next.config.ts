import type { NextConfig } from "next"
import { withPlausibleProxy } from "next-plausible"
import path from "path"

const nextConfig: NextConfig = withPlausibleProxy({
  customDomain: "https://plausible.gitpushoriginmain.com",
})({
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "src")],
  // },
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
