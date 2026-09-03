export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  domain: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Vayun',
    description: 'Development of an autonomous aerial delivery system.',
    image: 'https://images.unsplash.com/photo-1579824249114-1e0e8e604f37?auto=format&fit=crop&q=80',
    status: 'In Progress',
    domain: 'Aerospace',
  },
  {
    id: '2',
    title: 'Astra Rocket',
    description: 'A two-stage sounding rocket for atmospheric research.',
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80',
    status: 'Completed',
    domain: 'Propulsion',
  },
  {
    id: '3',
    title: 'SatComm Module',
    description: 'Compact satellite communication module for cubesats.',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80',
    status: 'Planned',
    domain: 'Electronics',
  },
];
