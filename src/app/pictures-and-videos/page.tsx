"use client";

import { Masonry } from "masonic";
import Image, { type StaticImageData } from "next/image";
import building1 from "@/img/building-1.jpg";
import innovating from "@/img/innovating.png";
import risithSmart from "@/img/risith-smart.png";
import robot2 from "@/img/robot.png";
import robot from "@/img/robot-in-action.png";
import whiteboard from "@/img/whiteboard.png";

type Media = {
  src: string | StaticImageData;
  alt?: string;
};

const ROBOT_DESIGN: Media[] = [
  {
    src: building1,
    alt: "Building the robot",
  },
  {
    src: innovating,
    alt: "Innovating",
  },
  {
    src: risithSmart,
    alt: "Risith being smart",
  },
  {
    src: whiteboard,
    alt: "People writing on screen",
  },
];

const COMPETITIONS: Media[] = [
  {
    src: "glacier-peak.mp4",
  },
  {
    src: "auburn-1.mp4",
  },
  {
    src: "auburn-2.mp4",
  },
  {
    src: "auburn-3.mp4",
  },
  {
    src: robot,
    alt: "Our robot in action",
  },
  {
    src: robot2,
    alt: "Hella cool robot",
  },
];

export default function VisualMedia() {
  return (
    <>
      <h1 className="text-5xl font-heading font-medium mt-12 text-center">
        Pictures & Videos
      </h1>
      <section className="bg-near-black mt-12 rounded-2xl shadow-xl p-12 max-[900px]:p-8">
        <h1 className="text-3xl font-bold mb-6">Designing the Robot</h1>
        <Masonry
          items={ROBOT_DESIGN}
          columnWidth={240}
          columnGutter={16}
          rowGutter={16}
          render={Media}
        />
      </section>
      <section className="bg-near-black mt-12 rounded-2xl shadow-xl p-12 max-[900px]:p-8">
        <h1 className="text-3xl font-bold mb-6">Competitions</h1>
        <Masonry
          items={COMPETITIONS}
          columnWidth={240}
          columnGutter={16}
          rowGutter={16}
          render={Media}
        />
      </section>
    </>
  );
}

function Media({ data }: { data: Media }) {
  if (typeof data.src === "string") {
    return (
      // biome-ignore lint/a11y/useMediaCaption: No commentary
      <video controls>
        <source src={`/videos/${data.src}`} type="video/mp4" />
      </video>
    );
  }
  return <Image src={data.src} alt={data.alt || ""} />;
}
