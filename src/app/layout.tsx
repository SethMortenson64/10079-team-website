import Link from "next/link";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";
import NavBar from "./nav-bar";
import RandomSelectionColor from "./selection-color";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
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
        className={`${inter.variable} ${roboto.variable} antialiased h-screen flex flex-col font-sans bg-background text-foreground`}
      >
        <NavBar />
        <div className="flex-1">
          <main className="max-w-300 mx-auto px-16 max-[900px]:px-6">
            {children}
          </main>
        </div>
        <Footer />
        <RandomSelectionColor />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="bg-near-black border-t border-border-color py-8 mt-16">
      <div className="max-w-300 mx-auto px-16 flex flex-col items-center gap-4 max-[900px]:px-6">
        <div className="flex gap-4">
          <Link
            href="https://www.instagram.com/arrowdynamics10079/"
            target="_blank"
            rel="noopener"
            className="flex gap-2 items-center group"
          >
            <SiInstagram
              size={32}
              className="transition-opacity duration-300 ease-in-out hover:opacity-100 text-[#ff0069] group-hover:text-[#e6005f]"
            />
            <span className="group-hover:text-neutral-300">Instagram</span>
          </Link>
          <Link
            href="https://www.youtube.com/@ad10079"
            target="_blank"
            rel="noopener"
            className="flex gap-2 items-center group"
          >
            <SiYoutube
              size={32}
              className="transition-opacity duration-300 ease-in-out hover:opacity-100 text-[#ff0000] group-hover:text-[#e60000]"
            />
            <span className="group-hover:text-neutral-300">YouTube</span>
          </Link>
        </div>
        <p className="text-sm opacity-70">
          &copy; 2026 Team 10079 Robotics | Contact:{" "}
          <Link
            href="mailto:roboticsbothell@gmail.com"
            className="no-underline hover:underline"
          >
            roboticsbothell@gmail.com
          </Link>
        </p>
      </div>
    </footer>
  );
}
