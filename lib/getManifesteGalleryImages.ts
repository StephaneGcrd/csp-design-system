import fs from "node:fs";
import path from "node:path";

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif|svg)$/i;

/** Single path segment only (no `.`, `/`, or `\\`), so `path.join` cannot escape the manifeste root. */
const SAFE_SECTION_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/i;

/**
 * Returns public URLs for images in `public/brands/comptoir-sud-pacifique/manifeste/{sectionDir}/`.
 * Used from Server Components only (reads the filesystem at render time).
 */
export function getManifesteSectionImageUrls(sectionDir: string): string[] {
  if (!SAFE_SECTION_SLUG.test(sectionDir)) return [];

  const absoluteDir = path.join(
    process.cwd(),
    "public",
    "brands",
    "comptoir-sud-pacifique",
    "manifeste",
    sectionDir,
  );

  try {
    if (!fs.existsSync(absoluteDir)) return [];
    const entries = fs.readdirSync(absoluteDir);
    return entries
      .filter((name) => IMAGE_EXT.test(name) && !name.startsWith("."))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((name) => `/brands/comptoir-sud-pacifique/manifeste/${sectionDir}/${name}`);
  } catch {
    return [];
  }
}
