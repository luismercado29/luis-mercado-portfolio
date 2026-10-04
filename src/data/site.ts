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
  /** Capturas de la aplicacion por dentro. */
  gallery?: { src: string; alt: L }[];
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
    slug: "pulso-vial",
    file: "PulsoVial.exe",
    title: { es: "Pulso Vial · Siniestralidad vial de Cartagena", en: "Pulso Vial · Road-safety platform for Cartagena" },
    category: "ia",
    status: { es: "En producción", en: "In production" },
    cover: "/projects/pulso-vial/portada.jpg",
    summary: {
      es: "Observatorio y centro de gestión de siniestros viales: mapa de calor, ruta segura, reportes ciudadanos por QR y WhatsApp, despacho de incidentes y predicción de riesgo.",
      en: "Road-crash observatory and operations center: heatmap, safe routing, citizen reports via QR and WhatsApp, incident dispatch and risk prediction.",
    },
    description: {
      es: "Plataforma full-stack para gestionar la siniestralidad vial de Cartagena de punta a punta. La ciudadanía consulta el mapa de calor, compara rutas por su riesgo y reporta siniestros sin crear cuenta (web, código QR del paradero o WhatsApp) con un código de seguimiento. El equipo de operación recibe esos reportes en una bandeja, abre incidentes, despacha la unidad más cercana y mide el tiempo de llegada; el equipo de análisis detecta puntos negros, compara años y predice dónde y cuándo es más probable el próximo siniestro. Es la reescritura completa de la versión anterior (React + FastAPI) como una sola aplicación Next.js, migrando el histórico sin tocar las tablas originales.",
      en: "Full-stack platform that manages road crashes in Cartagena end to end. Citizens explore the heatmap, compare routes by risk and report crashes without an account (web, bus-stop QR code or WhatsApp) with a tracking code. The operations team receives those reports in an inbox, opens incidents, dispatches the nearest unit and tracks arrival time; the analytics team detects black spots, compares years and predicts where and when the next crash is most likely. It is a complete rewrite of the previous version (React + FastAPI) as a single Next.js app, migrating historical data without touching the original tables.",
    },
    role: { es: "Diseño y desarrollo full-stack · Proyecto personal", en: "Design and full-stack development · Personal project" },
    features: {
      es: [
        "Ruta segura: compara alternativas de Mapbox/OSRM y puntúa cada tramo de 100 m según los siniestros cercanos, su gravedad y la hora del viaje.",
        "Reportes ciudadanos por web, QR de paradero y WhatsApp (webhook con firma verificada), con seguimiento público y detección de duplicados.",
        "Gestión de incidentes de la apertura al cierre: unidad más cercana, cronómetro contra el tiempo máximo de llegada y panel de turno en vivo para la sala de control.",
        "Puntos negros con DBSCAN e índice EPDO; predicción de riesgo con un modelo de Poisson explicable, validado con PAI (3,8 veces mejor que el azar).",
        "Filtro de tiempo común en todos los módulos (hace un año, años, rangos), importación CSV/Excel, exportación y lectura automática de noticias.",
        "Asistente IA con herramientas sobre la base de datos (AI SDK) y modo de respaldo por reglas; roles, auditoría y WCAG 2.2 AA verificado con axe.",
      ],
      en: [
        "Safe routing: compares Mapbox/OSRM alternatives and scores every 100 m segment by nearby crashes, severity and time of travel.",
        "Citizen reports via web, bus-stop QR and WhatsApp (signature-verified webhook), with public tracking and duplicate detection.",
        "End-to-end incident management: nearest unit, response-time timer and a live shift panel for the control room.",
        "Black spots with DBSCAN and EPDO index; explainable Poisson risk model validated with PAI (3.8x better than chance).",
        "Shared time filter across every module (a year ago, years, ranges), CSV/Excel import, export and automatic news ingestion.",
        "AI assistant with database tools (AI SDK) and rule-based fallback; roles, audit log and WCAG 2.2 AA verified with axe.",
      ],
    },
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "PostgreSQL", "Drizzle", "Neon", "Leaflet", "Mapbox", "Vercel"],
    demo: "https://accidentalidad-cartagena.vercel.app",
    repo: "https://github.com/luismercado29/accidentalidad-cartagena",
    year: "2026",
    gallery: [
      { src: "/projects/pulso-vial/02-consola.jpg", alt: { es: "Resumen de la consola: indicadores del periodo, mapa de calor e incidentes en curso", en: "Console overview: period KPIs, heatmap and ongoing incidents" } },
      { src: "/projects/pulso-vial/03-turno.jpg", alt: { es: "Panel de turno en vivo para la sala de control", en: "Live shift panel for the control room" } },
      { src: "/projects/pulso-vial/05-ruta-segura.jpg", alt: { es: "Ruta segura con los tramos coloreados por riesgo", en: "Safe route with segments colored by risk" } },
      { src: "/projects/pulso-vial/04-mapa-calor.jpg", alt: { es: "Mapa de calor con capas de puntos negros, cámaras e incidentes", en: "Heatmap with black-spot, camera and incident layers" } },
      { src: "/projects/pulso-vial/07-reportes.jpg", alt: { es: "Bandeja de reportes ciudadanos con detección de duplicados", en: "Citizen report inbox with duplicate detection" } },
      { src: "/projects/pulso-vial/06-prediccion.jpg", alt: { es: "Predicción de riesgo por hora y zona", en: "Risk prediction by hour and zone" } },
      { src: "/projects/pulso-vial/08-puntos-negros.jpg", alt: { es: "Puntos negros detectados con DBSCAN", en: "Black spots detected with DBSCAN" } },
      { src: "/projects/pulso-vial/01-portada.jpg", alt: { es: "Portada pública con las cifras del año", en: "Public home page with this year's figures" } },
    ],
  },
  {
    slug: "aula-virtual-ia",
    file: "AulaVirtual_IA.exe",
    title: { es: "Aula IA · Aula virtual con recomendaciones", en: "Aula IA · Virtual classroom with AI recommendations" },
    category: "ia",
    status: { es: "En producción", en: "In production" },
    cover: "/projects/aula-virtual-ia/portada.jpg",
    summary: {
      es: "Aula virtual tipo Coursera/Udemy cuyo corazón es un recomendador al estilo Netflix, accesible para personas ciegas y con baja visión.",
      en: "Coursera/Udemy-style virtual classroom built around a Netflix-style recommender, accessible to blind and low-vision users.",
    },
    description: {
      es: "Plataforma de cursos con estudiantes, docentes, foros, reseñas y evaluaciones, construida alrededor de un motor de recomendaciones propio. La primera vez pregunta los intereses (o los aprende de lo que la persona empieza a ver) y desde ahí arma filas personalizadas que explican por qué aparece cada curso. Todo el sitio está pensado para que lo usen personas que no ven: navegación por lector de pantalla, lectura en voz alta y ajustes de alto contraste, tamaño de texto y fuente de alta legibilidad.",
      en: "Course platform with students, teachers, forums, reviews and graded quizzes, built around a custom recommendation engine. On first visit it asks for interests (or learns them from what the person starts watching) and builds personalized rows that explain why each course appears. The whole site is designed for blind users: screen-reader navigation, read-aloud and settings for high contrast, text size and a high-legibility font.",
    },
    role: { es: "Diseño y desarrollo full-stack · Proyecto personal", en: "Design and full-stack development · Personal project" },
    features: {
      es: [
        "Recomendador híbrido: similitud de contenido + filtrado colaborativo ítem a ítem, popularidad bayesiana, decaimiento temporal y diversidad MMR, con 16 pruebas.",
        "Arranque en frío: bienvenida opcional de intereses o aprendizaje a partir de lo que la persona consume; cada fila explica su razón.",
        "Cursos con módulos, lecturas, videos con transcripción, evaluaciones calificadas, progreso y constancia al completar.",
        "Foros por curso, reseñas con calificación y panel de docencia para crear y publicar cursos.",
        "Accesibilidad WCAG 2.2 AA verificada con axe: lector de pantalla, lectura en voz alta, alto contraste, texto al 200 % y fuente Atkinson Hyperlegible.",
        "Diseño editorial con GSAP y Lenis que respeta el movimiento reducido.",
      ],
      en: [
        "Hybrid recommender: content similarity + item-item collaborative filtering, Bayesian popularity, time decay and MMR diversity, with 16 tests.",
        "Cold start: optional interest onboarding or learning from what the person consumes; every row explains its reason.",
        "Courses with modules, readings, transcribed videos, graded quizzes, progress and a completion record.",
        "Per-course forums, rated reviews and a teaching dashboard to create and publish courses.",
        "WCAG 2.2 AA accessibility verified with axe: screen reader, read-aloud, high contrast, 200% text and Atkinson Hyperlegible font.",
        "Editorial design with GSAP and Lenis that respects reduced motion.",
      ],
    },
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "PostgreSQL", "Drizzle", "Neon", "GSAP", "Vercel"],
    demo: "https://aula-virtual-con-ia.vercel.app",
    repo: "https://github.com/luismercado29/Aula-virtual-con-IA",
    year: "2026",
    gallery: [
      { src: "/projects/aula-virtual-ia/02-inicio-personalizado.jpg", alt: { es: "Inicio personalizado con filas de recomendaciones", en: "Personalized home with recommendation rows" } },
      { src: "/projects/aula-virtual-ia/03-curso.jpg", alt: { es: "Página de un curso con temario, reseñas y profesor", en: "Course page with syllabus, reviews and teacher" } },
      { src: "/projects/aula-virtual-ia/04-leccion.jpg", alt: { es: "Lección con lectura en voz alta y temario lateral", en: "Lesson with read-aloud and side syllabus" } },
      { src: "/projects/aula-virtual-ia/06-bienvenida.jpg", alt: { es: "Bienvenida opcional para elegir intereses", en: "Optional onboarding to choose interests" } },
      { src: "/projects/aula-virtual-ia/05-docencia.jpg", alt: { es: "Panel de docencia", en: "Teaching dashboard" } },
      { src: "/projects/aula-virtual-ia/01-portada.jpg", alt: { es: "Portada pública", en: "Public home page" } },
    ],
  },
  {
    slug: "sistematizacion-sitm",
    file: "SITM_Despacho.exe",
    title: { es: "SITM Cartagena · Despacho de buses", en: "SITM Cartagena · Bus dispatch system" },
    category: "web",
    status: { es: "En producción", en: "In production" },
    cover: "/projects/sistematizacion-sitm/portada.jpg",
    summary: {
      es: "Centro de despacho para un sistema de transporte masivo, con mapa en vivo de la flota y portal para que el pasajero sepa cuándo llega su bus.",
      en: "Dispatch center for a mass-transit system, with a live fleet map and a portal that tells riders when their bus arrives.",
    },
    description: {
      es: "Aplicación que digitaliza el despacho de buses de un sistema integrado de transporte masivo en Cartagena. Los despachadores programan y despachan buses por ruta, controlan la flota y los conductores y siguen cada recorrido en un mapa en vivo; los pasajeros consultan desde el celular qué buses vienen a su estación y en cuántos minutos, sin instalar nada. Las 24 rutas están trazadas sobre las vías reales, y un modo demostración simula los buses en movimiento con tiempos de recorrido realistas.",
      en: "Application that digitizes bus dispatching for an integrated mass-transit system in Cartagena. Dispatchers schedule and dispatch buses by route, manage the fleet and drivers and follow every trip on a live map; riders check from their phone which buses are coming to their station and in how many minutes, with nothing to install. All 24 routes follow the real streets, and a demo mode simulates moving buses with realistic travel times.",
    },
    role: { es: "Desarrollo full-stack · Proyecto académico rediseñado en 2026", en: "Full-stack development · Academic project redesigned in 2026" },
    features: {
      es: [
        "Tablero de operación: buses en ruta, puntualidad, frecuencia por ruta y conductores con licencia por vencer.",
        "Despacho con validación de bus y conductor disponibles, inicio, novedades y cierre del recorrido.",
        "Mapa en vivo con la flota moviéndose sobre 24 rutas y 36 estaciones trazadas con datos de OpenStreetMap.",
        "Portal del pasajero con llegadas estimadas por estación, actualizado cada pocos segundos.",
        "Gestión de flota y conductores; registro de despachos con filtros y exportación CSV.",
        "Roles de supervisión y despacho, política CSP estricta, límite de intentos y base de datos en Neon.",
      ],
      en: [
        "Operations dashboard: buses en route, punctuality, frequency per route and drivers with expiring licenses.",
        "Dispatch with bus and driver availability checks, trip start, incidents and closing.",
        "Live map with the fleet moving over 24 routes and 36 stations traced from OpenStreetMap data.",
        "Rider portal with estimated arrivals per station, refreshed every few seconds.",
        "Fleet and driver management; dispatch log with filters and CSV export.",
        "Supervisor and dispatcher roles, strict CSP, login rate limiting and a Neon database.",
      ],
    },
    stack: ["Python", "Django", "PostgreSQL", "Neon", "Leaflet", "Mapbox", "OpenStreetMap", "Vercel"],
    demo: "https://sistematizacion-sitm.vercel.app",
    repo: "https://github.com/luismercado29/sistematizacionSITM",
    year: "2026",
    gallery: [
      { src: "/projects/sistematizacion-sitm/03-tablero.jpg", alt: { es: "Tablero de operación del despacho", en: "Dispatch operations dashboard" } },
      { src: "/projects/sistematizacion-sitm/04-mapa-operativo.jpg", alt: { es: "Mapa en vivo de la flota por ruta", en: "Live fleet map by route" } },
      { src: "/projects/sistematizacion-sitm/05-despachos.jpg", alt: { es: "Registro de despachos con filtros", en: "Dispatch log with filters" } },
      { src: "/projects/sistematizacion-sitm/06-flota.jpg", alt: { es: "Estado de la flota", en: "Fleet status" } },
      { src: "/projects/sistematizacion-sitm/01-inicio-publico.jpg", alt: { es: "Portal del pasajero", en: "Rider portal" } },
      { src: "/projects/sistematizacion-sitm/02-mapa-publico.jpg", alt: { es: "Mapa público en vivo", en: "Public live map" } },
    ],
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
