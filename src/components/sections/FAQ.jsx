// components/Sections/FAQ.jsx
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
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

const FAQS = [
  {
    q: "How long does setup usually take?",
    a: "Most systems can be implemented in 7–14 days depending on your booking flow, tools, and how complex your follow-ups need to be.",
  },
  {
    q: "Do I need to change my website or rebuild everything?",
    a: "No. We can improve your current site and add the missing systems around it — booking, lead capture, follow-ups, and inquiry handling.",
  },
  {
    q: "What tools do you use?",
    a: "We use modern, reliable tools depending on your business: Calendly, Google Calendar, WhatsApp/SMS/email automation, CRMs (HubSpot/Airtable), and automation platforms like Zapier or Make.",
  },
  {
    q: "Can this work for my industry?",
    a: "Yes. The system is designed for service businesses — clinics, real estate, agencies, local services, and professional providers.",
  },
  {
    q: "Is AI safe to use with client inquiries?",
    a: "Yes, when used correctly. AI is only used for first-response handling, FAQs, and qualification — and you stay in control of the final process.",
  },
  {
    q: "What happens after the free audit?",
    a: "You’ll receive a clear breakdown of what’s currently losing you leads and what to improve. If you want, we can implement it — but there’s no pressure.",
  },
];

export default function FAQ() {
  const reduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section
      id="faq"
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
          FAQ
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Questions business owners usually ask
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Clear answers — no fluff. If you still have questions, you can ask
          during the free audit.
        </p>
      </motion.div>

      {/* FAQ list */}
      <div className="mt-12 grid gap-3">
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={item.q}
              variants={fadeUp}
              initial={reduceMotion ? "show" : "hidden"}
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={i + 1}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="w-full rounded-2xl border border-border bg-card/40 p-6 text-left backdrop-blur-xl transition hover:bg-card/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold tracking-tight">
                      {item.q}
                    </p>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>

                  <span
                    className={`mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-background/40 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDown className="h-4 w-4 text-foreground/70" />
                  </span>
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
