import Link from "next/link";

type InternalLink = {
  label: string;
  href: string;
};

type LegacyInternalLinksProps = {
  title?: string;
  links: InternalLink[];
};

export default function LegacyInternalLinks({
  title = "Explore Related Services",
  links,
}: LegacyInternalLinksProps) {
  if (!links.length) return null;

  return (
    <section className="mx-auto w-[80vw] bg-white max-md:w-[90vw]">
      <div className="border-y border-gray-300 py-10">
        <h2 className="mb-6 text-4xl font-bold text-black max-md:text-3xl">
          {title}
        </h2>

        <div className="flex flex-wrap gap-4">
          {links.map((item) => (
            <Link
              key={`${item.label}-${item.href}`}
              href={item.href}
              className="inline-flex items-center border border-gray-300 px-5 py-3 font-semibold text-[#0E2C53] transition-colors hover:border-[#0E2C53] hover:bg-gray-50"
            >
              {item.label}
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
