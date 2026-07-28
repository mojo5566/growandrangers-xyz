"use client";

import { useState, useMemo } from "react";
import { crops } from "@/data/garden/database/crops";
import { mutations } from "@/data/garden/database/mutations";

const tierBadge: Record<string, string> = {
  S: "bg-[#FF3D00]/20 text-[#FF3D00]",
  A: "bg-[#FF8C00]/20 text-[#FF8C00]",
  B: "bg-[#FFD700]/20 text-[#FFD700]",
  C: "bg-[#3A86FF]/20 text-[#3A86FF]",
};

const rankingTier = (percentile: number): { label: string; color: string } => {
  if (percentile <= 5) return { label: "S", color: "bg-[#FF3D00]/20 text-[#FF3D00]" };
  if (percentile <= 20) return { label: "A", color: "bg-[#FF8C00]/20 text-[#FF8C00]" };
  if (percentile <= 50) return { label: "B", color: "bg-[#FFD700]/20 text-[#FFD700]" };
  return { label: "C", color: "bg-[#3A86FF]/20 text-[#3A86FF]" };
};

export default function ValueCalculator() {
  const [cropId, setCropId] = useState(crops[0]?.id ?? "");
  const [mutationId, setMutationId] = useState(mutations[0]?.id ?? "");
  const [weight, setWeight] = useState(1.0);

  const crop = useMemo(() => crops.find((c) => c.id === cropId), [cropId]);
  const mutation = useMemo(() => mutations.find((m) => m.id === mutationId), [mutationId]);

  const estimatedValue = useMemo(() => {
    if (!crop || !mutation) return 0;
    return Math.round(crop.coins * weight * mutation.multiplier);
  }, [crop, mutation, weight]);

  const ranking = useMemo(() => {
    if (!crop || !mutation) return null;
    // Rank this crop against all crops with the same mutation
    const allValues = crops
      .map((c) => c.coins * weight * mutation.multiplier)
      .sort((a, b) => b - a);
    const rank = allValues.indexOf(estimatedValue) + 1;
    const percentile = (rank / allValues.length) * 100;
    const tier = rankingTier(percentile);
    return { rank, total: allValues.length, percentile, tier };
  }, [crop, mutation, weight, estimatedValue]);

  if (!crop || !mutation) return null;

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <section
        aria-labelledby="calc-inputs-heading"
        className="rounded-xl border border-[#252936] bg-[#14161D] p-5"
      >
        <h2
          id="calc-inputs-heading"
          className="mb-4 font-heading text-[20px] font-semibold text-white lg:text-[24px]"
        >
          🧮 Calculator Inputs
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {/* Crop Selection */}
          <div>
            <label htmlFor="crop-select" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#768294]">
              Crop
            </label>
            <select
              id="crop-select"
              value={cropId}
              onChange={(e) => setCropId(e.target.value)}
              className="w-full rounded-lg border border-[#252936] bg-[#0B0C10] px-3 py-2.5 text-sm text-[#BAC4D1] outline-none transition focus:border-[#00E676]"
            >
              {crops.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.coins} 🪙, {c.tier}-Tier)
                </option>
              ))}
            </select>
          </div>

          {/* Weight Input */}
          <div>
            <label htmlFor="weight-input" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#768294]">
              Weight (kg)
            </label>
            <input
              id="weight-input"
              type="number"
              min="0.1"
              step="0.1"
              value={weight}
              onChange={(e) => setWeight(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
              className="w-full rounded-lg border border-[#252936] bg-[#0B0C10] px-3 py-2.5 text-sm text-[#BAC4D1] outline-none transition focus:border-[#00E676]"
            />
          </div>

          {/* Mutation Selection */}
          <div>
            <label htmlFor="mutation-select" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#768294]">
              Mutation
            </label>
            <select
              id="mutation-select"
              value={mutationId}
              onChange={(e) => setMutationId(e.target.value)}
              className="w-full rounded-lg border border-[#252936] bg-[#0B0C10] px-3 py-2.5 text-sm text-[#BAC4D1] outline-none transition focus:border-[#00E676]"
            >
              {mutations.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name} ({m.multiplier}×, {m.tier}-Tier)
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Results */}
      <section
        aria-labelledby="calc-results-heading"
        className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5"
      >
        <h2
          id="calc-results-heading"
          className="mb-4 font-heading text-[20px] font-semibold text-white lg:text-[24px]"
        >
          📊 Estimated Value
        </h2>

        {/* Primary Result */}
        <div className="rounded-lg border border-[#252936] bg-[#0B0C10] p-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#768294]">
            Estimated Coin Value
          </span>
          <p className="mt-2 font-heading text-[36px] font-bold text-[#00E676] lg:text-[48px]">
            {estimatedValue.toLocaleString()} 🪙
          </p>
        </div>

        {/* Secondary Stats */}
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {/* Mutation Multiplier */}
          <div className="rounded-lg border border-[#252936] bg-[#0B0C10] p-4">
            <span className="text-xs text-[#768294]">Mutation Multiplier</span>
            <p className="mt-1 text-lg font-bold text-[#00E676]">{mutation.multiplier}×</p>
            {mutation.conditionalBonus && (
              <p className="mt-1 text-xs text-[#768294]">
                +{mutation.conditionalBonus.bonusMultiplier}× when {mutation.conditionalBonus.condition.toLowerCase()}
              </p>
            )}
          </div>

          {/* Crop Tier */}
          <div className="rounded-lg border border-[#252936] bg-[#0B0C10] p-4">
            <span className="text-xs text-[#768294]">Crop Tier</span>
            <p className="mt-1">
              <span className={`rounded px-2 py-0.5 text-sm font-semibold ${tierBadge[crop.tier]}`}>
                {crop.tier}
              </span>
            </p>
            <p className="mt-1 text-xs text-[#768294]">{crop.coins} 🪙 base</p>
          </div>

          {/* Value Ranking */}
          {ranking && (
            <div className="rounded-lg border border-[#252936] bg-[#0B0C10] p-4">
              <span className="text-xs text-[#768294]">Value Ranking</span>
              <p className="mt-1">
                <span className={`rounded px-2 py-0.5 text-sm font-semibold ${ranking.tier.color}`}>
                  {ranking.tier.label}
                </span>
              </p>
              <p className="mt-1 text-xs text-[#768294]">
                #{ranking.rank} of {ranking.total} crops
              </p>
            </div>
          )}

          {/* CPM */}
          <div className="rounded-lg border border-[#252936] bg-[#0B0C10] p-4">
            <span className="text-xs text-[#768294]">Coins Per Minute</span>
            <p className="mt-1 text-lg font-bold text-white">{crop.coinsPerMinute}</p>
            <p className="mt-1 text-xs text-[#768294]">base (no mutation)</p>
          </div>
        </div>

        {/* Formula Breakdown */}
        <div className="mt-4 rounded-lg border border-[#252936] bg-[#1E212B] p-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#768294]">
            Calculation Breakdown
          </span>
          <p className="mt-2 font-mono text-sm text-[#BAC4D1]">
            {crop.coins} (base) × {weight.toFixed(1)} (weight) × {mutation.multiplier} (mutation) ={" "}
            <span className="font-bold text-[#00E676]">{estimatedValue.toLocaleString()} 🪙</span>
          </p>
          {ranking && (
            <p className="mt-2 text-xs text-[#768294]">
              This ranks #{ranking.rank} out of {ranking.total} crops with the {mutation.name} mutation (top {Math.ceil(ranking.percentile)}%).
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
