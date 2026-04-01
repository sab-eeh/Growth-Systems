"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PhoneOff, Clock, CalendarX, UserX } from "lucide-react";
import Section from "../layout/Section";

const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay: 0.06 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Problems() {
  const reduceMotion = useReducedMotion();

  const problems = [
    {
      icon: Clock,
      title: "You reply… but too late",
      description:
        "By the time you respond, the client has already booked with someone else.",
    },
    {
      icon: PhoneOff,
      title: "People don’t want to call anymore",
      description:
        "If they can’t book instantly online or via WhatsApp, they simply move on.",
    },
    {
      icon: CalendarX,
      title: "Booked clients don’t show up",
      description:
        "No reminders = missed appointments, empty slots, and lost revenue.",
    },
    {
      icon: UserX,
      title: "Leads come in… then disappear",
      description:
        "No follow-ups means interested people forget, lose interest, or choose competitors.",
    },
  ];

  return (
    <Section
      id="problems"
      className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-16 sm:py-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(800px_380px_at_50%_0%,rgba(16,185,129,0.08),transparent_60%)]" />
      </div>

      {/* Header */}
      <div className="max-w-2xl">
        <p className="text-xs sm:text-sm font-medium text-emerald-500 dark:text-emerald-300">
          The real problem
        </p>

        <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
          You’re already getting leads…{" "}
          <span className="text-emerald-500 dark:text-emerald-300">
            but losing them every day
          </span>
        </h2>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          Not because your service is bad but because there’s no system to
          respond, follow up, and convert them consistently.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-8 sm:mt-10 grid gap-3 sm:gap-4 md:grid-cols-2">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            className="h-full"
          >
            <ProblemCard {...p} />
          </motion.div>
        ))}
      </div>

      {/* Bottom line */}
      <motion.p
        variants={fadeUp}
        initial={reduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true }}
        custom={5}
        className="mt-8 sm:mt-10 max-w-2xl text-xs sm:text-sm text-muted-foreground leading-relaxed"
      >
        Every missed reply or follow-up isn’t just a message lost — it’s a
        paying client you never got.
      </motion.p>
    </Section>
  );
}

function ProblemCard({ icon: Icon, title, description }) {
  return (
    <div className="h-full flex gap-3 sm:gap-4 rounded-xl border border-border bg-card/40 p-4 sm:p-5 backdrop-blur-xl transition hover:bg-card/70 hover:border-emerald-400/30 overflow-hidden">
      {/* Icon */}
      <div className="flex-shrink-0 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>

      {/* Content */}
      <div className="min-w-0">
        <h3 className="text-sm sm:text-base font-semibold tracking-tight leading-snug">
          {title}
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed break-words">
          {description}
        </p>
      </div>
    </div>
  );
}
