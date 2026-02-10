// components/Sections/Problems.jsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PhoneOff, Clock, CalendarX, UserX } from "lucide-react";
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

export default function Problems() {
  const reduceMotion = useReducedMotion();

  const problems = [
    {
      icon: PhoneOff,
      title: "Phone-only bookings",
      description:
        "Customers don’t want to call. If they can’t book instantly, they leave.",
    },
    {
      icon: Clock,
      title: "Slow response time",
      description: "Leads expect replies within minutes — not hours or days.",
    },
    {
      icon: CalendarX,
      title: "Missed appointments",
      description:
        "No reminders or follow-ups means no-shows and lost revenue.",
    },
    {
      icon: UserX,
      title: "Manual follow-ups",
      description:
        "Staff wastes time chasing leads instead of serving clients.",
    },
  ];

  return (
    <Section
      id="problems"
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24"
    >
      {/* Soft background separator */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(16,185,129,0.08),transparent_60%)]" />
      </div>

      {/* Header */}
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-emerald-500 dark:text-emerald-300">
          The problem
        </p>

        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Most service businesses lose leads{" "}
          <span className="text-emerald-500 dark:text-emerald-300">
            every single day
          </span>
        </h2>

        <p className="mt-4 text-pretty text-muted-foreground">
          Not because of bad service — but because their booking and follow-up
          systems are outdated.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            custom={i}
          >
            <ProblemCard {...p} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function ProblemCard({ icon: Icon, title, description }) {
  return (
    <div className="group flex gap-4 rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-xl transition hover:bg-card/70">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <h3 className="text-base font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
