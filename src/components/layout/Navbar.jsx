"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      variants={navFade}
      initial={reduceMotion ? "show" : "hidden"}
      animate="show"
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Background */}
      <div className="absolute inset-0 border-b border-border bg-background/90 backdrop-blur-2xl" />

      {/* Accent */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-emerald-400/0 via-emerald-400/60 to-emerald-400/0" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-card/40">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <div>
              <p className="text-[14px] font-semibold">Growth Systems</p>
              <p className="text-[11px] text-muted-foreground">
                Client Acquisition Systems
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-7 md:flex">
            <NavLink href="#how-it-works">How it works</NavLink>
            <NavLink href="#system">The system</NavLink>
            <NavLink href="#industries">Who it's for</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Link
              href="#audit"
              className="hidden md:inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-400"
            >
              See Missed Leads
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card/40 p-2 md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* 🔥 Mobile Menu */}
        {open && (
          <div className="mt-2 rounded-2xl border border-border bg-card/95 p-4 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-4 text-sm">
              <MobileLink href="#how-it-works" onClick={() => setOpen(false)}>
                How it works
              </MobileLink>
              <MobileLink href="#system" onClick={() => setOpen(false)}>
                The system
              </MobileLink>
              <MobileLink href="#industries" onClick={() => setOpen(false)}>
                Who it's for
              </MobileLink>
              <MobileLink href="#faq" onClick={() => setOpen(false)}>
                FAQ
              </MobileLink>

              <Link
                href="#audit"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white"
              >
                Get Free Audit
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground hover:text-foreground"
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-muted-foreground hover:text-foreground"
    >
      {children}
    </Link>
  );
}
