export type NavItem = {
  label: string;
  href: string;
};
export type NewsItem = {
  date: string;
  text: string;
  tag?: "Award" | "Grant" | "Paper" | "Media" | "Service" | "Student" | "Other";
};


export const site = {
  name: 'Qiang Liu, Ph.D.',
  title: 'Assistant Professor',
  department: 'School of Computing',
  university: 'University of Nebraska–Lincoln',
  email: 'qiang.liu@unl.edu',
  phone: '402-472-5006',
  addressLabel: '262 Avery Hall, Lincoln, NE',
  addressUrl: 'https://goo.gl/maps/YQzUYmBcCmShdqbx7',

  scholarUrl: 'https://scholar.google.com/citations?user=LwmOBlQAAAAJ&hl=en&oi=sra',
  linkedinUrl: 'https://www.linkedin.com/in/qiang-liu-6b4424129/',
  githubUrl: 'https://github.com/liuqiang12040913',
  cvUrl: '/CV.pdf',

  avatarUrl: '/avatar.jpg',
  portraitUrl: '/portrait.jpg',

  nav: [
    { label: 'Home', href: '/' },
    { label: 'Project', href: '/projects' },
    { label: 'Publication', href: '/publications' },
    { label: 'Teaching', href: '/teaching' },
    { label: 'People', href: '/people' },
    { label: 'Service', href: '/service' },
  ] satisfies NavItem[],

  news: [
    {
      date: "[2026/01]",
      text: "Our paper (AutoPlan) on digital twin assisted cellular network planning has been accepted by IEEE ICC 2026! Congratulations to Xiaomeng and Yuru!",
      tag: "Student",
    },
    {
      date: "[2026/01]",
      text: "Yuru will join Nokia Bell Labs as a Research Intern this Summer at Murray Hill, NJ. Congratulations to Yuru Zhang!",
      tag: "Student",
    },
    {
      date: "[2025/12]",
      text: "Received two-year $100K UNL Fred J. Kelly Fund (PI) for research on integrating AI in computer science education with Co-PI Lisong Xu!",
      tag: "Grant",
    },
    {
      date: "[2025/12]",
      text: "Our paper (inRAN) on Interpretable Radio Access Networks has been accepted by IEEE INFOCOM 2026! Congratulations to Ming and Yuru!",
      tag: "Paper",
    },
    {
      date: "[2025/12]",
      text: "Our paper (oneTwin) on Online Digital Network Twins has been accepted by IEEE INFOCOM 2026! Congratulations to Yuru and Ming!",
      tag: "Paper",
    },
    {
      date: "[2025/11]",
      text: "Served as Associate Editor in IEEE Wireless Communication Magazine!",
      tag: "Service",
    },
    {
      date: "[2025/07]",
      text: "Our CADaaS project has been highlighted by the NSF CISE Newsletter, July 2025!",
      tag: "Media",
    },
    {
      date: "[2025/07]",
      text: "Received a $59K PAWR Supplement Fund under our AutoSlicing project! This will support us to work with the ARA platform for network slicing in the field.",
      tag: "Grant",
    },
    {
      date: "[2025/07]",
      text: "Our CADaaS project has been highlighted in Nebraska Today and Channel 8.",
      tag: "Media",
    },
    {
      date: "[2025/XX]",
      text: "Happy to join an NSF panel and complete the two-day panel discussion.",
      tag: "Other",
    },
    {
      date: "[2025/XX]",
      text: "Happy to join an NSF panel and complete the two-day panel discussion.",
      tag: "Other",
    },
    {
      date: "[2025/05]",
      text: "Welcome Xiaomeng Li to the INT Lab as a PhD student!",
      tag: "Student",
    },
    {
      date: "[2025/05]",
      text: "Happy to join the Open AI Impact Program at UNL, to explore AI techniques for future engineering teaching.",
      tag: "Other",
    },
    {
      date: "[2025/XX]",
      text: "Happy to join an NSF panel and complete the two-day panel discussion.",
      tag: "Other",
    },
    {
      date: "[2025/04]",
      text: "Yuru is awarded the Milton E. Mohr Fellowship (Year 2025-2026) by the College of Engineering, UNL. Congratulations to Yuru Zhang!",
      tag: "Award",
    },
    {
      date: "[2025/03]",
      text: "Received 2025 Edgerton Innovation Award, College of Engineering!",
      tag: "Award",
    },
    {
      date: "[2025/03]",
      text: "Received an NVIDIA Academic Grant (2x RTX PRO 6000 GPUs) to support our Digital Network Twin research. Thanks, NVIDIA!",
      tag: "Grant",
    },
    {
      date: "[2025/03]",
      text: "Our poster on Multi-Layer Digital Transportation Twin is accepted by IEEE MOST 2025. Congratulations to Jiahe Cao! See you in Delaware this May.",
      tag: "Paper",
    },
    {
      date: "[2025/03]",
      text: "Xiaomeng is awarded the prestigious Othmer Fellowship ($4000 per year, and up to three years) by the College of Engineering, UNL. Congratulations to Xiaomeng Li!",
      tag: "Award",
    },
    {
      date: "[2025/02]",
      text: "Ming Zhao will join Nokia Bell Labs as a Research Intern this Summer (again) at Murray Hill, NJ. Congratulations to Ming Zhao!",
      tag: "Student",
    },
    {
      date: "[2025/02]",
      text: "Call for Posters and Demos, IEEE MOST 2025, will be held in Newark, DE, this May!",
      tag: "Other",
    },
    {
      date: "[2025/02]",
      text: "Received three-year $289K NSF CSR project on Connected Autonomous Driving (Lead-PI), (NSF 2426481)!",
      tag: "Grant",
    },
    {
      date: "[2025/02]",
      text: "Our paper on Interpretable Learning-Assisted Network Slicing has been accepted by IEEE INFOCOM NG-OPERA 2025! Congratulations to Ming and Yuru!",
      tag: "Paper",
    },
    {
      date: "[2025/02]",
      text: "Received two-year $173K Nebraska DoT project about cost-efficient rural wireless connectivity (Co-PI), with PI Chun-Hsing Ho, and the other Co-PI Kyungki Kim!",
      tag: "Grant",
    },
    {
      date: "[2025/02]",
      text: "Received two-year $186K Nebraska DoT project about field C-V2X interoperability in NE highway (Co-PI), with PI Chun-Hsing Ho, and the other Co-PI Li Zhao!",
      tag: "Grant",
    },
  ],



  interests: [
    {
      title: 'Wireless Networks',
      description:
        'Network Autonomy, O-RAN, AI-RAN, Private Networks, Large-Scale Network Testbeds, Time Sensitive Networks.',
    },
    {
      title: 'Embodied Intelligence',
      description:
        'Autonomous Systems, Edge AI, Digital Twin, Networked Robotics, Autonomous Driving.',
    },
    {
      title: 'Cyber-Physical Systems',
      description:
        'Smart Agriculture, Industrial IoT, Vehicle-to-Everything, Advanced Manufacturing.',
    },
  ],

  sponsorLogos: [
    { alt: 'NSF', src: '/assets/logos/nsf.png' },
    { alt: 'DOT', src: '/assets/logos/dot.png' },
    { alt: 'USDA', src: '/assets/logos/usda.png' },
    { alt: 'NASA', src: '/assets/logos/nasa.png' },
    { alt: 'UNL', src: '/assets/logos/unl.jpg' },
    { alt: 'Toyota', src: '/assets/logos/toyota.jpg' },
    { alt: 'NVIDIA', src: '/assets/logos/nvidia.jpg' },
  ],

  footerText: '© 2025 Qiang Liu. All rights reserved.',
};
