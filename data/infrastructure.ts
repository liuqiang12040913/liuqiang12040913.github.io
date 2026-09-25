// data/infrastructure.ts
//
// Content for the /infrastructure page. Edit text and image lists here;
// the page itself (app/infrastructure/page.tsx) only renders this data.
//
// Images live in public/assets/infras/ and are referenced as
// "/assets/infras/<file>". Add a new photo by dropping the file in that
// folder and adding an { src, alt, caption } entry below.

export type InfraImage = {
  src: string;       // e.g. "/assets/infras/hippo.jpeg"
  alt: string;       // short description for accessibility
  caption?: string;  // shown under the photo (optional)
};

export type InfraIcon = "cots" | "sdr" | "vehicle" | "robot";

export type InfraSection = {
  id: string;                 // used for the anchor link (#id)
  icon: InfraIcon;            // which icon to show next to the title
  title: string;
  subtitle?: string;          // small line under the title
  paragraphs: string[];       // one string per paragraph
  images: InfraImage[];       // empty array -> "photos coming soon" placeholder
  imagesNote?: string;        // optional note shown when images is empty
};

export const infrastructure: InfraSection[] = [
  {
    id: "husker-net-cots",
    icon: "cots",
    title: "Husker-Net COTS Track",
    subtitle: "Live commercial 5G network across campus, farm, and mobile sites",
    paragraphs: [
      "Husker-Net is a multi-campus private 5G network at the University of Nebraska–Lincoln, supported by the NSF Campus Cyberinfrastructure (CC*) program.",
      "The COTS track includes three fixed sites: one on the City campus, one on the East campus, and one at the UNL Spidercam field phenotyping facility. The campus sites each have three sectors with a commercial base station (20 W TX, CBRS band), and the COTS track aims to provide hundreds of Mbps downlink and uplink throughput at 24/7. The farm site serves a one-acre field with an automated cable-suspended carrier system that positions multiple cameras and sensors (RGB, near-infrared, lidar, and multispectral) over individual plots for plant imaging.",
      "A portable mobile site extends coverage on demand, especially in rural areas. It uses a small-cell radio (27 dBm max TX) with an omni-directional antenna, powered by an Anker 10,000 mAh power bank and a 100 W peak solar panel, and backhauled to the Internet via Starlink.",
      "The core network is implemented with open-source 5G core (5GC) projects (e.g., Open5GS) on a Dell PowerEdge R650 rack server. Husker-Net has multiple 5G smartphones, Quectel RM520N-GL 5G modems, and CPEs as mobile users.",
    ],
    images: [
      {
        src: "/assets/infras/cots_city_campus_1.jpeg",
        alt: "COTS base station on the City campus",
        caption: "City campus site",
      },
      {
        src: "/assets/infras/cots_city_campus_2.jpeg",
        alt: "COTS base station on the City campus",
        caption: "City campus site",
      },
      {
        src: "/assets/infras/cots_city_campus_3.jpeg",
        alt: "COTS base station on the City campus",
        caption: "City campus site",
      },
      {
        src: "/assets/infras/cots_east_campus_1.jpeg",
        alt: "COTS base station on the East campus",
        caption: "East campus site",
      },
      {
        src: "/assets/infras/cots_east_campus_2.jpeg",
        alt: "COTS base station on the East campus",
        caption: "East campus site",
      },
      {
        src: "/assets/infras/cots_mobile_site.jpg",
        alt: "Portable COTS mobile site with solar panel and Starlink",
        caption: "Mobile site: 27 dBm radio, solar panel, power bank, and Starlink backhaul",
      },
      {
        src: "/assets/infras/cots_farm_1.jpeg",
        alt: "COTS farm site at the UNL Spidercam field",
        caption: "Farm site at the UNL Spidercam field",
      },
      {
        src: "/assets/infras/cots_farm_2.jpeg",
        alt: "COTS farm site at the UNL Spidercam field",
        caption: "Farm site at the UNL Spidercam field",
      },
      {
        src: "/assets/infras/cots_farm_3.jpeg",
        alt: "COTS farm site at the UNL Spidercam field",
        caption: "Farm site at the UNL Spidercam field",
      },
    ],
  },
  {
    id: "husker-net-sdr",
    icon: "sdr",
    title: "Husker-Net SDR Track",
    subtitle: "Software-defined radio sites, outdoor and indoor",
    paragraphs: [
      "Husker-Net is a multi-campus private 5G network at the University of Nebraska–Lincoln, supported by the NSF Campus Cyberinfrastructure (CC*) program.",
      "The SDR track includes three sites with SDR boards (e.g., Ettus X300 with UBX daughterboards) and omni-directional antennas (CommScope UU-360S-F) to enable a wide range of wireless communication and networking experiments between 1.2 GHz and 6 GHz in real-world fields. A power amplifier with a maximum 46 dB gain and 20 W output is connected to each SDR board to amplify transmission power.",
      "Each SDR site hosts a Dell PowerEdge R650 rack server running open-source RAN projects such as OpenAirInterface RAN and srsRAN.",
      "The indoor testbed uses Ettus B210s and workstations and NVIDIA DGX Spark, with the capability of network slicing experiments under the emerging architecture of O-RAN and AI-RAN.",
    ],
    images: [
      {
        src: "/assets/infras/sdr_oldfather_antenna.jpg",
        alt: "SDR antenna on Oldfather Hall",
        caption: "Oldfather Hall: outdoor antenna",
      },
      {
        src: "/assets/infras/sdr_oldfather_server.jpeg",
        alt: "SDR and server rack at Oldfather Hall",
        caption: "Oldfather Hall: SDR and rack server",
      },
      {
        src: "/assets/infras/sdr_nebraskahall_antenna.jpeg",
        alt: "SDR antenna on Nebraska Hall",
        caption: "Nebraska Hall: outdoor antenna",
      },
      {
        src: "/assets/infras/sdr_nebraskahall_server.jpeg",
        alt: "SDR and server rack at Nebraska Hall",
        caption: "Nebraska Hall: SDR and workstation",
      },
      {
        src: "/assets/infras/slicing_testbed.jpg",
        alt: "Indoor network slicing testbed",
        caption: "Indoor network slicing testbed",
      },
    ],
  },
  {
    id: "hippo",
    icon: "vehicle",
    title: "Autonomous Driving Platform",
    subtitle: "Four-wheel differential drive robotic vehicle",
    paragraphs: [
      "Hippo is a compact four-wheel differential drive robotic vehicle for various autonomous driving experiments, with an onboard computer with an Intel i7 CPU and an NVIDIA GTX 1650 GPU.",
      "It also includes a wide range of sensors and actuators, such as RoboSense 32-thread LiDAR, RTK GPS kit, and high-accuracy IMU.",
      "In addition, we have a high-end Lenovo P8 workstation with an AMD Threadripper 7955WX CPU, 128 GB RAM, and two NVIDIA RTX PRO 6000 (96 GB) GPUs, which can be used for training and testing advanced AI models.",
    ],
    images: [
      {
        src: "/assets/infras/hippo.jpeg",
        alt: "Hippo autonomous driving robotic vehicle",
        caption: "Hippo",
      },
      {
        src: "/assets/infras/lenovo_p8_workstation.jpg",
        alt: "Lenovo P8 workstation with two NVIDIA RTX PRO 6000 GPUs",
        caption: "Lenovo P8 workstation",
      },
    ],
  },
  {
    id: "agilex-piper",
    icon: "robot",
    title: "Embodied AI Platform: AgileX Piper",
    subtitle: "Dual robotic arms with wrist and central cameras",
    paragraphs: [
      "The embodied AI platform consists of two AgileX PiPER robotic arms. Each arm carries a wrist-mounted camera, and a central camera provides a shared view of the workspace, enabling bimanual manipulation and vision-based learning experiments.",
      "PiPER is a lightweight 6-DOF manipulator with up to 1.5 kg payload, driven by integrated joint motors with built-in path planning.",
      "The workstation has AMD Ryzen 9700X with 64 GB RAM, and an NVIDIA RTX 4090 GPU, with support for vision-language-action frameworks (e.g., OpenVLA).",
    ],
    images: [],
    imagesNote: "Photos coming soon.",
  },
];
