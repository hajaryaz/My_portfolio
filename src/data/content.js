// ── NAV ──────────────────────────────────────────────────────────────────────
export const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

// ── ABOUT STATS ──────────────────────────────────────────────────────────────
export const STATS = [
  { num: "6",             label: "Projects" },
  { num: "4",             label: "Years Engineering" },
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
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",               name: "C" },
    ],
  },
  {
    title: "Frontend",
    color: "",
    items: [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",  name: "React" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",  name: "HTML" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",    name: "CSS" },
    ],
  },
  {
    title: "Backend",
    color: "grn",
    items: [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",  name: "Spring Boot" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", name: "Laravel" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",       name: "Java EE" },
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
    desc: "Won the national edition of ActInSpace. Developed an AI-based space traffic management solution, representing Morocco at the international finals in Bordeaux.",
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

// ── PROJECTS ──────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    num: "01",
    type: "Cloud · IoT · Real-Time Backend",
    title: "Real-Time Cloud-IoT Weather Telemetry Platform",
    desc: "Built a cloud-based IoT pipeline that streams real-time weather data through Azure services into interactive Power BI dashboards, enabling end-to-end data ingestion, processing, and visualization.",
    pipeline: ["Weather Source", "IoT Edge", "Azure Hub", "Stream Analytics", "Power BI"],
    tech: ["Azure IoT Hub", "Stream Analytics", "Power BI", "Docker", "Python", "OpenWeather API"],
    github: "https://github.com/hajaryaz/Real-time-weather-telemetry-with-Azure",
    collab: true,
  },
  {
    num: "02",
    type: "ETL · Web Scraping · Data Analysis",
    title: "Tech Skills Demand Analyzer — ETL Pipeline",
    desc: "Designed an ETL pipeline that extracts LinkedIn job data, identifies 50+ in-demand technical skills, stores results in PostgreSQL, and generates dashboards for job market analysis.",
    pipeline: ["Data Extraction", "Data Transform", "Data Loading", "Visualization"],
    tech: ["Python", "BeautifulSoup", "Pandas", "PostgreSQL", "Regex", "Matplotlib"],
    github: "https://github.com/hajaryaz/ETL",
  },
  {
    num: "03",
    type: "Deep Learning · NLP · Classification",
    title: "AI Human Content Detector",
    desc: "Collaborated on a full-stack application that uses machine learning models to classify AI-generated and human-written content through an interactive web interface.",
    pipeline: ["Text Input", "Feature Extraction", "Deep Learning", "Classification"],
    tech: ["JavaScript", "Python", "Deep Learning", "REST API", "Node.js"],
    github: "https://github.com/Marouazzz/ai_human_detector",
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
    type: "Big Data · Analytics · CV Matching",
    title: "HireFlow — Job Market Analytics Platform",
    desc: "Built a job analytics platform that processes 700+ job listings daily and matches CVs to opportunities using TF-IDF similarity, providing insights into hiring trends and skill demand.",
    pipeline: ["Data Extraction", "Pipeline Processing", "CV Matching", "Analytics Dashboard"],
    tech: ["Python", "Airflow", "MySQL", "TF-IDF", "Docker", "Power BI"],
    github: "https://github.com/hajaryaz/HireFlow",
    collab: true,
  },
  {
    num: "06",
    type: "Machine Learning · Security · SQL Injection Detection",
    title: "SQL Injection Detection — ML Project",
    desc: "Developing a machine learning model that detects SQL injection attacks by analyzing query patterns and classifying potentially malicious requests.",
    pipeline: ["Data Ingestion", "Feature Engineering", "ML Classification", "Attack Detection"],
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Jupyter", "Matplotlib"],
    github: "https://github.com/hajaryaz",
    wip: true,
  },
];
