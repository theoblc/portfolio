/**
 * Prefixes a root-relative asset path (e.g. "/images/logo.png") with the
 * app's basePath so it resolves correctly when deployed under a subpath
 * (e.g. GitHub Pages at /portfolio). next/image does not always apply
 * basePath automatically when `images.unoptimized` is enabled, so static
 * asset paths must go through this helper explicitly.
 */
export function withBasePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${path}`;
}
