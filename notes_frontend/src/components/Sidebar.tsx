"use client";

import React from "react";
import { COLORS, theme } from "../app/theme";

// PUBLIC_INTERFACE
/**
 * Sidebar for navigation by folders and tags. Currently placeholder content.
 */
export const Sidebar: React.FC<{
  open: boolean;
  onClose?: () => void;
}> = ({ open, onClose }) => {
  const folders = ["All notes", "Personal", "Work", "Ideas"];
  const tags = ["todo", "inspiration", "important"];

  return (
    <aside
      className={`fixed sm:static z-40 left-0 top-0 h-full bg-white border-r border-gray-100 transition-all duration-200 ${
        open ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
      }`}
      style={{
        width: theme.sidebarWidth,
        minWidth: 210,
        background: "#fff",
        boxShadow: open ? "2px 0 8px #0001" : undefined,
        transition: "all 0.2s",
        height: "calc(100vh - " + theme.headerHeight + "px)",
        marginTop: theme.headerHeight,
        overflowY: "auto",
      }}
    >
      <div className="flex flex-col p-5 gap-5">
        <span className="uppercase text-[0.95em] tracking-wide text-gray-500">
          Folders
        </span>
        <nav>
          {folders.map((folder) => (
            <a
              key={folder}
              href={`#folder-${folder}`}
              className="block px-3 py-2 mb-1 rounded hover:bg-[#f7f7f7] text-gray-800 font-medium transition"
              style={{
                borderLeft: folder === "All notes" ? `3.5px solid ${COLORS.primary}` : "3.5px solid transparent",
                background: folder === "All notes" ? "#f0f8ff" : undefined,
                color: folder === "All notes" ? COLORS.primary : undefined,
              }}
            >
              {folder}
            </a>
          ))}
        </nav>
        <span className="uppercase text-[0.95em] tracking-wide text-gray-500 mt-5">
          Tags
        </span>
        <div className="flex flex-wrap gap-2 mt-1">
          {tags.map((tag) => (
            <a
              key={tag}
              href={`#tag-${tag}`}
              style={{
                background: COLORS.accent,
                color: "#222",
                fontWeight: 500,
                padding: "0.18em 0.9em",
                borderRadius: "1em",
                textDecoration: "none",
                fontSize: "0.93em",
              }}
            >
              #{tag}
            </a>
          ))}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="sm:hidden mt-6 px-3 py-2 text-gray-600 hover:text-black"
            style={{
              border: "1px solid #eee",
              borderRadius: 6,
              background: "#fafafa",
              marginTop: 32,
              fontSize: "1.08em",
            }}
          >
            Close
          </button>
        )}
      </div>
    </aside>
  );
};
