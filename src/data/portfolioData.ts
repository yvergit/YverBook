import type {
  PersonalInfo,
  SocialMedia,
  WorkExperienceItem,
  EducationItem,
  ServiceItem,
  SkillCategory,
  Project,
} from "../types";

export const portfolioData = {
  personalInfo: {
    name: "Yverdon Pierre Boei",
    title: "Full-stack Developer",
    description:
      "Hi, I am a full stack developer with solid experience with SAAS applications, web management, platforms in e-commerce, retail, marketing, and more. I'm a medior/senior backend developer and a senior frontend developer. I aim to grow and be able to lead a team, focusing on building scalable systems and creating practical applications that improve user experience.",
    profileImage: "/logo.jpg",
  } as PersonalInfo,

  socialMedia: {
    facebook: "https://www.facebook.com/yverdonyverdonyverdon/",
    twitter: "https://x.com/yverdonsopro",
    instagram: "https://www.instagram.com/yverdonyverdon/",
    linkedin: "https://www.linkedin.com/in/yverdonpierreboei/",
  } as SocialMedia,

  workExperience: [
    {
      id: "work1",
      period: "Apr, 2017 - Nov, 2024",
      position: "Front-end Developer",
      company: "Indicia, Freelance",
      description:
        "Built core features for SAAS App for Schlappi. Developed and optimized five 3D objects (blender). Conducted code audits and peer reviews. Delivered ui based on figma design (three js). Boosted overall performance and user satisfaction",
    },
    {
      id: "work2",
      period: "Feb, 2018 - Now",
      position: "Full-stack Developer",
      company: "YL, KC, and more",
      description:
        "Developed and optimized professional e-commerce webshops and web features, improving performance and user experience. Provided admin panels, sql databases, crm, technical advice to product owners and supported smooth CI/CD processes.",
    },
    {
      id: "work3",
      period: "Apr, 2021 - Feb, 2022",
      position: "web/Front-end Developer",
      company: "Freelance",
      description:
        "Supported bug fixing and delivered solutions for the front end of Shopify, WordPress and more sites.",
    },
  ] as WorkExperienceItem[],

  education: [
    {
      id: "edu1",
      period: "2023",
      degree: "BS Computer Science",
      institution: "HU",
      description:
        "hbo ict (ai)",
    },
    {
      id: "edu2",
      period: "2022",
      degree: "Blockchain dev",
      institution: "Ethereum Foundation",
      description:
        "Solidity Smart Contract Development.",
    },
    {
      id: "edu3",
      period: "2020",
      degree: "Digital marketing certificate",
      institution: "Google",
      description:
        "Google Digital Garage.",
    },
  ] as EducationItem[],

  services: [
    {
      id: "service1",
      icon: "bx bx-code-alt",
      title: "Software Development",
      description: "`From back-end to front-end`.",
    },
    {
      id: "service2",
      icon: "bx bxs-paint",
      title: "Creative Design",
      description: "With adobe creative suite & Figma.",
    },
    {
      id: "service3",
      icon: "bx bx-bar-chart-alt",
      title: "Applicatie beheer",
      description: "Google analytics, updates, improving ui and ux.",
    },
    {
      id: "service4",
      icon: "bx bx-search",
      title: "SEO",
      description: "Search engine optimization.",
    },
  ] as ServiceItem[],

  skills: [
    {
      category: "Front-End",
      skills: [
        { name: "HTML", icon: "bx bxl-html5" },
        { name: "CSS", icon: "bx bxl-css3" },
        { name: "JS", icon: "bx bxl-javascript" },
        { name: "Angular", icon: "bx bxl-angular" },
        { name: "React Js", icon: "bx bxl-react" },
        { name: "Vue Js", icon: "bx bxl-vue" },
        { name: "Three Js", icon: "bx bxl-three" },
      ],
    },
    {
      category: "Back-End",
      skills: [
        { name: "Python", icon: "bx bxl-python" },
        { name: "SQL", icon: "bx bxl-sql" },
        { name: "Node JS", icon: "bx bxl-nodejs" },
        { name: ".NET", icon: "bx bxl-.net" },
      ],
    },
    {
      category: "UI/UX Design",
      skills: [
      { name: "Adobe", icon: "bx bx-palette" },
      { name: "Figma", icon: "bx bxl-figma" },
      { name: "Blender", icon: "bx bx-cube" }
    ],

    },
  ] as SkillCategory[],

  latestProject: {
    id: "project1",
    title: "Webshop example",
    image: "/book-portfolio/website 3.png",
    techUsed: "React, TypeScript, SCSS",
    description:
      "Responsive webshops, web apps and websites",
    liveUrl: "https://kokchan.netlify.app",
    sourceUrl: "https://github.com/yvergit",
  } as Project,
};
