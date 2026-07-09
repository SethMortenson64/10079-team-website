import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { SiInstagram } from "@icons-pack/react-simple-icons";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ArrowDynamics",
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
      </body>
    </html>
  );
}

function NavBar() {
  const spanClass =
    "block h-0.5 w-full bg-foreground rounded-xs transition-all duration-300 ease-in-out";

  return (
    <header className="bg-near-black py-6 border-b border-solid border-border-color z-100 sticky top-0">
      <div className="flex justify-between items-center max-w-300 mx-auto px-16 max-[900px]:px-6 max-[900px]:flex-col max-[900px]:gap-6 max-[900px]:relative max-[900px]:flex-row max-[900px]:justify-between max-[900px]:py-2">
        <div>
          <a
            href="/"
            className="text-accent-blue no-underline text-2xl font-extrabold"
          >
            ArrowDynamics
          </a>
        </div>
        <div className="hidden flex-col justify-between w-7 h-5 cursor-pointer z-1001 max-[900px]:flex">
          <span className={`${spanClass} translate-y-2 rotate-45`}></span>
          <span className={`${spanClass} opacity-0`}></span>
          <span className={`${spanClass} -translate-y-2 -rotate-45`}></span>
        </div>
        <nav className="flex items-center gap-6">
          <NavItem title="About Us">
            <NavChild title="Our Team" url="/team" />
            <NavChild title="Calendar & Schedule" url="/calendar" />
          </NavItem>
          <NavItem title="Sponsors" url="/sponsors" />
          <NavItem title="About FIRST®" url="/about-first" />
          <NavItem title="Media">
            <NavChild title="Newsletters" url="/newsletters" />
          </NavItem>
          <NavItem title="Resources" url="/resources" />
          <NavItem title="Support">
            <NavChild title="Donate" url="/donate" />
            <NavChild title="Contact Us" url="/contact" />
          </NavItem>
        </nav>
      </div>
    </header>
  );
}

const navAnchorClass =
  "no-underline font-medium py-2 px-1 relative opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100 nav-anchor hover:after:scale-x-100";

function NavItem({
  title,
  url,
  children,
}: {
  title: string;
  url?: string;
  children?: React.ReactNode;
}) {
  if (children) {
    return (
      <div className="relative inline-block max-[900px]:w-full max-[900px]:text-center group">
        <button
          type="button"
          className="bg-transparent py-2 px-1 font-medium border-none cursor-pointer opacity-80 transition-all duration-300s ease-in-out flex items-center gap-2 group-hover:opacity-100 group-hover:text-accent-blue after:-rotate-135 after:-translate-y-0.5 after:border-accent-blue"
        >
          {title}
        </button>
        <div className="hidden absolute bg-near-black min-w-50 shadow-lg z-1000 rounded-lg border border-border-color top-full left-0 group-hover:block max-[900px]:relative max-[900px]:hidden max-[900px]:w-full max-[900px]:shadow-none max-[900px]:bg-[#ffffff0d]">
          {children}
        </div>
      </div>
    );
  }
  return (
    <a href={url} className={navAnchorClass}>
      {title}
    </a>
  );
}

function NavChild({ title, url }: { title: string; url: string }) {
  return (
    <a
      href={url}
      className={`py-3 px-4 no-underline block border-b border-solid text-sm font-normal border-[#ffffff0d] hover:bg-[#1a1a1a] hover:text-accent-blue last:border-b-0 ${navAnchorClass}`}
    >
      {title}
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-near-black border-t border-border-color py-8 mt-16">
      <div className="max-w-300 mx-auto px-16 flex flex-col items-center gap-4 max-[900px]:px-6">
        <a
          href="https://www.instagram.com/arrowdynamics10079/"
          target="_blank"
          rel="noopener"
          className="flex gap-2 items-center hover:text-neutral-300"
        >
          <SiInstagram
            color="#ff0069"
            size={32}
            className="transition-opacity duration-300 ease-in-out hover:opacity-100"
          />
          Instagram
        </a>
        <p className="text-sm opacity-70">
          &copy; 2026 Team 10079 Robotics | Contact: roboticsbothell@gmail.com
        </p>
      </div>
    </footer>
  );
}
