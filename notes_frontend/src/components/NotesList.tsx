"use client";

import React from "react";
import { COLORS } from "../app/theme";

// Dummy placeholder notes
const exampleNotes = [
  {
    id: "note1",
    title: "Welcome note",
    snippet: "This is your first note. Start editing!",
    tags: ["inspiration"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "note2",
    title: "Project ideas",
    snippet: "• New app idea: ...",
    tags: ["work", "todo"],
    updatedAt: new Date().toISOString(),
  },
];

// PUBLIC_INTERFACE
/**
 * Displays the list of notes. Includes search/filter controls placeholder.
 */
export const NotesList: React.FC<{
  onSelect: (noteId: string) => void;
  selectedNoteId?: string;
}> = ({ onSelect, selectedNoteId }) => {
  return (
    <section className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-3">
        <input
          type="text"
          placeholder="Search notes..."
          className="flex-1 border border-gray-200 rounded px-3 py-1"
          style={{ background: "#fff" }}
        />
        <button
          style={{
            background: COLORS.primary,
            color: "#fff",
            borderRadius: 5,
            padding: "0.4em 1.2em",
            fontWeight: 600,
            marginLeft: 6,
          }}
        >
          +
        </button>
      </div>
      <ul className="overflow-y-auto flex-1">
        {exampleNotes.map((note) => (
          <li
            key={note.id}
            onClick={() => onSelect(note.id)}
            className={"mb-2 rounded cursor-pointer p-3 transition " +
              (note.id === selectedNoteId
                ? "bg-[#f2f7ff] border-l-4 border-blue-500"
                : "hover:bg-[#fafafa]")
            }
            style={{
              borderLeft: note.id === selectedNoteId
                ? `4px solid ${COLORS.primary}`
                : "4px solid transparent",
            }}
          >
            <div className="font-semibold">{note.title}</div>
            <div className="text-sm text-gray-500 mt-1">{note.snippet}</div>
            <div className="flex gap-2 mt-1">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: COLORS.accent,
                    color: "#222",
                    fontWeight: 500,
                    padding: "0.1em 0.55em",
                    borderRadius: "0.7em",
                    fontSize: "0.92em",
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
