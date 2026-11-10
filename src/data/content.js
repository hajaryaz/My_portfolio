// ── NAV ──────────────────────────────────────────────────────────────────────
export const NAV_LINKS = ["about", "experience", "skills", "projects", "contact"];

// ── ABOUT STATS ──────────────────────────────────────────────────────────────
export const STATS = [
  { num: "5",             label: { en: "Projects", fr: "Projets" } },
  { num: "2",             label: { en: "Internships", fr: "Stages" } },
  { num: "Global",        label: { en: "NASA Space Apps Global Nominee", fr: "Nomination mondiale NASA Space Apps" }, small: true },
  { num: { en: "National\nWinner", fr: "1re place\nnationale" }, label: "ActInSpace", small: true },
];

// ── TECH STACK ────────────────────────────────────────────────────────────────
export const TECH_GROUPS = [
  {
    title: { en: "Languages", fr: "Langages" },
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
    title: { en: "Databases", fr: "Bases de données" },
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
      { name: { en: "LLM Guardrails", fr: "Garde-fous LLM" }, svg: true },
    ],
  },
  {
    title: { en: "ML / Data", fr: "ML / Données" },
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
    skill: { en: "National Winner", fr: "1re place nationale" },
    title: { en: "ActInSpace Hackathon — Morocco", fr: "Hackathon ActInSpace — Maroc" },
    desc: {
      en: "Won the national edition of ActInSpace. Designed and pitched an AI-powered concept for space debris management in Low Earth Orbit, then represented Morocco at the international finals in Bordeaux.",
      fr: "1re place de l'édition nationale d'ActInSpace. Conception et pitch d'un concept basé sur l'IA pour la gestion des débris spatiaux en orbite basse, puis représentation du Maroc à la finale internationale à Bordeaux.",
    },
    img: "/assets/actin.jpg",
    img2: "/assets/actin2.png",
  },
  {
    skill: { en: "Leadership · 3 years", fr: "Leadership · 3 ans" },
    title: { en: "The Great Debaters Club — ENSAH", fr: "Club The Great Debaters — ENSAH" },
    desc: {
      en: "Member → Vice-President → Team Leader. Led sessions, organized events, and built a community of critical thinkers.",
      fr: "Membre → Vice-présidence → Direction d'équipe. Animation de séances, organisation d'événements et création d'une communauté d'esprits critiques.",
    },
    img: "/assets/debate.png",
    img2: "/assets/tgd1.png",
  },
  {
    skill: { en: "Collaboration under pressure", fr: "Collaboration sous pression" },
    title: { en: "NASA Space Apps — Global Nominee", fr: "NASA Space Apps — Nomination mondiale" },
    desc: {
      en: "Selected among top teams in a 48h international hackathon. 155 participants at 1337 Coding School (UM6P).",
      fr: "Équipe sélectionnée parmi les meilleures d'un hackathon international de 48 h. 155 participants à 1337 Coding School (UM6P).",
    },
    img: "/assets/nasa.png",
    img2: "/assets/nasa1.png",
  },
  {
    skill: { en: "Event Organization", fr: "Organisation d'événements" },
    title: { en: "ICCEM 2024 International Conference — ENSAH", fr: "Conférence internationale ICCEM 2024 — ENSAH" },
    desc: {
      en: "Member of the organizing team. Coordinated sessions and facilitated exchanges between international researchers.",
      fr: "Membre de l'équipe d'organisation. Coordination des sessions et facilitation des échanges entre chercheurs internationaux.",
    },
    img: "/assets/iccem.png",
    img2: "/assets/iccm2.png",
  },
];

