// Toda la información editable del portafolio vive aquí.
// Cada texto visible tiene versión en español (es) y en inglés (en).

export type L = { es: string; en: string };

export const site = {
  name: "Luis Mercado",
  fullName: "Luis David Mercado Malo",
  firstName: "Luis",
  location: "Cartagena, Colombia",
  email: "luisda3329@hotmail.com",
  github: "https://github.com/luismercado29",
  githubUser: "luismercado29",
  // Pega aquí tu URL de LinkedIn para que aparezca la tarjeta de contacto.
  linkedin: "",
  // Pon tu foto en /public (ej. "/foto.jpg") para reemplazar el avatar pixel-art.
  photo: "/foto.jpg",
  cv: "/CV_Luis_Mercado.pdf",
  role: {
    es: "Ingeniero de Sistemas · Full-Stack Developer",
    en: "Systems Engineer · Full-Stack Developer",
  },
  intro: {
    es: "Construyo aplicaciones web modernas con Next.js, React y TypeScript sobre una base sólida en Java/Spring Boot. Me gusta diseñar APIs, dashboards y módulos de negocio que resuelven problemas reales: ERPs multiempresa, facturación electrónica DIAN e inteligencia artificial.",
    en: "I build modern web applications with Next.js, React and TypeScript on top of a solid Java/Spring Boot foundation. I enjoy designing APIs, dashboards and business modules that solve real problems: multi-company ERPs, DIAN e-invoicing and artificial intelligence.",
  },
};

