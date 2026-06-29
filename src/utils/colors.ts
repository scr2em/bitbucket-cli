/** Minimal ANSI color helpers (no dependency). */

const RESET = '\x1b[0m';

// A palette of readable foreground colors. A user's color is chosen by the
// length of their name, so the same name length always maps to the same color.
const USER_PALETTE = [
  '\x1b[36m', // cyan
  '\x1b[32m', // green
  '\x1b[33m', // yellow
  '\x1b[35m', // magenta
  '\x1b[34m', // blue
  '\x1b[31m', // red
  '\x1b[96m', // bright cyan
  '\x1b[92m', // bright green
  '\x1b[93m', // bright yellow
  '\x1b[95m', // bright magenta
];

/** Colors are disabled when piped or when NO_COLOR is set (https://no-color.org). */
export function colorsEnabled(): boolean {
  return Boolean(process.stdout.isTTY) && !process.env.NO_COLOR;
}

/**
 * Returns a colorizer for a user, with the color determined by the name's
 * length. Returns an identity function when colors are disabled.
 */
export function colorForUser(name: string): (text: string) => string {
  if (!colorsEnabled()) return (text) => text;
  const code = USER_PALETTE[name.length % USER_PALETTE.length];
  return (text) => `${code}${text}${RESET}`;
}
