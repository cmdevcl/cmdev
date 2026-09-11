// Fuente única de contenido. La home (/) y el CV (/cv) leen de aquí
// para no volver a desincronizarse como en la versión HTML anterior.

export const identity = {
  name: "Carlos Muñoz Carrasco",
  role: "Senior Data Consultant",
  location: "Santiago, Chile",
  email: "carlos.s.m.carrasco@gmail.com",
  phone: "+56 9 5730 3196",
  linkedin: "linkedin.com/in/carlosmunozc",
  github: "github.com/cmdevcl",
  summary:
    "Consultor Senior en Datos con más de 4 años de experiencia en el diseño y liderazgo de soluciones de inteligencia de negocios, arquitectura, ingeniería, analítica y gobernanza de datos.",
};

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  note?: string;
}

export const stats: StatItem[] = [
  { id: "years", label: "Años de experiencia", value: 4, suffix: "+", note: "En consultoría de datos enterprise" },
  { id: "clients", label: "Clientes atendidos", value: 18, suffix: "+", note: "Contando las organizaciones nombradas en el CV" },
  { id: "clouds", label: "Nubes dominadas", value: 3, note: "Azure · AWS · Google Cloud" },
  { id: "certs", label: "Certificaciones", value: 7, note: "Microsoft · Databricks · Securiti · Oracle" },
];

export interface StackSkill {
  label: string;
  level: number;
}

export const stackSkills: StackSkill[] = [
  { label: "Power BI", level: 95 },
  { label: "SQL / T-SQL", level: 92 },
  { label: "Python", level: 80 },
  { label: "AWS", level: 78 },
  { label: "BigQuery", level: 82 },
  { label: "Dagster", level: 70 },
];

export interface RoleShare {
  label: string;
  pct: number;
}

export const roleDistribution: RoleShare[] = [
  { label: "Liderazgo de proyecto", pct: 40 },
  { label: "Ejecución técnica", pct: 30 },
  { label: "Consultoría estratégica", pct: 30 },
];

// Listas simples (sin puntaje inventado) — tal cual figuran en el CV real, sección "Áreas beneficiadas".
export const businessAreas: string[] = [
  "Alta Dirección",
  "Control de Gestión",
  "Gobierno de Datos",
  "Desarrollo",
  "TI",
  "Ciberseguridad",
  "GRC",
  "Operaciones",
  "Finanzas",
  "Marketing y Ventas",
  "Recursos Humanos",
  "People Analytics",
];

// Tal cual figuran en el CV real, sección "Industrias".
export const industries: string[] = [
  "Minería",
  "Banca",
  "Medios de pago y servicios financieros",
  "Energía",
  "Consumo masivo",
  "Transporte y aerolíneas",
  "Educación superior",
  "Manufactura e industria",
  "Logística",
  "Construcción",
  "Servicios profesionales",
  "Servicios sociales",
];

export const heroTags = ["AWS", "Power BI", "Python", "BigQuery", "Dagster", "Salesforce MC"];

