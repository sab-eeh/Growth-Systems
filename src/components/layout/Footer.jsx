"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-base font-semibold">Growth Systems</p>
            <p className="mt-3 text-sm text-muted-foreground">
              We install systems that capture, respond, and convert your leads
              automatically — so you stop losing clients.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold">Navigation</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="#system">The system</Link>
              <Link href="#how-it-works">How it works</Link>
              <Link href="#industries">Who it's for</Link>
              <Link href="#faq">FAQ</Link>
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-sm font-semibold">Get started</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Find out where you're losing leads and how to fix it.
            </p>

            <Link
              href="#audit"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-400"
            >
              Get Free Audit
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-6 flex flex-col gap-3 text-xs text-muted-foreground md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Growth Systems</p>
          <p>Built for service businesses that rely on leads</p>
        </div>
      </div>
    </footer>
  );
}
