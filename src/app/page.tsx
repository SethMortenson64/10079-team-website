import Image, { type StaticImageData } from "next/image";
import boeing from "@/img/boeing.png";
import dunnLumber from "@/img/dunn-lumber.png";
import firstRobotics from "@/img/first-robotics.png";
import fluke from "@/img/fluke.png";
import logo from "@/img/logo.png";
import nasa from "@/img/nasa.png";
import robot from "@/img/robot.jpeg";
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
    <section className="bg-near-black mt-12 p-12 rounded-2xl border border-border-color shadow-xl flex items-center gap-8">
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
        <a
          href="/"
          className="inline-block mt-6 text-accent-blue text-2xl font-bold no-underline transition-transform duration-300 ease-in-out hover:scale-105"
        >
          2025 Robot
        </a>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="flex gap-12 items-center bg-near-black rounded-2xl p-12 mt-12 max-[900px]:flex-col max-[900px]:p-8">
      <div className="flex-1">
        <SectionTitle>Built by students, all for the future</SectionTitle>
        <p className="leading-loose mb-8 opacity-80">
          We are a team, a community, and a group of high school students. All
          in one, making new robots to compete and inspire everyone each year.
        </p>
        <a
          href="/team"
          className="inline-block bg-accent-blue py-3 px-8 rounded-full no-underline font-bold transition-all duration-300 ease-in-out border-none cursor-pointer hover:-translate-y-0.75 hover:bg-[#5a47ff]"
        >
          Meet the team
        </a>
      </div>
      <div className="flex-1">
        <Image src={team} alt="team" className="w-full rounded-xl" />
      </div>
    </section>
  );
}

function SponsorsSection() {
  return (
    <section className="py-16 text-center">
      <SectionTitle>SPONSORS</SectionTitle>
      <div className="bg-near-black py-8 rounded-2xl border border-border-color shadow-xl overflow-hidden relative w-full hover:[animation-play-state:paused] sponsors-animation">
        <div className="flex w-[2500px] animate-[scroll_15s_linear_infinite] [animation-play-state:paused]">
          <Sponsor name="NASA" url="https://www.nasa.gov/" image={nasa} />
          <Sponsor name="Dunn Lumber" url="#" image={dunnLumber} />
          <Sponsor name="Boeing" url="https://www.boeing.com/" image={boeing} />
          <Sponsor
            name="FIRST Robotics"
            url="https://www.firstinspires.org/"
            image={firstRobotics}
          />
          <Sponsor name="Fluke" url="https://www.fluke.com/" image={fluke} />
        </div>
      </div>
    </section>
  );
}

function Sponsor({
  name,
  url,
  image,
}: {
  name: string;
  url: string;
  image: StaticImageData;
}) {
  return (
    <div className="w-62 px-4 flex items-center justify-center">
      <a href={url}>
        <Image
          src={image}
          alt={name}
          className="max-w-37 h-auto opacity-70 transition-all duration-300 ease-in-out hover:opacity-100"
        />
      </a>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-3xl font-bold mb-10 tracking-wider">{children}</h3>
  );
}
