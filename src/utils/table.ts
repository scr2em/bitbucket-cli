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

/**
 * A cell is a plain value, or an object pairing a value with a colorizer.
 * Column widths are always measured on the plain text, so ANSI color codes
 * (which are zero-width) never break alignment.
 */
export type Cell =
  | string
  | number
  | null
  | undefined
  | { value: string | number | null | undefined; color?: (text: string) => string };

function cellText(cell: Cell): string {
  const value = cell && typeof cell === 'object' ? cell.value : cell;
  return value === null || value === undefined ? '' : String(value);
}

function cellColor(cell: Cell): ((text: string) => string) | undefined {
  return cell && typeof cell === 'object' ? cell.color : undefined;
}

function truncate(value: string, max?: number): string {
  if (!max || value.length <= max) return value;
  if (max <= 1) return value.slice(0, max);
  return `${value.slice(0, max - 1)}…`;
}

/** Renders an aligned, bordered table as a single string. */
export function renderTable(columns: ColumnSpec[], rows: Cell[][]): string {
  // Plain (uncolored) text per cell, used for width and padding math.
  const texts = rows.map((row) => columns.map((col, i) => truncate(cellText(row[i]), col.max)));

  const widths = columns.map((col, i) =>
    texts.reduce((max, row) => Math.max(max, row[i].length), col.header.length),
  );

  const renderCell = (text: string, width: number, align: 'left' | 'right', color?: (t: string) => string) => {
    const gap = Math.max(0, width - text.length);
    const body = color ? color(text) : text;
    const padding = ' '.repeat(gap);
    return align === 'right' ? padding + body : body + padding;
  };

  const border = (left: string, mid: string, right: string) =>
    left + widths.map((w) => '─'.repeat(w + 2)).join(mid) + right;
  const headerLine =
    '│' + columns.map((c, i) => ` ${renderCell(c.header, widths[i], c.align ?? 'left')} `).join('│') + '│';
  const dataLine = (rowIndex: number) =>
    '│' +
    columns
      .map((col, i) => ` ${renderCell(texts[rowIndex][i], widths[i], col.align ?? 'left', cellColor(rows[rowIndex][i]))} `)
      .join('│') +
    '│';

  const lines = [
    border('┌', '┬', '┐'),
    headerLine,
    border('├', '┼', '┤'),
    ...rows.map((_, r) => dataLine(r)),
    border('└', '┴', '┘'),
  ];
  return lines.join('\n');
}
