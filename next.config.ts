import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  base: process.env.NEXT_BASE_PATH || "/"
  /* config options here */
};

export default nextConfig;
