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
  hidden: { opacity: 0, y: 12, filter: "blur(8px)" },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Integrations() {
  const reduceMotion = useReducedMotion();

  const tools = [
    { icon: Calendar, label: "Calendly / Booking" },
    { icon: MessageSquare, label: "WhatsApp & SMS" },
    { icon: Mail, label: "Email Systems" },
    { icon: Workflow, label: "Automation Engine" },
    { icon: Database, label: "CRM / Lead Tracking" },
    { icon: Bot, label: "AI Assistant" },
  ];

  return (
    <Section className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-10 sm:py-12">
      <motion.div
        variants={fadeUp}
        initial={reduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        custom={0}
        className="rounded-xl border border-border bg-card/30 p-4 sm:p-6 backdrop-blur-xl overflow-hidden"
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          {/* LEFT CONTENT */}
          <div className="max-w-xl min-w-0">
            <p className="text-sm font-semibold tracking-tight leading-snug">
              Works with your existing tools — no disruption
            </p>

            <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              You don’t need to change your setup. We connect your booking,
              messaging, follow-ups, and lead tracking into one system so
              everything works together instead of separately.
            </p>
          </div>

          {/* TOOL CHIPS */}
          <div className="flex flex-wrap gap-2 md:justify-end">
            {tools.map((t, i) => {
              const Icon = t.icon;

              return (
                <motion.div
                  key={t.label}
                  variants={fadeUp}
                  initial={reduceMotion ? "show" : "hidden"}
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={i + 1}
                  className="flex items-center gap-2 rounded-xl border border-border bg-background/40 px-2.5 py-1.5 text-[11px] sm:text-xs font-medium text-muted-foreground transition hover:bg-background/70 hover:text-foreground hover:border-emerald-400/30"
                >
                  <span className="flex-shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-card/40">
                    <Icon className="h-3.5 w-3.5 text-foreground/70" />
                  </span>

                  <span className="whitespace-nowrap">{t.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom reassurance */}
        <motion.p
          variants={fadeUp}
          initial={reduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true }}
          custom={7}
          className="mt-5 text-[11px] sm:text-xs text-muted-foreground leading-relaxed"
        >
          No new software to learn. No complex dashboards. Just a system layered
          on top of what you already use.
        </motion.p>
      </motion.div>
    </Section>
  );
}
