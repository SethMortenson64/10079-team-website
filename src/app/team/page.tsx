import Image from "next/image";
import team from "@/img/el-equipo.jpg";

export default function Team() {
  // TODO: Make it so that you can hover over a team member in the photo to see their name and role

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
        <MemberGroup
          name="Leads"
          members={[
            "Risith – Software Lead",
            "Kiet – Mechanical Lead",
            "Alex – Business Lead",
            "Brianna – Media Lead",
            "Kyle – Outreach Lead",
            "Rena – Project Manager Lead",
          ]}
        />
        <MemberGroup
          name="Software"
          members={["Risith", "Nethul", "Aaryan", "Seth", "Dhruv"]}
        />
        <MemberGroup
          name="Media"
          members={[
            "Brianna",
            "Maddox",
            "Varun",
            "Donald Duck",
            "Armaan",
            "Aly",
          ]}
        />
        <MemberGroup
          name="Mentors"
          members={["Peter Duniho", "Flynn Duniho", "Jason West"]}
        />
      </section>
    </>
  );
}

function MemberGroup({ name, members }: { name: string; members: string[] }) {
  return (
    <>
      <div className="space-y-1">
        <h2 className="text-xl font-medium mt-3">{name}</h2>
        <hr className="text-neutral-500" />
      </div>
      <ul className="list-disc list-inside pl-5 columns-2 space-y-2">
        {members.map((member) => (
          <li key={member}>{member}</li>
        ))}
      </ul>
    </>
  );
}
