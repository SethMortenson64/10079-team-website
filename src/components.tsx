import Link from "next/link";

export function Title({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="pt-16 text-center mb-12">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
}

export function Title2({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="text-left pt-6 px-8 mt-2 mb-4">
      <h1 className="font-heading text-5xl font-black">{title}</h1>
      <p className="mb-8">{subtitle}</p>
      <hr />
    </section>
  );
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
  const finalClassName = `${className} inline-block bg-accent-blue py-3 px-8 rounded-full no-underline transition-all duration-300 ease-in-out border-none cursor-pointer hover:-translate-y-0.5 hover:bg-[#5a47ff] font-semibold`;
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
