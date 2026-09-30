"use client";

import { useEffect, useState } from "react";
import { type Event, EventStatus } from "./event";

export default function Countdown({ event }: { event: Event }) {
  const [timeLeft, setTimeLeft] = useState<Countdown>(getTimeLeft(event));
  useEffect(() => {
    if (event.status === EventStatus.InProgress) {
      return;
    }
    const interval = setInterval(() => {
      const timeLeftVal = getTimeLeft(event);
      setTimeLeft(timeLeftVal);
      if (timeLeftVal.totalMs === 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [event]);

  return (
    <div>
      <p className="text-neutral-400 tracking-wide text-sm uppercase mb-2.5">
        Starts In:
      </p>
      {timeLeft.totalMs > 0 ? (
        <div className="grid grid-cols-4 gap-2.5">
          <CountdownBox timeLeft={timeLeft.days} unit="Days" />
          <CountdownBox timeLeft={timeLeft.hours} unit="Hours" />
          <CountdownBox timeLeft={timeLeft.minutes} unit="Min" />
          <CountdownBox timeLeft={timeLeft.seconds} unit="Sec" />
        </div>
      ) : (
        <div className="text-4xl text-purple-500 uppercase tracking-wider text-center bg-[#0d0d0d] border border-purple-500 p-2.5 rounded-md font-heading">
          Live
        </div>
      )}
    </div>
  );
}

function CountdownBox({ timeLeft, unit }: { timeLeft: number; unit: string }) {
  return (
    <div className="bg-[#0d0d0d] border border-border-color rounded-md py-2 text-center">
      <p className="font-bold text-xl">
        {timeLeft.toString().padStart(2, "0")}
      </p>
      <p className="uppercase text-xs text-neutral-400 font-semibold tracking-wide">
        {unit}
      </p>
    </div>
  );
}

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
};

const SECONDS_DIVIDER_MS = 1000;
const MINUTES_DIVIDER_MS = SECONDS_DIVIDER_MS * 60;
const HOURS_DIVIDER_MS = MINUTES_DIVIDER_MS * 60;
const DAYS_DIVIDER = HOURS_DIVIDER_MS * 24;

function getTimeLeft(event: Event): Countdown {
  const timeLeftMs = +event.start - Date.now();
  if (timeLeftMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0 };
  }
  return {
    days: Math.floor(timeLeftMs / DAYS_DIVIDER),
    hours: Math.floor((timeLeftMs % DAYS_DIVIDER) / HOURS_DIVIDER_MS),
    minutes: Math.floor((timeLeftMs % HOURS_DIVIDER_MS) / MINUTES_DIVIDER_MS),
    seconds: Math.floor((timeLeftMs % MINUTES_DIVIDER_MS) / SECONDS_DIVIDER_MS),
    totalMs: timeLeftMs,
  };
}
