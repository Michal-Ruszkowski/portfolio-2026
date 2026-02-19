export interface SkillCategory {
  id: number;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Email Development",
    skills: [
      "Expert Raw HTML & CSS Email Coding",
      "Cross-Client Compatibility (Outlook Word Engine)",
      "Responsive & Dark Mode-Aware Design",
      "Maizzle Framework & MJML",
      "Veeva Vault (Pharma Compliance)",
      "Litmus & Email on Acid Testing",
      "Salesforce Marketing Cloud (SFMC)"
    ]
  },
  {
    id: 2,
    title: "Mobile Development",
    skills: [
      "React Native",
      "Expo Ecosystem",
      "Geolocation & Geofencing APIs",
      "Mobile UI/UX Implementation",
      "Local Data Persistence",
      "App Publishing (App Store & Google Play)"
    ]
  },
  {
    id: 3,
    title: "Frontend Development",
    skills: [
      "JavaScript (ES6+) & TypeScript",
      "React.js",
      "Tailwind CSS & SCSS (BEM)",
      "State Management & API Integration",
      "GSAP Animations",
      "HTML5 & CSS3"
    ]
  },
  {
    id: 4,
    title: "Design & Tools",
    skills: [
      "Design-to-Code (Figma, Photoshop, XD, InDesign)",
      "Pixel-Perfect Development",
      "Git (GitHub / GitLab)",
      "JIRA & Project Management Tools",
      "npm"
    ]
  }
];