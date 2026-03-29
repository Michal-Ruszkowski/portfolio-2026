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
  img: string;
  width: number;
  height: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "remigame.com",
    category: "Full-Stack Online Multiplayer Platform",
    tags: ["React", "Cloud Firestore", "Firebase Auth", "Real-time Data Sync", "NoSQL Architecture"],
    description: "A sophisticated real-time multiplayer Rummy platform engineered for high-concurrency gameplay. The application features a robust matchmaking system allowing users to play in public global rooms or private sessions with friends. Built on a serverless architecture using Cloud Firestore, it handles complex game state management, distributed data consistency, and instant player interactions. Key features include a comprehensive social module with friend requests, detailed player performance analytics, secure user authentication, and a scalable localization engine supporting 20 languages.",
    linkLive: "https://remigame.com/",
    img: "images/rummy.webp",
    width: 1280,
    height: 720,
  },
  {
    id: 2,
    title: "CheckPointRace - Travel Game",
    category: "Location-Based Competitive Mobile Application",
    tags: ["React Native", "Expo", "Firebase Auth", "Geolocation API", "i18n", "Real-time Leaderboards"],
    description: "A dynamic mobile racing platform that gamifies real-world exploration through GPS-based checkpoint verification. The app leverages high-precision geolocation services to facilitate competitive scavenger hunts and global racing challenges. Built with React Native and Expo, it features a robust real-time synchronization layer for global leaderboards, a secure authentication system, and a multi-language localization engine (i18n). The architecture is optimized for low-latency point tracking and handles complex state management for concurrent live events across diverse geographic regions.",
    linkGoogle: "https://play.google.com/store/apps/details?id=com.michrusz.CheckPointRace",
    linkApple: "https://apps.apple.com/us/app/checkpointrace-travel-game/id6745142337",
    img: "images/checkpointrace.webp",
    width: 1427,
    height: 493,
  },
  {
    id: 3,
    title: "CountryCheck- Been There",
    category: "Interactive Travel Tracking & Data Visualization",
    tags: ["React Native", "Expo", "SVG Maps", "Local Persistence", "i18n", "Data Analytics"],
    description: "A high-performance travel tracking application featuring an interactive SVG-based world map for real-time journey visualization. The app allows users to manage a personal database of visited countries across all 193 UN-recognized nations. Engineered with a mobile-first approach, it includes local persistence for full offline functionality, dynamic progress calculation algorithms, and detailed travel statistics. The interface is optimized for fluid zoom-and-pan interactions, providing a seamless user experience for globetrotters to document and analyze their international footprint.",
    linkApple: "https://apps.apple.com/us/app/countrycheck-been-there/id6752218316",
    linkGoogle: "https://play.google.com/store/apps/details?id=com.michrusz.CountryCheck",
    img: "images/countrycheck.webp",
    width: 1271,
    height: 512,
  },
  {
    id: 4,
    title: "FairCosts - Split Expenses",
    category: "Privacy-Focused Finance & Expense Management",
    tags: ["React Native", "Expo", "External API Integration", "Local Storage", "i18n", "Debt Settlement Algorithms"],
    description: "A robust group expense tracker designed with a privacy-first architecture, eliminating the need for server-side accounts. The application features a sophisticated debt-settlement engine that automatically calculates optimal payment paths between group members. It integrates with real-time exchange rate APIs to support over 190 currencies, including cryptocurrencies. Built with React Native, it manages complex relational data locally and provides extensive localization support for 31 languages, ensuring full functionality in offline environments while maintaining zero data footprint.",
    linkApple: "https://apps.apple.com/app/faircosts",
    linkGoogle: "https://play.google.com/store/apps/details?id=com.michrusz.FairCosts",
    img: "images/faircosts.webp",
    width: 1432,
    height: 494,
  }
];