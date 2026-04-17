type SectionHeaderProps = {
  id: string;
  number: string;
  title: string;
  description: React.ReactNode;
};

export function SectionHeader({
  id,
  number,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-8">
      <div className="mb-12 grid items-baseline gap-4 sm:grid-cols-[120px_1fr] sm:gap-8">
        <div className="font-display text-4xl leading-none text-blue-primary italic sm:text-5xl">
          {number}
        </div>
        <div>
          <h2 className="font-display mb-4 text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            {title}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-ink-soft">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
