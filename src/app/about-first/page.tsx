import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About FIRST®",
};

export default function AboutFirst() {
  return (
    <>
      <section className="my-8 font-heading font-bold uppercase text-4xl">
        “It’s More Than Robots”
      </section>
      <section className="space-y-4">
        <p>
          Founded in 1989 by inventor and entrepreneur Dean Kamen, FIRST® (For
          the Inspiration and Recognition of Science and Technologies) is the
          leading nonprofit STEM-engagement program for youth worldwide, not
          only inspiring young people’s interest in STEM-related careers, but
          also imbuing them with skills essential in the workplace through the
          values of Gracious Professionalism and Cooperation. With its four
          different youth programs spanning kindergarten to grade 12, FIRST has
          a far reach, inspiring young people of school age.
        </p>
        <p>
          While robots are very interesting and a big part of all of its
          programs, FIRST is much more than just about robots. FIRST encourages
          a philosophy known as “Gracious Professionalism”®, promoting hard
          work, respect, and the value of others. A second value of FIRST,
          “Coopertition”®, encourages not only respect and kindness towards
          opponents, but also cooperation and assistance in the face of fierce
          competition. Through these values, students who participate in FIRST
          learn skills and values essential to most any work place.
        </p>
        <p>
          To see a unique view of the amazing FRC program, check out the 2022
          documentary film More Than Robots, streaming on DISNEY+ (subscription
          required).
        </p>
      </section>
    </>
  );
}
