"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
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

const FAQS = [
  {
    q: "I already use Calendly / WhatsApp — do I still need this?",
    a: "Yes. Most businesses already have tools, but they’re not connected properly. We turn those tools into a complete system that responds instantly, follows up automatically, and actually converts leads into bookings.",
  },
  {
    q: "How fast will I start seeing results?",
    a: "You’ll notice improvements as soon as the system is live. Faster responses alone can significantly increase conversions within days.",
  },
  {
    q: "Do I need to rebuild my website?",
    a: "No. We work with what you already have. The system is added on top of your existing setup — no need to rebuild everything.",
  },
  {
    q: "Is this complicated to manage?",
    a: "Not at all. Once installed, the system runs automatically in the background. Your team only steps in when needed — not for every message.",
  },
  {
    q: "What if I’m not getting many leads yet?",
    a: "This system works best when you already have some incoming inquiries. It improves conversion — not traffic generation.",
  },
  {
    q: "Will this replace my staff?",
    a: "No — it supports them. The system handles repetitive tasks like replying and follow-ups, so your team can focus on actual clients.",
  },
  {
    q: "What happens after the free audit?",
    a: "You’ll get a clear breakdown of where you’re losing leads and what to fix. If you want help implementing it, we can set it up for you — no pressure.",
  },
];

export default function FAQ() {
  const reduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section
      id="faq"
      className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-16 sm:py-20"
    >
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial={reduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true }}
        custom={0}
        className="max-w-2xl"
      >
        <p className="text-xs sm:text-sm font-medium text-emerald-500">FAQ</p>

        <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
          Questions before getting started
        </h2>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          Straight answers to help you understand how the system works and what
          to expect.
        </p>
      </motion.div>

      {/* FAQ list */}
      <div className="mt-8 sm:mt-10 grid gap-2 sm:gap-3">
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={item.q}
              variants={fadeUp}
              initial={reduceMotion ? "show" : "hidden"}
              whileInView="show"
              viewport={{ once: true }}
              custom={i + 1}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="w-full text-left rounded-xl border border-border bg-card/40 p-4 sm:p-5 backdrop-blur-xl transition hover:bg-card/70 overflow-hidden"
              >
                <div className="flex items-start justify-between gap-3">
                  {/* Content */}
                  <div className="min-w-0">
                    <p className="text-sm sm:text-base font-semibold tracking-tight leading-snug">
                      {item.q}
                    </p>

                    {/* Answer */}
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-2"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed break-words">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <span
                    className={`flex-shrink-0 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-border bg-background/40 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4 text-foreground/70" />
                  </span>
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom */}
      <p className="mt-8 sm:mt-10 max-w-2xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
        Still unsure? The free audit will show you exactly what’s missing — and
        whether this system is right for your business.
      </p>
    </Section>
  );
}
