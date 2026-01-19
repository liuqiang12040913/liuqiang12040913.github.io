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
    { label: 'Projects', href: '/projects' },
    { label: 'Publications', href: '/publications' },
    { label: 'Courses', href: '/teaching' },
    { label: 'Services', href: '/service' },
    { label: 'Students', href: '/people' },
  ] satisfies NavItem[],

  news: [
    {
      date: "[2026/01]",
      tag: "Student",
      html: `Our paper (<strong>AutoPlan</strong>) on digital twin assisted cellular network planning has been accepted by <strong>IEEE ICC 2026</strong>! Congratulations to Xiaomeng and Yuru!`,
    },
    {
      date: "[2026/01]",
      tag: "Student",
      html: `Yuru will join <strong>Nokia Bell Labs</strong> as a Research Intern this Summer at Murray Hill, NJ. Congratulations to Yuru Zhang!`,
    },
    {
      date: "[2025/12]",
      tag: "Grant",
      html: `Received two-year <strong>$100K</strong> UNL Fred J. Kelly Fund (PI) for research on integrating <em>AI in computer science education</em> with Co-PI Lisong Xu!`,
    },
    {
      date: "[2025/12]",
      tag: "Paper",
      html: `Our paper (<strong>inRAN</strong>) on Interpretable Radio Access Networks has been accepted by <strong>IEEE INFOCOM 2026</strong>! Congratulations to Ming and Yuru!`,
    },
    {
      date: "[2025/12]",
      tag: "Paper",
      html: `Our paper (<strong>oneTwin</strong>) on Online Digital Network Twins has been accepted by <strong>IEEE INFOCOM 2026</strong>! Congratulations to Yuru and Ming!`,
    },
    {
      date: "[2025/11]",
      tag: "Service",
      html: `Dr. Liu serves as <strong>Editor</strong> in <em>IEEE Wireless Communication Magazine</em>!`,
    },
    {
      date: "[2025/07]",
      tag: "Media",
      html: `Our <strong>CADaaS</strong> project has been highlighted by the <strong>NSF CISE Newsletter</strong>, July 2025!`,
    },
    {
      date: "[2025/07]",
      tag: "Grant",
      html: `Received a <strong>$59K</strong> PAWR Supplement Fund under our <strong>AutoSlicing</strong> project! This will support us to work with the ARA platform for network slicing in the field.`,
    },
    {
      date: "[2025/07]",
      tag: "Media",
      html: `Our <strong>CADaaS</strong> project has been highlighted in
        <a href="https://news.unl.edu/article/lius-research-expands-connects-autonomous-vehicle-capabilities"
          target="_blank" rel="noopener noreferrer"
          class="text-blue-700 hover:text-blue-800">
          Nebraska Today
        </a>
        and
        <a href="https://www.klkntv.com/unl-professor-working-on-software-to-make-all-new-cars-self-driving/"
          target="_blank" rel="noopener noreferrer"
          class="text-blue-700 hover:text-blue-800">
          Channel 8
        </a>.`,
    },
    {
      date: "[2025/XX]",
      tag: "Other",
      html: `Happy to join an <strong>NSF panel</strong> and complete the two-day panel discussion.`,
    },
    {
      date: "[2025/XX]",
      tag: "Other",
      html: `Happy to join an <strong>NSF panel</strong> and complete the two-day panel discussion.`,
    },
    {
      date: "[2025/05]",
      tag: "Student",
      html: `Welcome <strong>Xiaomeng Li</strong> to the INT Lab as a PhD student!`,
    },
    {
      date: "[2025/05]",
      tag: "Other",
      html: `Happy to join the <strong>Open AI Impact Program</strong> at UNL, to explore AI techniques for future engineering teaching.`,
    },
    {
      date: "[2025/XX]",
      tag: "Other",
      html: `Happy to join an <strong>NSF panel</strong> and complete the two-day panel discussion.`,
    },
    {
      date: "[2025/04]",
      tag: "Award",
      html: `Yuru is awarded the <strong>Milton E. Mohr Fellowship</strong> (Year 2025-2026) by the College of Engineering, UNL. Congratulations to Yuru Zhang!`,
    },
    {
      date: "[2025/03]",
      tag: "Award",
      html: `Dr. Liu received <strong>2025 Edgerton Innovation Award</strong>, College of Engineering!`,
    },
    {
      date: "[2025/03]",
      tag: "Grant",
      html: `Received an <strong>NVIDIA Academic Grant</strong> (2x RTX PRO 6000 GPUs) to support our Digital Network Twin research. Thanks, NVIDIA!`,
    },
    {
      date: "[2025/03]",
      tag: "Paper",
      html: `Our poster on Multi-Layer Digital Transportation Twin is accepted by <strong>IEEE MOST 2025</strong>. Congratulations to Jiahe Cao!`,
    },
    {
      date: "[2025/03]",
      tag: "Award",
      html: `Xiaomeng is awarded the prestigious <strong>Othmer Fellowship</strong> ($4000 per year, and up to three years) by the College of Engineering, UNL. Congratulations to Xiaomeng Li!`,
    },
    {
      date: "[2025/02]",
      tag: "Student",
      html: `Ming Zhao will join <strong>Nokia Bell Labs</strong> as a Research Intern this Summer (again) at Murray Hill, NJ. Congratulations to Ming Zhao!`,
    },
    {
      date: "[2025/02]",
      tag: "Other",
      html: `Call for Posters and Demos, <strong>IEEE MOST 2025</strong>, will be held in Newark, DE, this May!`,
    },
    {
      date: "[2025/02]",
      tag: "Grant",
      html: `Received three-year <strong>$289K</strong> NSF CSR project on Connected Autonomous Driving (Lead-PI), (NSF 2426481)!`,
    },
    {
      date: "[2025/02]",
      tag: "Paper",
      html: `Our paper on (<strong>inSlicing</strong>) Interpretable Learning-Assisted Network Slicing has been accepted by <strong>IEEE INFOCOM NG-OPERA 2025</strong>! Congratulations to Ming and Yuru!`,
    },
    {
      date: "[2025/02]",
      tag: "Grant",
      html: `Received two-year <strong>$173K</strong> Nebraska DoT project about cost-efficient rural wireless connectivity (Co-PI), with PI Chun-Hsing Ho, and the other Co-PI Kyungki Kim!`,
    },
    {
      date: "[2025/02]",
      tag: "Grant",
      html: `Received two-year <strong>$186K</strong> Nebraska DoT project about field C-V2X interoperability in NE highway (Co-PI), with PI Chun-Hsing Ho, and the other Co-PI Li Zhao!`,
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
