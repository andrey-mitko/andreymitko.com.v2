import { StaticImageData } from "next/image";

export interface Experience {
  title: string;
  company: string;
  period: string;
}

export interface PortfolioProject {
  title: string;
  subtitle: string;
  image: StaticImageData;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

export interface SocialMediaItem {
  iconClass: string;
  url: string;
  color: string;
}
