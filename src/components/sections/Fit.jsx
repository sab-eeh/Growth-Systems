"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
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

export default function Fit() {
  const reduceMotion = useReducedMotion();

  const goodFit = [
    "You’re getting inquiries, but not enough of them turn into bookings",
    "You reply late (or inconsistently) and know you're losing clients",
    "You want more booked appointments without hiring more staff",
    "You’re serious about fixing your lead flow — not just redesigning your website",
  ];

  const notFit = [
    "You only want a basic website with no automation or system",
    "You’re not getting any inquiries yet (this won’t fix traffic)",
    "You expect instant results without improving your service or process",
    "You prefer doing everything manually instead of using systems",
  ];

  return (
    <Section
      id="fit"
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
        viewport={{ once: true, amount: 0.3 }}
        custom={0}
        className="max-w-2xl"
      >
        <p className="text-xs sm:text-sm font-medium text-emerald-500 dark:text-emerald-300">
          Who this is for
        </p>

        <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
          Built for businesses that want{" "}
          <span className="text-emerald-500 dark:text-emerald-300">
            more booked clients
          </span>
        </h2>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          This system works best for businesses already getting leads — but not
          converting them consistently.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mt-8 sm:mt-10 grid gap-3 sm:gap-4 md:grid-cols-2">
        {/* Good Fit */}
        <motion.div
          variants={fadeUp}
          initial={reduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
          className="h-full flex flex-col rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4 sm:p-5 backdrop-blur-xl overflow-hidden"
        >
          <p className="text-sm font-semibold tracking-tight">
            You’re a great fit if:
          </p>

          <ul className="mt-4 space-y-2 text-xs sm:text-sm text-muted-foreground">
            {goodFit.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/10">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                </span>

                <span className="leading-relaxed break-words">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Not Fit */}
        <motion.div
          variants={fadeUp}
          initial={reduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={2}
          className="h-full flex flex-col rounded-xl border border-border bg-card/40 p-4 sm:p-5 backdrop-blur-xl overflow-hidden"
        >
          <p className="text-sm font-semibold tracking-tight">
            This is NOT for you if:
          </p>

          <ul className="mt-4 space-y-2 text-xs sm:text-sm text-muted-foreground">
            {notFit.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-border bg-background/40">
                  <XCircle className="h-4 w-4 text-muted-foreground" />
                </span>

                <span className="leading-relaxed break-words">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.p
        variants={fadeUp}
        initial={reduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true }}
        custom={3}
        className="mt-8 sm:mt-10 max-w-2xl text-xs sm:text-sm text-muted-foreground leading-relaxed"
      >
        If you already have demand but feel like leads are slipping through the
        cracks — this system is built for you.
      </motion.p>
    </Section>
  );
}
