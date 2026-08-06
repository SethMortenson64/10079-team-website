"use client";

import Link from "next/link";
import { useId, useState } from "react";

export default function NavBar() {
  const spanClass =
    "block h-0.5 w-full bg-foreground rounded-xs transition-all duration-300 ease-in-out";

  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-near-black py-5 border-b border-border-color z-100 sticky top-0 shadow-lg">
      <div className="flex justify-between items-center max-w-300 mx-auto px-16 max-[900px]:px-6 max-[900px]:flex-col max-[900px]:gap-6 max-[900px]:relative max-[900px]:py-2">
        <div>
          <Link
            href="/"
            className="font-heading text-accent-blue text-5xl animate-pulse"
          >
            10079
          </Link>
        </div>
        <button
          type="button"
          className="hidden flex-col justify-between w-7 h-5 cursor-pointer z-1001 max-[900px]:flex"
          onClick={() => setMobileMenuActive(!mobileMenuActive)}
        >
          <span
            className={`${spanClass} ${mobileMenuActive ? "translate-y-2 rotate-45" : ""}`}
          ></span>
          <span
            className={`${spanClass} ${mobileMenuActive ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`${spanClass} ${mobileMenuActive ? "-translate-y-2 -rotate-45" : ""}`}
          ></span>
        </button>
        <nav
          className={`flex items-center gap-6 nav ${mobileMenuActive ? "max-h-screen! py-4! overflow-y-auto!" : ""}`}
        >
          <NavItem
            title="About Us"
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          >
            <NavChild title="Our Team" url="/team" />
            <NavChild title="Calendar & Schedule" url="/calendar" />
          </NavItem>
          <NavItem title="Sponsors" url="/sponsors" />
          <NavItem title="About FIRST®" url="/about-first" />
          <NavItem
            title="Media"
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          >
            <NavChild title="Pictures & Videos" url="/pictures-and-videos" />
            <NavChild title="Newsletters" url="/newsletters" />
          </NavItem>
          <NavItem title="Resources" url="/resources" />
          <NavItem
            title="Support"
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          >
            <NavChild title="Donate" url="/donate" />
            <NavChild title="Contact Us" url="/contact" />
          </NavItem>
        </nav>
      </div>
    </header>
  );
}

const navAnchorClass =
  "no-underline font-medium relative opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100 nav-anchor";

const navItemClass =
  "max-[900px]:w-full max-[900px]:text-center max-[900px]:py-4 max-[900px]:border-b max-[900px]:border-[#ffffff0d] last:border-b-0";

function NavItem(
  props:
    | {
        title: string;
        url: string;
        children?: undefined;
      }
    | {
        title: string;
        activeDropdown: string | null;
        setActiveDropdown: (val: string | null) => void;
        children: React.ReactNode;
      },
) {
  const id = useId();

  if (props.children) {
    return (
      <div className={`relative inline-block group ${navItemClass}`}>
        <button
          type="button"
          className={`bg-transparent py-2 px-1 font-medium border-none cursor-pointer opacity-80 transition-all duration-300 ease-in-out nav-dropdown-btn group-hover:opacity-100 group-hover:text-accent-blue max-[900px]:w-full max-[900px]:justify-center ${id === props.activeDropdown ? "block" : "flex items-center gap-2"}`}
          onClick={(e) => {
            if (window.innerWidth <= 900) {
              e.preventDefault();
              props.setActiveDropdown(id);
            }
          }}
        >
          {props.title}
        </button>
        <div className="hidden absolute bg-near-black min-w-50 shadow-lg z-1000 rounded-lg border border-border-color top-full left-0 group-hover:block max-[900px]:relative max-[900px]:hidden max-[900px]:w-full max-[900px]:shadow-none max-[900px]:bg-[#ffffff0d]">
          {props.children}
        </div>
      </div>
    );
  }
  return (
    // TypeScript ignoring the return statement above, requiring me to use `as`
    <Link
      href={(props as { url: string }).url}
      className={`${navAnchorClass} py-2 px-1`}
    >
      {props.title}
    </Link>
  );
}

function NavChild({ title, url }: { title: string; url: string }) {
  return (
    <Link
      href={url}
      className={`py-3 px-4 block border-b text-sm border-[#ffffff0d] hover:bg-[#1a1a1a] hover:text-accent-blue ${navAnchorClass} ${navItemClass}`}
    >
      {title}
    </Link>
  );
}
