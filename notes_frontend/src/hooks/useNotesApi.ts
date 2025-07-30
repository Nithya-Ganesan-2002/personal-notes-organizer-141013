//
// useNotesApi.ts - REST API integration for notes CRUD, referencing env variables for base URL.
//
import { useState } from "react";

/**
 * Hook for CRUD operations on notes.
 */
export function useNotesApi() {
  // Placeholder loading and CRUD logic
  const [loading, setLoading] = useState(false);

  // In real usage, these would call fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes/xyz`) etc.
  async function fetchNotes(): Promise<[]> {
    setLoading(true);
    // ...
    setLoading(false);
    // return dummy
    return [];
  }

  async function createNote(): Promise<object> {
    setLoading(true);
    // ...
    setLoading(false);
    return {};
  }

  async function updateNote(): Promise<object> {
    setLoading(true);
    // ...
    setLoading(false);
    return {};
  }

  async function deleteNote(): Promise<object> {
    setLoading(true);
    // ...
    setLoading(false);
    return {};
  }

  return {
    fetchNotes,
    createNote,
    updateNote,
    deleteNote,
    loading,
  };
}
