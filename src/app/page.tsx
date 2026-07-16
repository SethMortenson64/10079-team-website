import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components";
import boeing from "@/img/boeing.png";
import dunnLumber from "@/img/dunn-lumber.png";
import firstRobotics from "@/img/first-robotics.png";
import fluke from "@/img/fluke.png";
import logo from "@/img/logo.png";
import nasa from "@/img/nasa.png";
import robot from "@/img/robot.png";
import team from "@/img/team.jpg";

export default function Home() {
  return (
    <>
      <TeamSection />
      <AboutSection />
      <SponsorsSection />
    </>
  );
}

function TeamSection() {
  const teamNameClass =
    "text-4xl font-black text-accent-blue font-heading max-[900px]:text-3xl";

  return (
    <section className="bg-near-black mt-12 p-12 rounded-2xl border border-border-color shadow-xl flex items-center gap-8 max-[900px]:flex-col max-[900px]:p-8">
      <div className="flex-1 text-center">
        <h1 className={`${teamNameClass} mb-4`}>Team #10079</h1>
        <Image
          src={logo}
          alt="logo"
          className="max-w-50 my-4 rounded-2xl inline"
        />
        <h2 className={teamNameClass}>ArrowDynamics</h2>
      </div>
      <div className="flex-1 text-center">
        <Image
          src={robot}
          alt="2025 competition robot"
          className="w-full rounded-xl block"
        />
        <Link
          href="/"
          className="inline-block mt-6 text-accent-blue text-2xl font-bold no-underline transition-transform duration-300 ease-in-out hover:scale-105"
        >
          2026 Robot
        </Link>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="flex gap-12 items-center bg-near-black rounded-2xl p-12 mt-12 max-[900px]:flex-col max-[900px]:p-8 shadow-xl">
      <div className="flex-1">
        <SectionTitle>Built by students, all for the future</SectionTitle>
        <p className="leading-loose mb-8 opacity-80">
          We are a team, a community, and a group of high school students. All
          in one, making new robots to compete and inspire everyone each year.
        </p>
        <Button url="/team">Meet the team</Button>
      </div>
      <div className="flex-1">
        <Image src={team} alt="Our team" className="w-full rounded-xl" />
      </div>
    </section>
  );
}

function SponsorsSection() {
  return (
    <section className="py-16 text-center">
      <SectionTitle>SPONSORS</SectionTitle>
      <div className="bg-near-black py-8 rounded-2xl border border-border-color shadow-xl overflow-hidden relative w-full hover:[animation-play-state:paused] sponsors-animation">
        <div className="flex w-625 animate-[scroll_15s_linear_infinite] [animation-play-state:paused]">
          <Sponsor name="NASA" url="https://www.nasa.gov/" img={nasa} />
          <Sponsor name="Dunn Lumber" url="#" img={dunnLumber} />
          <Sponsor name="Boeing" url="https://www.boeing.com/" img={boeing} />
          <Sponsor
            name="FIRST Robotics"
            url="https://www.firstinspires.org/"
            img={firstRobotics}
          />
          <Sponsor name="Fluke" url="https://www.fluke.com/" img={fluke} />
        </div>
      </div>
    </section>
  );
}

function Sponsor({
  name,
  url,
  img,
}: {
  name: string;
  url: string;
  img: StaticImageData;
}) {
  return (
    <div className="w-62 px-4 flex items-center justify-center">
      <Link href={url}>
        <Image
          src={img}
          alt={name}
          className="max-w-37 h-auto opacity-70 transition-all duration-300 ease-in-out hover:opacity-100"
        />
      </Link>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-3xl font-bold mb-10 tracking-wider">{children}</h3>
  );
}