// ── EXPERIENCE ────────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    role: { en: "Full Stack & AI Developer Intern", fr: "Stage — Développement Full Stack & IA" },
    company: "AriMayi",
    logo: "/assets/arimayi.png",
    period: { en: "Jul 2026 – Sep 2026", fr: "Juil. 2026 – Sept. 2026" },
    place: { en: "Remote", fr: "À distance" },
    points: {
      en: [
        "Developed an AI-powered web application end to end within a development team.",
        "Integrated a local LLM with prompt engineering and guardrails for content generation.",
        "Built REST APIs and backend services with FastAPI and PostgreSQL.",
        "Developed the front end with Next.js, including live preview and PDF export.",
      ],
      fr: [
        "Développement de bout en bout d'une application web basée sur l'IA au sein d'une équipe de développement.",
        "Intégration d'un LLM local avec prompt engineering et garde-fous pour la génération de contenu.",
        "Conception d'API REST et de services backend avec FastAPI et PostgreSQL.",
        "Développement du front-end avec Next.js, incluant l'aperçu en direct et l'export PDF.",
      ],
    },
    tech: ["Next.js", "React", "FastAPI", "PostgreSQL", "LLMs", "pytest"],
  },
  {
    role: { en: "Software Development Intern", fr: "Stage — Développement logiciel" },
    company: "Terra Nova Engineering & Business Solutions",
    logo: "/assets/terranova.png",
    period: { en: "Jul 2025 – Aug 2025", fr: "Juil. 2025 – Août 2025" },
    place: { en: "Remote", fr: "À distance" },
    points: {
      en: [
        "Designed and developed, in a team, a tool that automates the comparison of supplier offers on multiple criteria (price, delivery time, quality, contractual terms).",
        "Contributed to development and to the final technical report.",
      ],
      fr: [
        "Conception et développement, en équipe, d'un outil qui automatise la comparaison des offres fournisseurs selon plusieurs critères (prix, délai de livraison, qualité, conditions contractuelles).",
        "Contribution au développement et à la rédaction du rapport technique final.",
      ],
    },
    tech: {
      en: ["Python", "Data Extraction", "Data Processing"],
      fr: ["Python", "Extraction de données", "Traitement de données"],
    },
  },
  {
    role: { en: "Sales Advisor – SFR Telecom Project", fr: "Conseil commercial – Projet SFR Télécom" },
    company: "Webhelp",
    logo: "/assets/webhelp.png",
    period: { en: "Dec 2021 – Apr 2022", fr: "Déc. 2021 – Avr. 2022" },
    place: { en: "Fès, Morocco · On-site", fr: "Fès, Maroc · Sur site" },
    points: {
      en: [
        "Prospected and engaged new customers for SFR, identifying their needs and offering tailored telecom solutions.",
        "Developed strong skills in communication, negotiation and objection handling.",
      ],
      fr: [
        "Prospection et fidélisation de nouveaux clients pour SFR, identification de leurs besoins et proposition de solutions télécom adaptées.",
        "Développement de solides compétences en communication, négociation et traitement des objections.",
      ],
    },
    tech: {
      en: ["Communication", "Negotiation", "Customer Relations"],
      fr: ["Communication", "Négociation", "Relation client"],
    },
  },
];

