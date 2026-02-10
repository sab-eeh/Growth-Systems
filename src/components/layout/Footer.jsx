// components/layout/Footer.jsx
"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div className="space-y-2">
            <p className="text-sm font-medium tracking-tight">Growth Systems</p>
            <p className="text-xs text-muted-foreground">
              Websites + booking + automation for service businesses.
            </p>
          </div>

          {/* Links */}
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            <Link
              href="#solutions"
              className="transition hover:text-foreground"
            >
              Solutions
            </Link>
            <Link
              href="#how-it-works"
              className="transition hover:text-foreground"
            >
              Process
            </Link>
            <Link
              href="#industries"
              className="transition hover:text-foreground"
            >
              Industries
            </Link>
            <Link href="#audit" className="transition hover:text-foreground">
              Free Audit
            </Link>
          </nav>

          {/* Contact */}
          <div className="text-sm text-muted-foreground">
            <a
              href="mailto:hello@yourdomain.com"
              className="transition hover:text-foreground"
            >
              hello@yourdomain.com
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Growth Systems. All rights reserved.
          </p>

          <p>
            Built with performance, accessibility, and clean systems in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
