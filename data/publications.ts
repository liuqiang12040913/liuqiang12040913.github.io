export type PublicationItem = {
  title: string;
  info: string;      // keep exactly as in old HTML (authors/venue/year line)
  year: number;
  isBestPaper?: boolean;
};

export type PublicationSection = {
  sectionTitle: string; // e.g., "Wireless Networks", "Edge Computing"
  items: PublicationItem[];
};

function yearFromInfo(info: string): number {
  // Expect year at end: ", 2025"
  const m = info.match(/(\d{4})\s*$/);
  return m ? Number(m[1]) : 0;
}


export const publications: PublicationSection[] = [
  {
    sectionTitle: "Wireless Networks",
    items: [
      {
        title:
          "InSlicing: Interpretable Learning-Assisted Network Slice Configuration in Open Radio Access Networks",
        info: " Ming Zhao, Yuru Zhang, Qiang Liu, Ahan Kak, Nakjung Choi, IEEE INFOCOM NG-OPERA, 2025",
        year: yearFromInfo(
          " Ming Zhao, Yuru Zhang, Qiang Liu, Ahan Kak, Nakjung Choi, IEEE INFOCOM NG-OPERA, 2025"
        ),
      },
      {
        title:
          "AdaSlicing: Adaptive Online Network Slicing under Continual Network Dynamics in Open Radio Access Networks",
        info: " Ming Zhao, Yuru Zhang, Qiang Liu, Ahan Kak, Nakjung Choi, IEEE INFOCOM 2025-IEEE Conference on Computer Communications, 2025",
        year: yearFromInfo(
          " Ming Zhao, Yuru Zhang, Qiang Liu, Ahan Kak, Nakjung Choi, IEEE INFOCOM 2025-IEEE Conference on Computer Communications, 2025"
        ),
      },
      {
        title:
          "Information Bottleneck-Based Domain Adaptation for Hybrid Deep Learning in Scalable Network Slicing",
        info: "Tianlun Hu, Qi Liao, Qiang Liu, Georg Carle, IEEE Transactions on Machine Learning in Communications and Networking, 2024",
        year: yearFromInfo(
          "Tianlun Hu, Qi Liao, Qiang Liu, Georg Carle, IEEE Transactions on Machine Learning in Communications and Networking, 2024"
        ),
      },
      {
        title: "Learn to Augment Network Simulators Towards Digital Network Twins",
        info: "Yuru Zhang, Ming Zhao, Qiang Liu, IEEE INFOCOM 2024-IEEE Conference on Computer Communications Workshops (INFOCOM WKSHPS), 2024",
        year: yearFromInfo(
          "Yuru Zhang, Ming Zhao, Qiang Liu, IEEE INFOCOM 2024-IEEE Conference on Computer Communications Workshops (INFOCOM WKSHPS), 2024"
        ),
      },
      {
        title: "RoNet: Toward Robust Neural Assisted Mobile Network Configuration",
        info: "Yuru Zhang, Yongjie Xue, Qiang Liu, Nakjung Choi, Tao Han, IEEE International Conference on Communications (ICC), 2023",
        year: yearFromInfo(
          "Yuru Zhang, Yongjie Xue, Qiang Liu, Nakjung Choi, Tao Han, IEEE International Conference on Communications (ICC), 2023"
        ),
      },
      {
        title:
          "Inter-Cell Network Slicing with Transfer Learning Empowered Multi-Agent Deep Reinforcement Learning",
        info: "Tianlun Hu, Qi Liao, Qiang Liu, Georg Carle, IEEE Open Journal of the Communications Society, 2023",
        year: yearFromInfo(
          "Tianlun Hu, Qi Liao, Qiang Liu, Georg Carle, IEEE Open Journal of the Communications Society, 2023"
        ),
      },
      {
        title:
          "Deep Reinforcement Learning for End-to-End Network Slicing: Challenges and Solutions",
        info: "Qiang Liu, Nakjung Choi, Tao Han, IEEE Network, 2022",
        year: yearFromInfo("Qiang Liu, Nakjung Choi, Tao Han, IEEE Network, 2022"),
      },
      {
        title: "Atlas: Automate Online Service Configuration in Network Slicing",
        info: "Qiang Liu, Nakjung Choi, Tao Han, Proceedings of the 18th International Conference on emerging Networking EXperiments and Technologies, 2022",
        year: yearFromInfo(
          "Qiang Liu, Nakjung Choi, Tao Han, Proceedings of the 18th International Conference on emerging Networking EXperiments and Technologies, 2022"
        ),
      },
      {
        title:
          "Inter-cell Slicing Resource Partitioning via Coordinated Multi-Agent Deep Reinforcement Learning",
        info: "Tianlun Hu, Qi Liao, Qiang Liu, Dan Wellington, Georg Carle, ICC 2022-IEEE International Conference on Communications, 2022",
        year: yearFromInfo(
          "Tianlun Hu, Qi Liao, Qiang Liu, Dan Wellington, Georg Carle, ICC 2022-IEEE International Conference on Communications, 2022"
        ),
        isBestPaper: true,
      },
      {
        title: "OnSlicing: Online End-to-End Network Slicing with Reinforcement Learning",
        info: "Qiang Liu, Nakjung Choi, Tao Han, Proceedings of the 17th International Conference on emerging Networking EXperiments and Technologies, 2021",
        year: yearFromInfo(
          "Qiang Liu, Nakjung Choi, Tao Han, Proceedings of the 17th International Conference on emerging Networking EXperiments and Technologies, 2021"
        ),
      },
      {
        title:
          "Constraint-Aware Deep Reinforcement Learning for End-to-End Resource Orchestration in Mobile Networks",
        info: "Qiang Liu, Nakjung Choi, Tao Han, 2021 IEEE 29th International Conference on Network Protocols (ICNP), 2021",
        year: yearFromInfo(
          "Qiang Liu, Nakjung Choi, Tao Han, 2021 IEEE 29th International Conference on Network Protocols (ICNP), 2021"
        ),
      },
      {
        title:
          "EdgeSlice: Slicing Wireless Edge Computing Network with Decentralized Deep Reinforcement Learning",
        info: "Qiang Liu, Tao Han, Ephraim Moges, 2020 IEEE 40th International Conference on Distributed Computing Systems (ICDCS), 2020",
        year: yearFromInfo(
          "Qiang Liu, Tao Han, Ephraim Moges, 2020 IEEE 40th International Conference on Distributed Computing Systems (ICDCS), 2020"
        ),
      },
      {
        title:
          "DIRECT: Distributed Cross-Domain Resource Orchestration in Cellular Edge Computing",
        info: "Qiang Liu, Tao Han, Proceedings of the Twentieth ACM International Symposium on Mobile Ad Hoc Networking and Computing, 2019",
        year: yearFromInfo(
          "Qiang Liu, Tao Han, Proceedings of the Twentieth ACM International Symposium on Mobile Ad Hoc Networking and Computing, 2019"
        ),
      },
      {
        title:
          "VirtualEdge: Multi-Domain Resource Orchestration and Virtualization in Cellular Edge Computing",
        info: "Qiang Liu, Tao Han, 2019 IEEE 39th International Conference on Distributed Computing Systems (ICDCS), 2019",
        year: yearFromInfo(
          "Qiang Liu, Tao Han, 2019 IEEE 39th International Conference on Distributed Computing Systems (ICDCS), 2019"
        ),
      },
    ],
  },
  {
    sectionTitle: "Edge Computing",
    items: [
      {
        title: "LeFi: Learn to Incentivize Federated Learning in Automotive Edge Computing",
        info: "Ming Zhao, Yuru Zhang, Qiang Liu, Tao Han, IEEE Global Communications Conference (GLOBECOM), 2024",
        year: yearFromInfo(
          "Ming Zhao, Yuru Zhang, Qiang Liu, Tao Han, IEEE Global Communications Conference (GLOBECOM), 2024"
        ),
      },
      {
        title: "CAVE: Crowdsourcing Passing-By Vehicles for Reliable In-Vehicle Edge Computing",
        info: "Jiahe Cao, Qiang Liu, Dawei Chen, Kyungtae Han, IEEE Global Communications Conference (GLOBECOM), 2024",
        year: yearFromInfo(
          "Jiahe Cao, Qiang Liu, Dawei Chen, Kyungtae Han, IEEE Global Communications Conference (GLOBECOM), 2024"
        ),
      },
      {
        title: "CrowdSourcing Live High Definition Map via Collaborative Computation in Automotive Edge Computing",
        info: "Yuru Zhang, Qiang Liu, Haoxin Wang, Dawei Chen, Kyungtae Han, IEEE Transactions on Vehicular Technology, 2024",
        year: yearFromInfo(
          "Yuru Zhang, Qiang Liu, Haoxin Wang, Dawei Chen, Kyungtae Han, IEEE Transactions on Vehicular Technology, 2024"
        ),
      },
      {
        title: "AdaMap: High-Scalable Real-Time Cooperative Perception at the Edge",
        info: "Qiang Liu, Yongjie Xue, Yuru Zhang, Dawei Chen, Kyungtae Han, 2023 IEEE/ACM Symposium on Edge Computing (SEC), 2023",
        year: yearFromInfo(
          "Qiang Liu, Yongjie Xue, Yuru Zhang, Dawei Chen, Kyungtae Han, 2023 IEEE/ACM Symposium on Edge Computing (SEC), 2023"
        ),
      },
      {
        title: "CoMap: Proactive Provision for Crowdsourcing Map in Automotive Edge Computing",
        info: "Yongjie Xue, Yuru Zhang, Qiang Liu, Dawei Chen, Kyungtae Han, IEEE International Conference on Communications (ICC), 2023",
        year: yearFromInfo(
          "Yongjie Xue, Yuru Zhang, Qiang Liu, Dawei Chen, Kyungtae Han, IEEE International Conference on Communications (ICC), 2023"
        ),
      },
      {
        title: "MetaMobility: Connecting Future Mobility With the Metaverse",
        info: "Haoxin Wang, Ziran Wang, Dawei Chen, Qiang Liu, Hongyu Ke, KyungtaeKT Han, IEEE Vehicular Technology Magazine, 2023",
        year: yearFromInfo(
          "Haoxin Wang, Ziran Wang, Dawei Chen, Qiang Liu, Hongyu Ke, KyungtaeKT Han, IEEE Vehicular Technology Magazine, 2023"
        ),
      },
      {
        title: "Real-Time Dynamic Map with Crowdsourcing Vehicles in Edge Computing",
        info: "Qiang Liu, Tao Han, JiangLinda Xie, BaekGyu Kim, IEEE Transactions on Intelligent Vehicles, 2022",
        year: yearFromInfo(
          "Qiang Liu, Tao Han, JiangLinda Xie, BaekGyu Kim, IEEE Transactions on Intelligent Vehicles, 2022"
        ),
      },
      {
        title: "EdgeMap: CrowdSourcing High Definition Map in Automotive Edge Computing",
        info: "Qiang Liu, Yuru Zhang, Haoxin Wang, ICC 2022-IEEE International Conference on Communications, 2022",
        year: yearFromInfo(
          "Qiang Liu, Yuru Zhang, Haoxin Wang, ICC 2022-IEEE International Conference on Communications, 2022"
        ),
      },
      {
        title: "LiveMap: Real-Time Dynamic Map in Automotive Edge Computing",
        info: "Qiang Liu, Tao Han, JiangLinda Xie, BaekGyu Kim, IEEE INFOCOM 2021-IEEE Conference on Computer Communications, 2021",
        year: yearFromInfo(
          "Qiang Liu, Tao Han, JiangLinda Xie, BaekGyu Kim, IEEE INFOCOM 2021-IEEE Conference on Computer Communications, 2021"
        ),
      },
      {
        title:
          "Joint Computation and Communication Resource Allocation for Energy-Efficient Mobile Edge Networks",
        info: "Johnson Opadere, Qiang Liu, Ning Zhang, Tao Han, ICC 2019-2019 IEEE International Conference on Communications (ICC), 2019",
        year: yearFromInfo(
          "Johnson Opadere, Qiang Liu, Ning Zhang, Tao Han, ICC 2019-2019 IEEE International Conference on Communications (ICC), 2019"
        ),
        isBestPaper: true,
      },
      {
        title: "An Edge Network Orchestrator for Mobile Augmented Reality",
        info: "Qiang Liu, Siqi Huang, Johnson Opadere, Tao Han, IEEE INFOCOM 2018-IEEE Conference on Computer Communications, 2018",
        year: yearFromInfo(
          "Qiang Liu, Siqi Huang, Johnson Opadere, Tao Han, IEEE INFOCOM 2018-IEEE Conference on Computer Communications, 2018"
        ),
      },
      {
        title: "Dare: Dynamic Adaptive Mobile Augmented Reality with Edge Computing",
        info: "Qiang Liu, Tao Han, 2018 IEEE 26th International Conference on Network Protocols (ICNP), 2018",
        year: yearFromInfo(
          "Qiang Liu, Tao Han, 2018 IEEE 26th International Conference on Network Protocols (ICNP), 2018"
        ),
      },
    ],
  },
];
