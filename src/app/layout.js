// app/layout.jsx
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ThemeProvider from "@/components/theme/ThemeProvider";

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Growth Systems",
    template: "%s · Growth Systems",
  },

  description:
    "We help service businesses turn their website into an automated booking and lead system — with instant responses, follow-ups, and AI-assisted inquiry handling.",

  keywords: [
    "online booking",
    "lead automation",
    "service business website",
    "booking system",
    "follow-up automation",
    "WhatsApp automation",
    "AI inquiry handling",
    "conversion optimization",
  ],

  openGraph: {
    title: "Growth Systems",
    description:
      "Automated booking + lead systems for service businesses. Capture leads, respond instantly, and convert more inquiries into booked calls.",
    url: "https://yourdomain.com",
    siteName: "Growth Systems",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Growth Systems — Automated booking & lead systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Growth Systems",
    description:
      "Automated booking + lead systems for service businesses. Capture leads, respond instantly, and convert more inquiries into booked calls.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-lg"
          >
            Skip to content
          </a>

          <Navbar />

          <main id="main" className="pt-[72px]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
