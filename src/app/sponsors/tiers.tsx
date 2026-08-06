"use client";

import { Masonry } from "masonic";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import apple from "@/img/sponsors/apple.svg";
import argosyFoundation from "@/img/sponsors/argosy-foundation.png";
import bcCraftsman from "@/img/sponsors/bc-craftsman.png";
import bhs from "@/img/sponsors/bhs.png";
import boeing from "@/img/sponsors/boeing.png";
import dunnLumber from "@/img/sponsors/dunn-lumber.png";
import electroImpact from "@/img/sponsors/electroimpact.png";
import first from "@/img/sponsors/first.png";
import firstWa from "@/img/sponsors/first-wa.png";
import fluke from "@/img/sponsors/fluke.webp";
import flukeMetalProducts from "@/img/sponsors/fluke-metal-products.png";
import h10Capital from "@/img/sponsors/h10-capital.png";
import haas from "@/img/sponsors/haas.webp";
import intuitiveFoundation from "@/img/sponsors/intuitive-foundation.webp";
import nasa from "@/img/sponsors/nasa.png";
import nealSmilesOrthodontics from "@/img/sponsors/neal-smiles-orthodontics.png";
import northwestFolkLife from "@/img/sponsors/northwest-folklike.png";
import nsd from "@/img/sponsors/nsd.png";
import onlineMetalsCom from "@/img/sponsors/onlinemetals_com.svg";
import onshape from "@/img/sponsors/onshape.png";
import ptsa from "@/img/sponsors/ptsa.png";
import romacIndustries from "@/img/sponsors/romac-industries.png";
import rotary from "@/img/sponsors/rotary.png";
import speea from "@/img/sponsors/speea.png";
import woodinvillePrint from "@/img/sponsors/woodinville-print.png";

type Sponsor = {
  name: string;
  img: StaticImageData;
  url: string;
  whiteBg: boolean;
};

const hypersonicTierSponsors: Sponsor[] = [
  {
    name: "FIRST\u00AE WA",
    img: firstWa,
    url: "https://firstwa.org/",
    whiteBg: false,
  },
  /*
  {
    name: "SPEEA IFPTE Local 2001",
    img: speea,
    url: "https://speea.org/",
    whiteBg: false,
  },
  {
    name: "OnlineMetals.com",
    img: onlineMetalsCom,
    url: "https://www.onlinemetals.com/",
    whiteBg: false,
  },
  {
    name: "Intuitive Foundation",
    img: intuitiveFoundation,
    url: "https://www.intuitive-foundation.org/",
    whiteBg: false,
  },
  {
    name: "Neal Smiles Orthodontics",
    img: nealSmilesOrthodontics,
    url: "https://nealsmiles.com/",
    whiteBg: false,
  },
  {
    name: "Northwest Folk Life",
    img: northwestFolkLife,
    url: "https://nwfolklife.org/",
    whiteBg: false,
  },
  {
    name: "Northshore School District",
    img: nsd,
    url: "https://www.nsd.org/",
    whiteBg: false,
  },
  {
    name: "Bothell High School",
    img: bhs,
    url: "https://bothell.nsd.org/",
    whiteBg: false,
  },
  */
];

const supersonicTierSponsors: Sponsor[] = [
  {
    name: "HAAS",
    img: haas,
    url: "https://www.ghaasfoundation.org/",
    whiteBg: false,
  },
  {
    name: "Boeing",
    img: boeing,
    url: "https://www.boeing.com/",
    whiteBg: false,
  },
  {
    name: "H10 Capital",
    img: h10Capital,
    url: "https://h10capital.com/",
    whiteBg: true,
  },
  {
    name: "Electroimpact",
    img: electroImpact,
    url: "https://www.electroimpact.com/",
    whiteBg: false,
  },
  {
    name: "Fluke",
    img: fluke,
    url: "https://www.fluke.com/",
    whiteBg: false,
  },
  {
    name: "SPEEA IFPTE Local 2001",
    img: speea,
    url: "https://speea.org/",
    whiteBg: false,
  },
  {
    name: "Bothell High School",
    img: bhs,
    url: "https://bothell.nsd.org/",
    whiteBg: false,
  },
  {
    name: "Onshape",
    img: onshape,
    url: "https://www.onshape.com/",
    whiteBg: false,
  },
  {
    name: "Apple",
    img: apple,
    url: "https://www.apple.com/",
    whiteBg: false,
  },
  {
    name: "Fluke Metal Products",
    img: flukeMetalProducts,
    url: "https://www.flukemetal.com/",
    whiteBg: false,
  },
  /*
  {
    name: "Boeing",
    img: boeing,
    url: "https://www.boeing.com/",
    whiteBg: false,
  },
  {
    name: "Apple",
    img: apple,
    url: "https://www.apple.com/",
    whiteBg: false,
  },
  {
    name: "NASA",
    img: nasa,
    url: "https://www.nasa.gov/",
    whiteBg: false,
  },
  {
    name: "Fluke",
    img: fluke,
    url: "https://www.fluke.com/",
    whiteBg: false,
  },
  {
    name: "HAAS",
    img: haas,
    url: "https://www.ghaasfoundation.org/",
    whiteBg: false,
  },
  {
    name: "Dunn Lumber",
    img: dunnLumber,
    url: "https://www.dunnlumber.com/",
    whiteBg: false,
  },
  {
    name: "Argosy Foundation",
    img: argosyFoundation,
    url: "https://www.argosyfnd.org/",
    whiteBg: false,
  },
  {
    name: "Woodinville Print",
    img: woodinvillePrint,
    url: "https://www.woodinvilleprint.com/",
    whiteBg: false,
  },
  {
    name: "Rotary",
    img: rotary,
    url: "https://www.nshorerotary.org/",
    whiteBg: false,
  },
  {
    name: "PTSA",
    img: ptsa,
    url: "https://bothellptsa.givebacks.com/",
    whiteBg: false,
  },
  {
    name: "BC Craftsman",
    img: bcCraftsman,
    url: "https://www.facebook.com/p/BC-Craftsman-61572540057314/",
    whiteBg: false,
  },
  {
    name: "Fluke Metal Products",
    img: flukeMetalProducts,
    url: "https://www.flukemetal.com/",
    whiteBg: false,
  },
  */
];

