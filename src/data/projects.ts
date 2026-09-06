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
  // Generic rich sections for diverse projects
  testingProgram?: string[];
  longTermVision?: {
    overview: string;
    pathway: string[];
  };
  previousWork?: {
    overview: string;
    items: { title: string; desc: string; type: 'success' | 'warning' | 'info' }[];
  };
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
    description: 'Solid propellant rocket motor research, thrust measurement, and sounding rocket propulsion testing.',
    image: '/Sugar Rocket.jpeg',
    status: 'Completed',
    domain: 'Propulsion',
    details: {
      subtitle: 'Rocket Propulsion Testing & Experimental Analysis',
      metadata: [
        { label: 'Project Type', value: 'Rocketry Research & Testing' },
        { label: 'Club', value: 'Antariksh Club' },
        { label: 'College', value: 'Dhole Patil College of Engineering, Pune' },
        { label: 'Proposed Budget', value: '₹1,000/-' },
        { label: 'Campaign Tests', value: '4 Preliminary Runs' },
        { label: 'Target Milestone', value: 'Student-built Sounding Rocket' },
      ],
      about:
        'The Antariksh Club is working towards its long-term objective of designing and developing a student-built sounding rocket within the next two years. As an initial step towards this objective, the club has conducted preliminary experiments to understand basic rocket propulsion, ignition behaviour, motor casing behaviour, and combustion characteristics. The project focuses on moving from preliminary trial-based experimentation towards properly documented propulsion testing, thrust measurement, and experimental data analysis.',
      previousWork: {
        overview:
          'During the initial experimental campaign, the team conducted four test runs, observing ignition characteristics, casing responses, and propellant behavior:',
        items: [
          {
            title: '2 Partially Successful Tests',
            desc: 'Observable combustion and thrust were obtained, establishing baseline ignition behavior and initial burn stability.',
            type: 'success',
          },
          {
            title: '2 Unsuccessful / Inconclusive Tests',
            desc: 'Difficulties associated with experimental consistency, ignition/testing conditions, and small internal air pockets in propellant grain causing uneven burn.',
            type: 'warning',
          },
        ],
      },
      objectives: [
        'Study the basic performance characteristics of the experimental propulsion system.',
        'Develop a systematic method for recording experimental observations.',
        'Measure and analyse thrust during controlled ground testing.',
        'Record test parameters such as mass, test duration, ignition response, and post-test condition.',
        'Study the relationship between experimental observations and theoretical expectations.',
        'Identify sources of inconsistency between different test runs.',
        'Develop basic instrumentation and testing practices required for future rocketry projects.',
        'Establish a foundation for the club’s long-term sounding-rocket development program.',
      ],
      testingProgram: [
        'Controlled ground testing under faculty supervision.',
        'Measurement of thrust using a suitable force-measurement arrangement.',
        'Recording of motor/test-article mass before and after testing.',
        'Recording of ignition and burn-duration observations.',
        'Documentation of each test using a standardized test sheet.',
        'Comparison of results between different test runs.',
        'Analysis of thrust measurements and identification of performance inconsistencies.',
        'Preparation of a test report containing experimental data, observations, conclusions, and recommendations.',
      ],
      learningOutcomes: [
        'A basic thrust-testing capability.',
        'Quantitative thrust measurements instead of visual estimation alone.',
        'Standardized experimental test records.',
        'Comparative data from multiple test runs.',
        'Better understanding of experimental uncertainties and inconsistencies.',
        'Initial propulsion-performance data to support future engineering analysis.',
        'A foundation for developing avionics, telemetry, structural, aerodynamic, and propulsion subsystems.',
      ],
      longTermVision: {
        overview:
          'The activity is the beginning of a structured Rocketry Research and Testing Program within Antariksh Club. The long-term development roadmap is systematically planned as:',
        pathway: [
          'Research',
          'Design',
          'Simulation',
          'Ground Testing',
          'Data Analysis',
          'Validation',
          'Controlled Flight Testing',
          'Sounding Rocket Development',
        ],
      },
      conclusion:
        'The four preliminary tests have provided the Antariksh Club with valuable practical experience and have demonstrated the need for a scientific, quantitative approach to rocketry experimentation. The proposed testing program moves the team from trial-and-error experimentation towards measurement-based engineering with thrust measurement, repeatability, documentation, and data analysis. Approval of the proposed ₹1,000 budget will establish the basic testing resources required for developing a student sounding rocket.',
    },
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
