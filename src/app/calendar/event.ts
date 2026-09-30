export type EventBase =
  | {
      title: string;
      subtitle: string;
      start: Date;
      end?: Date;
      url?: string;
      eventKey?: undefined;
    }
  | {
      title?: undefined;
      subtitle: string;
      start?: undefined;
      end?: undefined;
      url: string;
      eventKey: string;
    };

export type Event = {
  id: string;
  title: string;
  subtitle: string;
  start: Date;
  end: Date;
  url?: string;
  status: EventStatus;
  eventKey?: string;
};

export enum EventStatus {
  Upcoming,
  InProgress,
  Completed,
}

export async function eventBaseToEvent(
  event: EventBase,
): Promise<Event | null> {
  let eventData: {
    title: string;
    start: Date;
    end: Date;
  } | null = null;
  if (event.eventKey) {
    const eventResp = await fetch(
      `https://www.thebluealliance.com/api/v3/event/${event.eventKey}/simple`,
      {
        headers: {
          "X-TBA-Auth-Key":
            "nX8ruBZevQpVtD2ttNFTQOC6jP9BsQ5TaKb09wHuoRUDhhXZq1mZGFGg3AuIRJp1",
        },
      },
    );
    if (eventResp.status !== 200) {
      return null;
    }
    const json = (await eventResp.json()) as {
      name: string;
      start_date: string;
      end_date: string;
    };
    const start = json.start_date.split("-").map((v) => +v);
    const end = json.end_date.split("-").map((v) => +v);
    eventData = {
      title: json.name,
      start: new Date(start[0], start[1] - 1, start[2]),
      end: new Date(end[0], end[1] - 1, end[2]),
    };
  }
  const title = eventData?.title || (event.title as string);
  const start = eventData?.start || (event.start as Date);
  const end = eventData?.end || ((event.end ? event.end : event.start) as Date);
  end.setDate(end.getDate() + 1);
  const now = new Date();
  let status: EventStatus;
  if (start > now) {
    status = EventStatus.Upcoming;
  } else if (end >= now) {
    status = EventStatus.InProgress;
  } else {
    status = EventStatus.Completed;
  }
  return {
    ...event,
    id: crypto.randomUUID(),
    title,
    start,
    end,
    status,
  };
}
