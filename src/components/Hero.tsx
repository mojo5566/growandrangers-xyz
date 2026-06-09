import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="mx-auto max-w-[1200px] px-4 pb-10 pt-14 text-center sm:pb-12 sm:pt-16 lg:pb-16 lg:pt-24"
      aria-labelledby="hero-heading"
    >
      <h1
        id="hero-heading"
        className="font-heading text-[30px] font-bold leading-tight text-white sm:text-[36px] lg:text-[48px]"
      >
        Ultimate Roblox Codes, Tier Lists &amp; Gameplay Guides Portal
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#BAC4D1] lg:text-base">
        Your index for updated working codes, meta tier rankings, and item values.
      </p>

      {/* CTA Buttons */}
      <div className="mx-auto mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href="#garden"
          className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-[#0B0C10] transition hover:brightness-110"
          style={{ backgroundColor: "#00E676" }}
        >
          🌱 Grow a Garden Guides
        </Link>
        <Link
          href="#rangers"
          className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-[#0B0C10] transition hover:brightness-110"
          style={{ backgroundColor: "#FF3D00" }}
        >
          ⚔️ Anime Rangers X Guides
        </Link>
        <Link
          href="/grow-a-garden/codes"
          className="inline-flex items-center gap-2 rounded-xl border border-[#3A86FF] px-6 py-3 text-sm font-bold text-[#3A86FF] transition hover:bg-[#3A86FF] hover:text-white"
        >
          🎁 Latest Codes
        </Link>
      </div>
    </section>
  );
}
