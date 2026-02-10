// components/Sections/Integrations.jsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Calendar,
  MessageSquare,
  Mail,
  Workflow,
  Database,
  Bot,
} from "lucide-react";
import Section from "../layout/Section";


const fadeUp = {
  hidden: { opacity: 0, y: 14, filter: "blur(10px)" },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, delay: 0.06 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Integrations() {
  const reduceMotion = useReducedMotion();

  const tools = [
    { icon: Calendar, label: "Calendars" },
    { icon: MessageSquare, label: "WhatsApp / SMS" },
    { icon: Mail, label: "Email" },
    { icon: Workflow, label: "Automation" },
    { icon: Database, label: "CRM / Sheets" },
    { icon: Bot, label: "AI Assistant" },
  ];

  return (
    <Section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
      <motion.div
        variants={fadeUp}
        initial={reduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        custom={0}
        className="rounded-2xl border border-border bg-card/30 px-6 py-8 backdrop-blur-xl"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-tight">
              Integrates with the tools you already use
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              We connect booking, messaging, follow-ups, and lead tracking into
              a single workflow — without forcing you into a new platform.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 md:justify-end">
            {tools.map((t, i) => {
              const Icon = t.icon;

              return (
                <motion.div
                  key={t.label}
                  variants={fadeUp}
                  initial={reduceMotion ? "show" : "hidden"}
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                  custom={i + 1}
                  className="group inline-flex items-center gap-2 rounded-2xl border border-border bg-background/40 px-3 py-2 text-xs font-medium text-muted-foreground transition hover:bg-background/70 hover:text-foreground"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-border bg-card/40">
                    <Icon className="h-4 w-4 text-foreground/70" />
                  </span>
                  {t.label}
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