export interface ExperienceEntry {
  company: string;
  role: string;
  context?: string;
  start: string;
  end: string;
  current?: boolean;
  location: string;
  modality: string;
  bullets: string[];
  tech: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Soho",
    role: "Senior Consultant - Data Governance",
    start: "FEB 2026",
    end: "ACTUALIDAD",
    current: true,
    location: "Huechuraba, Chile",
    modality: "Presencial",
    bullets: [
      "Liderazgo técnico y de diseño de una iniciativa destinada a la refactorización integral de más de 150 informes institucionales para un cliente de la industria de educación superior.",
      "Creación del primer estándar institucional de diseño para Power BI y de una guía de buenas prácticas de desarrollo.",
      "Diseño e implementación de un portal web de navegación de informes integrado en Microsoft Teams.",
      "Definición de una arquitectura objetivo con Power BI versionable, AWS Athena, Lake Formation y LF-Tags, incorporando calidad, seguridad, privacidad y preparación para la Ley 21.719.",
      "Desarrollo de herramientas y flujos de trabajo apoyados en inteligencia artificial para acelerar la refactorización y fortalecer los controles de calidad.",
    ],
    tech: ["Power BI", "PBIP / PBIR / TMDL", "AWS Athena", "Lake Formation", "Data Governance", "Ley 21.719", "Agentic AI"],
  },
  {
    company: "EY",
    role: "Senior Consultant - AI & Data",
    context: "Financial Services",
    start: "JUL 2025",
    end: "FEB 2026",
    location: "Las Condes, Chile",
    modality: "Híbrido",
    bullets: [
      "Desarrollo de dashboards ejecutivos y análisis de desempeño con presentación mensual ante la Subgerencia Comercial Digital.",
      "Análisis pre y post campaña, segmentación y modelos de propensión para medir efectividad de inversión comercial.",
      "Apoyo a Inteligencia de Negocios en la migración desde un SQL Server sobresaturado hacia un datalake en AWS.",
      "Automatización de datasets para Salesforce Marketing Cloud mediante Python, AWS Athena, S3 y Step Functions.",
    ],
    tech: ["Power BI", "AWS Athena", "S3", "Step Functions", "Python", "SQL Server", "Salesforce Marketing Cloud"],
  },
  {
    company: "KPMG Chile",
    role: "Senior Consultant - Digital Transformation",
    context: "Advisory",
    start: "DIC 2024",
    end: "JUL 2025",
    location: "Las Condes, Chile",
    modality: "Híbrido",
    bullets: [
      "Proyectos de Business Intelligence, ingeniería de datos, automatización y People Analytics.",
      "Evaluaciones de ciberseguridad IT/OT, NIST CSF 2.0, privacidad de datos y preparación para la Ley 21.719.",
      "Charlas internas para toda el área de Advisory sobre soluciones de inteligencia artificial y prevención de pérdida de datos.",
    ],
    tech: ["Power BI", "Python", "Data Engineering", "NIST CSF", "AI Governance"],
  },
  {
    company: "Datawalt",
    role: "BI Consultant - Semi Senior & Project Leader",
    start: "DIC 2023",
    end: "NOV 2024",
    location: "Las Condes, Chile",
    modality: "Híbrido",
    bullets: [
      "Liderazgo de proyectos de Business Intelligence y transformación digital de punta a punta.",
      "Punto principal de escalamiento para un socio estratégico de datos de consumo masivo.",
      "Diseño de arquitecturas, modelos de datos, procesos ETL/ELT y orquestaciones para Big Data.",
    ],
    tech: ["Power BI", "Python", "BigQuery", "Dagster", "Looker", "SQL"],
  },
  {
    company: "Consultoría independiente",
    role: "Business Intelligence Developer",
    start: "2023",
    end: "2024",
    location: "Remoto, Chile",
    modality: "Remoto",
    bullets: [
      "Liderazgo autónomo de proyectos de BI, desde el entendimiento del requerimiento hasta el diseño y la entrega.",
      "Optimización de tiempos de carga, experiencia de usuario y aseguramiento de calidad.",
    ],
    tech: ["Qlik Sense", "Power BI", "Python", "BigQuery", "Azure", "Microsoft Fabric"],
  },
  {
    company: "Data Growler",
    role: "Práctica Profesional - BI Consultant",
    start: "DIC 2022",
    end: "DIC 2023",
    location: "Chile",
    modality: "Remoto",
    bullets: [
      "Continuidad y cierre exitoso de proyectos de BI en curso, con entregas dentro de plazo.",
      "Desarrollo de un producto analítico interno, posteriormente convertido en oferta comercial.",
    ],
    tech: ["Power BI", "Qlik Sense", "DAX", "SQL", "Git"],
  },
];

// Timeline resumida para la home (misma data que "experience", vista corta)
export const timeline = experience.slice(0, 4).map((e) => ({
  period: `${e.start} — ${e.current ? "ACTUAL" : e.end}`,
  role: e.role,
  meta: [e.company, e.context].filter(Boolean).join(" · "),
}));

