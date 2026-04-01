"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarCheck,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay: 0.08 * i,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(16,185,129,0.14),transparent_60%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-14 sm:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1.5"
          >
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            <p className="text-xs sm:text-sm font-medium text-muted-foreground">
              Built for service businesses getting leads but losing conversions
            </p>
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            animate="show"
            custom={1}
            className="mt-6 font-semibold tracking-tight leading-tight
              text-3xl 
              sm:text-4xl 
              md:text-5xl 
              lg:text-6xl"
          >
            Stop losing clients to{" "}
            <span className="text-emerald-400">slow replies</span> and missed
            follow-ups
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            animate="show"
            custom={2}
            className="mx-auto mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground"
          >
            We install a simple system that replies instantly, follows up
            automatically, and turns more inquiries into booked appointments
            without hiring extra staff.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            animate="show"
            custom={3}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full"
          >
            <Link
              href="#audit"
              className="w-full sm:w-auto min-w-[220px] text-center rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-400 transition"
            >
              See Where You’re Losing Leads
            </Link>

            <Link
              href="#demo"
              className="w-full sm:w-auto min-w-[180px] text-center rounded-xl border border-border bg-card/40 px-6 py-3 text-sm font-semibold text-foreground/85 hover:bg-card/70 transition"
            >
              View Live Demo
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.p
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            animate="show"
            custom={4}
            className="mt-4 text-xs sm:text-sm text-muted-foreground"
          >
            No fluff. No complex tools. Just a system that works.
          </motion.p>

          {/* TRUST GRID (FIXED 🔥) */}
          {/* <motion.div
            variants={fadeUp}
            initial={reduceMotion ? "show" : "hidden"}
            animate="show"
            custom={5}
            className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4"
          >
            <TrustItem icon={ShieldCheck} text="Reliable system setup" />
            <TrustItem icon={Zap} text="Installed in 7 days" />
            <TrustItem icon={CalendarCheck} text="More booked appointments" />
            <TrustItem icon={MessageSquareText} text="Instant responses" />
          </motion.div> */}

          <div className="mx-auto mt-10 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    </section>
  );
}

function TrustItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card/30 h-full">
      <div className="flex-shrink-0 h-9 w-9 flex items-center justify-center rounded-lg bg-card/50 border border-border">
        <Icon className="h-4 w-4 text-foreground/80" />
      </div>
      <p className="text-sm text-muted-foreground leading-snug">{text}</p>
    </div>
  );
}
