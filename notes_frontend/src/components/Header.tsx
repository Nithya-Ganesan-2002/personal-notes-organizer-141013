"use client";

import React from "react";
import Link from "next/link";
import { COLORS, theme } from "../app/theme";

type Props = {
  onToggleSidebar?: () => void;
};

export const Header: React.FC<Props> = ({ onToggleSidebar }) => {
  // Placeholder user/auth state
  const user = null; // Replace with real user context or state

  return (
    <header
      style={{
        background: COLORS.primary,
        color: "#fff",
        height: theme.headerHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1.5rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.04)",
        zIndex: 10,
        position: "relative",
      }}
    >
      <button
        aria-label="Toggle sidebar"
        className="sm:hidden mr-2"
        style={{
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: "1.5em",
          cursor: "pointer",
        }}
        onClick={onToggleSidebar}
      >
        ☰
      </button>
      <span>
        {/* Next.js Link used below for homepage navigation */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.2em",
            letterSpacing: "0.03em",
          }}
        >
          <span
            style={{
              background: COLORS.accent,
              borderRadius: 6,
              padding: "0.22em 0.5em",
              color: "#222",
              marginRight: "0.55em",
              fontWeight: 700,
              fontSize: "1.1em",
              letterSpacing: "-0.03em",
            }}
          >
            Notes
          </span>{" "}
          Organizer
        </Link>
      </span>
      <nav style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <a
          href="#"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: 500,
            marginRight: 12,
          }}
        >
          Home
        </a>
        <a
          href="#"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: 500,
            marginRight: 12,
          }}
        >
          About
        </a>
        <span style={{ marginLeft: 12 }}>
          {user ? (
            <a
              href="/logout"
              style={{
                background: COLORS.accent,
                color: "#222",
                borderRadius: 5,
                padding: "0.3em 0.8em",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "1em",
              }}
            >
              Log out
            </a>
          ) : (
            <a
              href="/login"
              style={{
                background: "#fff",
                color: COLORS.primary,
                borderRadius: 5,
                padding: "0.3em 0.8em",
                fontWeight: 600,
                border: `1.5px solid ${COLORS.primary}`,
                boxShadow: "0 1px 4px #0001",
                textDecoration: "none",
                fontSize: "1em",
              }}
            >
              Log in
            </a>
          )}
        </span>
      </nav>
    </header>
  );
};
