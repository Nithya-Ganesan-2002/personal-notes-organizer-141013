"use client";

import React from "react";
import { COLORS } from "../app/theme";

// Dummy note content for preview
const DUMMY = {
  id: "note1",
  title: "Welcome note",
  content: "This is your first note. Start editing!",
  tags: ["inspiration"],
};

export const NoteEditor: React.FC<{
  noteId?: string;
  // placeholder for CRUD hook integration
}> = (
  /* eslint-disable @typescript-eslint/no-unused-vars */
  { noteId }
  /* eslint-enable @typescript-eslint/no-unused-vars */
) => {
  // Would fetch note by id, but for now use dummy
  const note = DUMMY;

  return (
    <section className="h-full w-full p-0" style={{ background: "#fff" }}>
      <div
        className="px-4 py-3 flex gap-3 items-center border-b"
        style={{ borderColor: "#f0f0f0" }}
      >
        <input
          className="font-bold text-lg flex-1 outline-none"
          placeholder="Note title"
          defaultValue={note.title}
          style={{ background: "#fff" }}
        />
        <button
          style={{
            background: COLORS.primary,
            color: "#fff",
            border: "none",
            borderRadius: 5,
            fontWeight: 600,
            padding: "0.3em 1.0em",
            fontSize: "1.0em",
          }}
        >
          Save
        </button>
        <button
          style={{
            background: "#fff",
            color: COLORS.secondary,
            border: `1.5px solid ${COLORS.secondary}`,
            borderRadius: 5,
            padding: "0.3em 0.9em",
            fontWeight: 500,
            fontSize: "1.0em",
            marginLeft: 8,
          }}
        >
          Delete
        </button>
      </div>
      <textarea
        className="w-full h-[40vh] p-4 outline-none text-base"
        style={{ resize: "vertical", background: "#fff" }}
        defaultValue={note.content}
        placeholder="Type your note here..."
      />
      <div className="px-4 py-2 flex flex-wrap gap-2 items-center border-t" style={{ borderColor: "#f0f0f0" }}>
        <span style={{ color: "#666", fontSize: "1em" }}>Tags:</span>
        <input
          type="text"
          className="border px-2 py-1 rounded"
          style={{ width: 110, background: "#fafafa", fontSize: "0.95em" }}
          placeholder="comma,separated"
          defaultValue={note.tags.join(",")}
        />
      </div>
      <div className="px-4 pt-2 pb-8 text-sm text-gray-500">
        <span>Last edited: just now</span>
      </div>
    </section>
  );
};
