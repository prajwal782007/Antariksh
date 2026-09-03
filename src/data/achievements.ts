export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    id: 'a1',
    title: '1st Place - National Rover Challenge',
    date: '2025-08',
    description: 'Secured the top spot for our innovative rover design.',
  },
  {
    id: 'a2',
    title: 'Best Design Award - Aero Expo',
    date: '2026-02',
    description: 'Awarded for the most aerodynamic UAV design at the expo.',
  },
];
