import type { LucideIcon } from 'lucide-react';

export type Language = 'mk' | 'en';

export interface ProjectItem {
  id: string;
  year: string;
  stack: string[];
  url: string;
  thumbnail: string;
}

export interface ContactDetail {
  id: string;
  Icon: LucideIcon;
  value: string;
}
