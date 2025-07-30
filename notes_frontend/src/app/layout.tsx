import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Notes Organizer",
  description: "A web-based personal note organizer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Responsive sidebar logic
  // Cannot use useState directly in server component, so elevate sidebar open logic to client-side wrapper
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)]`}
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}

function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <>
      <Header onToggleSidebar={() => setSidebarOpen(o => !o)} />
      <div
        className="flex flex-1"
        style={{ minHeight: 0, height: "calc(100vh - 56px)", background: "#f7fafd" }}
      >
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main
          className="flex-1 h-full"
          style={{
            minWidth: 0,
            background: "#f7fafd",
            padding: "2rem",
            paddingTop: "1.6rem",
          }}
        >
          {children}
        </main>
      </div>
    </>
  );
}
