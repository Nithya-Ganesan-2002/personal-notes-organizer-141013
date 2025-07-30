"use client";

import React from "react";
import { NotesList } from "@/components/NotesList";
import { NoteEditor } from "@/components/NoteEditor";

/**
 * Main app page.
 * Contains a visually split layout: left for NotesList, right for NoteEditor.
 */
export default function Home() {
  const [selectedNoteId, setSelectedNoteId] = React.useState<string | undefined>(
    undefined
  );

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        gap: 24,
        minHeight: "70vh",
        width: "100%",
      }}
    >
      <section
        className="h-full"
        style={{
          width: 320,
          minWidth: 240,
          maxWidth: 400,
          background: "#fff",
          borderRadius: 7,
          boxShadow: "0 3px 16px #dde5ee4d",
          padding: "1.3em 0 1.3em 1em",
          marginRight: 18,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NotesList onSelect={setSelectedNoteId} selectedNoteId={selectedNoteId} />
      </section>
      <section
        className="flex-1 h-full"
        style={{
          minWidth: 0,
          background: "#fff",
          borderRadius: 7,
          boxShadow: "0 3px 16px #dde5ee4d",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NoteEditor noteId={selectedNoteId} />
      </section>
    </div>
  );
}
