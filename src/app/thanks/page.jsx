// src/app/thanks/page.jsx
import Link from "next/link";
import { CheckCircle2, ArrowUpRight, MessageSquareText } from "lucide-react";

export const metadata = {
  title: "Request received",
  description: "Your free audit request has been received.",
};

export default function ThanksPage() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_50%_0%,rgba(16,185,129,0.14),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-2xl rounded-[32px] border border-border bg-card/40 p-10 text-center backdrop-blur-2xl sm:p-14">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/10">
          <CheckCircle2 className="h-7 w-7 text-emerald-500 dark:text-emerald-300" />
        </div>

        <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Request received
        </h1>

        <p className="mt-4 text-pretty text-muted-foreground">
          Thanks — we’ve received your free audit request. We usually reply
          within <span className="font-medium text-foreground">24 hours</span>{" "}
          via WhatsApp or email.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/#"
            className="inline-flex items-center justify-center rounded-2xl border border-border bg-background/40 px-6 py-3 text-sm font-semibold transition hover:bg-background/70"
          >
            Back to home
          </Link>

          <Link
            href="/#systems"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
          >
            View system examples
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-background/40 p-5 text-left">
          <p className="text-sm font-semibold tracking-tight">
            Want a faster response?
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Message us directly on WhatsApp and we’ll reply as soon as possible.
          </p>

          <a
            href="https://wa.me/923312904878"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground/85 transition hover:text-foreground"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card/40">
              <MessageSquareText className="h-4 w-4" />
            </span>
            WhatsApp message
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
