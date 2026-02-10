// components/Sections/Stats.jsx
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
    transition: { duration: 0.65, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] },
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
    <Section className="relative z-10 mx-auto -mt-10 max-w-6xl px-4 sm:px-6">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.value}
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={i}
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
    <div className="rounded-2xl border border-border bg-card/40 p-5 text-left backdrop-blur-xl transition hover:bg-card/70">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-lg font-semibold tracking-tight">{value}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {label}
          </p>
        </div>

        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-background/40">
          <Icon className="h-4 w-4 text-foreground/80" />
        </span>
      </div>
    </div>
  );
}
