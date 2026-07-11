import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
  // Allow data files to be read at runtime
  outputFileTracingIncludes: {
    "/**": ["./data/**"],
  },
};

export default nextConfig;
