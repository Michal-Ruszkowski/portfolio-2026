export interface ExperienceEntry {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    id: 1,
    company: "AstraZeneca",
    role: "HTML Email Developer",
    period: "August 2025 - Present",
    description: [
      "Developing and coding responsive HTML email templates compliant with rigorous Veeva standards for the pharmaceutical industry.",
      "Ensuring full cross-client compatibility and rendering precision across Outlook, Gmail, and Apple Mail.",
      "Managing approval workflows and asset deployment within the Veeva Vault system.",
      "Collaborating with global marketing and compliance teams on international healthcare campaigns."
    ]
  },
  {
    id: 2,
    company: "Publicis Groupe",
    role: "HTML Email Developer",
    period: "August 2023 - July 2025",
    description: [
      "Coded 300+ responsive marketing emails in raw HTML (pixel-perfect) based on PSD and InDesign designs.",
      "Utilized the Maizzle framework (Tailwind CSS) to build modern, modular, and maintainable email templates.",
      "Co-developed custom automation scripts to streamline the email coding process, significantly improving team efficiency.",
      "Refactored drag-and-drop emails into clean, high-performance HTML code for improved deliverability.",
      "Performed comprehensive testing and debugging using Litmus to ensure rendering consistency."
    ]
  },
  {
    id: 3,
    company: "SALESmanago",
    role: "Junior Frontend Developer",
    period: "March 2022 - April 2023",
    description: [
      "Built and maintained marketing components including landing pages, pop-ups, forms, and recommendation frames.",
      "Implemented JavaScript-based form validation and dynamic DOM manipulations.",
      "Integrated web components with client CRM and CMS systems for seamless data flow.",
      "Collaborated closely with the QA department to ensure high-quality frontend deliverables and cross-browser stability."
    ]
  },
  {
    id: 4,
    company: "SALESmanago",
    role: "Junior QA",
    period: "November 2021 - March 2022",
    description: [
      "Performed manual responsiveness and rendering testing for emails and web pages across various devices and browsers.",
      "Validated script logic and form behaviors based on detailed test scenarios.",
      "Reported bugs and worked directly with the development team to ensure rapid resolution and quality control."
    ]
  }
];