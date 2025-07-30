"use client";

import React from "react";

// PUBLIC_INTERFACE
/**
 * Simple authentication modal and logic placeholder.
 */
export const AuthModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  // Would integrate authentication state here
  return !open ? null : (
    <div
      className="fixed z-50 inset-0 flex items-center justify-center bg-black/30"
      aria-modal="true"
      tabIndex={-1}
      role="dialog"
    >
      <div className="bg-white rounded-md shadow-lg p-7 w-80 flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-2">Log in to Notes Organizer</h2>
        {/* Placeholder for login form */}
        <form>
          <input
            className="block w-full border rounded px-3 py-2 my-2"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="block w-full border rounded px-3 py-2 my-2"
            type="password"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="w-full py-2 mt-2 rounded bg-blue-600 text-white font-bold"
          >
            Log in
          </button>
        </form>
        <div className="text-center text-sm text-gray-500 mt-2">
          New here? <a href="#" className="text-blue-600 underline">Create account</a>
        </div>
        <button onClick={onClose} className="absolute right-3 top-2 text-xl">
          ×
        </button>
      </div>
    </div>
  );
};

// PUBLIC_INTERFACE
/**
 * React context and hook placeholders for authentication.
 */
export function useAuth() {
  // Would use React Context or a provider with authentication logic.
  return {
    user: null,
    login: () => {},
    logout: () => {},
  };
}
