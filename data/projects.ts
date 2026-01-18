export type Project = {
  id: string;
  title: string;
  fundingSource: string;
  fundingUrl?: string;
  awardLabel?: string;
  totalBudget?: string;
  role?: string;
  duration?: string;
  abstract?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    id: 'cadas',
    title:
      'Collaborative Research: CSR: Small: CADaaS: Deterministic Communication and Predictive Computation for Connected Autonomous Driving as a Service',
    fundingSource: 'NSF',
    fundingUrl:
      'https://www.nsf.gov/awardsearch/show-award?AWD_ID=2426481&HistoricalAwards=false',
    awardLabel: 'NSF CNS 2426481',
    totalBudget: '$289,374',
    role: 'Lead Principal Investigator, in collaborative project with Dr. Weisong Shi at the University of Delaware',
    duration: 'Mar. 2025 – Feb. 2028',
    abstract:
      'This project aims to democratize autonomous driving technologies to every connected vehicle via designing a new connected autonomous driving as a service (CADaaS). The fundamental idea is to enable adaptive vehicle-edge collaboration for collaboratively performing any latest autonomous driving stacks, including perception, prediction, and planning.',
    tags: ['Autonomy', 'Edge Computing', 'Deterministic Networking'],
  },
  {
    id: 'epscor',
    title:
      'EPSCoR Research Fellows: NSF: Online Hierarchical Learning for Network Autonomy in Open Radio Access Networks',
    fundingSource: 'NSF',
    fundingUrl:
      'https://www.nsf.gov/awardsearch/show-award?AWD_ID=2428427&HistoricalAwards=false',
    awardLabel: 'NSF OIA 2428427',
    totalBudget: '$285,694',
    role: 'Sole Principal Investigator',
    duration: 'Jan. 2025 – Dec. 2026',
    abstract:
      'This fellowship project outlines a first-of-its-kind safe zero-touch network management system by designing a new safe online hierarchical learning framework for O-RAN mobile networks. Leveraging the city-scale network infrastructure at the host institution, Iowa State University, the project will focus on three research objectives.',
    tags: ['O-RAN', 'Network Autonomy', 'Online Learning'],
  },
  {
    id: 'autoslicing',
    title:
      'NeTS: Small: AutoSlicing: Safe Online Autonomous Network Orchestration Towards Pervasive Slicing-as-a-Service',
    fundingSource: 'NSF',
    awardLabel: 'NSF CNS 2333164',
    totalBudget: '$531,134',
    role: 'Sole Principal Investigator',
    duration: 'Sept. 2024 – Aug. 2027',
    abstract:
      'This project outlines a first-in-its-kind autonomous network orchestration framework towards pervasive slicing-as-a-service. It addresses the continual domain shifting issue by automatically bridging simulation-to-reality gap via offline augmenting simulators and safely adapting time-varying dynamics via online learning in real-world networks. It will be evaluated in UNL site-scale and PAWR city-scale platforms.',
    fundingUrl: 'https://www.nsf.gov/awardsearch/show-award?AWD_ID=2333164&HistoricalAwards=false',
    // ctaLabel: 'Webpage →',
    // ctaUrl: 'https://your-lab-site/auto-slicing',
    tags: ['Network Slicing', 'Network Orchestration', 'Online Learning', 'Safety'],
  },

  {
    id: 'usdot',
    title:
      'Roadside-to-Vehicle Crash Avoidance Warning System for Commercial Motor Vehicles on Rural Roads',
    fundingSource: 'US DoT FMCSA',
    totalBudget: '$1,342,761',
    role:
      'Co-Principal Investigator (with PI Nathan Huynh and multiple Co-PIs)',
    duration: 'Sept. 2024 – Sept. 2026',
    abstract:
      'The goal of this project is to advance the safety protocols for commercial motor vehicles (CMVs) by integrating cutting-edge road hazard condition detection technologies in real-time. By using this new approach, we aim to minimize the likelihood of crashes in strategic locations on rural roadways.',
    tags: ['ITS', 'Safety', 'Roadside Sensing'],
  },
  {
    id: 'croptwin',
    title:
      'CropTwin: Automatic Digital Twin for Crop Growth Modeling towards Smart Irrigation Management',
    fundingSource: 'USDA NIFA AFRI',
    totalBudget: '$300,000',
    role: 'Principal Investigator (with Co-PIs)',
    duration: 'Sept. 2024 – Aug. 2026',
    abstract:
      'The goal is to design, develop, and deploy new digital twin systems in regard to crop growth modeling for smart irrigation management. We propose the CropTwin system with three core research tasks, including cost-efficient IoT systems, automatic digital twining, and smart irrigation solutions. We deploy and evaluate CropTwin in the real-world research farm at UNL, throughout a full soybean growth session.',
    tags: ['Digital Twin', 'Smart Agriculture', 'IoT'],
  },
  {
    id: 'husker-net',
    title:
      'CC* Integration-Large: Husker-Net: Open Nebraska End-to-End Wireless Edge Networks',
    fundingSource: 'NSF',
    fundingUrl: 'https://www.nsf.gov/awardsearch/show-award/?AWD_ID=2321699',
    awardLabel: 'NSF OAC 2321699',
    totalBudget: '$891,000',
    role: 'Principal Investigator',
    duration: 'Oct. 2023 – Sept. 2025',
    abstract:
      'This project outlines a novel open end-to-end cellular edge network (Husker-Net) by designing, deploying, and operating private 5G network over a light-licensed CBRS spectrum in multiple UNL campuses. Husker-Net is featured with ultra-low operating cost with open-source modules, flexible deployment with both wired and wireless backhaul (e.g., LEO in mid of Nebraska), and zero-touch management with automatic model-free algorithms.',
    ctaLabel: 'Visit Husker-Net Website →',
    ctaUrl: 'https://husker-net.unl.edu/',
    tags: ['Private 5G', 'Edge Networking', 'Automation'],
  },
  {
    id: 'field-nets',
    title:
      'CNS Core Medium: Field-Nets: Field-to-Edge Connectivity for Joint Communication and Sensing in Next-Generation Intelligent Agricultural Networks',
    fundingSource: 'NSF',
    fundingUrl: 'https://www.nsf.gov/awardsearch/show-award?AWD_ID=2212050',
    awardLabel: 'NSF CNS 2212050',
    totalBudget: '$1,000,000',
    role: 'Co-Principal Investigator',
    duration: 'Oct. 2022 – Sept. 2025',
    abstract:
      'In this project, an interdisciplinary team of experts in millimeter-wave communications, metamaterial and metasurface-inspired antenna array design, dynamic spectrum access, and radio access networks in collaboration with experts in agricultural robotics and sensor-based plant phenotyping aim to provide connectivity to rural farm fields and increase national competence to bring new technologies to rural America rapidly.',
    tags: ['Agri-Networks', 'JCAS', 'mmWave'],
  },
];
