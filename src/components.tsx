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

export function Button({
  children,
  className,
  url,
  type = "button",
}: {
  children: React.ReactNode;
  className?: string;
  url?: string;
  type?: "button" | "submit" | "reset";
}) {
  const finalClassName = `${className ? className : ""} inline-block bg-accent-blue py-3 px-8 rounded-full no-underline transition-all duration-300 ease-in-out border-0 cursor-pointer hover:-translate-y-0.5 hover:bg-[#5a47ff] font-semibold`;
  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener" className={finalClassName}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={finalClassName}>
      {children}
    </button>
  );
}
