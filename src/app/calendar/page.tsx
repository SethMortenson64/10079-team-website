import { Title } from "@/components";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calendar & Schedule",
};

type EventBase = {
  title: string;
  subtitle: string;
  start: Date;
  end?: Date;
  url?: string;
};

type Event = EventBase & { status: EventStatus };

enum EventStatus {
  Upcoming = "UPCOMING",
  InProgress = "IN PROGRESS",
  Completed = "COMPLETED",
}

function getEventStatus(event: EventBase): EventStatus {
  const now = new Date();
  const end = new Date(event.end ? event.end : event.start);
  end.setDate(end.getDate() + 1);
  if (event.start > now) {
    return EventStatus.Upcoming;
  }
  if (end >= now) {
    return EventStatus.InProgress;
  }
  return EventStatus.Completed;
}

const EVENTS: Event[] = [
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
    url: "https://frc-events.firstinspires.org/2026/PNCMP",
  },
  {
    title: "Bordie Blast",
    subtitle: "Bordie through Time",
    start: new Date(2026, 9, 9),
    end: new Date(2026, 9, 11),
    url: "https://www.bordieblast.com/bordie-through-time-2026",
  },
  {
    title: "Girls Generation",
    subtitle: "Off-Season Competition",
    start: new Date(2026, 9, 17),
    end: new Date(2026, 9, 18),
    url: "https://tahomarobotics.org/2026-wa-girls-generation",
  },
  {
    title: "PNW Block Party",
    subtitle: "Off-Season Competition",
    start: new Date(2026, 9, 24),
    end: new Date(2026, 9, 25),
    url: "https://frcteam2910.org/pnwblockparty/",
  },
].map((event) => ({ ...event, status: getEventStatus(event) }));

export default function Calendar() {
  const eventsClass =
    "grid grid-cols-[repeat(auto-fill,minmax(21.75rem,1fr))] gap-6";

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
        <div className={eventsClass}>
          {EVENTS.filter((event) =>
            [EventStatus.Upcoming, EventStatus.InProgress].includes(
              event.status,
            ),
          )
            .sort((a, b) => a.start.getTime() - b.start.getTime())
            .map((event) => (
              <Event key={event.start.toISOString()} event={event} />
            ))}
        </div>
        <details className="mt-8 col-span-full bg-near-black border border-border-color rounded-xl p-4 group">
          <summary className="font-bold p-2 cursor-pointer list-none after:content-['+'] after:float-right after:font-bold group-open:after:content-['-'] group-open:border-b group-open:border-border-color group-open:mb-4 group-open:text-accent-blue">
            Past Notable Events
          </summary>
          <div className={`${eventsClass} mt-4`}>
            {EVENTS.filter((event) => event.status === EventStatus.Completed)
              .sort((a, b) => b.start.getTime() - a.start.getTime())
              .map((event) => (
                <Event key={event.start.toISOString()} event={event} />
              ))}
          </div>
        </details>
      </section>
      <p className="text-lg">Note: We are currently having summer meetings</p>
      <div className="bg-near-black border border-border-color rounded-2xl p-8 mt-8 mb-16 shadow-lg relative w-full h-0 pb-[75%]">
        <iframe
          title="Team Calendar"
          src="https://calendar.google.com/calendar/embed?src=roboticsbothell%40gmail.com&ctz=America%2FLos_Angeles"
          className="border-none absolute top-0 left-0 size-full rounded-lg"
          width="800"
          height="600"
        ></iframe>
      </div>
    </>
  );
}

function Event({ event }: { event: Event }) {
  const className =
    "bg-near-black border border-accent-blue rounded-xl p-6 flex items-center gap-6 transition-transform duration-300 ease-in-out hover:-translate-y-1";

  const inner = (
    <>
      <div className="bg-[#0d0d0d] border border-border-color rounded-lg p-3 min-w-17 text-center flex flex-col justify-center">
        <span className="text-sm font-bold text-accent-blue uppercase block">
          {event.start.toLocaleString("default", {
            month: "short",
          })}
        </span>
        <span className="text-3xl font-black leading-none block">
          {event.start.getDate()}
        </span>
      </div>
      <div>
        <h3 className="font-heading text-xl mb-2 uppercase">{event.title}</h3>
        <p className="mb-2 leading-snug text-neutral-400">{event.subtitle}</p>
        <span className="text-xs font-bold text-near-black bg-[#f1c40f] py-1 px-2.5 rounded-sm inline-block">
          {event.status}
        </span>
      </div>
    </>
  );

  if (event.url) {
    return (
      <Link href={event.url} target="_blank" className={className}>
        {inner}
      </Link>
    );
  }
  return <div className={className}>{inner}</div>;
}
