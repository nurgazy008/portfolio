/** @type {import('next').NextConfig} */

// On GitHub Pages a project site is served from /<repo>, so we need a basePath.
// The deploy workflow passes PAGES_BASE_PATH (e.g. "/portfolio"). Locally it's empty.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  output: "export", // static HTML export for GitHub Pages
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true, // next/image isn't available on static hosts
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
