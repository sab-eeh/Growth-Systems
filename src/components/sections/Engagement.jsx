// components/Sections/Engagement.jsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Rocket,
  Wrench,
  LineChart,
} from "lucide-react";
import Section from "../layout/Section";


const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Engagement() {
  const reduceMotion = useReducedMotion();

  const plans = [
    {
      icon: Rocket,
      title: "Free Audit",
      tag: "Start here",
      points: [
        "Review your current website + booking flow",
        "Identify lead drop-off points",
        "Clear action plan (no pressure)",
      ],
      cta: { label: "Request audit", href: "#audit" },
      highlight: true,
    },
    {
      icon: Wrench,
      title: "Setup Sprint",
      tag: "1–2 weeks",
      points: [
        "Online booking + lead capture setup",
        "Instant responses + follow-ups",
        "Clean handoff + team walkthrough",
      ],
      cta: { label: "See how it works", href: "#how-it-works" },
      highlight: false,
    },
    {
      icon: LineChart,
      title: "Optimization",
      tag: "Optional",
      points: [
        "Improve conversions over time",
        "Adjust messaging + automation flows",
        "Track performance and iterate",
      ],
      cta: { label: "Explore solutions", href: "#solutions" },
      highlight: false,
    },
  ];

  return (
    <Section
      id="engagement"
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24"
    >
      {/* Soft separator background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(16,185,129,0.06),transparent_60%)]" />
      </div>

      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial={reduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        custom={0}
        className="max-w-2xl"
      >
        <p className="text-sm font-medium text-emerald-500 dark:text-emerald-300">
          Engagement
        </p>

        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          A simple way to work together
        </h2>

        <p className="mt-4 text-pretty text-muted-foreground">
          No long contracts. No confusion. We start with a free audit, then
          implement the system in a short sprint.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
        {plans.map((p, i) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            custom={i + 1}
          >
            <EngagementCard {...p} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function EngagementCard({ icon: Icon, title, tag, points, cta, highlight }) {
  return (
    <div
      className={[
        "group relative h-full overflow-hidden rounded-2xl border bg-card/40 p-7 backdrop-blur-xl transition hover:bg-card/70",
        highlight ? "border-emerald-400/25" : "border-border",
      ].join(" ")}
    >
      {/* Corner glow for highlight */}
      {highlight ? (
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-emerald-400/12 blur-3xl" />
      ) : null}

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300">
            <Icon className="h-5 w-5" />
          </div>

          <span className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-medium text-muted-foreground">
            {tag}
          </span>
        </div>

        <h3 className="mt-6 text-base font-semibold tracking-tight">{title}</h3>

        <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
          {points.map((pt) => (
            <li key={pt} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500 dark:text-emerald-300" />
              <span className="leading-relaxed">{pt}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7">
          <Link
            href={cta.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/85 transition hover:text-foreground"
          >
            {cta.label}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
