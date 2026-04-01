"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Clock, ShieldCheck, MessagesSquare, Layers3 } from "lucide-react";
import Section from "../layout/Section";

const fadeUp = {
  hidden: { opacity: 0, y: 14, filter: "blur(10px)" },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay: 0.06 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Stats() {
  const reduceMotion = useReducedMotion();

  const items = [
    {
      icon: Clock,
      value: "Minutes",
      label: "to respond to new leads automatically",
    },
    {
      icon: MessagesSquare,
      value: "SMS + Email",
      label: "plus WhatsApp workflows if needed",
    },
    {
      icon: Layers3,
      value: "Any industry",
      label: "built to scale across service businesses",
    },
    {
      icon: ShieldCheck,
      value: "Privacy-first",
      label: "secure setup with clean handoff",
    },
  ];

  return (
    <Section className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8 -mt-6 md:-mt-8">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={item.value}
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            className="h-full"
          >
            <StatCard {...item} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="h-full flex flex-col justify-between rounded-xl border border-border bg-card/40 p-4 sm:p-5 backdrop-blur-xl transition hover:bg-card/70 overflow-hidden">
      <div className="flex items-start justify-between gap-3">
        {/* Text */}
        <div className="min-w-0">
          <p className="text-sm sm:text-base md:text-lg font-semibold tracking-tight leading-tight">
            {value}
          </p>
          <p className="mt-1 text-[11px] sm:text-xs leading-snug text-muted-foreground break-words">
            {label}
          </p>
        </div>

        {/* Icon */}
        <span className="flex-shrink-0 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-border bg-background/40">
          <Icon className="h-4 w-4 text-foreground/80" />
        </span>
      </div>
    </div>
  );
}
