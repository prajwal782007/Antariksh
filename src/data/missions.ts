export interface Mission {
  id: string;
  name: string;
  objective: string;
  progress: number; // 0 to 100
  launchDate: string;
}

export const missions: Mission[] = [
  {
    id: 'm1',
    name: 'Mission Artemis',
    objective: 'Deploy a payload of student-designed sensors to low earth orbit altitude via weather balloon.',
    progress: 75,
    launchDate: '2027-04-12',
  },
  {
    id: 'm2',
    name: 'Project Icarus',
    objective: 'Test new solar-sail material in high-altitude conditions.',
    progress: 30,
    launchDate: '2027-08-25',
  },
];
