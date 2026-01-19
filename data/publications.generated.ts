export type PublicationItem = {
  title: string;
  authors: string;
  venue: string;   // FULL journal/conference name (no abbr)
  year: number;
  isBestPaper?: boolean;
};

export type PublicationSection = {
  sectionTitle: string;
  items: PublicationItem[];
};

export const publicationGroups: PublicationSection[] = [
  {
    "sectionTitle": "Conference Papers",
    "items": [
      {
        "title": "inRAN: Interpretable Online Bayesian Learning for Network Automation in Open Radio Access Networks",
        "authors": "Zhao, Ming and Zhang, Yuru and Liu, Qiang and Kak, Ahan and Choi, Nakjung",
        "venue": "IEEE Conference on Computer Communications (INFOCOM)",
        "year": 2026
      },
      {
        "title": "oneTwin: Online Digital Network Twin via Neural Radio Radiance Field",
        "authors": "Zhang, Yuru and Zhao, Ming and Liu, Qiang and Choi, Nakjung",
        "venue": "IEEE Conference on Computer Communications (INFOCOM)",
        "year": 2026
      },
      {
        "title": "AdaSlicing: Adaptive Online Network Slicing Under Continual Network Dynamics in Open Radio Access Networks",
        "authors": "Zhao, Ming and Zhang, Yuru and Liu, Qiang and Kak, Ahan and Choi, Nakjung",
        "venue": "IEEE Conference on Computer Communications (INFOCOM)",
        "year": 2025
      },
      {
        "title": "InSlicing: Interpretable Learning-Assisted Network Slice Configuration in Open Radio Access Networks",
        "authors": "Zhao, Ming and Zhang, Yuru and Liu, Qiang and Kak, Ahan and Choi, Nakjung",
        "venue": "IEEE Conference on Computer Communications Workshops (INFOCOM WKSHPS)",
        "year": 2025
      },
      {
        "title": "CAVE: Crowdsourcing Passing-By Vehicles for Reliable In-Vehicle Edge Computing",
        "authors": "Cao, Jiahe and Liu, Qiang and Chen, Dawei and Han, Kyungtae",
        "venue": "IEEE Global Communications Conference (GLOBECOM)",
        "year": 2024
      },
      {
        "title": "Learn to Augment Network Simulators Towards Digital Network Twins",
        "authors": "Zhang, Yuru and Zhao, Ming and Liu, Qiang and Choi, Nakjung",
        "venue": "IEEE Conference on Computer Communications Workshops (INFOCOM WKSHPS)",
        "year": 2024
      },
      {
        "title": "LeFi: Learn to Incentivize Federated Learning in Automotive Edge Computing",
        "authors": "Zhao, Ming and Zhang, Yuru and Liu, Qiang and Han, Tao",
        "venue": "IEEE Global Communications Conference (GLOBECOM)",
        "year": 2024
      },
      {
        "title": "AdaMap: High-Scalable Real-Time Cooperative Perception at the Edge",
        "authors": "Liu, Qiang and Xue, Yongjie and Zhang, Yuru and Chen, Dawei and Han, Kyungtae",
        "venue": "IEEE/ACM Symposium on Edge Computing (SEC)",
        "year": 2023
      },
      {
        "title": "CoMap: Proactive Provision for Crowdsourcing Map in Automotive Edge Computing",
        "authors": "Xue, Yongjie and Zhang, Yuru and Liu, Qiang and Chen, Dawei and Han, Kyungtae",
        "venue": "IEEE International Conference on Communications (ICC)",
        "year": 2023
      },
      {
        "title": "Fast and Scalable Network Slicing by Integrating Deep Learning with Lagrangian Methods",
        "authors": "Hu, Tianlun and Liao, Qi and Liu, Qiang and Massaro, Antonio and Carle, Georg",
        "venue": "IEEE Global Communications Conference (GLOBECOM)",
        "year": 2023
      },
      {
        "title": "RoNet: Toward Robust Neural Assisted Mobile Network Configuration",
        "authors": "Zhang, Yuru and Xue, Yongjie and Liu, Qiang and Choi, Nakjung and Han, Tao",
        "venue": "IEEE International Conference on Communications (ICC)",
        "year": 2023
      },
      {
        "title": "Atlas: Automate Online Service Configuration in Network Slicing",
        "authors": "Liu, Qiang and Choi, Nakjung and Han, Tao",
        "venue": "Proceedings of the 18th International Conference on emerging Networking EXperiments and Technologies (CoNEXT)",
        "year": 2022
      },
      {
        "title": "EdgeMap: CrowdSourcing High Definition Map in Automotive Edge Computing",
        "authors": "Liu, Qiang and Zhang, Yuru and Wang, Haoxin",
        "venue": "IEEE International Conference on Communications (ICC)",
        "year": 2022
      },
      {
        "title": "Inter-cell Slicing Resource Partitioning via Coordinated Multi-Agent Deep Reinforcement Learning",
        "authors": "Hu, Tianlun and Liao, Qi and Liu, Qiang and Wellington, Dan and Carle, Georg",
        "venue": "IEEE International Conference on Communications (ICC)",
        "year": 2022
      },
      {
        "title": "Network Slicing via Transfer Learning aided Distributed Deep Reinforcement Learning",
        "authors": "Hu, Tianlun and Liao, Qi and Liu, Qiang and Carle, Georg",
        "venue": "IEEE Global Communications Conference (GLOBECOM)",
        "year": 2022
      },
      {
        "title": "Constraint-Aware Deep Reinforcement Learning for End-to-End Resource Orchestration in Mobile Networks",
        "authors": "Liu, Qiang and Choi, Nakjung and Han, Tao",
        "venue": "IEEE 29th International Conference on Network Protocols (ICNP)",
        "year": 2021
      },
      {
        "title": "LiveMap: Real-Time Dynamic Map in Automotive Edge Computing",
        "authors": "Liu, Qiang and Han, Tao and Xie, Jiang Linda and Kim, BaekGyu",
        "venue": "IEEE Conference on Computer Communications (INFOCOM)",
        "year": 2021
      },
      {
        "title": "OnSlicing: Online End-to-End Network Slicing with Reinforcement Learning",
        "authors": "Liu, Qiang and Choi, Nakjung and Han, Tao",
        "venue": "Proceedings of the 17th International Conference on emerging Networking EXperiments and Technologies (CoNEXT)",
        "year": 2021
      }
    ]
  },
  {
    "sectionTitle": "Journal Articles",
    "items": [
      {
        "title": "Crowdsourcing Live High Definition Map via Collaborative Computation in Automotive Edge Computing",
        "authors": "Zhang, Yuru and Liu, Qiang and Wang, Haoxin and Chen, Dawei and Han, Kyungtae",
        "venue": "IEEE Transactions on Vehicular Technology",
        "year": 2024
      },
      {
        "title": "Information Bottleneck-Based Domain Adaptation for Hybrid Deep Learning in Scalable Network Slicing",
        "authors": "Hu, Tianlun and Liao, Qi and Liu, Qiang and Carle, Georg",
        "venue": "IEEE Transactions on Machine Learning in Communications and Networking",
        "year": 2024
      },
      {
        "title": "Inter-Cell Network Slicing with Transfer Learning Empowered Multi-Agent Deep Reinforcement Learning",
        "authors": "Hu, Tianlun and Liao, Qi and Liu, Qiang and Carle, Georg",
        "venue": "IEEE Open Journal of the Communications Society",
        "year": 2023
      },
      {
        "title": "MetaMobility: Connecting Future Mobility With the Metaverse",
        "authors": "Wang, Haoxin and Wang, Ziran and Chen, Dawei and Liu, Qiang and Ke, Hongyu and Han, Kyungtae KT",
        "venue": "IEEE Vehicular Technology Magazine",
        "year": 2023
      },
      {
        "title": "Deep Reinforcement Learning for End-to-End Network Slicing: Challenges and Solutions",
        "authors": "Liu, Qiang and Choi, Nakjung and Han, Tao",
        "venue": "IEEE Network Magazine",
        "year": 2022
      },
      {
        "title": "Real-Time Dynamic Map with Crowdsourcing Vehicles in Edge Computing",
        "authors": "Liu, Qiang and Han, Tao and Xie, Jiang Linda and Kim, BaekGyu",
        "venue": "IEEE Transactions on Intelligent Vehicles",
        "year": 2022
      }
    ]
  }
];
