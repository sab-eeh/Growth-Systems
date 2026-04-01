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
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.06 * i,
      ease: [0.16, 1, 0.3, 1],
    },
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
    },
  ];

  return (
    <Section
      id="engagement"
      className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:py-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_0%,rgba(16,185,129,0.06),transparent_60%)]" />
      </div>

      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial={reduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true }}
        custom={0}
        className="max-w-xl"
      >
        <p className="text-xs sm:text-sm font-medium text-emerald-500">
          Get started
        </p>

        <h2 className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
          How you can start{" "}
          <span className="text-emerald-500">capturing more clients</span>
        </h2>

        <p className="mt-3 text-sm sm:text-base text-muted-foreground">
          Simple steps. No long-term contracts. Start with clarity, then get
          your system live quickly.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {plans.map((p, i) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true }}
            custom={i + 1}
            className="h-full"
          >
            <EngagementCard {...p} />
          </motion.div>
        ))}
      </div>

      {/* Bottom Text */}
      <motion.p
        variants={fadeUp}
        initial={reduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true }}
        custom={4}
        className="mt-6 sm:mt-8 text-xs sm:text-sm text-muted-foreground max-w-lg"
      >
        Most businesses start seeing improvements as soon as the system is live.
      </motion.p>
    </Section>
  );
}

function EngagementCard({ icon: Icon, title, tag, points, cta, highlight }) {
  return (
    <div
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border p-5 sm:p-6 transition 
      ${highlight ? "border-emerald-400/30" : "border-border"} 
      bg-card/50 backdrop-blur-lg hover:bg-card/80`}
    >
      {/* Glow */}
      {highlight && (
        <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-emerald-400/10 blur-3xl" />
      )}

      <div>
        {/* Top */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-600">
            <Icon className="h-4 w-4" />
          </div>

          <span className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full border border-border bg-background/50 text-muted-foreground whitespace-nowrap">
            {tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-sm sm:text-base font-semibold leading-snug">
          {title}
        </h3>

        {/* Points */}
        <ul className="mt-3 space-y-2 text-xs sm:text-sm text-muted-foreground">
          {points.map((pt) => (
            <li key={pt} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500 shrink-0" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-5">
        <Link
          href={cta.href}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-foreground/80 hover:text-foreground"
        >
          {cta.label}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
