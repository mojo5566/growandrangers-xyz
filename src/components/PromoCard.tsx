"use client";

import { useState } from "react";

interface PromoCardProps {
  code: string;
  reward: string;
  accent: "garden" | "rangers";
}

export default function PromoCard({ code, reward, accent }: PromoCardProps) {
  const [copied, setCopied] = useState(false);
  const accentColor = accent === "garden" ? "#00E676" : "#FF3D00";
  const accentBg = accent === "garden" ? "rgba(0,230,118,0.08)" : "rgba(255,61,0,0.08)";
  const label = accent === "garden" ? "🌱 GROW A GARDEN" : "⚔️ ANIME RANGERS X";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const input = document.createElement("input");
      input.value = code;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className={`rounded-xl border border-[#252936] bg-[#14161D] p-5 transition ${
        copied ? "!bg-[#1E212B]" : ""
      }`}
    >
      {/* Label */}
      <span
        className="code-text inline-block rounded-md px-2.5 py-1"
        style={{ color: accentColor, backgroundColor: accentBg }}
      >
        {label}
      </span>

      {/* Code block */}
      <div className="mt-3 flex items-center gap-2">
        <code
          className="flex-1 rounded-lg bg-[#1E212B] px-3 py-2.5 code-text text-[#BAC4D1] select-all"
          style={{ fontSize: "13px" }}
        >
          {code}
        </code>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-xs font-bold transition hover:brightness-110"
          style={{ backgroundColor: accentColor, color: "#0B0C10" }}
          aria-label={`Copy ${code}`}
        >
          {copied ? "✓ COPIED" : "📋 COPY"}
        </button>
      </div>

      {/* Reward text */}
      <p className="mt-2 text-xs text-[#768294]">{reward}</p>
    </div>
  );
}
