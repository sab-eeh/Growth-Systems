// components/Sections/Solution.jsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, MessageSquare, RefreshCcw, Bot } from "lucide-react";
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

export default function Solution() {
  const reduceMotion = useReducedMotion();

  const features = [
    {
      icon: CalendarCheck,
      title: "Online booking",
      description:
        "Let clients book instantly — with availability, confirmations, and routing.",
    },
    {
      icon: MessageSquare,
      title: "Instant responses",
      description:
        "Auto-reply via SMS, WhatsApp, or email within seconds — even after hours.",
    },
    {
      icon: RefreshCcw,
      title: "Automated follow-ups",
      description:
        "Reduce no-shows and recover cold leads with reminders and sequences.",
    },
    {
      icon: Bot,
      title: "AI inquiry handling",
      description:
        "Capture, qualify, and organize inquiries so your team stays focused.",
    },
  ];

  return (
    <Section
      id="solutions"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24"
    >
      {/* Header */}
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-emerald-500 dark:text-emerald-300">
          Our solution
        </p>

        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          A simple system that works{" "}
          <span className="text-emerald-500 dark:text-emerald-300">24/7</span>
        </h2>

        <p className="mt-4 text-pretty text-muted-foreground">
          We replace outdated processes with a modern booking + lead-handling
          system that is consistent, trackable, and scalable.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            custom={i}
          >
            <SolutionCard {...f} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function SolutionCard({ icon: Icon, title, description }) {
  return (
    <div className="group h-full rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-xl transition hover:bg-card/70">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="text-base font-semibold tracking-tight">{title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
