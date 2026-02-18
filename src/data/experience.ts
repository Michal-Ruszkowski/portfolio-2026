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
    period: "2024 - Obecnie",
    description: [
      "Przygotowywanie i testowanie mailingów (Veeva Vault)",
      "Automatyzacja procesów mailowych",
      "Współpraca z zespołami globalnymi"
    ]
  },
  {
    id: 2,
    company: "Publicis Groupe",
    role: "Front-End Developer",
    period: "2022 - 2024",
    description: [
      "Tworzenie interaktywnych bannerów i stron (HMTL/JS)",
      "Praca dla największych marek globalnych",
      "Optymalizacja assetów pod kątem wydajności"
    ]
  },
  {
    id: 3,
    company: "SALESmanago",
    role: "Junior Front-End Developer",
    period: "2021 - 2022",
    description: [
      "Rozwój platformy marketing automation",
      "Wsparcie techniczne klientów w zakresie HTML/CSS"
    ]
  }
];