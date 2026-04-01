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
      title: "Free System Audit",
      tag: "Start here",
      points: [
        "We analyze how your leads are coming in",
        "Identify where you're losing potential clients",
        "Show you exactly what to fix (no pressure)",
      ],
      cta: { label: "See where you're losing leads", href: "#audit" },
      highlight: true,
    },
    {
      icon: Wrench,
      title: "System Installation",
      tag: "7-day setup",
      points: [
        "Instant response + booking system setup",
        "Automated follow-ups and reminders",
        "Fully connected with your existing tools",
      ],
      cta: { label: "See how the system works", href: "#system" },
      highlight: false,
    },
    {
      icon: LineChart,
      title: "Ongoing Optimization",
      tag: "Optional",
      points: [
        "Improve conversions over time",
        "Refine messaging and follow-ups",
        "Track performance and scale results",
      ],
      cta: { label: "Explore the system", href: "#solutions" },
      highlight: false,
    },
  ];

  return (
    <Section
      id="engagement"
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24"
    >
      {/* Background */}
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
          Get started
        </p>

        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          How you can start{" "}
          <span className="text-emerald-500 dark:text-emerald-300">
            capturing more clients
          </span>
        </h2>

        <p className="mt-4 text-pretty text-muted-foreground">
          Simple steps. No long-term contracts. Start with clarity, then get
          your system live quickly.
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

      {/* 🔥 Bottom reinforcement */}
      <motion.p
        variants={fadeUp}
        initial={reduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true }}
        custom={4}
        className="mt-10 max-w-2xl text-sm text-muted-foreground"
      >
        Most businesses start seeing improvements as soon as the system is live.
      </motion.p>
    </Section>
  );
}

function EngagementCard({ icon: Icon, title, tag, points, cta, highlight }) {
  return (
    <div
      className={[
        "group relative h-full overflow-hidden rounded-2xl border bg-card/40 p-7 backdrop-blur-xl transition hover:bg-card/70 hover:border-emerald-400/30",
        highlight ? "border-emerald-400/25" : "border-border",
      ].join(" ")}
    >
      {highlight && (
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-emerald-400/12 blur-3xl" />
      )}

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-600">
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
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
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
