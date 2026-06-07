// ── NAV ──────────────────────────────────────────────────────────────────────
export const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

// ── ABOUT STATS ──────────────────────────────────────────────────────────────
export const STATS = [
  { num: "6",             label: "Projects" },
  { num: "4",             label: "Years Engineering" },
  { num: "Global",        label: "NASA Nominee",  small: true },
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
    emoji: "🏆",
    skill: "National Winner",
    title: "ActInSpace Hackathon — Morocco",
    desc: "Won the national edition of ActInSpace. Developed an AI-based space traffic management solution, representing Morocco at the international finals in Bordeaux.",
    img: "/assets/actin.jpg",
    img2: "/assets/actin2.png",
  },
  {
    emoji: "🎙️",
    skill: "Leadership · 3 years",
    title: "The Great Debaters Club — ENSAH",
    desc: "Member → Vice-President → Team Leader. Led sessions, organized events, and built a community of critical thinkers.",
    img: "/assets/debate.png",
    img2: "/assets/tgd1.png",
  },
  {
    emoji: "🚀",
    skill: "Collaboration under pressure",
    title: "NASA Space Apps — Global Nominee",
    desc: "Selected among top teams in a 48h international hackathon. 155 participants at 1337 Coding School (UM6P).",
    img: "/assets/nasa.png",
    img2: "/assets/nasa1.png",
  },
  {
    emoji: "🌐",
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
    desc: "Simulated IoT pipeline streaming live weather data through Azure services into Power BI dashboards — production architecture, no physical hardware needed.",
    pipeline: ["🌤️ Weather Source", "⚙️ IoT Edge", "☁️ Azure Hub", "📊 Stream Analytics", "📈 Power BI"],
    tech: ["Azure IoT Hub", "Stream Analytics", "Power BI", "Docker", "Python", "OpenWeather API"],
    github: "https://github.com/hajaryaz/Real-time-weather-telemetry-with-Azure",
  },
  {
    num: "02",
    type: "ETL · Web Scraping · Data Analysis",
    title: "Tech Skills Demand Analyzer — ETL Pipeline",
    desc: "Scrapes LinkedIn job listings to identify which tech skills are most in-demand. Identifies 50+ skills across AI/ML, Cloud, and Languages. Loads into PostgreSQL and generates 4-chart dashboards.",
    pipeline: ["🌐 Extract", "⚙️ Transform", "🗄️ Load", "📊 Visualize"],
    tech: ["Python", "BeautifulSoup", "Pandas", "PostgreSQL", "Regex", "Matplotlib"],
    github: "https://github.com/hajaryaz/ETL",
  },
  {
    num: "03",
    type: "Deep Learning · NLP · Classification",
    title: "AI Human Content Detector",
    desc: "Deep learning system to detect and distinguish AI-generated vs human-generated content. Full-stack app with JavaScript frontend and Python ML backend via REST API.",
    pipeline: ["📝 Text Input", "🔍 Feature Extraction", "🤖 Deep Learning", "📊 Classification"],
    tech: ["JavaScript", "Python", "Deep Learning", "REST API", "Node.js"],
    github: "https://github.com/Marouazzz/ai_human_detector",
    collab: true,
  },
  {
    num: "04",
    type: "Full-Stack · Spring Boot · Academic Platform",
    title: "Academic Project Management Platform",
    desc: "Automates the full academic project lifecycle: supervisor assignment by domain matching, jury composition from available faculty, and defense scheduling based on availability and project criteria.",
    pipeline: ["📋 Project Submit", "🧑‍🏫 Supervisor Match", "⚖️ Jury Compose", "📅 Schedule Defense", "✅ Evaluate"],
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL"],
    github: "https://github.com/Marouazzz/pfe-spring",
    collab: true,
  },
  {
    num: "05",
    type: "Big Data · Analytics · CV Matching",
    title: "HireFlow — Job Market Analytics Platform",
    desc: "Pipeline for LinkedIn job analytics and CV-job matching using TF-IDF similarity. Interactive dashboards to visualize hiring trends and skill demand across industries.",
    pipeline: ["🔗 LinkedIn Scrape", "🔄 Airflow Pipeline", "📐 TF-IDF Match", "📊 Power BI"],
    tech: ["Python", "Airflow", "MySQL", "TF-IDF", "Docker", "Power BI"],
    github: "https://github.com/hajaryaz/HireFlow",
    collab: true,
  },
  {
    num: "06",
    type: "Machine Learning · Security · SQL Injection Detection",
    title: "SQL Injection Detection — ML Project",
    desc: "Machine learning project to detect SQL injection attacks from query patterns. Covers data preprocessing, feature engineering, model training and evaluation for real-world security use cases.",
    pipeline: ["📥 Query Data", "🔧 Feature Eng.", "🧠 ML Model", "🔐 Classify"],
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Jupyter", "Matplotlib"],
    github: "https://github.com/hajaryaz",
    wip: true,
  },
];
