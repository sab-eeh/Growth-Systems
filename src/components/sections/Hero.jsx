// components/sections/Hero.jsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarCheck,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";



const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      delay: 0.1 * i,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      {/* Background (theme-safe) */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft glow fields */}
        <div className="absolute inset-0 bg-[radial-gradient(1100px_600px_at_50%_0%,rgba(16,185,129,0.14),transparent_60%),radial-gradient(900px_600px_at_20%_40%,rgba(255,255,255,0.08),transparent_55%),radial-gradient(900px_600px_at_80%_60%,rgba(0,0,0,0.12),transparent_55%)] dark:bg-[radial-gradient(1200px_650px_at_50%_0%,rgba(16,185,129,0.14),transparent_60%),radial-gradient(900px_600px_at_20%_40%,rgba(255,255,255,0.06),transparent_55%),radial-gradient(900px_600px_at_80%_60%,rgba(0,0,0,0.25),transparent_55%)]" />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_700px_at_50%_0%,rgba(0,0,0,0.06),transparent_60%)] dark:bg-[radial-gradient(900px_700px_at_50%_0%,rgba(0,0,0,0.22),transparent_60%)]" />

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.035] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.6%22/%3E%3C/svg%3E')]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1.5"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10">
              <Sparkles className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-300" />
            </span>

            <p className="text-xs font-medium text-muted-foreground">
              Websites + automation systems for service businesses
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            animate="show"
            custom={1}
            className="mt-6 text-balance text-[40px] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Turn your website into a{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-2 rounded-[26px] bg-gradient-to-r from-emerald-400/25 to-transparent blur-2xl" />
              <span className="relative bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                client-booking machine
              </span>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            animate="show"
            custom={2}
            className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            We help clinics, agencies, and local service businesses capture more
            leads, respond instantly, automate follow-ups, and convert inquiries
            into booked calls — without hiring extra staff.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            animate="show"
            custom={3}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="#audit"
              aria-label="Request a free audit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:w-auto"
            >
              Free Audit
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="#how-it-works"
              aria-label="See how it works"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-border bg-card/40 px-6 py-3 text-sm font-semibold text-foreground/85 transition hover:bg-card/70 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-auto"
            >
              See how it works
            </Link>
          </motion.div>

          {/* Micro-trust line (no fake claims) */}
          <motion.p
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            animate="show"
            custom={4}
            className="mt-4 text-xs text-muted-foreground"
          >
            Built with secure, modern tools. Clear scope. Clean delivery.
          </motion.p>

          {/* Trust items */}
          <motion.div
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            animate="show"
            custom={5}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            <TrustItem icon={ShieldCheck} text="Reliable & secure setup" />
            <TrustItem icon={Zap} text="Fast implementation" />
            <TrustItem icon={CalendarCheck} text="Clear milestones" />
            <TrustItem icon={MessageSquareText} text="AI-assisted responses" />
          </motion.div>

          {/* Subtle divider */}
          <motion.div
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            animate="show"
            custom={6}
            className="mx-auto mt-10 h-px w-[90%] max-w-xl bg-gradient-to-r from-transparent via-border to-transparent"
          />
        </div>
      </div>
    </section>
  );
}

function TrustItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card/40">
        <Icon className="h-4 w-4 text-foreground/80" />
      </span>
      <p className="text-sm font-medium text-muted-foreground">{text}</p>
    </div>
  );
}
