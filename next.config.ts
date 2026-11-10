import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // configure image 
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shadcnblocks.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      }
    ]
  }
};

export default nextConfig;