export type ProjectType = "case" | "fabrica" | "platform" | "technical";

export interface ProjectItem {
  id: string;
  type: ProjectType;
  emoji: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  /** Ruta bajo /public/informes/ o /public/platform/. Si falta, la card muestra "captura próximamente". */
  image?: string;
}

export const projects: ProjectItem[] = [
  {
    id: "campanas-banca",
    type: "case",
    emoji: "🏦",
    eyebrow: "Caso de negocio",
    title: "Optimización de Campañas — Financial Services",
    description:
      "Análisis pre y post campaña, segmentación y modelos de propensión de clientes para medir efectividad y mejorar decisiones de inversión comercial. Automatización de datasets para Salesforce Marketing Cloud.",
    tags: ["AWS Athena", "Salesforce MC", "Python", "SQL"],
  },
  {
    id: "auditoria-ia",
    type: "case",
    emoji: "🛡️",
    eyebrow: "Caso de negocio",
    title: "Auditoría de IA & Gobernanza de Datos",
    description:
      "Evaluación de madurez en gobernanza de datos y uso de IA para cliente del sector servicios. Recomendaciones de mejora, políticas y hoja de ruta de implementación.",
    tags: ["Data Governance", "AI Audit", "GRC"],
  },
  {
    id: "saas-portal-reportes",
    type: "platform",
    emoji: "🧩",
    eyebrow: "Plataforma propia",
    title: "Portal SaaS multi-tenant de reportes",
    description:
      "Plataforma web construida de punta a punta para que empresas publiquen y naveguen sus reportes Power BI por rol y área, con control de acceso por empresa/usuario y portal embebido. Next.js + Supabase + Vercel, arquitectura multi-tenant real.",
    tags: ["Next.js", "Supabase", "Vercel", "Multi-tenant", "Power BI embed"],
  },
  {
    id: "prueba-tecnica-pbi",
    type: "technical",
    emoji: "🧪",
    eyebrow: "Evaluación técnica resuelta",
    title: "Diagnóstico y fix de un informe Power BI",
    description:
      "Prueba técnica de Analista de Datos Power BI: diagnóstico y corrección de tres errores reportados en un informe (filtro de fecha relativa, medida DAX de año anterior, seguridad a nivel de fila del rol de vendedores) y migración de una página a una nueva maqueta visual, sobre un modelo semántico TMDL con Power Query propio.",
    tags: ["Power BI", "DAX", "Row-Level Security", "Power Query", "TMDL"],
    link: "https://github.com/cmdevcl/prueba-tecnica-analista-datos-pbi",
  },
  {
    id: "fabrica-educacion",
    type: "fabrica",
    emoji: "🎓",
    eyebrow: "Fábrica de informes",
    title: "Informe de referencia — Educación",
    description: "Dashboard ejecutivo de referencia para el rubro educación superior: matrícula, retención y desempeño académico.",
    tags: ["Power BI", "PBIR", "TMDL", "Diseño de reportes"],
  },
  {
    id: "fabrica-financiero",
    type: "fabrica",
    emoji: "💳",
    eyebrow: "Fábrica de informes",
    title: "Informe de referencia — Financiero",
    description: "Dashboard ejecutivo de referencia para el rubro financiero: cartera, riesgo y desempeño comercial.",
    tags: ["Power BI", "PBIR", "TMDL", "Diseño de reportes"],
  },
  {
    id: "fabrica-mineria",
    type: "fabrica",
    emoji: "⛰️",
    eyebrow: "Fábrica de informes",
    title: "Informe de referencia — Minería",
    description: "Dashboard ejecutivo de referencia para minería: producción, costos y mantenimiento.",
    tags: ["Power BI", "PBIR", "TMDL", "Diseño de reportes"],
  },
  {
    id: "fabrica-salud",
    type: "fabrica",
    emoji: "🏥",
    eyebrow: "Fábrica de informes",
    title: "Informe de referencia — Salud",
    description: "Dashboard ejecutivo de referencia para salud: ocupación, atención y calidad de servicio.",
    tags: ["Power BI", "PBIR", "TMDL", "Diseño de reportes"],
  },
  {
    id: "fabrica-seguros",
    type: "fabrica",
    emoji: "🛡️",
    eyebrow: "Fábrica de informes",
    title: "Informe de referencia — Seguros",
    description: "Dashboard ejecutivo de referencia para seguros: siniestralidad, primas y retención de clientes.",
    tags: ["Power BI", "PBIR", "TMDL", "Diseño de reportes"],
  },
];

