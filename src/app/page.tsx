import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Button, SecondaryButtonLink } from "@/components";
import boeing from "@/img/boeing.png";
import dunnLumber from "@/img/dunn-lumber.png";
import firstRobotics from "@/img/first-robotics.png";
import fluke from "@/img/fluke.png";
import logo from "@/img/logo.jpg";
import nasa from "@/img/nasa.png";
import robot from "@/img/robot.png";
import team from "@/img/team.jpg";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="max-w-300 px-16 max-[900px]:px-6 w-full">
        <TeamSection />
        <AboutSection />
        <SponsorsSection />
        <SponsorUsSection />
      </div>
    </>
  );
}

function HeroSection() {
  // FIXME: Only people's heads can be seen when screen is large enough.
  return (
    <section className="relative bg-[linear-gradient(180deg,rgba(8,8,14,0.82)_0%,rgba(8,8,14,0.6)_55%,var(--color-blue-600)_100%),url('/team.jpg')] bg-cover bg-position-[center_30%] pt-28 px-8 pb-24 text-center w-full">
      <div className="mx-auto flex flex-col items-center gap-6">
        <Image
          src={logo}
          alt="ArrowDynamics Logo"
          className="w-32 h-auto rounded-2xl shadow-lg border border-neutral-800"
        />
        <p className="text-sm font-semibold tracking-widest uppercase text-hero-subtitle flex items-center gap-2.5">
          FIRST® Robotics Competition &middot; Team 10079
        </p>
        <h1 className="font-heading text-[clamp(2rem,6.5vw,4.5rem)] font-black uppercase tracking-widest">
          ArrowDynamics
        </h1>
        <p className="leading-relaxed max-w-[62ch]">
          We are a student-led robotics team from Bothell High School. Our
          mission is to excite and motivate students to pursue careers in
          science, engineering, and technology, and to build the leadership,
          business, and life skills that go with them.
        </p>
        <p className="text-hero-subtitle text-sm tracking-wider uppercase">
          Bothell High School &middot; FIRST® Pacific Northwest District
        </p>
        <div className="flex flex-wrap gap-4">
          <SecondaryButtonLink href="/about" translucent>
            About Us
          </SecondaryButtonLink>
          <SecondaryButtonLink href="/team" translucent>
            Meet the Team
          </SecondaryButtonLink>
          <SecondaryButtonLink href="/about-first" translucent>
            What is FIRST®?
          </SecondaryButtonLink>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="bg-near-black mt-12 p-12 rounded-2xl border border-border-color shadow-xl flex items-center gap-8 max-[900px]:flex-col max-[900px]:p-8">
      <div className="flex-[1.2]">
        <p className="text-hero-subtitle before:w-4.5 before:content-[''] before:h-2 before:[clip-path:polygon(0_3px,11px_3px,11px_0,18px_4px,11px_8px,11px_5px,0_5px)] before:bg-accent-blue tracking-widest uppercase mb-4 inline-flex items-center gap-2 text-sm font-medium">
          2026 Season
        </p>
        <h1 className="text-5xl tracking-widest font-heading max-[900px]:text-3xl mb-4">
          Rebuilt
        </h1>
        <p className="opacity-80 leading-relaxed mb-6">
          In our second season, ArrowDynamics reached the event finals at the
          PNW District Glacier Peak Event and earned the Rising All-Star Award
          three times, at Glacier Peak, at Auburn, and at the FIRST Washington
          District Championship.
        </p>
        <p className="opacity-80 leading-relaxed mb-6">
          This fall we are competing at off-season events and getting ready for
          kickoff. Come watch, or better yet, join us.
        </p>
        <div className="flex gap-4">
          <SecondaryButtonLink href="/seasons/2026">
            Our Season
          </SecondaryButtonLink>
          <SecondaryButtonLink href="/calendar">
            Events & Meetings
          </SecondaryButtonLink>
        </div>
      </div>
      <figure className="text-center flex-1">
        <Image
          src={robot}
          alt="2025 competition robot"
          className="w-full rounded-xl block"
        />
        <figcaption className="text-hero-subtitle text-sm mt-6">
          Our 2026 competition robot
        </figcaption>
      </figure>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="flex gap-12 items-center bg-near-black rounded-2xl p-12 mt-12 max-[900px]:flex-col max-[900px]:p-8 shadow-xl">
      <div className="flex-1">
        <h3 className="text-3xl font-heading mb-10 tracking-widest">
          Built by students, all for the future
        </h3>
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
      <h3 className="text-4xl font-heading mb-4 tracking-widest">
        Our Sponsors
      </h3>
      <p className="mb-8 text-hero-subtitle">
        ArrowDynamics runs on the generosity of the companies and organizations
        below.
      </p>
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
          className="max-w-37 h-auto opacity-70 transition duration-300 hover:opacity-100"
        />
      </Link>
    </div>
  );
}

function SponsorUsSection() {
  return (
    <section className="flex flex-col gap-4 items-center text-center bg-near-black rounded-2xl p-12 mt-12 max-[900px]:flex-col max-[900px]:p-8 shadow-xl">
      <h3 className="font-heading text-4xl">Support our Team!</h3>
      <p className="opacity-80">
        Donations and sponsorships keep ArrowDynamics building. Every donation
        through FIRST® Washington is tax-deductible.
      </p>
      <div className="flex gap-6">
        <Button className="bg-green-500!">Donate</Button>
        <Button>Become a Sponsor</Button>
      </div>
      <p className="opacity-80">
        Questions? Reach us at{" "}
        <a href="mailto:roboticsbothell@gmail.com" className="hover:underline">
          roboticsbothell@gmail.com
        </a>
      </p>
    </section>
  );
}
