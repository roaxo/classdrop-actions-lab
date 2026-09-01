import type { NextConfig } from "next";

// When deployed to GitHub Pages under https://<user>.github.io/<repo>/,
// the site needs to know its own base path so links/assets resolve correctly.
// The deploy workflow sets NEXT_PUBLIC_BASE_PATH to "/<repo>" (or "" for a
// user/org page repo). Locally it's unset, so the site runs at "/".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