export interface EducationItem {
  period: string;
  title: string;
  institution: string;
}

export const education: EducationItem[] = [
  { period: "2026 — actualidad", title: "Ingeniería Civil Industrial (en curso, modalidad online)", institution: "Universidad San Sebastián" },
  { period: "2020 — 2023", title: "Ingeniería en Informática · Especialización en Ciencia de Datos", institution: "Duoc UC" },
  { period: "2016 — 2019", title: "Técnico en Administración de Empresas · Mención Recursos Humanos", institution: "—" },
];

export interface CertificationGroup {
  issuer: string;
  items: string[];
}

export const certifications: CertificationGroup[] = [
  { issuer: "Microsoft", items: ["Azure Data Fundamentals (DP-900)", "Fabric Data Engineer Associate (DP-700)"] },
  { issuer: "Databricks", items: ["Generative AI Fundamentals", "Generative AI Engineer Associate"] },
  { issuer: "Securiti", items: ["Securiti Fundamentals", "Securiti Advanced"] },
  { issuer: "Oracle", items: ["Oracle Cloud Infrastructure Foundations Associate"] },
];

// Nota: sin portugués (no lo habla); el inglés se desglosa por destreza porque
// reading/writing/listening están por sobre B1 pero speaking es el punto débil real.
export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Reading, writing y listening avanzados · speaking B1" },
];

export const skillGroups: { group: string; items: string[] }[] = [
  {
    group: "Liderazgo y negocio",
    items: [
      "Arquitectura y diseño de soluciones",
      "Liderazgo técnico y gestión de proyectos",
      "Comunicación ejecutiva y relación con clientes",
      "Comprensión del negocio y pensamiento crítico",
    ],
  },
  {
    group: "Ejecución y calidad",
    items: [
      "Diseño visual y calidad de entregables",
      "Calidad y validación constante de datos",
      "Resolución de problemas bajo presión",
    ],
  },
  {
    group: "Equipo y mejora continua",
    items: [
      "Transferencia de conocimiento y formación",
      "Trabajo en equipos multidisciplinarios",
      "Proactividad, investigación y mejora continua",
    ],
  },
];

export const techStack: { category: string; items: string; level?: "hi" | "med" }[] = [
  { category: "Microsoft", items: "Power BI, Power Apps, Power Automate, Microsoft Fabric, Azure, Data Factory, Synapse, SQL, Data Lake", level: "hi" },
  { category: "AWS", items: "Athena, S3, Glue, Lambda, Step Functions, Lake Formation, LF-Tags, Redshift", level: "hi" },
  { category: "Google Cloud", items: "BigQuery, Looker, Looker Studio, Cloud Storage, Cloud SQL, Cloud Functions, Dataform", level: "med" },
  { category: "Lenguajes", items: "Python, SQL, T-SQL, SQLX, KQL, DAX, M, JavaScript, HTML, Spark" },
  { category: "Ingeniería y orquestación", items: "Dagster, MAGE.AI, Prefect, ETL/ELT, modelado dimensional, calidad de datos" },
  { category: "Desarrollo web", items: "HTML, JavaScript, Node.js, Next.js, React" },
];

export const industryChips = [
  "Banca", "Minería", "Retail", "Logística", "Energía", "Consumo masivo", "Educación superior",
];
