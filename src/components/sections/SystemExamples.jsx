"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Stethoscope,
  Building2,
  Briefcase,
  ArrowRight,
  CheckCircle2,
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

const SYSTEMS = [
  {
    key: "clinic",
    label: "Clinics",
    icon: Stethoscope,
    headline: "Turn patient inquiries into booked appointments automatically",
    description:
      "Instead of missed calls and delayed replies, every patient gets an instant response, booking option, and reminders — without manual effort.",
    flow: [
      "Patient submits form or clicks WhatsApp",
      "Instant reply with booking options",
      "Appointment scheduled automatically",
      "Reminders sent before visit",
      "Follow-up + reactivation after visit",
    ],
    outcomes: [
      "Fewer no-shows",
      "Faster patient response time",
      "More booked appointments",
    ],
  },
  {
    key: "realestate",
    label: "Real Estate",
    icon: Building2,
    headline: "Filter serious buyers and book more viewings",
    description:
      "Stop wasting time on unqualified leads. Every inquiry is instantly responded to, qualified, and guided toward booking a viewing.",
    flow: [
      "Lead requests property info",
      "Instant reply + qualification questions",
      "Serious leads get booking link",
      "Viewing scheduled automatically",
      "Follow-ups sent if no response",
    ],
    outcomes: [
      "Less time wasted on low-quality leads",
      "More confirmed property viewings",
      "Organized lead pipeline",
    ],
  },
  {
    key: "agency",
    label: "Agencies",
    icon: Briefcase,
    headline: "Capture leads and book more discovery calls",
    description:
      "Every inquiry is instantly handled, followed up, and pushed toward booking — so your pipeline stays full without manual chasing.",
    flow: [
      "Lead fills form or sends DM",
      "Instant response with booking link",
      "Follow-up sequence if no booking",
      "Pre-call questions collected automatically",
      "Booked call synced to your calendar",
    ],
    outcomes: [
      "More booked discovery calls",
      "Less lead leakage",
      "Consistent pipeline growth",
    ],
  },
];

export default function SystemExamples() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState("clinic");

  const current = SYSTEMS.find((s) => s.key === active) || SYSTEMS[0];

  return (
    <Section
      id="systems"
      className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-16 sm:py-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(800px_360px_at_50%_0%,rgba(16,185,129,0.06),transparent_60%)]" />
      </div>

      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial={reduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <p className="text-xs sm:text-sm font-medium text-emerald-500">
          Real examples
        </p>

        <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
          This is what your{" "}
          <span className="text-emerald-500">system could look like</span>
        </h2>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          Explore how the system works in real scenarios from first inquiry to
          booking.
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="mt-6 sm:mt-8 flex flex-wrap gap-2">
        {SYSTEMS.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.key === active;

          return (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs sm:text-sm transition ${
                isActive
                  ? "border-emerald-400/25 bg-emerald-400/10"
                  : "border-border bg-card/40"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-5 lg:grid-cols-2">
        {/* LEFT */}
        <div className="h-full flex flex-col rounded-xl border border-border bg-card/40 p-4 sm:p-5 backdrop-blur-xl overflow-hidden">
          <div className="min-w-0">
            <p className="text-[11px] sm:text-xs text-emerald-500">
              {current.label}
            </p>

            <h3 className="mt-2 text-base sm:text-lg font-semibold leading-snug">
              {current.headline}
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {current.description}
            </p>
          </div>

          <div className="mt-4">
            <p className="text-xs sm:text-sm font-semibold">
              What this improves
            </p>

            <ul className="mt-2 space-y-2 text-xs sm:text-sm text-muted-foreground">
              {current.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span className="break-words">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative h-full flex flex-col rounded-xl border border-border bg-card/40 p-4 sm:p-5 backdrop-blur-xl overflow-hidden">
          <p className="text-xs sm:text-sm font-semibold">Step-by-step flow</p>

          <div className="mt-3 space-y-2">
            {current.flow.map((step, i) => (
              <div
                key={step}
                className="flex items-start gap-2 rounded-xl border border-border bg-background/40 px-3 py-2"
              >
                <span className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-emerald-400/10 text-[10px]">
                  {i + 1}
                </span>

                <p className="flex-1 text-xs sm:text-sm break-words">{step}</p>

                <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" />
              </div>
            ))}
          </div>

          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />
        </div>
      </div>
    </Section>
  );
}
