// Reads tabs of the metadata Google Sheet as header-keyed records.
// The spreadsheet must be shared "Anyone with the link → Viewer"; the gviz
// CSV endpoint then serves live data with no API key.

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      field = "";
      rows.push(row);
      row = [];
    } else {
      field += c;
    }
  }
  if (field !== "" || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

export async function fetchSheet(
  tab: string,
  requiredHeaders: string[]
): Promise<Record<string, string>[]> {
  const id = process.env.WORKS_SHEET_ID;
  if (!id) throw new Error("WORKS_SHEET_ID is not set");

  const url = `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(tab)}`;
  const res = await fetch(url);
  const text = await res.text();
  if (!res.ok || text.trimStart().startsWith("<")) {
    throw new Error(
      `Could not read sheet tab "${tab}" (HTTP ${res.status}) — is the spreadsheet shared as "Anyone with the link → Viewer"?`
    );
  }

  const [header = [], ...rows] = parseCsv(text);
  const headers = header.map((h) => h.trim());
  const missing = requiredHeaders.filter((h) => !headers.includes(h));
  if (missing.length) {
    throw new Error(
      `Sheet tab "${tab}" is missing column(s): ${missing.join(", ")} — check the tab name and header row.`
    );
  }

  return rows
    .filter((r) => r.some((cell) => cell.trim() !== ""))
    .map((r) => Object.fromEntries(headers.map((h, i) => [h, (r[i] ?? "").trim()])));
}
