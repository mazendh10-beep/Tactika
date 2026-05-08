"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import classNames from "classnames";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/positions", label: "Positions" },
  { href: "/formations", label: "Formations" },
  { href: "/articles", label: "Articles" },
  { href: "/history", label: "History" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 dark:bg-black/80 border-b border-neutral-200 dark:border-neutral-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-primary-light dark:bg-primary-dark flex items-center justify-center text-white font-bold shadow-glow">
            T
          </div>
          <span className="text-xl font-semibold">Tactika</span>
        </div>

        <button
          className="md:hidden rounded-md border border-neutral-300 dark:border-neutral-700 px-2 py-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <div
          className={classNames(
            "flex-1 items-center justify-center gap-6 text-sm font-medium md:flex",
            open ? "flex flex-col mt-4 md:mt-0" : "hidden md:flex"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={classNames(
                "transition-colors",
                pathname === link.href
                  ? "text-primary-light dark:text-primary-light"
                  : "text-neutral-600 dark:text-neutral-300 hover:text-primary-light"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm"
          >
            Premium Login
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-accent text-white px-4 py-2 text-sm font-semibold shadow-glow"
          >
            Sign Up
          </Link>
          <ThemeToggle />
        </div>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4 flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm w-full text-center"
          >
            Premium Login
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-accent text-white px-4 py-2 text-sm font-semibold shadow-glow w-full text-center"
          >
            Sign Up
          </Link>
          <ThemeToggle />
        </div>
      )}
    </header>
  );
}
