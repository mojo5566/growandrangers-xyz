import Link from "next/link";

interface TableRow {
  title: string;
  href: string;
  meta: string;
}

interface SEODataTableProps {
  rows: TableRow[];
  col1Header: string;
  col2Header: string;
}

export default function SEODataTable({ rows, col1Header, col2Header }: SEODataTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#252936]">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#1E212B] px-4 py-2.5">
        <span className="code-text text-[#768294]">{col1Header}</span>
        <span className="code-text text-[#768294]">{col2Header}</span>
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <Link
          key={i}
          href={row.href}
          className="flex items-center justify-between border-t border-[#252936] px-4 py-3.5 transition hover:bg-[#1E212B]"
        >
          <span className="text-sm font-semibold text-[#BAC4D1] hover:text-[#3A86FF] transition">
            {row.title}
          </span>
          <span className="code-text text-[#768294]">{row.meta}</span>
        </Link>
      ))}
    </div>
  );
}
