import { Title2 } from "@/components";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletters",
};

export default function Newsletters() {
  return (
    <>
      <Title2
        title="Team Newsletters"
        subtitle="Updates for families, mentors, sponsors, and supporters."
      />
      <section className="pt-4 px-8 pb-16 max-w-300 mx-auto max-[700px]:pb-12 max-[700px]:px-4">
        <div className="bg-near-black border border-border-color rounded-xl p-9 max-[700px]:p-6">
          <h2 className="font-heading text-3xl font-extrabold">
            Latest Newsletter PDFs
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-5">
            <Newsletter
              title="April Auburn 2026 Newsletter"
              url="/newsletters/april-2026.pdf"
            />
            <Newsletter
              title="March Glacier Peak 2026 Newsletter"
              url="/newsletters/march-2026.pdf"
            />
            <Newsletter
              title="February 2026 Newsletter"
              url="/newsletters/february-2026.pdf"
            />
            <Newsletter
              title="Kickoff and January 2026 Newsletter"
              url="/newsletters/january-2026.pdf"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Newsletter({ title, url }: { title: string; url: string }) {
  return (
    <article className="border border-border-color rounded-lg p-4 bg-[#ffffff05]">
      <h3 className="font-heading text-xl font-bold mb-3">{title}</h3>
      <Link
        href={url}
        target="_blank"
        className="inline-block py-2.5 px-3.5 rounded-lg no-underline font-bold border border-border-color bg-[#ffffff0a] transition-all duration-200 ease-in-out mb-3.5 hover:-translate-y-0.5 hover:border-accent-blue"
      >
        Open PDF
      </Link>
      <iframe
        src={url}
        title={title}
        className="w-full h-115 border border-border-color rounded-lg bg-white max-[700px]:h-80"
      ></iframe>
    </article>
  );
}
