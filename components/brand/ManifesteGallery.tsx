import Image from "next/image";
import { getManifesteSectionImageUrls } from "@/lib/getManifesteGalleryImages";

type ManifesteGalleryProps = {
  title: string;
  /** Single path segment: letters, numbers, hyphens (e.g. `dessin`, `ligne-chemin`). */
  section: string;
  /** Shown when the folder is empty (where to drop files). */
  folderHint: string;
  placeholderCount: number;
};

export function ManifesteGallery({
  title,
  section,
  folderHint,
  placeholderCount,
}: ManifesteGalleryProps) {
  const imageUrls = getManifesteSectionImageUrls(section);
  const headingId = `manifeste-gallery-${section}-title`;

  return (
    <div className="mt-6 mb-10" role="region" aria-labelledby={headingId}>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-4">
        <p id={headingId} className="text-xs font-semibold tracking-[0.12em] text-blue-primary uppercase">
          {title}
        </p>
        <code className="text-xs text-blue-primary/70">{folderHint}</code>
      </div>

      {imageUrls.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {imageUrls.map((src) => {
            const fileName = src.split("/").pop() ?? src;
            return (
              <figure key={src} className="overflow-hidden bg-white">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src={src}
                    alt={`${title} — ${fileName}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="px-3 py-2 text-xs text-blue-primary/70">
                  {fileName}
                </figcaption>
              </figure>
            );
          })}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: placeholderCount }).map((_, index) => (
            <div
              key={`${section}-placeholder-${index + 1}`}
              className="flex min-h-44 flex-col items-center justify-center border border-dashed border-blue-primary/30 bg-white px-4 py-6 text-center"
            >
              <p className="text-sm leading-relaxed text-blue-primary/80">
                {`Placeholder Fig. ${index + 1}`}
                <br />
                <span className="text-xs text-blue-primary/60">{`Add image file in ${folderHint}`}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
