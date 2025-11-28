import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  base: process.env.NEXT_BASE_PATH || "/kalamLabs"
  /* config options here */
};

export default nextConfig;
