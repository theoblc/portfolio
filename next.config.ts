import type { NextConfig } from "next";

// When building in GitHub Actions for GitHub Pages, the site is served from
// https://<user>.github.io/portfolio/ instead of the domain root, so we need
// a basePath/assetPrefix. Locally (dev/build) this stays empty.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "portfolio";
const basePath = isGithubActions ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    // Exposed so plain <a>/<img> tags (not handled by next/link or
    // next/image) can be prefixed manually when deployed under a basePath.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
