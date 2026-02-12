"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";

const navFade = {
  hidden: { opacity: 0, y: -12, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Navbar() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      variants={navFade}
      initial={reduceMotion ? "show" : "hidden"}
      animate="show"
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Glass background (theme-safe) */}
      <div className="absolute inset-0 border-b border-border bg-background/100 backdrop-blur-3xl" />

      {/* Subtle accent strip */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-emerald-400/0 via-emerald-400/50 to-emerald-400/0" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <nav
          className="flex h-[72px] items-center justify-between"
          aria-label="Primary"
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-card/40">
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-400/15 to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.35)]" />
            </span>

            <div className="leading-tight">
              <p className="text-[14px] font-semibold tracking-tight">
                Growth Systems
              </p>
              <p className="text-[11px] font-medium tracking-wide text-muted-foreground">
                Automation Consulting
              </p>
            </div>
          </Link>

          {/* Links */}
          <div className="hidden items-center gap-7 md:flex">
            <NavLink href="#solutions">Solutions</NavLink>
            <NavLink href="#how-it-works">How it works</NavLink>
            <NavLink href="#industries">Industries</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="#contact"
              className="hidden rounded-2xl border border-border bg-card/40 px-4 py-2.5 text-[13px] font-medium text-muted-foreground transition hover:bg-card/70 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:inline-flex"
            >
              Contact
            </Link>

            <Link
              href="#audit"
              className="group inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-4 py-2.5 text-[13px] font-semibold text-white transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Free Audit
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group relative text-[13px] font-medium tracking-tight text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg px-1 py-1"
    >
      {children}
      <span className="absolute -bottom-2 left-1 right-1 h-[2px] origin-left scale-x-0 rounded-full bg-emerald-400/70 transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
}
