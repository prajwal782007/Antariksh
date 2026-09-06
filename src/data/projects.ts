export interface ProjectDetails {
  subtitle?: string;
  metadata?: { label: string; value: string }[];
  about?: string;
  objectives?: string[];
  proceedings?: string[];
  transmissionLine?: {
    overview: string;
    signalPath: string[];
  };
  measurementAnalysis?: string[];
  achievement?: {
    highlight: string;
    details: string;
  };
  learningOutcomes?: string[];
  conclusion?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  domain: string;
  details?: ProjectDetails;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'CubeSat',
    description: 'Development of an autonomous aerial delivery system.',
    image: '/Cubesat.jpeg',
    status: 'Completed',
    domain: 'Aerospace',
  },
  {
    id: '2',
    title: 'Rover',
    description: 'A two-stage sounding rocket for atmospheric research.',
    image: '/Rover.jpeg',
    status: 'In Progress',
    domain: 'Propulsion',
  },
  {
    id: '3',
    title: 'Helical Antenna',
    description: 'Helical Antenna tuning and successful LEO satellite signal reception at 138.150 MHz.',
    image: '/Helical Antenna.jpeg',
    status: 'In Progress',
    domain: 'Electronics',
    details: {
      subtitle: 'Helical Antenna Tuning & LEO Satellite Signal Reception Session',
      metadata: [
        { label: 'Date', value: '18 July 2026' },
        { label: 'Venue', value: 'Antariksh Club, Dhole Patil College of Engineering, Pune' },
        { label: 'Session Mentor', value: 'Mr. Srinivas Nyayapathi Sir' },
        { label: 'Guided By', value: 'Honourable Chairman Shri Sagar U. Dhole Patil Sir' },
        { label: 'Academic Year', value: '2026–27' },
        { label: 'Duration', value: 'More than 8 hours' },
        { label: 'Category', value: 'Technical / Hands-on Learning Session' },
        { label: 'Reception Frequency', value: '138.150 MHz' },
      ],
      about:
        'The Antariksh Club of Dhole Patil College of Engineering successfully conducted a Helical Antenna Tuning and LEO Satellite Signal Reception Session on 18th July 2026 under the expert guidance of Mr. Srinivas Nyayapathi Sir. The session provided students with practical exposure to antenna design, frequency tuning, RF signal reception, transmission lines, and satellite communication systems. After more than eight hours of continuous experimentation, tuning, and testing, the team successfully received a Low Earth Orbit (LEO) satellite signal at approximately 138.150 MHz.',
      objectives: [
        'Understand the working principles of a helical antenna.',
        'Learn frequency tuning and antenna resonance.',
        'Study the factors affecting signal reception.',
        'Understand the effect of copper wire cross-sectional area.',
        'Study the importance of wire length and purity.',
        'Understand the influence of the number and geometry of turns.',
        'Gain practical experience in antenna tuning and testing.',
        'Understand RF transmission lines and signal attenuation.',
        'Learn methods to reduce signal losses.',
        'Gain practical experience in receiving LEO satellite signals.',
      ],
      proceedings: [
        'Under the guidance of Mr. Srinivas Nyayapathi Sir, club members explored the physical and electrical parameters that influence the performance of a helical antenna.',
        'The students studied how the cross-sectional area, length, and purity of copper wire can affect the antenna’s electrical characteristics, resonant behaviour, and receiving performance.',
        'The session also focused on the number, spacing, and arrangement of turns in the helical antenna. Through practical experimentation, students observed how changes in these parameters affect frequency tuning and signal reception.',
      ],
      transmissionLine: {
        overview:
          'The session introduced students to RF transmission line cables, including RG7-type coaxial cable, and their role in carrying weak received signals from the antenna to the receiver. Students learned about the importance of minimizing unnecessary attenuation and losses within the cable system. Practical considerations related to cable routing, winding, twisting, and folding were also demonstrated.',
        signalPath: [
          'Satellite Signal',
          'Helical Antenna',
          'Transmission Line',
          'Receiver',
          'Signal Analysis',
        ],
      },
      measurementAnalysis: [
        'The practical work included testing and observing the antenna’s characteristics using RF measurement equipment, including a NanoVNA.',
        'Students observed the antenna’s response across different frequencies and learned the importance of tuning the antenna system towards the desired operating frequency.',
        'The received signals were monitored and analyzed using a computer-based software setup, allowing participants to observe the RF spectrum and identify the characteristics of the received satellite transmission.',
      ],
      achievement: {
        highlight: 'Successful Reception Frequency: 138.150 MHz',
        details:
          'The major achievement of the session was the successful reception of a LEO satellite signal at approximately 138.150 MHz after more than eight hours of intensive hands-on experimentation and learning. The activity gave students practical exposure to the complete process of developing and optimizing a receiving system.',
      },
      learningOutcomes: [
        'Helical antenna design and working principles.',
        'Frequency tuning and antenna resonance.',
        'Copper wire cross-sectional area and conductor length.',
        'Copper purity and conductor quality.',
        'Number and arrangement of antenna turns.',
        'RF transmission lines and signal attenuation.',
        'Practical antenna testing and tuning.',
        'NanoVNA-based antenna measurement.',
        'RF spectrum observation and signal analysis.',
        'Practical reception of LEO satellite signals.',
      ],
      conclusion:
        'The Helical Antenna Tuning and LEO Satellite Signal Reception Session was an important practical learning activity for the members of the Antariksh Club. Under the expert guidance of Mr. Srinivas Nyayapathi Sir, students gained direct experience with antenna construction, tuning, RF measurements, transmission lines, and real satellite signal reception. The session strengthened the practical knowledge of Antariksh Club members in RF engineering, antenna systems, signal reception, and satellite communication.',
    },
  },
  {
    id: '4',
    title: 'Sugar Rocket',
    description: 'Solid propellant rocket motor research and flight testing.',
    image: '/Sugar Rocket.jpeg',
    status: 'Completed',
    domain: 'Propulsion',
  },
  {
    id: '5',
    title: 'V Dipole Antenna',
    description: 'V-dipole antenna system for weather satellite signal reception and telecommunication.',
    image: '/V Dipole Antenna.jpeg',
    status: 'Completed',
    domain: 'Electronics',
  },
];
