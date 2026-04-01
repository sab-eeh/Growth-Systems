"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, Settings, TrendingUp } from "lucide-react";
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

export default function HowItWorks() {
  const reduceMotion = useReducedMotion();

  const steps = [
    {
      step: "01",
      icon: Search,
      title: "We analyze your current setup",
      description:
        "We review how leads come in, how you respond, and where you're losing potential clients.",
    },
    {
      step: "02",
      icon: Settings,
      title: "We install your system",
      description:
        "We set up instant responses, booking flows, and follow-ups all connected to your existing tools.",
    },
    {
      step: "03",
      icon: TrendingUp,
      title: "You start converting more leads",
      description:
        "Your system runs automatically capturing, responding, and booking clients without manual effort.",
    },
  ];

  return (
    <Section
      id="how-it-works"
      className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-16 sm:py-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(800px_360px_at_50%_0%,rgba(16,185,129,0.07),transparent_60%)]" />
      </div>

      {/* Header */}
      <div className="max-w-2xl">
        <p className="text-xs sm:text-sm font-medium text-emerald-500 dark:text-emerald-300">
          Implementation
        </p>

        <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
          How we install your system in{" "}
          <span className="text-emerald-500 dark:text-emerald-300">7 days</span>
        </h2>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          No complex onboarding. No disruption. Just a clear process that gets
          your system live quickly.
        </p>
      </div>

      {/* Steps */}
      <div className="mt-8 sm:mt-10 grid gap-3 sm:gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            className="h-full"
          >
            <StepCard {...s} />
          </motion.div>
        ))}
      </div>

      {/* Bottom line */}
      <motion.p
        variants={fadeUp}
        initial={reduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true }}
        custom={4}
        className="mt-8 sm:mt-10 max-w-2xl text-xs sm:text-sm text-muted-foreground leading-relaxed"
      >
        Most systems are fully set up within a week so you can start capturing
        and converting leads immediately.
      </motion.p>
    </Section>
  );
}

function StepCard({ step, icon: Icon, title, description }) {
  return (
    <div className="group relative h-full flex flex-col justify-between rounded-xl border border-border bg-card/40 p-4 sm:p-5 backdrop-blur-xl transition hover:bg-card/70 hover:border-emerald-400/30 overflow-hidden">
      {/* Step number */}
      <span className="absolute right-3 top-3 text-[10px] sm:text-xs font-medium text-muted-foreground">
        {step}
      </span>

      {/* Icon */}
      <div className="mb-3 sm:mb-4 inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300">
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

      {/* Glow (fixed overflow) */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl opacity-0 transition group-hover:opacity-100" />
    </div>
  );
}
