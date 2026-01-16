export type Collector = {
  id: string;
  name: string;
  country: string;
  level: "Rookie" | "Active" | "Elite";
};

export const collectors: Collector[] = [
  { id: "u1", name: "Alex N.", country: "Norway", level: "Rookie" },
  { id: "u2", name: "Maria L.", country: "Norway", level: "Active" },
  { id: "u3", name: "Jonas K.", country: "Sweden", level: "Elite" },
  { id: "u4", name: "Emma S.", country: "Denmark", level: "Active" },
];
