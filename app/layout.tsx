import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlowDesk — Modern Project Management for Small Teams",
  description:
    "The clean, fast, and clutter-free project management tool built for small engineering and product teams. Plan sprints, automate workflows, and ship projects 2x faster.",
  keywords: [
    "project management",
    "saas",
    "agile sprints",
    "kanban board",
    "small teams",
    "linear alternative",
    "jira alternative",
    "workflow automation",
  ],
  authors: [{ name: "FlowDesk Team" }],
  creator: "FlowDesk",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flowdesk.app",
    title: "FlowDesk — Modern Project Management for Small Teams",
    description:
      "The clean, fast, and clutter-free project management tool built for small engineering and product teams. Plan sprints, automate workflows, and ship projects 2x faster.",
    siteName: "FlowDesk",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowDesk — Modern Project Management for Small Teams",
    description:
      "Plan sprints, automate workflows, and ship projects 2x faster without the bloat.",
    creator: "@flowdesk",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
