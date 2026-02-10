// components/sections/CTA.jsx
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Phone, Mail, Loader2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function CTA() {
  const reduceMotion = useReducedMotion();

  const [form, setForm] = useState({
    name: "",
    businessType: "Clinic",
    website: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const bullets = [
    "A quick review of your booking and lead flow",
    "Where inquiries are getting lost (and why)",
    "A clear improvement plan you can implement",
  ];

  const isValid =
    form.name.trim().length >= 2 &&
    form.email.trim().includes("@") &&
    form.whatsapp.trim().length >= 7;

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    if (!isValid) return;

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setError(data?.error || "Something went wrong.");
        return;
      }

      setStatus("success");

      // Optional: reset fields after success
      setForm({
        name: "",
        businessType: "Clinic",
        website: "",
        email: "",
        whatsapp: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <section
      id="audit"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24"
    >
      <motion.div
        variants={fadeUp}
        initial={reduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="relative overflow-hidden rounded-[32px] border border-border bg-card/40 p-8 backdrop-blur-2xl sm:p-12 md:p-14"
      >
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(16,185,129,0.18),transparent_60%)]" />
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/15 blur-3xl" />
        </div>

        <div className="relative z-10 grid gap-10 md:grid-cols-2 md:gap-12">
          {/* Left: Copy */}
          <div>
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-sm font-medium text-emerald-500 dark:text-emerald-300"
            >
              Free Audit
            </motion.p>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Get a free website & booking audit
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-4 text-pretty text-muted-foreground"
            >
              We’ll review your current website, booking flow, and lead handling
              — and show you where inquiries are getting lost.
            </motion.p>

            {/* Bullets */}
            <motion.ul
              variants={fadeUp}
              custom={3}
              className="mt-8 space-y-3 text-sm text-muted-foreground"
            >
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/10">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-300" />
                  </span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </motion.ul>

            <motion.p
              variants={fadeUp}
              custom={4}
              className="mt-8 text-xs text-muted-foreground"
            >
              No pressure. If we’re not a fit, you’ll still leave with clarity.
            </motion.p>
          </div>

          {/* Right: Form */}
          <motion.div variants={fadeUp} custom={2}>
            <div className="rounded-2xl border border-border bg-background/40 p-6 backdrop-blur-xl sm:p-7">
              <p className="text-sm font-semibold tracking-tight">
                Request your audit
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Takes less than a minute. We’ll reply on WhatsApp or email.
              </p>

              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <Field label="Your name">
                  <input
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="e.g. Sarah Ahmed"
                    className="h-11 w-full rounded-2xl border border-border bg-background/50 px-4 text-sm outline-none transition focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-400/20"
                  />
                </Field>

                <Field label="Business type">
                  <select
                    value={form.businessType}
                    onChange={(e) =>
                      updateField("businessType", e.target.value)
                    }
                    className="h-11 w-full rounded-2xl border border-border bg-background/50 px-4 text-sm outline-none transition focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-400/20"
                  >
                    <option>Clinic</option>
                    <option>Real Estate</option>
                    <option>Agency</option>
                    <option>Salon / Wellness</option>
                    <option>Home Services</option>
                    <option>Coaching / Consulting</option>
                    <option>Other</option>
                  </select>
                </Field>

                <Field label="Website (optional)">
                  <input
                    value={form.website}
                    onChange={(e) => updateField("website", e.target.value)}
                    placeholder="https://"
                    className="h-11 w-full rounded-2xl border border-border bg-background/50 px-4 text-sm outline-none transition focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-400/20"
                  />
                </Field>

                <Field label="Email">
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@business.com"
                      className="h-11 w-full rounded-2xl border border-border bg-background/50 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-400/20"
                    />
                  </div>
                </Field>

                <Field label="WhatsApp">
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      value={form.whatsapp}
                      onChange={(e) => updateField("whatsapp", e.target.value)}
                      placeholder="+1 555 000 0000"
                      className="h-11 w-full rounded-2xl border border-border bg-background/50 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-400/20"
                    />
                  </div>
                </Field>

                <Field label="Anything specific you want help with? (optional)">
                  <textarea
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="e.g. We get leads but most never reply..."
                    rows={4}
                    className="w-full resize-none rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-400/20"
                  />
                </Field>

                {/* Status */}
                {status === "success" ? (
                  <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm text-foreground">
                    ✅ Request received. We’ll reply soon on WhatsApp or email.
                  </div>
                ) : null}

                {status === "error" ? (
                  <div className="rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm text-muted-foreground">
                    {error}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={!isValid || status === "loading"}
                  className={[
                    "group inline-flex h-12 items-center justify-center gap-2 rounded-2xl px-6 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
                    !isValid || status === "loading"
                      ? "cursor-not-allowed bg-muted text-muted-foreground"
                      : "bg-emerald-500 text-white hover:bg-emerald-400",
                  ].join(" ")}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Request Free Audit
                      <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground">
                  By submitting, you agree we may contact you via email or
                  WhatsApp. No spam.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
