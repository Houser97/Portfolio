import { Experiment } from "./types";

export const experiments: Experiment[] = [
  {
    id: "shopping-cart-fullstack",

    title: "Enterprise-Grade E-Commerce Platform",
    subtitle:
      "Production-ready full-stack e-commerce system built with clean architecture, advanced MongoDB usage, and comprehensive automated testing",

    context: {
      projectType: "Personal Project",
      category: "Full-Stack E-Commerce Platform",
      year: "2023–2025",
      role: "Full-Stack Developer",
      scope:
        "System Architecture, Backend & Frontend Development, Automated Testing, Containerization",
    },

    stack: [
      "ASP.NET Core",
      "MongoDB (Aggregation Pipelines)",
      "React 18 + TypeScript",
      "Redux Toolkit",
      "Clean Architecture",
      "Repository Pattern",
      "JWT Authentication",
      "FluentValidation",
      "xUnit & Moq",
      "Docker & Docker Compose",
      "AutoMapper",
      "Cloudinary",
    ],

    background: [
      "This project started as a Node.js/Express application and was later migrated to ASP.NET Core as a deliberate exercise to master enterprise-grade .NET architecture and backend design principles.",
      "The goal was to build a realistic, production-ready e-commerce platform while focusing on clean separation of concerns, testability, and long-term maintainability rather than quick feature delivery.",
    ],

    results: [
      "Migrated a full production-style application from Node.js to ASP.NET Core, implementing Clean Architecture with strict separation of Domain, Application, Infrastructure, and API layers",
      "Designed a robust Repository Pattern and Service Helper abstraction to centralize error handling, logging, and validation across all service operations",
      "Implemented advanced MongoDB aggregation pipelines ($lookup, $group, $addFields) to compute ratings, reviews, and cart data efficiently",
      "Achieved 85%+ backend test coverage using xUnit and Moq, including custom builders and MongoDB-specific exception testing",
      "Containerized the full stack using Docker multi-stage builds, reducing final image size by ~60% and enabling reproducible deployments",
    ],

    technicalHighlights: {
      title: "Technical Highlights & Key Learnings",
      content: [
        "Applied Clean Architecture with strict dependency inversion: Domain defines contracts, Application orchestrates business rules, Infrastructure implements external services, and API acts as the delivery layer",
        "Designed scalable MongoDB repositories with reusable aggregation pipeline builders and proper indexing strategies for performance",
        "Implemented a Result<T> pattern to standardize error handling and avoid exception-driven business logic",
        "Built a comprehensive automated testing strategy using xUnit and Moq, including custom data builders and reusable mock helpers",
        "Implemented secure authentication and validation flows using JWT, BCrypt password hashing, FluentValidation, and advanced email normalization rules",
        "Containerized client and server using Docker multi-stage builds, separating build, test, and runtime concerns",
      ],
    },

    images: [
      "https://res.cloudinary.com/dluwqcce9/image/upload/v1768091800/Portfolio/Captura_de_pantalla_2026-01-10_a_la_s_6.15.40_p.m._fpphgk.webp",
      "https://res.cloudinary.com/dluwqcce9/image/upload/v1768091800/Portfolio/Captura_de_pantalla_2026-01-10_a_la_s_6.16.02_p.m._cbsdl6.webp",
      "https://res.cloudinary.com/dluwqcce9/image/upload/v1768091800/Portfolio/Captura_de_pantalla_2026-01-10_a_la_s_6.16.39_p.m._wnc944.webp",
      "https://res.cloudinary.com/dluwqcce9/image/upload/v1768091800/Portfolio/Captura_de_pantalla_2026-01-10_a_la_s_6.17.43_p.m._iwzj84.webp",
      "https://res.cloudinary.com/dluwqcce9/image/upload/v1768091801/Portfolio/Captura_de_pantalla_2026-01-10_a_la_s_6.18.13_p.m._pndlz5.webp",
      "https://res.cloudinary.com/dluwqcce9/image/upload/v1768091801/Portfolio/Captura_de_pantalla_2026-01-10_a_la_s_6.21.49_p.m._lh4wpe.webp",
      "https://res.cloudinary.com/dluwqcce9/image/upload/v1768091801/Portfolio/Captura_de_pantalla_2026-01-10_a_la_s_6.22.13_p.m._ka2eyv.webp",
      "https://res.cloudinary.com/dluwqcce9/image/upload/v1768091801/Portfolio/Captura_de_pantalla_2026-01-10_a_la_s_6.22.48_p.m._gs2ki3.webp",
    ],

    links: {
      github: "https://github.com/Houser97/Shopping-cart",
      live: "https://shopping-cart-a2-2.onrender.com",
    },

    tags: [
      "ASP.NET Core",
      "MongoDB",
      "Clean Architecture",
      "Testing",
      "Docker",
      "Full-Stack",
    ],
  },

  {
    id: "chat-application-signalr",

    title: "Real-Time Chat Platform with SignalR",
    subtitle:
      "Scalable real-time messaging system with WebSocket communication and MongoDB persistence",

    context: {
      projectType: "Personal Project",
      category: "Real-Time Communication Platform",
      year: "2024–2025",
      role: "Full-Stack Developer",
      scope:
        "Real-Time Architecture, Backend Development, Frontend Integration",
    },

    stack: [
      "ASP.NET Core SignalR",
      "MongoDB",
      "React + TypeScript",
      "WebSockets",
      "JWT Authentication",
      "Clean Architecture",
      "Repository Pattern",
      "Docker",
    ],

    background: [
      "This project was built to explore real-time system design using ASP.NET Core SignalR, focusing on connection lifecycle management, scalability considerations, and data consistency.",
      "The platform supports chat rooms, real-time message delivery, message persistence, and delivery status tracking with proper authentication.",
    ],

    results: [
      "Implemented a real-time chat system using SignalR with group-based communication and connection lifecycle management",
      "Designed MongoDB persistence for chats and messages with proper indexing for efficient history retrieval",
      "Built real-time message broadcasting with delivery status, seen indicators, and synchronized client updates",
      "Integrated JWT authentication with SignalR to secure WebSocket connections",
      "Developed a React frontend with optimistic UI updates and automatic reconnection handling",
    ],

    technicalHighlights: {
      title: "Technical Highlights & Key Learnings",
      content: [
        "Mastered SignalR Hub architecture, including connection lifecycle, group-based messaging, and authenticated WebSocket communication",
        "Designed real-time message payloads with proper delivery metadata and ordering guarantees",
        "Implemented MongoDB aggregation pipelines to retrieve chat history and unseen message counts efficiently",
        "Handled real-time state challenges such as user presence, message seen status, and eventual consistency",
        "Built resilient WebSocket handling with reconnection strategies and graceful error recovery",
        "Integrated SignalR with React using custom hooks to manage connection state and real-time updates",
      ],
    },

    images: [
      "https://res.cloudinary.com/dluwqcce9/image/upload/v1768091799/Portfolio/Captura_de_pantalla_2026-01-10_a_la_s_6.10.05_p.m._qyy1vh.webp",
      "https://res.cloudinary.com/dluwqcce9/image/upload/v1768091799/Portfolio/Captura_de_pantalla_2026-01-10_a_la_s_6.09.34_p.m._yjmroq.webp",
      "https://res.cloudinary.com/dluwqcce9/image/upload/v1768091799/Portfolio/Captura_de_pantalla_2026-01-10_a_la_s_6.11.56_p.m._v5n8t1.webp",
      "https://res.cloudinary.com/dluwqcce9/image/upload/v1768091801/Portfolio/Captura_de_pantalla_2026-01-10_a_la_s_6.28.49_p.m._xom4x3.webp",
      "https://res.cloudinary.com/dluwqcce9/image/upload/v1768091799/Portfolio/Captura_de_pantalla_2026-01-10_a_la_s_6.09.34_p.m._yjmroq.webp",
      "https://res.cloudinary.com/dluwqcce9/image/upload/v1768091800/Portfolio/Captura_de_pantalla_2026-01-10_a_la_s_6.11.09_p.m._xnpdtf.webp",
      "https://res.cloudinary.com/dluwqcce9/image/upload/v1768091800/Portfolio/Captura_de_pantalla_2026-01-10_a_la_s_6.10.21_p.m._qi1tq1.webp",
    ],

    links: {
      github: "https://github.com/Houser97/In-Touch-IO",
      live: "https://in-touch-io-a2.onrender.com",
    },

    tags: [
      "SignalR",
      "Real-Time",
      "WebSockets",
      "MongoDB",
      "React",
      "Full-Stack",
    ],
  },
];
