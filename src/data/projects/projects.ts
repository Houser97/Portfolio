import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "coca-cola-scada",
    title: "Coca-Cola SCADA – Enterprise Industrial UI",
    subtitle:
      "Enterprise industrial UI built with a component-based, React-inspired architecture",

    context: {
      company: "Coca-Cola FEMSA",
      location: "Liberia, Costa Rica",
      year: "2025",
      role: "Frontend & UX",
      scope: "Enterprise SCADA – Industrial Automation",
    },

    stack: [
      "React (conceptual / component architecture)",
      "CSS",
      "Component-Based UI Design",
      "Ignition Perspective",
      "State-Driven Interfaces",
      "Industrial UI/UX (ISA Standards)",
      "SCADA Systems",
    ],

    background: [
      "This project focused on modernizing a legacy HMI used to control a wastewater treatment process (PTAR) in a Coca-Cola plant in Costa Rica. The existing system lacked visual clarity, usability, and long-term scalability.",
      "The objective was to migrate the solution to Ignition Perspective, delivering a modern, web-based SCADA interface aligned with ISA industrial visualization standards while improving operator experience and system maintainability.",
    ],

    results: [
      "Unified two independent HMIs into a single centralized SCADA application.",
      "Delivered a modern, ISA-compliant UI with both light and dark modes, significantly improving operator comfort.",
      "Received overwhelmingly positive feedback from operators and stakeholders.",
      "Enabled continued collaboration and new SCADA projects planned for 2026.",
    ],

    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    ],

    review: {
      author: "Coca-Cola Project Stakeholder",
      role: "Engineering & Automation Team",
      content: [
        "This is exactly what we’ve always wanted. The new SCADA interface is clear, modern, and significantly easier for operators to use during daily operations.",
        "Operators highlighted the dark mode as a major improvement, especially during long shifts, and described the system as intuitive and easy to navigate from day one.",
        "The development process itself brought unexpected value: by rebuilding the system component by component, the team gained a much deeper understanding of the plant signals and control logic, which had previously been treated as a black box in the legacy SCADA.",
        "The project also helped identify obsolete elements and unused logic accumulated over the years, allowing the system to be cleaned up, updated, and better aligned with current operational needs.",
      ],
    },

    tags: [
      "React",
      "Frontend",
      "UI/UX",
      "Ignition Perspective",
      "SCADA",
      "Industrial Automation",
    ],
  },

  {
    id: "billet-rhomboidity",

    title: "Billet Rhomboidity Detection – Vision Data Platform",
    subtitle:
      "Vision–driven quality detection platform with dashboards and reporting",

    context: {
      company: "Gerdau",
      location: "Sahagún & Tultitlán, Mexico",
      year: "2024",
      role: "Lead Industrial UI & Data Application Developer (Dashboards, Reporting, Architecture)",
      scope:
        "Design and development of the industrial data application UI, dashboards, reporting system, and data persistence layer",
    },

    stack: [
      "React (conceptual / component-based architecture)",
      "Ignition Perspective",
      "State-Driven UI Design",
      "Industrial Computer Vision Integration",
      "PLC Data Integration",
      "Modbus Communication",
      "SQL Server",
      "Real-Time Dashboards",
      "Excel Report Generation",
    ],

    background: [
      "This project was developed for Gerdau to detect billet rhomboidity in a steel mill environment, starting at the Sahagún plant. The solution combines industrial image capture with geometric analysis to determine billet quality.",
      "While a parallel system handled image processing and rhomboidity calculations, my responsibility focused on designing and implementing the industrial data application layer. Using Ignition Perspective and a React-inspired, component-based approach, I developed dashboards, reporting tools, and data management features that transformed raw measurements into actionable insights.",
      "The application receives calculated data via Modbus, stores it in SQL Server, and associates each billet record with its corresponding captured images, enabling full traceability and historical analysis.",
    ],

    results: [
      "Significantly improved transparency and understanding of billet quality metrics for operators and engineers.",
      "Served as the foundation for a standardized billet rhomboidity detection solution.",
      "Successfully adapted and deployed the application at Gerdau Tultitlán with minimal effort.",
      "The solution was presented during an industry event, where its design, usability, and technical approach attracted the attention of Ternium",
      "This exposure led to direct commercial and technical discussions with Ternium to evaluate the feasibility of implementing the solution in their production environment",
    ],

    images: [
      "https://images.unsplash.com/photo-1581091012184-5c8b021a93c5?w=800",
      "https://images.unsplash.com/photo-1581091215367-59ab6b43c9e7?w=800",
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800",
    ],

    review: {
      author: "Gerdau Project Stakeholders",
      role: "Quality, Automation & Operations Teams",
      content: [
        "The application was highlighted during FAT testing for its intuitive design and ease of use.",
        "Operators valued the real-time dashboards and the ability to generate and download Excel reports for deeper analysis.",
        "The system provided unprecedented visibility into billet quality, helping teams better understand the process and make informed decisions.",
        "The project also helped uncover obsolete or unused elements in the previous workflow, enabling system updates and long-term improvements.",
      ],
    },

    tags: [
      "Industrial Data Applications",
      "React Architecture",
      "Dashboards",
      "Reporting",
      "Industrial Vision",
      "Steel Industry",
      "Quality Control",
    ],
  },

  {
    id: "clarios-andon-system",

    title: "Clarios Andon System",
    subtitle:
      "A real-time incident management and escalation system with analytics-driven insights",

    context: {
      company: "Clarios",
      location: "Manufacturing Plant",
      year: "2024",
      role: "Frontend & Industrial Application Developer",
      scope:
        "Design and development of a real-time Andon system with automated escalation, notifications, analytics, and reporting",
    },

    stack: [
      "Ignition Perspective",
      "React (conceptual / component-based architecture)",
      "CSS (custom UI styling)",
      "State-Driven UI Design",
      "SQL Server",
      "Industrial Automation",
      "Event-Based Systems",
      "WhatsApp API Integration",
    ],

    background: [
      "This project focused on the development of a modern Andon system designed to improve incident response and operational transparency on the production floor.",
      "Operators trigger an Andon event via a physical button, initiating a downtime sequence that is automatically tracked, escalated, and communicated to the appropriate personnel based on elapsed time and incident state.",
    ],

    results: [
      "Built a multi-level escalation logic that automatically notifies supervisors, area managers, and plant leadership via WhatsApp based on configurable time thresholds.",
      "Created historical views of downtimes to support traceability and root cause analysis.",
      "Designed analytical charts displaying average call time, average response time, and average time between calls.",
      "Implemented reporting features that enable auditing and operational analysis.",
      "Received strong positive feedback from the client for usability, visual clarity, and overall system effectiveness.",
      "The success of this project opened the door to additional ongoing collaborations with Clarios, including the development of an OEE solution.",
    ],

    images: [
      "https://images.unsplash.com/photo-1581093588401-22d6d4d8c44f?w=800",
      "https://images.unsplash.com/photo-1581091012184-7c67b6c4d63c?w=800",
      "https://images.unsplash.com/photo-1581092334425-45b6f1c8b98b?w=800",
    ],

    review: {
      author: "Clarios Operations Team",
      role: "Manufacturing & Continuous Improvement",
      content: [
        "The Andon system significantly improved our visibility into production incidents.",
        "The escalation logic and WhatsApp notifications ensured that the right people were informed at the right time.",
        "The interface is intuitive, visually clear, and provides valuable insights through its reports.",
      ],
    },

    tags: [
      "Andon System",
      "React",
      "Industrial Applications",
      "Operational Analytics",
      "Real-Time Systems",
      "UI/UX",
      "SQL Server",
    ],
  },
];
