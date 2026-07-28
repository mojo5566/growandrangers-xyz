import type { GuidePageData } from "../types";

const data: GuidePageData = {
  title: "Grow a Garden 2 Guild Guide",
  description: "Guide to the guild system in Grow a Garden 2. Learn how to join guilds, participate in weekly competitions, earn exclusive rewards like the Black Dragon and Ice Snake pets, and coordinate farm defense.",
  updatedAt: "July 7, 2026",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "GaG2 Guild Guide", href: "/grow-a-garden-2/guild-guide" },
  ],
  faq: [
    { question: "How do I create a guild in Grow a Garden 2?", answer: "Open the guild menu from the main HUD, select 'Create Guild', and pay the required Sheckles fee. You can then invite other players using their username or through the guild search. The guild creator automatically becomes the guild leader with management privileges." },
    { question: "What are guild competitions?", answer: "Guilds compete in weekly events where members contribute to a shared goal. The current competition is 'Biggest Plant' — members try to grow the heaviest single plant on their plot. Rankings reset every week, and top guilds receive exclusive rewards: the Black Dragon pet for top 25 and the Ice Snake pet for top 100." },
    { question: "How do I get the Ice Snake pet?", answer: "The Ice Snake is an exclusive guild competition reward. Your guild must place in the top 100 of the weekly leaderboard. The pet provides a passive multiplier to crop growth speed and is currently unavailable through any other means." },
    { question: "How do I get the Black Dragon pet?", answer: "The Black Dragon is the rarest guild competition reward in Grow a Garden 2. Your guild must place in the top 25 of the weekly leaderboard. It provides a higher passive multiplier than the Ice Snake and is a status symbol among top guilds. Competition for the top 25 is extremely fierce." },
    { question: "Do guild members share resources?", answer: "Guild members don't directly share Sheckles or seeds, but they benefit from shared defense during night cycles (guild farms are protected from each other), coordinated competition strategies, and exclusive guild-only items from the shop." },
    { question: "What's the maximum guild size?", answer: "The default guild capacity is 20 members. Guild leaders can expand capacity by spending Sheckles or achieving guild competition milestones. Larger guilds have a competitive advantage in weekly events but require more coordination." },
  ],
  relatedGuides: [
    { label: "Active Codes", href: "/grow-a-garden-2/codes", description: "Free resources to boost your guild contribution" },
    { label: "Beginner Guide", href: "/grow-a-garden-2/beginner-guide", description: "Get started before joining a guild" },
    { label: "Night Stealing Guide", href: "/grow-a-garden-2/night-stealing-guide", description: "Coordinate guild defense against raiders" },
    { label: "Grow a Garden 1 Pets", href: "/grow-a-garden/pets", description: "Original game pet database for reference" },
  ],
};

export default data;