export type Project = {
  slug: string;
  file: string;
  title: L;
  category: "empresarial" | "web" | "ia";
  status: L;
  cover: string;
  summary: L;
  description: L;
  role: L;
  features: { es: string[]; en: string[] };
  stack: string[];
  demo?: string;
  repo?: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "amaxoft",
    file: "Amaxoft_ERP.exe",
    title: { es: "AMAXOFT · ERP SaaS multiempresa", en: "AMAXOFT · Multi-company SaaS ERP" },
    category: "empresarial",
    status: { es: "En producción", en: "In production" },
    cover: "/projects/amaxoft.jpg",
    summary: {
      es: "Plataforma ERP en la nube con POS, facturación, contabilidad y dashboards para empresas colombianas.",
      en: "Cloud ERP platform with POS, invoicing, accounting and dashboards for Colombian companies.",
    },
    description: {
      es: "AMAXOFT IT Solutions es una empresa con más de 30 años desarrollando software contable, tributario y administrativo. Como Programador Full Stack ERP construyo los módulos de su plataforma SaaS: desde la interfaz que usan administradores y gerentes hasta las APIs y la lógica de negocio que conecta ventas, pagos, facturación y contabilidad en un entorno multiempresa.",
      en: "AMAXOFT IT Solutions is a company with 30+ years building accounting, tax and administrative software. As a Full Stack ERP Developer I build the modules of its SaaS platform: from the interface used by administrators and managers to the APIs and business logic connecting sales, payments, invoicing and accounting in a multi-company environment.",
    },
    role: { es: "Programador Full Stack ERP · Ene 2026 – Actual", en: "Full Stack ERP Developer · Jan 2026 – Present" },
    features: {
      es: [
        "Flujo ERP completo: cotización → aprobación → pago → facturación → contabilización.",
        "Módulos POS, reservas, ventas, clientes, productos y contabilidad integrados.",
        "Facturación electrónica conforme a la DIAN.",
        "Roles, permisos, autenticación y control de acceso multiempresa.",
        "Dashboards con indicadores financieros, operativos y comerciales.",
        "Reportes en PDF y Excel; integración con pasarelas de pago, WhatsApp Business API e IA.",
      ],
      en: [
        "Full ERP flow: quote → approval → payment → invoicing → accounting.",
        "Integrated POS, bookings, sales, customers, products and accounting modules.",
        "Electronic invoicing compliant with Colombia's DIAN.",
        "Multi-company roles, permissions, authentication and access control.",
        "Dashboards with financial, operational and commercial KPIs.",
        "PDF and Excel reports; payment gateways, WhatsApp Business API and AI integrations.",
      ],
    },
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "PostgreSQL", "Prisma", "Claude API", "Vercel"],
    demo: "https://amaxoft.com",
    year: "2026",
  },
  {
    slug: "crashmap-cartagena",
    file: "CrashMap.exe",
    title: { es: "CrashMap Cartagena", en: "CrashMap Cartagena" },
    category: "ia",
    status: { es: "Desplegado", en: "Deployed" },
    cover: "/projects/crashmap.jpg",
    summary: {
      es: "Plataforma de análisis de accidentalidad vial con mapas de calor, predicción de riesgo con ML y asistente IA.",
      en: "Road-accident analytics platform with heatmaps, ML risk prediction and an AI assistant.",
    },
    description: {
      es: "Sistema integral pensado para la Secretaría de Movilidad de Cartagena que centraliza, analiza y gestiona en tiempo real la información de accidentes viales. Consolida datos históricos, permite el reporte ciudadano desde el celular y apoya la toma de decisiones con machine learning.",
      en: "End-to-end system designed for Cartagena's Mobility Department that centralizes, analyzes and manages road-accident data in real time. It consolidates historical data, enables citizen reporting from mobile and supports decision-making with machine learning.",
    },
    role: { es: "Desarrollo full-stack · Proyecto personal", en: "Full-stack development · Personal project" },
    features: {
      es: [
        "Mapa de calor geoespacial con filtros avanzados (Leaflet).",
        "Detección de puntos negros con clustering KMeans.",
        "Predicción de riesgo por franja horaria con un modelo en PyTorch.",
        "Gestión de incidentes con cronómetro SLA y panel de turno para sala de operaciones.",
        "Planificador de ruta segura y asistente IA sobre accidentalidad.",
        "Reporte ciudadano como PWA y alertas automáticas por zona.",
      ],
      en: [
        "Geospatial heatmap with advanced filters (Leaflet).",
        "Black-spot detection with KMeans clustering.",
        "Risk prediction by time slot with a PyTorch model.",
        "Incident management with SLA timer and an operations-room shift panel.",
        "Safe-route planner and an AI assistant about accidents.",
        "Citizen reporting as a PWA and automatic zone alerts.",
      ],
    },
    stack: ["React", "FastAPI", "Python", "PyTorch", "scikit-learn", "PostgreSQL", "Neon", "Leaflet"],
    demo: "https://accidentalidad-cartagena.vercel.app",
    repo: "https://github.com/luismercado29/accidentalidad-cartagena",
    year: "2026",
  },
  {
    slug: "aula-virtual-ia",
    file: "AulaVirtual_IA.exe",
    title: { es: "Aula Virtual con IA", en: "AI-Powered Virtual Classroom" },
    category: "ia",
    status: { es: "Desplegado", en: "Deployed" },
    cover: "/projects/aula.jpg",
    summary: {
      es: "Entorno de aprendizaje que recomienda cursos según lo que cada usuario ya consumió.",
      en: "Learning environment that recommends courses based on what each user already consumed.",
    },
    description: {
      es: "Plataforma e-learning con módulos de aprendizaje y un motor de recomendaciones propio. A partir del historial de cada usuario registrado sugiere nuevos cursos usando filtrado colaborativo con similitud de Jaccard, escrito desde cero y sin dependencias externas.",
      en: "E-learning platform with learning modules and a custom recommendation engine. Based on each registered user's history it suggests new courses using collaborative filtering with Jaccard similarity, written from scratch with no external dependencies.",
    },
    role: { es: "Desarrollo frontend + lógica de recomendación", en: "Frontend development + recommendation logic" },
    features: {
      es: [
        "Registro e inicio de sesión de usuarios.",
        "Catálogo de cursos organizado por módulos.",
        "Recomendaciones personalizadas con filtrado colaborativo (Jaccard).",
        "Estado global con Zustand e interfaz con Tailwind CSS.",
      ],
      en: [
        "User sign-up and login.",
        "Course catalog organized in modules.",
        "Personalized recommendations with collaborative filtering (Jaccard).",
        "Global state with Zustand and UI built with Tailwind CSS.",
      ],
    },
    stack: ["React", "TypeScript", "Vite", "Tailwind", "Vercel"],
    demo: "https://aula-virtual-con-ia.vercel.app",
    repo: "https://github.com/luismercado29/Aula-virtual-con-IA",
    year: "2025",
  },
  {
    slug: "sistematizacion-sitm",
    file: "SITM_Despacho.exe",
    title: { es: "Sistematización SITM", en: "SITM Bus Dispatch System" },
    category: "web",
    status: { es: "Desplegado", en: "Deployed" },
    cover: "/projects/sitm.jpg",
    summary: {
      es: "Sistema de despacho de buses del SITM para digitalizar el proceso y eliminar el papel.",
      en: "Bus dispatch system for the SITM mass-transit network to digitize the process and go paperless.",
    },
    description: {
      es: "Aplicación web para el despacho de buses del Sistema Integrado de Transporte Masivo. Reemplaza las planillas en papel por un flujo digital: registro de buses, búsqueda y control de despachos con usuarios autenticados.",
      en: "Web application for dispatching buses in the Integrated Mass Transit System. It replaces paper forms with a digital flow: bus registration, search and dispatch tracking with authenticated users.",
    },
    role: { es: "Desarrollo full-stack · Proyecto académico", en: "Full-stack development · Academic project" },
    features: {
      es: [
        "Autenticación y registro de usuarios.",
        "Registro de buses por tipo (doble, alimentador) y número de puestos.",
        "Búsqueda de buses y consulta de despachos.",
        "Base de datos PostgreSQL y despliegue en Vercel.",
      ],
      en: [
        "User authentication and sign-up.",
        "Bus registration by type (articulated, feeder) and seat count.",
        "Bus search and dispatch history.",
        "PostgreSQL database and deployment on Vercel.",
      ],
    },
    stack: ["Python", "Django", "PostgreSQL", "HTML", "Vercel"],
    demo: "https://sistematizacion-sitm.vercel.app",
    repo: "https://github.com/luismercado29/sistematizacionSITM",
    year: "2025",
  },
];

