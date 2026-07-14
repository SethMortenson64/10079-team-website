import { Button } from "@/components";
import type { Metadata } from "next";
import Tiers from "./tiers";

export const metadata: Metadata = {
  title: "Sponsors",
};

export default function Sponsors() {
  return (
    <>
      <section className="bg-near-black mt-12 p-8 rounded-2xl shadow-xl text-center">
        <h1 className="font-heading text-4xl font-semibold mb-4">Sponsors</h1>
        <p className="max-w-187 mx-auto mb-8">
          115 companies, organizations, and individuals are currently
          contributing $9,054.88 each month to support ESLint's ongoing
          maintenance and development.
        </p>
        <Button url="/donate">Become a Sponsor</Button>
      </section>
      <Tiers />
    </>
  );
}
