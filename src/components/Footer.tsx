import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#252936] bg-[#0B0C10]" role="contentinfo">
      <div className="mx-auto max-w-[1200px] px-4 py-10 lg:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-heading text-lg font-bold text-white">BloxPulse</span>
            <p className="mt-2 text-sm leading-relaxed text-[#768294]">
              Your daily source for working Roblox promo codes, meta tier lists, and in-depth
              gameplay guides.
            </p>
          </div>

          {/* Game Hubs */}
          <div>
            <h4 className="code-text mb-3 text-[#768294] uppercase tracking-wider">Game Hubs</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/grow-a-garden/" className="text-sm text-[#BAC4D1] transition hover:text-[#00E676]">
                  Grow a Garden
                </Link>
              </li>
              <li>
                <Link href="/anime-rangers-x/" className="text-sm text-[#BAC4D1] transition hover:text-[#FF3D00]">
                  Anime Rangers X
                </Link>
              </li>
              <li>
                <Link href="/grow-a-garden-2/" className="text-sm text-[#BAC4D1] transition hover:text-[#00E676]">
                  Grow a Garden 2
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="code-text mb-3 text-[#768294] uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#faq" className="text-sm text-[#BAC4D1] transition hover:text-[#3A86FF]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/grow-a-garden/codes" className="text-sm text-[#BAC4D1] transition hover:text-[#3A86FF]">
                  Latest Codes
                </Link>
              </li>
              <li>
                <Link href="/anime-rangers-x/codes" className="text-sm text-[#BAC4D1] transition hover:text-[#3A86FF]">
                  Anime Rangers X Codes
                </Link>
              </li>
              <li>
                <Link href="/grow-a-garden-2/codes" className="text-sm text-[#BAC4D1] transition hover:text-[#3A86FF]">
                  Grow a Garden 2 Codes
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="code-text mb-3 text-[#768294] uppercase tracking-wider">Disclaimer</h4>
            <p className="text-xs leading-relaxed text-[#768294]">
              BloxPulse is a fan-made resource and is not affiliated with Roblox Corporation.
              All game names and assets belong to their respective developers.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-[#252936] pt-6 text-center">
          <p className="text-xs text-[#768294]">
            &copy; {new Date().getFullYear()} BloxPulse. Built for the gaming community.
          </p>
        </div>
      </div>
    </footer>
  );
}
