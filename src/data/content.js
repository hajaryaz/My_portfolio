// ── NAV ──────────────────────────────────────────────────────────────────────
export const NAV_LINKS = ["About", "Experience", "Skills", "Projects", "Contact"];

// ── ABOUT STATS ──────────────────────────────────────────────────────────────
export const STATS = [
  { num: "5",             label: "Projects" },
  { num: "2",             label: "Internships" },
  { num: "Global",        label: "NASA Space Apps Global Nominee",  small: true },
  { num: "National\nWinner", label: "ActInSpace", small: true },
];

// ── TECH STACK ────────────────────────────────────────────────────────────────
export const TECH_GROUPS = [
  {
    title: "Languages",
    color: "",
    items: [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",     name: "Python" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",         name: "Java" },
    ],
  },
  {
    title: "Frontend",
    color: "",
    items: [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",  name: "React" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", name: "Next.js", invert: true },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",  name: "HTML" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",    name: "CSS" },
    ],
  },
  {
    title: "Backend",
    color: "grn",
    items: [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", name: "FastAPI" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",  name: "Spring Boot" },
    ],
  },
  {
    title: "Databases",
    color: "",
    items: [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",      name: "MySQL" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "teal",
    items: [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",          name: "Azure" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",        name: "Docker" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg", name: "Airflow" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",              name: "Git" },
    ],
  },
  {
    title: "GenAI / LLMs",
    color: "lav",
    items: [
      { name: "LLMs (Ollama, Mistral)", svg: true },
      { name: "Prompt Engineering",     svg: true },
      { name: "LLM Guardrails",         svg: true },
    ],
  },
  {
    title: "ML / Data",
    color: "lav",
    items: [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", name: "TensorFlow" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",         name: "Pandas" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",           name: "NumPy" },
      { name: "scikit-learn", svg: true },
      { name: "Power BI",     svg: true, bi: true },
    ],
  },
];

// ── HUMAN SKILLS / PROOF CARDS ────────────────────────────────────────────────
export const PROOF_CARDS = [
  {
    skill: "National Winner",
    title: "ActInSpace Hackathon — Morocco",
    desc: "Won the national edition of ActInSpace. Designed and pitched an AI-powered concept for space debris management in Low Earth Orbit, then represented Morocco at the international finals in Bordeaux.",
    img: "/assets/actin.jpg",
    img2: "/assets/actin2.png",
  },
  {
    skill: "Leadership · 3 years",
    title: "The Great Debaters Club — ENSAH",
    desc: "Member → Vice-President → Team Leader. Led sessions, organized events, and built a community of critical thinkers.",
    img: "/assets/debate.png",
    img2: "/assets/tgd1.png",
  },
  {
    skill: "Collaboration under pressure",
    title: "NASA Space Apps — Global Nominee",
    desc: "Selected among top teams in a 48h international hackathon. 155 participants at 1337 Coding School (UM6P).",
    img: "/assets/nasa.png",
    img2: "/assets/nasa1.png",
  },
  {
    skill: "Event Organization",
    title: "ICCEM 2024 International Conference — ENSAH",
    desc: "Member of the organizing team. Coordinated sessions and facilitated exchanges between international researchers.",
    img: "/assets/iccem.png",
    img2: "/assets/iccm2.png",
  },
];

