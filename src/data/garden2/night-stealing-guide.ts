import type { GuidePageData } from "../types";

const data: GuidePageData = {
  title: "GaG2 Night Stealing Guide",
  description: "Master the nighttime stealing mechanic in Grow a Garden 2. Learn raid routes, defense setups, garden gnome placement, and trap strategies to maximize loot while avoiding getting caught.",
  updatedAt: "July 7, 2026",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "GaG2 Night Stealing Guide", href: "/grow-a-garden-2/night-stealing-guide" },
  ],
  faq: [
    { question: "How long does night last in Grow a Garden 2?", answer: "Night lasts approximately 2 minutes and 30 seconds. During this window, you can raid other players' farms or defend your own. Plan your route before night falls so you don't waste precious seconds navigating." },
    { question: "Can I get caught stealing?", answer: "Yes. If the farm owner is online and waiting with a shovel, or if you trigger a garden gnome or trap, you'll get kicked out and lose any crops you haven't secured. Stolen crops must be brought back to your plot to count." },
    { question: "What do garden gnomes do?", answer: "Garden Gnomes are epic-rarity defensive units purchased from the item shop for 100,000 Sheckles. When deployed, they patrol your farm for 10 minutes and kick any intruder they catch. They're the most effective automated defense against thieves." },
    { question: "Is stealing better than farming?", answer: "Stealing is a high-risk, high-reward supplement to farming, not a replacement. A successful raid can net you valuable crops you haven't unlocked yet, but you risk losing time and getting nothing if caught. The best strategy is to farm during the day and raid opportunistically at night." },
    { question: "Can I steal from my guild members?", answer: "No. Guild members' farms are protected from each other. This encourages guild cooperation and shared defense strategies during night cycles." },
  ],
  relatedGuides: [
    { label: "Active Codes", href: "/grow-a-garden-2/codes", description: "Free seeds and Sheckles to boost your start" },
    { label: "Beginner Guide", href: "/grow-a-garden-2/beginner-guide", description: "Learn the basics before raiding" },
    { label: "Guild Guide", href: "/grow-a-garden-2/guild-guide", description: "Team up for shared defense and rewards" },
    { label: "Grow a Garden 1 Money Making", href: "/grow-a-garden/money-making-guide", description: "Farming strategies from the original game" },
  ],
};

export default data;
