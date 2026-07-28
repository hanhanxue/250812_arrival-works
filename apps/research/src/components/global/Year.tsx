"use client";

// Current-time reads aren't allowed in prerendered server components,
// so the year is evaluated in the browser instead.
export default function Year() {
  return new Date().getFullYear();
}