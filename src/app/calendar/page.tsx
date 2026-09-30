import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { cache } from "react";
import { Title, TitleSection } from "@/components";
import Countdown from "./countdown";
import { type Event, EventStatus, eventBaseToEvent } from "./event";

export const metadata: Metadata = {
  title: "Calendar & Schedule",
};

const EVENT_PROMISES = [
  {
    title: "2026 SEASON KICKOFF",
    subtitle: "The game is revealed!",
    start: new Date(2026, 0, 10),
  },
  {
    subtitle: "Regional Event",
    url: "https://frc-events.firstinspires.org/2026/WASNO",
    eventKey: "2026wasno",
  },
  {
    subtitle: "Regional Event",
    url: "https://frc-events.firstinspires.org/2026/waahs",
    eventKey: "2026waahs",
  },
  {
    subtitle: "District Championship Event",
    url: "https://frc-events.firstinspires.org/2026/PNCMP",
    eventKey: "2026pncmp",
  },
  {
    title: "Bordie Blast",
    subtitle: "Off-Season Competition",
    start: new Date(2026, 9, 9),
    end: new Date(2026, 9, 11),
    url: "https://www.bordieblast.com/bordie-through-time-2026",
  },
  {
    title: "Girls Gen",
    subtitle: "Off-Season Competition",
    start: new Date(2026, 9, 17),
    end: new Date(2026, 9, 18),
    url: "https://tahomarobotics.org/2026-wa-girls-generation",
  },
  {
    title: "Block Party",
    subtitle: "Off-Season Competition",
    start: new Date(2026, 9, 24),
    end: new Date(2026, 9, 25),
    url: "https://frcteam2910.org/pnwblockparty/",
  },
].map(async (event) => await eventBaseToEvent(event));
const events = (await Promise.all(EVENT_PROMISES)).filter(
  (event) => event !== null,
);

export default function Calendar() {
  const eventsClass =
    "grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-6";

  return (
    <div className="max-w-300 px-16 max-[900px]:px-6 w-full">
      <TitleSection>
        <Title>Calendar & Events</Title>
        <p>
          All official meetings, build sessions, and competition dates are here.
        </p>
      </TitleSection>
      <section className="mb-12">
        <h2 className="font-heading text-4xl text-center mb-8">
          Upcoming Events
        </h2>
        <div className={eventsClass}>
          {events
            .filter((event) =>
              [EventStatus.Upcoming, EventStatus.InProgress].includes(
                event.status,
              ),
            )
            .sort((a, b) => a.start.getTime() - b.start.getTime())
            .map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
        </div>
      </section>
      <section className="text-center">
        <h2 className="font-heading text-4xl">Calendar</h2>
        <p>
          <span className="font-semibold">Note:</span> We are currently having
          summer meetings every Tuesday and Thursday.
        </p>
      </section>
      <div className="bg-near-black border border-border-color rounded-2xl p-8 mt-8 mb-16 shadow-lg relative w-full h-0 pb-[75%]">
        <iframe
          title="Team Calendar"
          src="https://calendar.google.com/calendar/embed?src=roboticsbothell%40gmail.com&ctz=America%2FLos_Angeles"
          className="border-none absolute top-0 left-0 size-full rounded-lg"
          width="800"
          height="600"
        ></iframe>
      </div>
      <details className="mt-8 col-span-full bg-near-black border border-border-color rounded-xl p-4 group">
        <summary className="font-bold p-2 cursor-pointer list-none after:content-['+'] after:float-right after:font-bold group-open:after:content-['-'] group-open:border-b group-open:border-border-color group-open:mb-4 group-open:text-accent-blue">
          Past Notable Events
        </summary>
        <div className="flex flex-col gap-4 mt-4">
          {events
            .filter((event) => event.status === EventStatus.Completed)
            .sort((a, b) => b.start.getTime() - a.start.getTime())
            .map((event) => (
              <PreviousEvent key={event.id} event={event} />
            ))}
        </div>
      </details>
    </div>
  );
}

const getDtFormatter = cache(async () => {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");
  return new Intl.DateTimeFormat(
    acceptLanguage ? acceptLanguage.split(",")[0] : "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    },
  );
});

async function EventCard({ event }: { event: Event }) {
  const dtFormatter = await getDtFormatter();
  const className =
    "bg-near-black border border-accent-blue rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1 flex flex-col gap-5";

  const inner = (
    <>
      <h3 className="font-heading text-2xl">{event.title}</h3>
      <div>
        <p className="leading-relaxed font-semibold">
          {dtFormatter.formatRange(event.start, event.end || event.start)}
        </p>
        <p className="text-neutral-400">{event.subtitle}</p>
      </div>
      <hr className="text-border-color mt-auto" />
      <Countdown event={event} />
    </>
  );
  if (event.url) {
    return (
      <Link
        href={event.url}
        target="_blank"
        rel="noopener"
        className={className}
      >
        {inner}
      </Link>
    );
  }
  return <div className={className}>{inner}</div>;
}

async function PreviousEvent({ event }: { event: Event }) {
  let awards: { name: string }[] | null = null;
  if (event.eventKey) {
    const awardsResp = await fetch(
      `https://www.thebluealliance.com/api/v3/team/frc10079/event/${event.eventKey}/awards`,
      {
        headers: {
          "X-TBA-Auth-Key":
            "nX8ruBZevQpVtD2ttNFTQOC6jP9BsQ5TaKb09wHuoRUDhhXZq1mZGFGg3AuIRJp1",
        },
      },
    );
    if (awardsResp.status === 200) {
      awards = await awardsResp.json();
    }
  }

  const className =
    "bg-near-black border border-accent-blue rounded-xl p-4 gap-2 flex items-center justify-between transition-transform duration-300 ease-in-out hover:-translate-y-1";

  const inner = (
    <>
      <div>
        <h3 className="font-heading text-lg mb-1 uppercase">{event.title}</h3>
        <p className="leading-snug text-neutral-400">{event.subtitle}</p>
      </div>
      <div className="flex gap-2">
        {awards?.map((award) => (
          <div
            key={award.name}
            className="text-xs font-bold text-near-black bg-[#f1c40f] py-2 px-4 rounded-full uppercase text-nowrap"
          >
            {award.name}
          </div>
        ))}
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
