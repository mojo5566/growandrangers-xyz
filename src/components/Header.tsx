"use client";

import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#252936] bg-[#0B0C10]/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 lg:px-6">
        {/* Logo */}
        <a href="/" className="font-heading text-xl font-bold text-white lg:text-2xl">
          BloxPulse
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          <NavLink href="#garden" accent="garden">🌱 Grow a Garden</NavLink>
          <NavLink href="#rangers" accent="rangers">⚔️ Anime Rangers X</NavLink>
          <a
            href="#search"
            className="flex items-center gap-1 rounded-lg border border-[#252936] bg-[#1E212B] px-4 py-2 text-sm text-[#BAC4D1] transition hover:border-[#3A86FF]"
          >
            🔍 <span>Search</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[#252936] bg-[#14161D] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            <MobileNavLink href="#garden" accent="garden" onClick={() => setMobileOpen(false)}>
              🌱 Grow a Garden
            </MobileNavLink>
            <MobileNavLink href="#rangers" accent="rangers" onClick={() => setMobileOpen(false)}>
              ⚔️ Anime Rangers X
            </MobileNavLink>
            <a
              href="#search"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-lg border border-[#252936] bg-[#1E212B] px-4 py-2.5 text-sm text-[#BAC4D1]"
            >
              🔍 Search codes & guides
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  children,
  accent,
}: {
  href: string;
  children: React.ReactNode;
  accent: "garden" | "rangers";
}) {
  const colors = accent === "garden" ? "hover:text-[#00E676]" : "hover:text-[#FF3D00]";
  return (
    <a href={href} className={`text-sm font-semibold text-[#BAC4D1] transition ${colors}`}>
      {children}
    </a>
  );
}

function MobileNavLink({
  href,
  children,
  accent,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  accent: "garden" | "rangers";
  onClick: () => void;
}) {
  const colors =
    accent === "garden"
      ? "border-l-[#00E676] text-[#00E676]"
      : "border-l-[#FF3D00] text-[#FF3D00]";
  return (
    <a
      href={href}
      onClick={onClick}
      className={`border-l-2 bg-[#1E212B] px-4 py-2.5 text-sm font-semibold transition ${colors}`}
    >
      {children}
    </a>
  );
}