// ── EXPERIENCE ────────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    role: "Full Stack & AI Developer Intern",
    company: "AriMayi",
    logo: "/assets/arimayi.png",
    period: "Jul 2026 – Sep 2026",
    place: "Remote",
    points: [
      "Developed an AI-powered web application end to end within a development team.",
      "Integrated a local LLM with prompt engineering and guardrails for content generation.",
      "Built REST APIs and backend services with FastAPI and PostgreSQL.",
      "Developed the front end with Next.js, including live preview and PDF export.",
    ],
    tech: ["Next.js", "React", "FastAPI", "PostgreSQL", "LLMs", "pytest"],
  },
  {
    role: "Software Development Intern",
    company: "Terra Nova Engineering & Business Solutions",
    logo: "/assets/terranova.png",
    period: "Jul 2025 – Aug 2025",
    place: "Remote",
    points: [
      "Designed and developed, in a team, a tool that automates the comparison of supplier offers on multiple criteria (price, delivery time, quality, contractual terms).",
      "Contributed to development and to the final technical report.",
    ],
    tech: ["Python", "Data Extraction", "Data Processing"],
  },
  {
    role: "Sales Advisor – SFR Telecom Project",
    company: "Webhelp",
    logo: "/assets/webhelp.png",
    period: "Dec 2021 – Apr 2022",
    place: "Fès, Morocco · On-site",
    points: [
      "Prospected and engaged new customers for SFR, identifying their needs and offering tailored telecom solutions.",
      "Developed strong skills in communication, negotiation and objection handling.",
    ],
    tech: ["Communication", "Negotiation", "Customer Relations"],
  },
];

// ── PROJECTS ──────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    num: "01",
    type: "Deep Learning · NLP · Classification",
    title: "AI Human Content Detector",
    desc: "Collaborated on a full-stack application that uses machine learning models to classify AI-generated and human-written content through an interactive web interface.",
    pipeline: ["Text Input", "Feature Extraction", "Deep Learning", "Classification"],
    tech: ["JavaScript", "Python", "Deep Learning", "REST API", "Node.js"],
    github: "https://github.com/Marouazzz/ai_human_detector",
    collab: true,
  },
  {
    num: "02",
    type: "Data Engineering · NLP · CV Matching",
    title: "HireFlow — Job Market Data Pipeline & CV Matching",
    desc: "End-to-end pipeline that collects ~768 Tech job offers per run (France Travail API + LinkedIn), processes them through a Medallion ETL (Bronze → Silver → Gold) orchestrated daily by Airflow, and matches CVs to offers with TF-IDF and cosine similarity via a FastAPI API and Power BI dashboards.",
    pipeline: ["Scraping", "Bronze", "Silver", "Gold", "FastAPI", "CV Matching", "Power BI"],
    tech: ["Python", "Airflow", "FastAPI", "MySQL", "scikit-learn", "Selenium", "Docker", "Power BI"],
    github: "https://github.com/hajaryaz/HireFlow",
    collab: true,
  },
  {
    num: "03",
    type: "Cloud · IoT · Real-Time Backend",
    title: "Real-Time Cloud-IoT Weather Telemetry Platform",
    desc: "Built a cloud-based IoT pipeline that streams real-time weather data through Azure services into interactive Power BI dashboards, enabling end-to-end data ingestion, processing, and visualization.",
    pipeline: ["Weather Source", "IoT Edge", "Azure Hub", "Stream Analytics", "Power BI"],
    tech: ["Azure IoT Hub", "Stream Analytics", "Power BI", "Docker", "Python", "OpenWeather API"],
    github: "https://github.com/hajaryaz/Real-time-weather-telemetry-with-Azure",
    collab: true,
  },
  {
    num: "04",
    type: "Full-Stack · Spring Boot · Academic Platform",
    title: "Academic Project Management Platform",
    desc: "Developed a Spring Boot platform that automates project supervision, jury assignment, defense scheduling, and administrative document generation.",
    pipeline: ["Project Submission", "Supervisor Assignment", "Jury Composition", "Defense Scheduling", "Evaluation"],
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL"],
    github: "https://github.com/Marouazzz/pfe-spring",
    collab: true,
  },
  {
    num: "05",
    type: "Machine Learning · Security · SQL Injection Detection",
    title: "SQL Injection Detection — ML Project",
    desc: "Developing a machine learning model that detects SQL injection attacks by analyzing query patterns and classifying potentially malicious requests.",
    pipeline: ["Data Ingestion", "Feature Engineering", "ML Classification", "Attack Detection"],
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Jupyter", "Matplotlib"],
    github: "https://github.com/hajaryaz",
    wip: true,
  },
];
