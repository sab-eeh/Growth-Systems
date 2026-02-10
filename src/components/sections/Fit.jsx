// components/Sections/Fit.jsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
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

export default function Fit() {
  const reduceMotion = useReducedMotion();

  const goodFit = [
    "Service businesses getting inquiries weekly (or daily)",
    "Teams that want more booked calls without extra staff",
    "Businesses that reply late and want instant responses",
    "Owners who want a system, not just a pretty website",
  ];

  const notFit = [
    "People who only want a one-page design with no automation",
    "Businesses that don’t follow up with leads at all",
    "Anyone expecting overnight results without consistent service",
    "Projects where the owner wants full control but no process",
  ];

  return (
    <Section
      id="fit"
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24"
    >
      {/* Soft separator */}
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
          Good fit
        </p>

        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          This is for you if…
        </h2>

        <p className="mt-4 text-pretty text-muted-foreground">
          A quick way to check if this system is the right fit for your
          business.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
        {/* Good fit */}
        <motion.div
          variants={fadeUp}
          initial={reduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          custom={1}
          className="rounded-2xl border border-border bg-card/40 p-7 backdrop-blur-xl"
        >
          <p className="text-sm font-semibold tracking-tight">Great fit</p>
          <p className="mt-2 text-sm text-muted-foreground">
            You’ll benefit the most if you match these:
          </p>

          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            {goodFit.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/10">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-300" />
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Not fit */}
        <motion.div
          variants={fadeUp}
          initial={reduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          custom={2}
          className="rounded-2xl border border-border bg-card/40 p-7 backdrop-blur-xl"
        >
          <p className="text-sm font-semibold tracking-tight">Not a fit</p>
          <p className="mt-2 text-sm text-muted-foreground">
            This probably isn’t for you if:
          </p>

          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            {notFit.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-border bg-background/40">
                  <XCircle className="h-4 w-4 text-muted-foreground" />
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