const tier1Sponsors: Sponsor[] = [
  {
    name: "Dunn Lumber",
    img: dunnLumber,
    url: "https://www.dunnlumber.com/",
    whiteBg: false,
  },
  {
    name: "Rotary",
    img: rotary,
    url: "https://www.nshorerotary.org/",
    whiteBg: false,
  },
  /*
  {
    name: "H10 Capital",
    img: h10Capital,
    url: "https://h10capital.com/",
    whiteBg: true,
  },
  {
    name: "FIRST\u00AE",
    img: first,
    url: "https://www.firstinspires.org/",
    whiteBg: false,
  },
  {
    name: "Romac Industries",
    img: romacIndustries,
    url: "https://www.romac.com/",
    whiteBg: false,
  },
  */
];

export default function Tiers() {
  return (
    <>
      <section className="grid grid-cols-2 max-[900px]:grid-cols-1 mt-12 mb-32 gap-32 max-[900px]:gap-8">
        <div>
          <h1 className="font-heading text-4xl font-semibold mb-4">
            Hypersonic Tier
          </h1>
          <p>
            Become a Hypersonic Tier sponsor with a donation of $5,000-$9,999
            USD and get your logo on our website, T-shirts, banner, and robot.
            We will also give you a social media shoutout (over xxxxx
            followers), a handwritten thank-you, team performance updates, and
            an on-site demonstration of our robot.
          </p>
        </div>
        {/* columnWidth was 180 */}
        <Masonry
          items={hypersonicTierSponsors}
          columnWidth={Number.MAX_SAFE_INTEGER}
          columnGutter={16}
          rowGutter={16}
          render={Sponsor}
        />
      </section>
      <section className="grid grid-cols-2 max-[900px]:grid-cols-1 mb-32 gap-32 max-[900px]:gap-8">
        <div>
          <h2 className="font-heading text-3xl font-semibold mb-4">
            Supersonic Tier
          </h2>
          <p>
            Become a Supersonic Tier sponsor with a donation of $1,000-$4,999
            USD and get your logo on our website, T-shirts, robot, and banner.
            We will also give you a social media shoutout (over xxxxx
            followers), a handwritten thank-you, and team performance updates.
          </p>
        </div>
        <Masonry
          items={supersonicTierSponsors}
          columnWidth={120}
          columnGutter={16}
          rowGutter={16}
          render={Sponsor}
        />
      </section>
      <section className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-32 max-[900px]:gap-8">
        <div>
          <h3 className="font-heading text-2xl font-semibold mb-4">
            Sonic Tier
          </h3>
          <p>
            Become a Sonic Tier sponsor with a donation of $250-$999 and get
            your logo on our website, T-shirts, and robot. We will also give you
            a social media shoutout and a handwritten thank-you.
          </p>
        </div>
        <Masonry
          items={tier1Sponsors}
          columnWidth={90}
          columnGutter={16}
          rowGutter={16}
          render={Sponsor}
        />
      </section>
    </>
  );
}

function Sponsor({ data }: { data: Sponsor }) {
  return (
    <Link href={data.url} target="_blank">
      <Image
        src={data.img}
        alt={data.name}
        className={`transition-transform duration-300 ease-in-out hover:-translate-y-0.5 ${data.whiteBg ? "bg-white rounded-md" : ""}`}
      />
    </Link>
  );
}
