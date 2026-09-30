import Link from "next/link";

export function TitleSection({ children }: { children: React.ReactNode }) {
  return <section className="pt-16 text-center mb-12">{children}</section>;
}

export function Title({ children }: { children: React.ReactNode }) {
  return <h1 className="text-5xl font-heading">{children}</h1>;
}

export function AltTitleSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="text-left pt-6 px-8 mt-2 mb-4">
      {children}
      <hr className="mt-8" />
    </section>
  );
}

export function AltTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="font-heading text-5xl">{children}</h1>;
}

export function Button({
  children,
  className = "",
  url,
  newTab = false,
  type = "button",
}: {
  children: React.ReactNode;
  className?: string;
  url?: string;
  newTab?: boolean;
  type?: "button" | "submit" | "reset";
}) {
  const finalClassName = `${className} inline-block bg-accent-blue py-3 px-8 rounded-full no-underline transition duration-300 border-none cursor-pointer hover:-translate-y-0.5 hover:bg-[#5a47ff] font-semibold`;
  if (url) {
    return (
      <Link
        href={url}
        target={newTab ? "_blank" : "_self"}
        rel="noopener"
        className={finalClassName}
      >
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={finalClassName}>
      {children}
    </button>
  );
}

export function SecondaryButtonLink({
  href,
  translucent = false,
  children,
}: {
  href: string;
  translucent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 py-3 px-6 border border-border-color rounded-full ${translucent ? "bg-near-black/55" : "bg-near-black"} font-semibold text-sm transition duration-300 after:content-['→'] after:text-accent-blue after:transition-transform after:duration-300 hover:border-accent-blue hover:-translate-y-0.5 hover:after:translate-x-1`}
    >
      {children}
    </Link>
  );
}
