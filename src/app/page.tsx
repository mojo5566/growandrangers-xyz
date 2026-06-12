import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromoCard from "@/components/PromoCard";
import GameHub from "@/components/GameHub";
import TrendingGuides from "@/components/TrendingGuides";
import SEOFAQ from "@/components/SEOFAQ";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const gardenTableLinks = [
  { title: "🌱 Rarity Mutation Tier List (V2.1)", href: "/grow-a-garden/mutation-tier-list", meta: "Tier List" },
  { title: "🐣 Pet Hatching & Multiplier Guide", href: "/grow-a-garden/pet-tier-list", meta: "Guide" },
  { title: "💰 Economy Crop Value List", href: "/grow-a-garden/value-list", meta: "Values" },
  { title: "📮 Active Codes & Event Calendar", href: "/grow-a-garden/codes", meta: "Events" },
  { title: "🌾 Beginner Farming Guide", href: "/grow-a-garden/beginner-guide", meta: "Guide" },
  { title: "💵 Money Making Guide", href: "/grow-a-garden/money-making-guide", meta: "Farming" },
];

const rangersTableLinks = [
  { title: "⚔️ Unit Tier List (All Units Ranked)", href: "/anime-rangers-x/tier-list", meta: "Tier List" },
  { title: "🧬 Character Trait Modifier Table", href: "/anime-rangers-x/trait-tier-list", meta: "Guide" },
  { title: "🔮 Unit Evolution Requirements Guide", href: "/anime-rangers-x/evolution-guide", meta: "Guide" },
  { title: "💎 Active Codes & Gem Farming", href: "/anime-rangers-x/codes", meta: "Farming" },
  { title: "🆕 Beginner Progression Guide", href: "/anime-rangers-x/beginner-guide", meta: "Guide" },
  { title: "👥 Best Team Compositions", href: "/anime-rangers-x/team-guide", meta: "Team" },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <SectionDivider />

        <section
          className="mx-auto max-w-[1200px] px-4 py-12 lg:px-6 lg:py-16"
          aria-labelledby="codes-heading"
        >
          <h2
            id="codes-heading"
            className="mb-8 font-heading text-[24px] font-semibold text-white lg:text-[32px]"
          >
            🎁 Latest Active Promo Codes{" "}
            <span className="text-sm font-normal text-[#768294]">(Updated Daily)</span>
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <PromoCard code="HONEYBEE2025" reward="Rare Pet Egg + Bee Hat (Active)" accent="garden" />
              <PromoCard code="GOLDENCARROT" reward="Golden Fertilizer + 200 Coins (Active)" accent="garden" />
            </div>
            <div className="space-y-4">
              <PromoCard code="ECLIPSE" reward="100 Trait Rerolls + 75 Egg of Sacrifice (Active)" accent="rangers" />
              <PromoCard code="SACRIFICE" reward="20 Trait Rerolls + 100K Gold (Active)" accent="rangers" />
            </div>
          </div>
        </section>

        <SectionDivider />

        <GameHub
          id="garden"
          accent="garden"
          icon="🌱"
          subtitle="GROW A GARDEN CENTRAL"
          title="Grow a Garden Master Wiki Guides"
          description="Master your farm with our vetted crop value sheets, mutation breakdowns, and pet multiplier systems."
          tableLinks={gardenTableLinks}
          patchDate="April 2026"
          patchTitle="Easter Event Update"
          patchDescription="Introduced the tier-5 Bunny Mutation, path fixes, and permanent trade catalog codes."
        />

        <SectionDivider />

        <GameHub
          id="rangers"
          accent="rangers"
          icon="⚔️"
          subtitle="ANIME RANGERS X CENTRAL"
          title="Anime Rangers X Tier Lists & Guides"
          description="Build the perfect team using current meta unit tier lists, evolution paths, and optimal trait rolls."
          tableLinks={rangersTableLinks}
          patchDate="June 2026"
          patchTitle="Re:Rangers Title Restructure"
          patchDescription="Complete progression overhaul balancing infinite wave drop rates and base unit pools."
        />

        <SectionDivider />

        <TrendingGuides />

        <SectionDivider />

        <SEOFAQ />

        <SectionDivider />
      </main>

      <Footer />
    </>
  );
}
