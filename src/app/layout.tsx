import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";
import NavBar from "./nav-bar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | ArrowDynamics",
    absolute: "ArrowDynamics",
  },
  description: "I'll let Nethul write this",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col font-sans bg-blue-600 text-foreground`}
      >
        <NavBar />
        <main className="flex flex-col items-center grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="bg-near-black border-t border-border-color py-8 mt-16">
      <div className="flex mx-auto max-w-280 gap-18 px-16 max-[900px]:px-6 max-[900px]:flex-col max-[900px]:gap-8 max-[900px]:text-center">
        <div className="shrink">
          <h4 className="text-hero-subtitle text-lg font-heading">
            ArrowDynamics
          </h4>
          <p className="font-medium text-hero-subtitle mb-4">
            FIRST Robotics Competition Team 10079
          </p>
          <p className="text-sm opacity-70">
            The robotics club of Bothell High School, proudly competing in the
            FIRST Pacific Northwest District.
          </p>
        </div>
        <div>
          <h5 className="text-hero-subtitle uppercase font-semibold tracking-wider mb-4">
            Find Us
          </h5>
          <address>
            <Link
              href="https://maps.app.goo.gl/sRpLriAJfRsxKz1f8"
              target="_blank"
              rel="noopener"
              className="text-sm hover:underline not-italic text-nowrap"
            >
              Bothell High School
              <br />
              Bothell, WA 98011
            </Link>
          </address>
        </div>
        <div>
          <h5 className="text-hero-subtitle uppercase font-semibold tracking-wider mb-4">
            Connect
          </h5>
          <Link
            href="mailto:roboticsbothell@gmail.com"
            className="no-underline hover:underline text-sm"
          >
            roboticsbothell@gmail.com
          </Link>
          <div className="flex mt-4 gap-4 max-[900px]:flex max-[900px]:justify-center">
            <Link
              href="https://www.instagram.com/arrowdynamics10079/"
              target="_blank"
              rel="noopener"
              className="size-10 flex justify-center items-center border bg-near-black border-border-color rounded-full p-2.5 hover:-translate-y-0.5 hover:border-accent-blue transition duration-300"
            >
              <SiInstagram />
            </Link>
            <Link
              href="https://www.youtube.com/@ad10079"
              target="_blank"
              rel="noopener"
              className="size-10 flex justify-center items-center border bg-near-black border-border-color rounded-full p-2.5 hover:-translate-y-0.5 hover:border-accent-blue transition duration-300"
            >
              <SiYoutube />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
