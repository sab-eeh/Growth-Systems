"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import Section from "../layout/Section";

const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay: 0.06 * i },
  }),
};

export default function Packages() {
  const reduceMotion = useReducedMotion();

  const plans = [
    {
      title: "System Audit",
      subtitle: "Start here",
      description:
        "We analyze your current setup and show you exactly where you're losing leads and bookings.",
      points: [
        "Lead flow analysis",
        "Response time review",
        "Missed opportunities breakdown",
        "Clear action plan",
      ],
      cta: "Get Free Audit",
      href: "#audit",
      highlight: false,
    },
    {
      title: "System Installation",
      subtitle: "Core system",
      description:
        "We install a complete system that captures, responds, and converts leads automatically.",
      points: [
        "Instant response system (WhatsApp, email)",
        "Booking + scheduling setup",
        "Automated follow-ups & reminders",
        "Connected CRM / lead tracking",
      ],
      cta: "Get Your System Installed",
      href: "#contact",
      highlight: true,
    },
    {
      title: "Optimization",
      subtitle: "Optional",
      description:
        "We improve your system over time to increase conversions and maximize results.",
      points: [
        "Conversion improvements",
        "Message & flow optimization",
        "Performance tracking",
        "Continuous refinement",
      ],
      cta: "Learn More",
      href: "#contact",
      highlight: false,
    },
  ];

  return (
    <Section className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-16 sm:py-20">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial={reduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <p className="text-xs sm:text-sm font-medium text-emerald-500">
          Pricing & offer
        </p>

        <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
          Simple packages.{" "}
          <span className="text-emerald-500">Clear results.</span>
        </h2>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          Start with a free audit, then get your system installed and running
          within days.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mt-8 sm:mt-10 grid gap-3 sm:gap-4 md:grid-cols-3">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.title}
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true }}
            custom={i}
            className={`h-full flex flex-col justify-between rounded-xl border p-4 sm:p-5 backdrop-blur-xl transition overflow-hidden ${
              plan.highlight
                ? "border-emerald-400/30 bg-emerald-400/5"
                : "border-border bg-card/40"
            }`}
          >
            {/* Top */}
            <div className="min-w-0">
              <p className="text-[11px] sm:text-xs text-muted-foreground">
                {plan.subtitle}
              </p>

              <h3 className="mt-1.5 text-base sm:text-lg font-semibold tracking-tight leading-snug">
                {plan.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {plan.description}
              </p>

              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-muted-foreground">
                {plan.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="break-words">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <Link
              href={plan.href}
              className="mt-5 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground hover:text-emerald-500"
            >
              {plan.cta}
              <ArrowUpRight className="h-4 w-4 flex-shrink-0" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom */}
      <p className="mt-8 sm:mt-10 max-w-2xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
        Most businesses start with a free audit, then move to system
        installation once they see the gaps in their current process.
      </p>
    </Section>
  );
}
