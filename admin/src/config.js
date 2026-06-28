/**
 * Centralized API configuration for the admin panel.
 * Uses the VITE_API_URL environment variable if set,
 * otherwise falls back to localhost for local development.
 */
export const API_BASE = (import.meta.env.VITE_API_URL || "http://localhost:4000").replace(/\/$/, "");
