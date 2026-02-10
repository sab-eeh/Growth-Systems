// components/Sections/Industries.jsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Stethoscope, Building2, Briefcase, ArrowRight } from "lucide-react";
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

export default function Industries() {
  const reduceMotion = useReducedMotion();

  const industries = [
    {
      icon: Stethoscope,
      title: "Clinics",
      description:
        "Medical, dental, physiotherapy, chiropractic, and wellness clinics.",
    },
    {
      icon: Building2,
      title: "Real estate",
      description:
        "Agents and brokerages managing high-intent inquiries and viewings.",
    },
    {
      icon: Briefcase,
      title: "Agencies",
      description:
        "Marketing and service agencies that rely on fast lead response.",
    },
  ];

  return (
    <Section
      id="industries"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24"
    >
      {/* Header */}
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-emerald-500 dark:text-emerald-300">
          Industries
        </p>

        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Built for service-based businesses
        </h2>

        <p className="mt-4 text-pretty text-muted-foreground">
          The system is flexible by design — so it works across multiple
          industries without rebuilding everything from scratch.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            custom={i}
          >
            <IndustryCard {...ind} />
          </motion.div>
        ))}
      </div>

      {/* Small scalable note */}
      <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <span>
          Also works for salons, home services, coaching, legal, and more
        </span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </Section>
  );
}

function IndustryCard({ icon: Icon, title, description }) {
  return (
    <div className="group h-full rounded-2xl border border-border bg-card/40 p-8 backdrop-blur-xl transition hover:bg-card/70">
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
