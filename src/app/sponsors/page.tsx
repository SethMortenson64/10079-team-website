import type { Metadata } from "next";
import { Button } from "@/components";
import Tiers from "./tiers";

export const metadata: Metadata = {
  title: "Sponsors",
};

export default function Sponsors() {
  return (
    <div className="max-w-300 px-16 max-[900px]:px-6 w-full">
      <section className="bg-near-black mt-12 p-8 rounded-2xl shadow-xl text-center ">
        <h1 className="font-heading text-4xl font-semibold mb-4">Sponsors</h1>
        <p className="max-w-187 mx-auto mb-8">
          13 companies and organizations, this season, have contributed a total
          of $xxxxx to support ArrowDynamics' involvement in FIRST&reg;
          robotics.
        </p>
        <Button url="/donate">Become a Sponsor</Button>
      </section>
      <Tiers />
    </div>
  );
}
