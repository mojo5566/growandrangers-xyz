import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/garden/codes", destination: "/grow-a-garden/codes", permanent: true },
      { source: "/garden/mutation-tier-list", destination: "/grow-a-garden/mutation-tier-list", permanent: true },
      { source: "/garden/pet-tier-list", destination: "/grow-a-garden/pet-tier-list", permanent: true },
      { source: "/garden/crop-values", destination: "/grow-a-garden/crop-value-list", permanent: true },
      { source: "/rangers/codes", destination: "/anime-rangers-x/codes", permanent: true },
      { source: "/rangers/unit-tier-list", destination: "/anime-rangers-x/unit-tier-list", permanent: true },
      { source: "/rangers/trait-tier-list", destination: "/anime-rangers-x/trait-tier-list", permanent: true },
      { source: "/rangers/evolution-guide", destination: "/anime-rangers-x/evolution-guide", permanent: true },
      { source: "/grow-a-garden/value-list", destination: "/grow-a-garden/crop-value-list", permanent: true },
    ];
  },
};

export default nextConfig;
