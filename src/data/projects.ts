export interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  description: string;
  linkLive?: string;
  linkGoogle?: string;
  linkApple?: string;
  linkGithub?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Remigame",
    category: "Mobile Game (React Native)",
    tags: ["React Native", "Firebase", "Animation"],
    description: "Wciągająca gra mobilna zbudowana w React Native.",
    linkGoogle: "https://play.google.com/store/apps/...",
    linkApple: "https://apps.apple.com/...",
    linkGithub: "https://github.com/michrusz89/remigame"
  },
  {
    id: 2,
    title: "FairCosts",
    category: "Financial App",
    tags: ["React", "TypeScript", "Chart.js"],
    description: "Aplikacja do zarządzania budżetem domowym.",
    linkLive: "https://faircosts-demo.pl",
    linkGithub: "https://github.com/michrusz89/faircosts"
  }
];