import Image, { type StaticImageData } from "next/image";
import { Title } from "@/components";
import logoGithub from "@/img/logo-github.png";
import placeholder from "@/img/placeholder.png";

export default function Resources() {
  return (
    <>
      <Title title="Resources" subtitle="Find more links!" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 pt-8 pb-16">
        <Resource
          title="Our GitHub Organization"
          subtitle="GitHub Organization"
          description="See our past robot code"
          url="https://github.com/FRCTeam10079"
          img={logoGithub}
        />
        <Resource
          title="Technical Binder"
          subtitle="Software Tech Binder"
          description="Our full technical documentation for design, build, and software."
          url="/tech-binder.pdf"
          img={placeholder}
        />
        <Resource
          title="Business Plan"
          subtitle="Business Plan PDF"
          description="Read our current business plan and team strategy."
          url="/business-plan.pdf"
          img={placeholder}
        />
        <Resource
          title="Club Constitution"
          subtitle="Club Constitution"
          description="Declaration of the Rights of Adrian and of the Robot"
          url="https://docs.google.com/document/d/13raUeJNZ2g01CQBrbNN1Lz09b5otioyk/edit?usp=sharing&ouid=105290089231237661033&rtpof=true&sd=true"
          img={placeholder}
        />
      </div>
    </>
  );
}

function Resource({
  title,
  subtitle,
  description,
  url,
  img,
}: {
  title: string;
  subtitle: string;
  description: string;
  url: string;
  img: StaticImageData;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      className="bg-near-black border border-border-color rounded-xl p-8 no-underline flex flex-col gap-4 transition-all duration-300 ease-in-out items-center text-center hover:-translate-y-2 hover:shadow-2xl hover:border-accent-blue"
    >
      <Image
        src={img}
        alt={subtitle}
        className="size-20 object-contain rounded-lg mb-2"
      />
      <h3 className="font-heading text-2xl font-bold">{title}</h3>
      <p className="text-neutral-400 leading-relaxed">{description}</p>
    </a>
  );
}
