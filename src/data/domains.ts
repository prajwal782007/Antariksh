export interface Domain {
  id: string;
  name: string;
  description: string;
  iconName: string; // Refers to Lucide React icon name
}

export const domains: Domain[] = [
  {
    id: 'd1',
    name: 'Aerodynamics',
    description: 'Study of the motion of air and its interaction with solid objects.',
    iconName: 'Wind',
  },
  {
    id: 'd2',
    name: 'Propulsion',
    description: 'Design and analysis of systems that produce thrust.',
    iconName: 'Rocket',
  },
  {
    id: 'd3',
    name: 'Avionics',
    description: 'Electronic systems used on aircraft, artificial satellites, and spacecraft.',
    iconName: 'Cpu',
  },
  {
    id: 'd4',
    name: 'Structures',
    description: 'Design and testing of the physical framework of aerospace vehicles.',
    iconName: 'Layers',
  },
];
