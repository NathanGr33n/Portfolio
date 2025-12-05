export interface Contact {
  github: string;
  email: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  stars: number;
  url: string;
  featured: boolean;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface ProfileData {
  name: string;
  role: string;
  company: string;
  bio: string;
  avatar: string;
  contact: Contact;
  skills: string[];
  projects: Project[];
  experience: Experience[];
}
