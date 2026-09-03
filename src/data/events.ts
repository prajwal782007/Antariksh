export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

export const events: Event[] = [
  {
    id: 'e1',
    title: 'Annual Rocketry Workshop',
    date: '2026-10-15',
    location: 'Main Campus Ground',
    description: 'Learn the basics of model rocketry and build your own rocket.',
  },
  {
    id: 'e2',
    title: 'Guest Lecture: Future of Space Travel',
    date: '2026-11-05',
    location: 'Auditorium 1',
    description: 'An insightful talk by industry experts on upcoming space exploration missions.',
  },
];
