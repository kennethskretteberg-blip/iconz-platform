export type Creator = {
  id: string;
  name: string;
  category: string;
  rarity: "Base" | "Foil" | "Holo";
};

export const creators: Creator[] = [
  { id: "c1", name: "Creator One", category: "Gaming", rarity: "Base" },
  { id: "c2", name: "Creator Two", category: "Lifestyle", rarity: "Foil" },
  { id: "c3", name: "Creator Three", category: "Sports", rarity: "Holo" },
];
