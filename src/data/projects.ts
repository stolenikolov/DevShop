import type { ProjectItem } from '../types';
import najdiknigaThumb from '../assets/projects/najdikniga.png';
import trendlyThumb from '../assets/projects/trendly.png';

export const projects: ProjectItem[] = [
  {
    id: 'najdikniga',
    year: '2025',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    url: 'https://najdikniga.vercel.app',
    thumbnail: najdiknigaThumb,
  },
  {
    id: 'trendly',
    year: '2025',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js'],
    url: 'https://trendly-delta.vercel.app',
    thumbnail: trendlyThumb,
  },
];
