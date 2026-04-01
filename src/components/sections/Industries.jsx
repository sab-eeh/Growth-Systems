"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Stethoscope, Building2, Briefcase, ArrowRight } from "lucide-react";
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

export default function Industries() {
  const reduceMotion = useReducedMotion();

  const industries = [
    {
      icon: Stethoscope,
      title: "Clinics",
      description:
        "Perfect for clinics dealing with missed calls, delayed responses, and patient no-shows.",
    },
    {
      icon: Building2,
      title: "Real estate",
      description:
        "Ideal for agents handling multiple inquiries who need faster responses and better lead qualification.",
    },
    {
      icon: Briefcase,
      title: "Agencies",
      description:
        "Designed for agencies that want more booked calls without manually chasing every lead.",
    },
  ];

  return (
    <Section
      id="industries"
      className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-16 sm:py-20"
    >
      {/* Header */}
      <div className="max-w-2xl">
        <p className="text-xs sm:text-sm font-medium text-emerald-500 dark:text-emerald-300">
          Who it's for
        </p>

        <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
          Built for businesses that{" "}
          <span className="text-emerald-500 dark:text-emerald-300">
            rely on leads to grow
          </span>
        </h2>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          If your business depends on inquiries, bookings, or calls — this
          system helps you capture and convert them consistently.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-8 sm:mt-10 grid gap-3 sm:gap-4 md:grid-cols-3">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            className="h-full"
          >
            <IndustryCard {...ind} />
          </motion.div>
        ))}
      </div>

      {/* Bottom */}
      <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground text-center">
        <span>
          Also works for salons, home services, consultants, legal, and more
        </span>
        <ArrowRight className="h-4 w-4 flex-shrink-0" />
      </div>
    </Section>
  );
}

function IndustryCard({ icon: Icon, title, description }) {
  return (
    <div className="h-full flex flex-col justify-between rounded-xl border border-border bg-card/40 p-4 sm:p-5 backdrop-blur-xl transition hover:bg-card/70 hover:border-emerald-400/30 overflow-hidden">
      {/* Icon */}
      <div className="mb-3 sm:mb-4 inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-600">
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
