export type PersonEntry = {
  name: string;
  roleLine: string;         // keep exact text (includes bold in old HTML; we store plain text)
  researchFocus?: string;   // keep exact text
  highlights?: string;      // keep exact text
};

export type PeopleSection = {
  title: string;
  people: PersonEntry[];
};

export const peopleSections: PeopleSection[] = [
  {
    title: "Current Students",
    people: [
      {
        name: "Xiaomeng Li",
        roleLine: "Ph.D. Student, Summer 2025, M.S., Jilin University",
        researchFocus:
          "Research Focus: Deterministic Wireless Communication, Time-Sensitive Networks",
        highlights: "Highlights: Othmer Fellowship",
      },
      {
        name: "Jiahe Cao",
        roleLine: "Ph.D. Student, Spring 2024, M.S., UC Riverside",
        researchFocus:
          "Research Focus: Connected Autonomous Driving, Edge Computing, Machine Learning",
        highlights: "Highlights: GLOBECOM 2024",
      },
      {
        name: "Ming Zhao",
        roleLine: "Ph.D. Student, Fall 2023, M.S., Xidian University",
        researchFocus:
          "Research Focus: O-RAN, Reinforcement Learning, AI in Networking",
        highlights:
          "Highlights: INFOCOM 2025, 2026; Nokia Bell Labs Internships 2024, 2025; Chancellor’s Fellowship",
      },
      {
        name: "Yuru Zhang",
        roleLine: "Ph.D. Student, Fall 2022, M.S., Xidian University",
        researchFocus:
          "Research Focus: Wireless Network, Digital Network Twin",
        highlights: "Highlights: INFOCOM 2026; Milton E. Mohr Fellowship",
      },
    ],
  },
  {
    title: "Former Students",
    people: [
      {
        name: "Bryan Duong",
        roleLine: "M.S. Student, Spring 2024 - Summer 2025",
      },
      {
        name: "Yongjie Xue",
        roleLine: "M.S. Student, Fall 2022 - Fall 2024",
      },
      {
        name: "Nathaniel Liess",
        roleLine: "REU Student, Summer 2024 - Spring 2025",
      },
      {
        name: "Jimmy Hua",
        roleLine: "REU Student, Fall 2024",
      },
      {
        name: "Luke Walsdorf",
        roleLine: "REU Student, Summer 2024",
      },
      {
        name: "Shayne Mintling",
        roleLine: "REU Student, Spring 2024",
      },
    ],
  },
];
