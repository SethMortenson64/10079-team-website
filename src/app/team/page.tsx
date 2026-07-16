import Image from "next/image";
import team from "@/img/el-equipo.jpg";
import Link from "next/link";
import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
};

export default function Team() {
  return (
    <>
      <section className="text-center pt-16 px-8 pb-8">
        <h1 className="font-heading text-6xl font-bold">Meet the Team</h1>
        <p className="text-neutral-300 max-w-none text-xl">
          The students, mentors, and minds behind the robot
        </p>
      </section>
      <Image
        src={team}
        alt="Our team"
        className="mb-12 rounded-2xl mx-auto shadow-lg"
      />
      <section className="bg-near-black p-12 rounded-2xl space-y-2 shadow-xl">
        <MemberGroup name="Leads">
          <Member name="Risith" uRole="Software Lead" />
          <Member name="Kiet" uRole="Mechanical Lead" />
          <Member name="Alex" uRole="Business Lead" />
          <Member name="Brianna" uRole="Media Lead" />
          <Member name="Kyle" uRole="Outreach Lead" />
          <Member name="Rena" uRole="Project Manager Lead" />
        </MemberGroup>
        <MemberGroup name="Software">
          <Member name="Risith" />
          <Member name="Nethul" />
          <Member name="Aaryan" />
          <Member name="Seth" />
          <Member name="Dhruv" />
          <Member name="Marcus" />
        </MemberGroup>
        <MemberGroup name="Mechanical">
          <h3 className="text-xl font-medium border-neutral-500 p-4 border-r">Fabrication</h3>
          <h3 className="text-xl font-medium border-neutral-500 p-4">CAD</h3>
          <Member name="Kiet" />
          <Member name="Kiet" />
          <Member name="Kyle" />
          <Member name="Daniel" />
          <Member name="Elijah" />
          <Member name="Jace" />
          <Member name="Jensen" />
          <Member name="Carson" />
          <Member name="Owen" />
          <Member name="Jonathon" />
        </MemberGroup>
        <MemberGroup name="Media">
          <Member name="Brianna" />
          <Member name="Maddox" />
          <Member name="Varun" />
          <Member name="Donal" />
          <Member name="Armaan" />
          <Member name="Aly" />
        </MemberGroup>
        <MemberGroup name="Mentors">
          <Member
            name="Kevin Finney"
            uRole="Lead Mentor"
            email="kfinney@nsd.org"
          />
          <Member
            name="Mrs. deVidal"
            uRole="Co-Lead Mentor"
            email="cdevidal@nsd.org"
          />
          <Member name="Peter Duniho" uRole="Software mentor" />
          <Member name="Flynn Duniho" uRole="Software mentor" />
          <Member name="Jason West" uRole="Strategy mentor" />
          <Member name="Shane the Giant" uRole="Mechanical mentor" />
          <Member name="Debra Tan" uRole="Outreach mentor" />
        </MemberGroup>
      </section>
    </>
  );
}

function MemberGroup({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold mt-3">{name}</h2>
      </div>
      <div className="grid grid-cols-2">{children}</div>
    </>
  );
}

function Member({
  name,
  uRole,
  email,
}: {
  name: string;
  uRole?: string;
  email?: string;
}) {
  return (
    <div
      key={name}
      className="border-t border-neutral-500 odd:border-r nth-last-3:odd:border-b nth-last-2:border-b last:odd:border-t-0 last:even:border-b p-4"
    >
      <p>{name}</p>
      {uRole && (
        <p className="text-neutral-400 text-sm">
          {uRole}{" "}
          {email && (
            <>
              {" "}
              &middot;{" "}
              <Link
                href={`mailto:${email}`}
                className="text-accent-blue no-underline hover:underline"
              >
                {email}
              </Link>
            </>
          )}
        </p>
      )}
    </div>
  );
}
