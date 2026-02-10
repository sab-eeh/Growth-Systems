// components/Sections/HowItWorks.jsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, Settings, TrendingUp } from "lucide-react";
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

export default function HowItWorks() {
  const reduceMotion = useReducedMotion();

  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Audit & strategy",
      description:
        "We review your website, booking flow, and lead handling to identify friction and missed opportunities.",
    },
    {
      step: "02",
      icon: Settings,
      title: "System setup",
      description:
        "We implement online booking, instant responses, and automated follow-ups tailored to your workflow.",
    },
    {
      step: "03",
      icon: TrendingUp,
      title: "Optimize & scale",
      description:
        "We track performance, improve conversions, and help you scale results over time — sustainably.",
    },
  ];

  return (
    <Section
      id="how-it-works"
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24"
    >
      {/* Soft separator background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(16,185,129,0.07),transparent_60%)]" />
      </div>

      {/* Header */}
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-emerald-500 dark:text-emerald-300">
          How it works
        </p>

        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          A clear, proven process
        </h2>

        <p className="mt-4 text-pretty text-muted-foreground">
          Simple steps designed to get results quickly without disrupting your
          existing operations.
        </p>
      </div>

      {/* Steps */}
      <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            custom={i}
          >
            <StepCard {...s} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function StepCard({ step, icon: Icon, title, description }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/40 p-7 backdrop-blur-xl transition hover:bg-card/70">
      {/* Step number */}
      <span className="absolute right-6 top-6 text-xs font-medium tracking-wide text-muted-foreground">
        {step}
      </span>

      {/* Icon */}
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="text-base font-semibold tracking-tight">{title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      {/* Subtle corner glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl opacity-0 transition group-hover:opacity-100" />
    </div>
  );
}
