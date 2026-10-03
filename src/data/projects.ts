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
    details: {
      subtitle: 'CubeSat-Enabled Disaster Early Warning & Telemetry Network',
      metadata: [
        { label: 'Project Type', value: 'Distributed Monitoring System' },
        { label: 'Core Application', value: 'Disaster Early Warning & Telemetry' },
        { label: 'Communication Base', value: 'CubeSat Architecture' },
      ],
      about: 'The CubeSat-Enabled Disaster Early Warning & Telemetry Network is a distributed monitoring system designed to collect environmental and disaster-related data from rural and urban sensor stations and relay telemetry through a CubeSat-based communication architecture. The system is designed to provide an alternative communication pathway when conventional terrestrial networks become unavailable or unreliable during disasters such as floods, earthquakes, and landslides.',
      proceedings: [
        'Rural Monitoring Station monitors water levels, seismic/vibration activity, soil moisture, temperature, and humidity.',
        'Urban Telemetry Station monitors air quality, gas concentrations, temperature, humidity, and microclimate conditions.',
        'CubeSat Flight Hub acts as the central telemetry platform for receiving data, monitoring spacecraft sensors, recording mission data, and maintaining timestamps.',
        'Current prototype uses 2.4 GHz wireless communication for local testing, with plans to investigate sub-GHz LoRa communication for longer-range telemetry.'
      ],
      achievement: {
        highlight: 'CubeSat-based telemetry architecture',
        details: 'The project demonstrates how distributed environmental sensors, edge processing, wireless telemetry and CubeSat-based communication can be combined to support disaster monitoring and early-warning applications.'
      },
      longTermVision: {
        overview: 'The project roadmap includes a transition from modular commercial hardware toward compact, integrated spacecraft electronics. Future development may include:',
        pathway: [
          'Custom PCBs',
          'Rigid-flex and high-density interconnects',
          'Reduced wiring and connectors',
          'Radiation-tolerant processors or FPGAs',
          'Hardware-accelerated processing',
          'Custom ASIC/SoC architectures',
          'Flight-oriented hardware qualification'
        ]
      }
    }
  },
  {
    id: '2',
    title: 'Rover',
    description: 'An Autonomous Lunar Surface 3D-Mapping Rover developed for NSIC 2026.',
    image: '/Rover.jpeg',
    status: 'Completed',
    domain: 'Space Robotics',
    details: {
      subtitle: 'Autonomous Lunar Surface 3D-Mapping Rover',
      metadata: [
        { label: 'Project Type', value: 'Space Robotics / Autonomous Rover' },
        { label: 'Event', value: 'National Space Innovation Challenge (NSIC) 2026' },
        { label: 'Team', value: 'AgYanis' },
        { label: 'Computing Platform', value: 'Raspberry Pi 5' },
      ],
      about:
        'The AgYanis team from the Antariksh Club developed an Autonomous Lunar Surface 3D-Mapping Rover for exploring and analysing a simulated lunar surface containing craters, uneven terrain, and obstacles. The project was developed as part of the National Space Innovation Challenge (NSIC) 2026 and integrates stereo vision, LiDAR, autonomous navigation, and hazard detection.',
      proceedings: [
        'The rover uses two Raspberry Pi Camera Module 3 cameras for stereo vision, allowing it to estimate depth and generate a 3D representation of the terrain.',
        'A TF-Luna LiDAR provides an independent distance measurement used for calibration and additional safety monitoring.',
        'In Manual Mode, the operator controls the rover while the system provides continuous sensor information and hazard warnings.',
        'In Autonomous Mode, the rover analyses depth information to identify hazardous regions and attempts to navigate safer paths automatically.',
        'The physical development involved collaboration with the DPCOE Graphics Design Club, who assisted in 3D printing the complete rover chassis.',
      ],
      achievement: {
        highlight: 'Top 5 Projects at NSIC 2026',
        details:
          'The AgYanis Hardware Team successfully secured a position among the Top 5 Projects at the National Space Innovation Challenge (NSIC) 2026. During evaluation, a former ISRO scientist appreciated the interdisciplinary approach and encouraged further research on the stereo-vision approach and hazard-response system.',
      },
      learningOutcomes: [
        'Integration of stereo vision using dual cameras.',
        'Depth estimation and 3D terrain representation.',
        'LiDAR integration for distance calibration and safety detection.',
        'Autonomous navigation and hazard detection.',
        'Odometry using an encoder-based four-wheel-drive system.',
        'Software development using Python and C++.',
      ],
      longTermVision: {
        overview:
          'The Antariksh Club plans to pursue research based on the project, focusing on "Stereo-based 3D planetary perception and hazard-aware autonomous navigation." The rover can be further improved through:',
        pathway: [
          'Better stereo calibration',
          'LiDAR-camera fusion',
          'Terrain classification',
          'Improved hazard detection',
          'Autonomous path planning',
          'More accurate 3D mapping',
        ],
      },
    },
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
    details: {
      subtitle: 'V-Dipole Antenna – Satellite Image Reception System',
      metadata: [
        { label: 'Project Type', value: 'Ground-Station Antenna' },
        { label: 'Satellite', value: 'METEOR-M2-3' },
        { label: 'Frequency Band', value: '137 MHz VHF' },
        { label: 'Date', value: '27 November 2025' },
        { label: 'Venue', value: 'Dhole Patil College of Engineering, Pune' },
      ],
      about: 'The V-Dipole Antenna is a student-designed ground-station antenna developed by Antariksh Club, Dhole Patil College of Engineering, Pune, for receiving radio transmissions from Low Earth Orbit (LEO) weather satellites. The antenna was specifically designed and tuned around the 137 MHz VHF frequency range, enabling reception of real-time weather imagery transmitted by satellites such as METEOR-M2-3. It provides a practical orbit-to-ground communication link, allowing students to directly receive satellite signals and process them into usable Earth-observation imagery.',
      proceedings: [
        'The METEOR-M2-3 weather satellite transmits meteorological Earth-observation data using a radio downlink in the 137 MHz VHF band.',
        'A student-designed 137 MHz V-Dipole antenna, installed on the rooftop, receives the satellite\'s radio signal during its visible pass.',
        'The received RF signal is captured using an SDR (Software Defined Radio).',
        'The signal is recorded at approximately 137.900 MHz and subsequently processed using SatDump, which demodulates and decodes the transmission into weather imagery.'
      ],
      transmissionLine: {
        overview: 'The system operates as an integrated ground station to receive and process satellite signals.',
        signalPath: [
          'METEOR-M2-3',
          '137 MHz VHF Downlink',
          'V-Dipole Antenna',
          'SDR Receiver',
          '137.900 MHz Signal Recording',
          'SatDump Processing',
          'Weather Image'
        ]
      },
      achievement: {
        highlight: 'First Successful Satellite Image Reception',
        details: 'On 27 November 2025, Antariksh Club successfully received real-time weather imagery transmitted by the METEOR-M2-3 Low Earth Orbit weather satellite. This marked the first orbit-to-ground satellite image reception in the institution\'s history. This V-Dipole system became the second operational ground station of Antariksh Club.'
      },
      longTermVision: {
        overview: 'The V-Dipole ground station can be further developed by adding:',
        pathway: [
          'Automated satellite pass prediction',
          'Antenna tracking/rotator systems',
          'Improved RF filtering and low-noise amplification',
          'Automated SDR recording and SatDump processing',
          'Web-based reception monitoring'
        ]
      }
    }
  },
  {
    id: '6',
    title: 'DRISHTI',
    description: 'AI-powered disaster-response drone that uses autonomous aerial search, YOLO-based detection, geo-tagging and intelligent prioritization to help rescue teams locate victims, identify hazards and plan safer rescue operations.',
    image: '/Drishti.jpeg',
    status: 'In Progress',
    domain: 'Robotics & AI',
    details: {
      subtitle: 'AI-Powered Disaster Response Drone',
      metadata: [
        { label: 'Project Type', value: 'Autonomous Drone' },
        { label: 'Core Application', value: 'Disaster Response & Search-and-Rescue' },
        { label: 'Key Technology', value: 'AI Computer Vision & Geo-Tagging' },
      ],
      about: 'DRISHTI is an AI-powered autonomous disaster-response drone designed to assist search-and-rescue operations in disaster-affected and difficult-to-access areas. The system uses aerial surveillance and AI-based computer vision to identify potential victims, animals, fire, smoke, flood/water, debris, damaged structures and other hazards. It then provides their locations and relevant information to rescue teams. DRISHTI is designed for disasters such as floods, earthquakes, fires, structural collapses and landslides.',
      objectives: [
        'Search → Detect → Locate → Prioritize → Guide → Rescue'
      ],
      proceedings: [
        '1. Mission Planning & Autonomous Search: The rescue operator first selects the disaster-affected region to be surveyed. DRISHTI uses a grid/lawnmower search pattern to systematically cover the selected area. The drone supports both Autonomous flight mode for predefined missions and Manual flight mode for direct operator control when required. The systematic search approach helps reduce unnecessary movement while providing organized coverage of the affected region.',
        '2. AI-Based Detection: During flight, the drone captures images of the disaster area. These images are processed through an AI-based computer-vision pipeline using YOLO-based object detection. The system is designed to identify: People/potential victims, Animals, Fire, Smoke, Flood/water, Debris, Damaged structures, and Other hazardous conditions. Multiple objects can be detected simultaneously, with each detection associated with a confidence score.',
        '3. Geo-Tagging & Information Generation: When an important object or hazard is detected, DRISHTI associates the detection with its geographical position. The system records information such as: Detected object, Location, Image/frame, and Timestamp. This allows rescue teams to focus on specific detected locations rather than manually searching the entire disaster area.',
        '4. Intelligent Prioritization: DRISHTI evaluates detected situations using factors such as: Number of victims, Severity, Hazard risk, and Accessibility. Based on these factors, detected locations can be categorized into Urgent → High → Low. This helps organize the available rescue resources and identify situations requiring greater attention.',
        '5. Safer Route Guidance: After detecting and geo-tagging victims and hazards, DRISHTI uses the collected geographical information to support safer route planning for rescue teams. Information about hazards such as flooded areas, fire, debris and damaged structures can help responders understand dangerous regions while approaching detected locations.'
      ],
      testingProgram: [
        'Key Features:',
        'Autonomous Search: Grid/lawnmower area coverage',
        'AI Detection: YOLO-based computer vision',
        'Victim Detection: Identifies potential people requiring rescue',
        'Hazard Detection: Fire, smoke, water, debris, damaged structures',
        'Geo-Tagging: Records geographical location of detections',
        'Data Recording: Image/frame and timestamp',
        'Prioritization: Urgent, High and Low',
        'Route Guidance: Supports safer rescue approach',
        'Flight Modes: Autonomous and manual'
      ],
      longTermVision: {
        overview: 'System Architecture & Operational Workflow Block Diagram:',
        pathway: [
          'Drone Camera',
          'AI / YOLO Detection',
          'Victim & Hazard Identification',
          'Geo-Tagging',
          'Priority Classification',
          'Route Guidance',
          'Rescue Team'
        ]
      }
    }
  },
  {
    id: '7',
    title: 'ISRO Robotics Challenge',
    description: 'Participation in the ISRO Robotics Challenge 2025 with the ANAV project.',
    image: '/isro challenge.jpeg',
    status: 'Completed',
    domain: 'Space Robotics',
    details: {
      subtitle: 'ANAV – Autonomous Navigation Aerial Vehicle',
      metadata: [
        { label: 'Event', value: 'ISRO Robotics Challenge 2025' },
        { label: 'Team', value: 'Antariksh' },
        { label: 'Institution', value: 'Dhole Patil College of Engineering, Pune' },
      ],
      about: 'Team Antariksh from Dhole Patil College of Engineering (DPCOE), Pune, participated in the ISRO Robotics Challenge 2025 in November 2025. The challenge focused on developing an autonomous aerial vehicle capable of navigating harsh, Mars-like terrains without GPS support. It provided students with an opportunity to work on aerospace design, embedded systems, robotics and autonomous control algorithms. Team Antariksh\'s project, ANAV (Autonomous Navigation Aerial Vehicle), was selected among the top 177 teams from more than 1,600 national entries during Phase I. Although the team did not progress beyond Phase II, the project provided practical experience in aerospace systems, autonomous robotics and multidisciplinary teamwork.',
      objectives: [
        'Develop an autonomous aerial vehicle capable of operating in environments where GPS-based navigation may not be available.',
        'Design for scenarios involving limited communication and navigation, with potential applications in disaster management and extraterrestrial exploration.',
        'Follow a structured process involving: Technical proposal, Prototype development, Demonstration, Technical documentation, Hardware demonstration, and Safety and emergency protocol validation.'
      ],
      proceedings: [
        'ANAV was the aerial vehicle developed by Team Antariksh for the challenge. The system combined a flight controller, onboard computing, sensors, propulsion hardware and wireless telemetry to support autonomous flight and real-time monitoring.',
        'Hardware Architecture: The ANAV system included a Pixhawk 2.4.8 Flight Controller, Raspberry Pi 5 with 8 GB RAM (onboard processing unit), IMU for orientation, TF Luna LiDAR for altitude, cameras for terrain capture, 4 × A2212 BLDC motors, 1045 propellers, Electronic Speed Controllers (ESCs), 3S 3300 mAh LiPo battery, and Wi-Fi-based MQTT telemetry.',
        'Software Architecture: The onboard computing system used Raspberry Pi OS with Python and C++. The software stack included DroneKit, MAVLink, MAVProxy, and Paho MQTT. A multithreaded architecture supported real-time sensor processing and decision-making. PID control loops were used for orientation and altitude control. The system included emergency routines to respond to communication and sensor failures.'
      ],
      testingProgram: [
        '1. BOOT & INITIALIZATION: The system performed sensor calibration and safety checks before flight.',
        '2. TAKE-OFF: The vehicle performed a controlled thrust increase while using IMU and LiDAR feedback.',
        '3. HOVER: ANAV successfully maintained a stable flight at an altitude of 5 metres for 46 seconds while streaming live telemetry.',
        '4. LANDING: The vehicle performed a controlled descent using LiDAR and IMU data, followed by automatic disarming after ground contact.',
        '5. FAIL-SAFE OPERATION: The system incorporated multiple safety mechanisms including automatic landing after 5 seconds of communication loss, sensor-failure fallback with safe landing, and manual override through RC mode.'
      ],
      achievement: {
        highlight: 'Top 177 Teams Nationally',
        details: 'Team Antariksh was selected among the top 177 teams in Round I from more than 1,600 national entries. The first-year student team independently developed and integrated the UAV hardware and software architecture, successfully demonstrating take-off, stable hovering, live telemetry streaming, and controlled landing.'
      },
      learningOutcomes: [
        'Practical exposure to aerospace engineering, UAV design, embedded systems, flight control, and sensor integration.',
        'Experience in telemetry, autonomous robotics, and team-based engineering development.',
        'Strengthened understanding of autonomous systems, drone design, embedded programming and space technology.'
      ],
      conclusion: 'Although Team Antariksh did not progress beyond Phase II, the project was recognized for innovation, documentation and teamwork at the national level. The ANAV project became an important hands-on learning experience for the team and encouraged further exploration of aerospace robotics, autonomous systems and space technology.'
    }
  }
];
