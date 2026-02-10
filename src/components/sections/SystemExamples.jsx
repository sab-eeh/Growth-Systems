// components/Sections/SystemExamples.jsx
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
    headline: "Reduce missed appointments and respond instantly",
    description:
      "A clinic-ready setup that turns inquiries into booked appointments with confirmations, reminders, and follow-ups.",
    flow: [
      "Patient submits form or clicks Book",
      "Instant confirmation + intake questions",
      "Auto reminders before appointment",
      "Follow-up message after visit",
      "Reactivation flow for inactive patients",
    ],
    outcomes: [
      "Fewer no-shows",
      "Faster response time",
      "More booked appointments",
    ],
  },
  {
    key: "realestate",
    label: "Real Estate",
    icon: Building2,
    headline: "Qualify inquiries before you waste time",
    description:
      "A workflow designed for agents and teams handling high-intent leads from listings, ads, and referrals.",
    flow: [
      "Lead requests a viewing or info",
      "Instant reply + qualification questions",
      "Auto scheduling for viewings",
      "Reminder + follow-up if no reply",
      "Organized lead list in CRM/Sheet",
    ],
    outcomes: [
      "Less time wasted",
      "More show-ups to viewings",
      "Better lead organization",
    ],
  },
  {
    key: "agency",
    label: "Agencies",
    icon: Briefcase,
    headline: "Capture leads and keep follow-ups consistent",
    description:
      "An agency-focused lead capture system that handles inbound inquiries and books discovery calls faster.",
    flow: [
      "Lead fills form or DMs your page",
      "Instant reply + booking link",
      "Follow-up sequence if they don’t book",
      "Pre-call questions collected automatically",
      "Clean handoff to your calendar + CRM",
    ],
    outcomes: [
      "More booked discovery calls",
      "Less lead leakage",
      "More consistent pipeline",
    ],
  },
];

export default function SystemExamples() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState("clinic");

  const current = useMemo(
    () => SYSTEMS.find((s) => s.key === active),
    [active]
  );

  return (
    <Section
      id="systems"
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
          System examples
        </p>

        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          What the system looks like in real businesses
        </h2>

        <p className="mt-4 text-pretty text-muted-foreground">
          Not templates. Not generic automation. These are proven workflows
          built around how service businesses actually operate.
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        variants={fadeUp}
        initial={reduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        custom={1}
        className="mt-10 flex flex-wrap items-center gap-2"
      >
        {SYSTEMS.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.key === active;

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActive(tab.key)}
              className={[
                "inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive
                  ? "border-emerald-400/25 bg-emerald-400/10 text-foreground"
                  : "border-border bg-card/40 text-muted-foreground hover:bg-card/70 hover:text-foreground",
              ].join(" ")}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </motion.div>

      {/* Content */}
      <motion.div
        variants={fadeUp}
        initial={reduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        custom={2}
        className="mt-8 grid gap-6 lg:grid-cols-2"
      >
        {/* Left */}
        <div className="rounded-2xl border border-border bg-card/40 p-7 backdrop-blur-xl">
          <p className="text-xs font-medium text-emerald-500 dark:text-emerald-300">
            {current.label}
          </p>

          <h3 className="mt-3 text-xl font-semibold tracking-tight">
            {current.headline}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {current.description}
          </p>

          <div className="mt-6">
            <p className="text-sm font-semibold tracking-tight">
              Expected outcomes
            </p>

            <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
              {current.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500 dark:text-emerald-300" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/40 p-7 backdrop-blur-xl">
          <p className="text-sm font-semibold tracking-tight">
            Workflow overview
          </p>

          <div className="mt-5 space-y-3">
            {current.flow.map((step, i) => (
              <div
                key={step}
                className="flex items-start gap-3 rounded-2xl border border-border bg-background/40 px-4 py-3"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/10 text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                  {i + 1}
                </span>

                <div className="flex-1">
                  <p className="text-sm text-foreground/85">{step}</p>
                </div>

                <ArrowRight className="mt-0.5 h-4 w-4 text-muted-foreground" />
              </div>
            ))}
          </div>

          {/* Soft glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-emerald-400/12 blur-3xl" />
        </div>
      </motion.div>
    </Section>
  );
}
