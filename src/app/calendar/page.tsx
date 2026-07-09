import { Title } from "@/components";

type MilestoneBase = {
  title: string;
  subtitle: string;
  start: Date;
  end?: Date;
};

type Milestone = MilestoneBase & { status: MilestoneStatus };

enum MilestoneStatus {
  Upcoming = "UPCOMING",
  InProgress = "IN PROGRESS",
  Completed = "COMPLETED",
}

function getMilestoneStatus(milestone: MilestoneBase): MilestoneStatus {
  const now = new Date();
  const end = new Date(milestone.end ? milestone.end : milestone.start);
  end.setDate(end.getDate() + 1);
  if (milestone.start > now) {
    return MilestoneStatus.Upcoming;
  }
  if (end >= now) {
    return MilestoneStatus.InProgress;
  }
  return MilestoneStatus.Completed;
}

const MILESTONES: Milestone[] = [
  {
    title: "2026 SEASON KICKOFF",
    subtitle: "The game is revealed!",
    start: new Date(2026, 0, 10),
  },
  {
    title: "2026 PNW District Championship",
    subtitle: "District Championship Event",
    start: new Date(2026, 3, 8),
    end: new Date(2026, 3, 11),
  },
  {
    title: "StormSurge",
    subtitle: "Off-Season Competition",
    start: new Date(2026, 8, 26),
    end: new Date(2026, 8, 27),
  },
  {
    title: "Bordie Blast",
    subtitle: "Bordie through Time",
    start: new Date(2026, 9, 9),
    end: new Date(2026, 9, 11),
  },
  {
    title: "Girls Generation",
    subtitle: "Off-Season Competition",
    start: new Date(2026, 9, 17),
    end: new Date(2026, 9, 18),
  },
  {
    title: "PNW Block Party",
    subtitle: "Off-Season Competition",
    start: new Date(2026, 9, 24),
    end: new Date(2026, 9, 25),
  },
].map((milestone) => ({ ...milestone, status: getMilestoneStatus(milestone) }));

export default function Calendar() {
  const milestonesClass =
    "grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6";

  return (
    <>
      <Title
        title="Team Calendar"
        subtitle="All official meetings, build sessions, and competition dates in this
        calendar."
      />
      <section className="mb-12">
        <h2 className="font-heading text-4xl font-bold text-center mb-8">
          Upcoming Events
        </h2>
        <div className={milestonesClass}>
          {MILESTONES.filter((milestone) =>
            [MilestoneStatus.Upcoming, MilestoneStatus.InProgress].includes(
              milestone.status,
            ),
          )
            .sort((a, b) => a.start.getTime() - b.start.getTime())
            .map((milestone) => (
              <Milestone
                key={milestone.start.toISOString()}
                milestone={milestone}
              />
            ))}
        </div>
        <details className="mt-8 col-span-full bg-near-black border border-border-color rounded-xl p-4 group">
          <summary className="font-bold p-2 cursor-pointer list-none after:content-['+'] after:float-right after:font-bold group-open:after:content-['-'] group-open:border-b group-open:border-border-color group-open:mb-4 group-open:text-accent-blue">
            Past Notable Events
          </summary>
          <div className={`${milestonesClass} mt-4`}>
            {MILESTONES.filter(
              (milestone) => milestone.status === MilestoneStatus.Completed,
            )
              .sort((a, b) => b.start.getTime() - a.start.getTime())
              .map((milestone) => (
                <Milestone
                  key={milestone.start.toISOString()}
                  milestone={milestone}
                />
              ))}
          </div>
        </details>
      </section>
      <div className="bg-near-black border border-border-color rounded-2xl p-8 mt-8 mb-16 shadow-lg relative w-full h-0 pb-[75%]">
        <iframe
          title="Team Calendar"
          src="https://calendar.google.com/calendar/embed?src=roboticsbothell%40gmail.com&ctz=America%2FLos_Angeles"
          className="border-0 absolute top-0 left-0 size-full rounded-lg"
          width="800"
          height="600"
        ></iframe>
      </div>
    </>
  );
}

export function Milestone({ milestone }: { milestone: Milestone }) {
  return (
    <div className="bg-near-black border border-accent-blue rounded-xl p-6 flex items-center gap-6 transition-transform duration-300 ease-in-out hover:-translate-y-1">
      <div className="bg-[#0d0d0d] border border-border-color rounded-lg p-3 min-w-17 text-center flex flex-col justify-center">
        <span className="text-sm font-bold text-accent-blue uppercase block">
          {milestone.start.toLocaleString("default", {
            month: "short",
          })}
        </span>
        <span className="text-3xl font-black leading-none block">
          {milestone.start.getDate()}
        </span>
      </div>
      <div>
        <h3 className="font-heading text-xl mb-2 uppercase">
          {milestone.title}
        </h3>
        <p className="mb-2 leading-snug text-neutral-400">
          {milestone.subtitle}
        </p>
        <span className="text-xs font-bold text-near-black bg-[#f1c40f] py-1 px-2.5 rounded-sm inline-block">
          {milestone.status}
        </span>
      </div>
    </div>
  );
}
