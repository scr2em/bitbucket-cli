/**
 * Tiny dependency-free table renderer for list output.
 *
 * Cells are plain ASCII/text (no emoji or ANSI) so that column widths can be
 * measured with `String.length` and stay aligned across terminals.
 */

export interface ColumnSpec {
  header: string;
  /** Max content width; longer values are truncated with an ellipsis. */
  max?: number;
  /** Cell alignment (default: left). */
  align?: 'left' | 'right';
}

export type Cell = string | number | null | undefined;

function truncate(value: string, max?: number): string {
  if (!max || value.length <= max) return value;
  if (max <= 1) return value.slice(0, max);
  return `${value.slice(0, max - 1)}…`;
}

function pad(value: string, width: number, align: 'left' | 'right'): string {
  const gap = width - value.length;
  if (gap <= 0) return value;
  return align === 'right' ? ' '.repeat(gap) + value : value + ' '.repeat(gap);
}

/** Renders an aligned, bordered table as a single string. */
export function renderTable(columns: ColumnSpec[], rows: Cell[][]): string {
  const cells = rows.map((row) =>
    columns.map((col, i) => truncate(row[i] === null || row[i] === undefined ? '' : String(row[i]), col.max)),
  );

  const widths = columns.map((col, i) =>
    cells.reduce((max, row) => Math.max(max, row[i].length), col.header.length),
  );

  const border = (left: string, mid: string, right: string) =>
    left + widths.map((w) => '─'.repeat(w + 2)).join(mid) + right;
  const rowLine = (values: string[]) =>
    '│' + values.map((value, i) => ` ${pad(value, widths[i], columns[i].align ?? 'left')} `).join('│') + '│';

  const lines = [
    border('┌', '┬', '┐'),
    rowLine(columns.map((c) => c.header)),
    border('├', '┼', '┤'),
    ...cells.map((row) => rowLine(row)),
    border('└', '┴', '┘'),
  ];
  return lines.join('\n');
}