export const categories: { id: string; label: L }[] = [
  { id: "todos", label: { es: "Todos", en: "All" } },
  { id: "empresarial", label: { es: "Empresarial", en: "Enterprise" } },
  { id: "ia", label: { es: "IA y Datos", en: "AI & Data" } },
  { id: "web", label: { es: "Web", en: "Web" } },
];

export const stack = {
  languages: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "C++", "HTML", "CSS"],
  frameworks: {
    frontend: ["Next.js", "React", "Angular", "Tailwind"],
    backend: ["Spring Boot", "Spring Cloud", "FastAPI", "Django"],
    data: ["PostgreSQL", "Oracle", "MySQL", "Prisma"],
  },
  tools: ["Git", "GitHub", "Vercel", "Neon", "n8n", "Resend", "Jenkins", "GitLab", "Claude API", "WhatsApp API"],
};

export type LogEntry = {
  kind: "exp" | "edu";
  file: string;
  date: L;
  title: L;
  org: string;
  text: L;
  bullets?: { es: string[]; en: string[] };
};

export const timeline: LogEntry[] = [
  {
    kind: "exp",
    file: "EXPERIENCIA_04.LOG",
    date: { es: "ENE 2026 — ACTUALIDAD", en: "JAN 2026 — PRESENT" },
    title: { es: "Programador Full Stack ERP", en: "Full Stack ERP Developer" },
    org: "AMAXOFT IT Solutions S.A.S · Cartagena",
    text: {
      es: "Desarrollo de la plataforma ERP SaaS multiempresa: interfaces responsivas, componentes reutilizables (formularios, tablas, dashboards, POS), APIs de usuarios, ventas, pagos, facturación y contabilidad, roles y permisos, y reportes en PDF/Excel.",
      en: "Building the multi-company SaaS ERP platform: responsive interfaces, reusable components (forms, tables, dashboards, POS), APIs for users, sales, payments, invoicing and accounting, roles and permissions, and PDF/Excel reports.",
    },
  },
  {
    kind: "exp",
    file: "EXPERIENCIA_03.LOG",
    date: { es: "AGO 2025 — NOV 2025", en: "AUG 2025 — NOV 2025" },
    title: { es: "Técnico Operativo", en: "Operations Technician" },
    org: "SYNERGYTECH S.A.S · Cartagena",
    text: {
      es: "Diagnósticos, instalaciones, configuración y puesta en marcha de soluciones tecnológicas para clientes corporativos, con mantenimientos preventivos y correctivos.",
      en: "Diagnostics, installation, configuration and commissioning of technology solutions for corporate clients, plus preventive and corrective maintenance.",
    },
  },
  {
    kind: "exp",
    file: "EXPERIENCIA_02.LOG",
    date: { es: "ENE 2024 — ABR 2025", en: "JAN 2024 — APR 2025" },
    title: { es: "Desarrollador Full-Stack Java", en: "Full-Stack Java Developer" },
    org: "SERVITECH COLOMBIA CTG · Cartagena",
    text: {
      es: "APIs RESTful con Spring Boot asegurado con JWT y OAuth2, microservicios con Spring Cloud y Eureka, optimización en Oracle (triggers, procedimientos, índices), interfaces en AngularJS y pipelines CI/CD con Jenkins y GitLab bajo Scrum.",
      en: "RESTful APIs with Spring Boot secured with JWT and OAuth2, microservices with Spring Cloud and Eureka, Oracle tuning (triggers, procedures, indexes), AngularJS interfaces and CI/CD pipelines with Jenkins and GitLab under Scrum.",
    },
  },
  {
    kind: "exp",
    file: "EXPERIENCIA_01.LOG",
    date: { es: "SEP 2024 — NOV 2024", en: "SEP 2024 — NOV 2024" },
    title: { es: "Auxiliar Técnico · Prácticas", en: "Technical Assistant · Internship" },
    org: "Prácticas tecnológicas · Cartagena",
    text: {
      es: "Soporte técnico, instalación, revisión y asistencia a usuarios internos.",
      en: "Technical support, installation, review and assistance to internal users.",
    },
  },
  {
    kind: "edu",
    file: "FORMACION_02.LOG",
    date: { es: "2021 — 2026", en: "2021 — 2026" },
    title: { es: "Ingeniería de Sistemas", en: "B.Sc. Systems Engineering" },
    org: "Corporación Universitaria Rafael Núñez",
    text: {
      es: "Formación en desarrollo de software, bases de datos, arquitectura y análisis de sistemas. 🏆 Ganador de TECNONUÑEZ 2023.",
      en: "Training in software development, databases, architecture and systems analysis. 🏆 Winner of TECNONUÑEZ 2023.",
    },
  },
  {
    kind: "edu",
    file: "FORMACION_01.LOG",
    date: { es: "2021 — 2025", en: "2021 — 2025" },
    title: { es: "Tecnólogo en Desarrollo de Sistemas de Información y Software", en: "Technologist in Information Systems & Software Development" },
    org: "Corporación Universitaria Rafael Núñez",
    text: {
      es: "Bases sólidas de programación, modelado de datos y construcción de aplicaciones.",
      en: "Solid foundations in programming, data modeling and application development.",
    },
  },
];
