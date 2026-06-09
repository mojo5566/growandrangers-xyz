interface TierEntry {
  name: string;
  tier: string;
  description: string;
}

interface TierTableProps {
  rows: TierEntry[];
  colHeaders: [string, string, string];
}

const tierColors: Record<string, string> = {
  "S": "rgba(255,61,0,0.15)",
  "A": "rgba(255,140,0,0.15)",
  "B": "rgba(255,215,0,0.15)",
  "C": "rgba(58,134,255,0.15)",
  "D": "rgba(118,130,148,0.15)",
  "Mythic": "rgba(255,61,0,0.15)",
  "Legendary": "rgba(255,140,0,0.15)",
  "Epic": "rgba(160,32,240,0.15)",
  "Rare": "rgba(58,134,255,0.15)",
  "Common": "rgba(118,130,148,0.15)",
};

const tierTextColors: Record<string, string> = {
  "S": "#FF3D00",
  "A": "#FF8C00",
  "B": "#FFD700",
  "C": "#3A86FF",
  "D": "#768294",
  "Mythic": "#FF3D00",
  "Legendary": "#FF8C00",
  "Epic": "#A020F0",
  "Rare": "#3A86FF",
  "Common": "#768294",
};

export default function TierTable({ rows, colHeaders }: TierTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#252936]">
      {/* Header */}
      <div className="grid grid-cols-[1fr_80px_1fr] gap-2 bg-[#1E212B] px-4 py-2.5">
        <span className="code-text text-[#768294]">{colHeaders[0]}</span>
        <span className="code-text text-center text-[#768294]">{colHeaders[1]}</span>
        <span className="code-text text-[#768294]">{colHeaders[2]}</span>
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-[1fr_80px_1fr] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
        >
          <span className="text-sm font-semibold text-[#BAC4D1]">{row.name}</span>
          <span
            className="code-text rounded-md px-2 py-0.5 text-center text-xs"
            style={{
              color: tierTextColors[row.tier] || "#BAC4D1",
              backgroundColor: tierColors[row.tier] || "transparent",
            }}
          >
            {row.tier}
          </span>
          <span className="text-xs text-[#768294]">{row.description}</span>
        </div>
      ))}
    </div>
  );
}
