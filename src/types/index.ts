// Base types for the portfolio application

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  profileImage: string;
}

export interface SocialMedia {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

export interface WorkExperienceItem {
  id: string;
  period: string;
  position: string;
  company: string;
  description: string;
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  image: string;
  techUsed: string;
  description: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export interface ContactForm {
  fullName: string;
  email: string;
  message: string;
}

// Page states
export interface PageState {
  currentPage: number;
  isTurning: boolean;
  turnedPages: Set<number>;
}

// Component props
export interface BookPageProps {
  pageId: string;
  pageNumber: number;
  zIndex: number;
  isTurned: boolean;
  children: React.ReactNode;
  className?: string;
}

export interface NavigationButtonProps {
  direction: "next" | "prev";
  pageId: string;
  onPageTurn: (pageId: string) => void;
}

export interface ProfilePageProps {
  personalInfo: PersonalInfo;
  socialMedia: SocialMedia;
  onContactMe: () => void;
}

export interface WorkEducationPageProps {
  items: WorkExperienceItem[] | EducationItem[];
  title: string;
  pageNumber: number;
  pageId: string;
  onPageTurn: (pageId: string) => void;
}

export interface ServicesPageProps {
  services: ServiceItem[];
  pageNumber: number;
  pageId: string;
  onPageTurn: (pageId: string) => void;
}

export interface SkillsPageProps {
  skillCategories: SkillCategory[];
  pageNumber: number;
  pageId: string;
  onPageTurn: (pageId: string) => void;
}

export interface PortfolioPageProps {
  project: Project;
  pageNumber: number;
  pageId: string;
  onPageTurn: (pageId: string) => void;
}

export interface ContactPageProps {
  onSubmit: (formData: ContactForm) => void;
  onBackToProfile: () => void;
  pageNumber: number;
}
