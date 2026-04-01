"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, MessageSquare, RefreshCcw, Bot } from "lucide-react";
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

export default function Solution() {
  const reduceMotion = useReducedMotion();

  const steps = [
    {
      icon: MessageSquare,
      title: "They contact you",
      description:
        "From your website, WhatsApp, or ads every inquiry enters your system instantly.",
    },
    {
      icon: Bot,
      title: "They get an instant reply",
      description:
        "Within seconds, they receive a response that answers questions and guides them forward.",
    },
    {
      icon: CalendarCheck,
      title: "They get booked",
      description:
        "Instead of waiting, they’re directed to book instantly based on your availability.",
    },
    {
      icon: RefreshCcw,
      title: "They are followed up automatically",
      description:
        "Reminders, confirmations, and follow-ups ensure they show up and don’t forget.",
    },
  ];

  return (
    <Section
      id="system"
      className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-16 sm:py-20"
    >
      {/* Header */}
      <div className="max-w-2xl">
        <p className="text-xs sm:text-sm font-medium text-emerald-500 dark:text-emerald-300">
          The system
        </p>

        <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
          Here’s what happens when someone{" "}
          <span className="text-emerald-500 dark:text-emerald-300">
            contacts your business
          </span>
        </h2>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          Instead of missed messages and manual work, every lead is captured,
          responded to, and guided toward booking automatically.
        </p>
      </div>

      {/* Flow Grid */}
      <div className="mt-8 sm:mt-10 grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            className="h-full"
          >
            <SolutionCard {...step} index={i} />
          </motion.div>
        ))}
      </div>

      {/* Bottom text */}
      <motion.p
        variants={fadeUp}
        initial={reduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true }}
        custom={5}
        className="mt-8 sm:mt-10 max-w-2xl text-xs sm:text-sm text-muted-foreground leading-relaxed"
      >
        No missed leads. No delays. Just a system that works consistently — even
        when you’re offline.
      </motion.p>
    </Section>
  );
}

function SolutionCard({ icon: Icon, title, description, index }) {
  return (
    <div className="relative h-full flex flex-col justify-between rounded-xl border border-border bg-card/40 p-4 sm:p-5 backdrop-blur-xl transition hover:bg-card/70 hover:border-emerald-400/30 overflow-hidden">
      {/* Step number */}
      <span className="absolute right-3 top-3 text-[10px] sm:text-xs font-semibold text-muted-foreground">
        0{index + 1}
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
    </div>
  );
}
