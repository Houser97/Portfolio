export interface Card {
  id: number;
  title: string;
  items?: string[];
}

export const cards: Card[] = [
  {
    id: 1,
    title: "Frontend",
    items: [
      "React",
      "JavaScript",
      "TypeScript",
      "CSS",
      "Tailwind",
      "GSAP",
    ],
  },
  {
    id: 2,
    title: "Backend",
    items: [
        "ASP.NET Core", 
        "Node.js", 
        "NestJS", 
        "SQL Server", 
        "MongoDB"
    ],
  },
  {
    id: 3,
    title: "Tech",
    items: [
        "Docker",
        "Git",
        "Unit Testing (Jest, xUnit)",
        "Redux Toolkit, Zustand",
        "Ignition"
    ],
  },
];