// ── PROJECTS ──────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    num: "01",
    type: "Deep Learning · NLP · Classification",
    title: { en: "AI Human Content Detector", fr: "Détecteur de contenu IA vs humain" },
    desc: {
      en: "Collaborated on a full-stack application that uses machine learning models to classify AI-generated and human-written content through an interactive web interface.",
      fr: "Application full-stack réalisée en équipe, qui utilise des modèles de machine learning pour distinguer les textes générés par IA des textes écrits par des humains, via une interface web interactive.",
    },
    pipeline: {
      en: ["Text Input", "Feature Extraction", "Deep Learning", "Classification"],
      fr: ["Saisie du texte", "Extraction de features", "Deep Learning", "Classification"],
    },
    tech: ["JavaScript", "Python", "Deep Learning", "REST API", "Node.js"],
    github: "https://github.com/Marouazzz/ai_human_detector",
    collab: true,
  },
  {
    num: "02",
    type: { en: "Data Engineering · NLP · CV Matching", fr: "Data Engineering · NLP · Matching de CV" },
    title: { en: "HireFlow — Job Market Data Pipeline & CV Matching", fr: "HireFlow — Pipeline de données du marché de l'emploi & matching de CV" },
    desc: {
      en: "End-to-end pipeline that collects ~768 Tech job offers per run (France Travail API + LinkedIn), processes them through a Medallion ETL (Bronze → Silver → Gold) orchestrated daily by Airflow, and matches CVs to offers with TF-IDF and cosine similarity via a FastAPI API and Power BI dashboards.",
      fr: "Pipeline de bout en bout qui collecte ~768 offres d'emploi Tech par exécution (API France Travail + LinkedIn), les traite via un ETL Medallion (Bronze → Silver → Gold) orchestré quotidiennement par Airflow, et associe les CV aux offres grâce au TF-IDF et à la similarité cosinus, via une API FastAPI et des tableaux de bord Power BI.",
    },
    pipeline: {
      en: ["Scraping", "Bronze", "Silver", "Gold", "FastAPI", "CV Matching", "Power BI"],
      fr: ["Scraping", "Bronze", "Silver", "Gold", "FastAPI", "Matching CV", "Power BI"],
    },
    tech: ["Python", "Airflow", "FastAPI", "MySQL", "scikit-learn", "Selenium", "Docker", "Power BI"],
    github: "https://github.com/hajaryaz/HireFlow",
    collab: true,
  },
  {
    num: "03",
    type: { en: "Cloud · IoT · Real-Time Backend", fr: "Cloud · IoT · Backend temps réel" },
    title: { en: "Real-Time Cloud-IoT Weather Telemetry Platform", fr: "Plateforme de télémétrie météo Cloud-IoT en temps réel" },
    desc: {
      en: "Built a cloud-based IoT pipeline that streams real-time weather data through Azure services into interactive Power BI dashboards, enabling end-to-end data ingestion, processing, and visualization.",
      fr: "Pipeline IoT dans le cloud qui diffuse des données météo en temps réel à travers les services Azure jusqu'à des tableaux de bord Power BI interactifs, couvrant l'ingestion, le traitement et la visualisation de bout en bout.",
    },
    pipeline: {
      en: ["Weather Source", "IoT Edge", "Azure Hub", "Stream Analytics", "Power BI"],
      fr: ["Source météo", "IoT Edge", "Azure Hub", "Stream Analytics", "Power BI"],
    },
    tech: ["Azure IoT Hub", "Stream Analytics", "Power BI", "Docker", "Python", "OpenWeather API"],
    github: "https://github.com/hajaryaz/Real-time-weather-telemetry-with-Azure",
    collab: true,
  },
  {
    num: "04",
    type: { en: "Full-Stack · Spring Boot · Academic Platform", fr: "Full-Stack · Spring Boot · Plateforme académique" },
    title: { en: "Academic Project Management Platform", fr: "Plateforme de gestion des projets académiques" },
    desc: {
      en: "Developed a Spring Boot platform that automates project supervision, jury assignment, defense scheduling, and administrative document generation.",
      fr: "Plateforme Spring Boot qui automatise l'encadrement des projets, l'affectation des jurys, la planification des soutenances et la génération des documents administratifs.",
    },
    pipeline: {
      en: ["Project Submission", "Supervisor Assignment", "Jury Composition", "Defense Scheduling", "Evaluation"],
      fr: ["Dépôt du projet", "Affectation de l'encadrant", "Composition du jury", "Planification des soutenances", "Évaluation"],
    },
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL"],
    github: "https://github.com/Marouazzz/pfe-spring",
    collab: true,
  },
  {
    num: "05",
    type: { en: "Machine Learning · Security · SQL Injection Detection", fr: "Machine Learning · Sécurité · Détection d'injections SQL" },
    title: { en: "SQL Injection Detection — ML Project", fr: "Détection d'injections SQL — Projet ML" },
    desc: {
      en: "Developing a machine learning model that detects SQL injection attacks by analyzing query patterns and classifying potentially malicious requests.",
      fr: "Développement en cours d'un modèle de machine learning qui détecte les attaques par injection SQL en analysant les motifs des requêtes et en classant les requêtes potentiellement malveillantes.",
    },
    pipeline: {
      en: ["Data Ingestion", "Feature Engineering", "ML Classification", "Attack Detection"],
      fr: ["Ingestion des données", "Feature Engineering", "Classification ML", "Détection d'attaques"],
    },
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Jupyter", "Matplotlib"],
    github: "https://github.com/hajaryaz",
    wip: true,
  },
];
