/* ========= PERSONAL PORTFOLIO CONFIG ========= */

import emoji from "react-easy-emoji";

/* Splash Screen */
const splashScreen = {
  enabled: true,
  animation: require("./assets/lottie/splashAnimation.json"),
  duration: 2000
};

/* Illustration */
const illustration = {
  animated: true
};

/* ========= GREETING ========= */
const greeting = {
  username: "Vishvrajsinh Solanki",
  title: "I Build Intelligent Systems with Data",
  subTitle: emoji(
    "Building intelligent systems that turn raw data into real-world insights — currently pursuing B.Tech in AI & Data Science."
  ),
  proofPoints: [
    "Built an autonomous warehouse AGV with real-time navigation and AI optimization",
    "Designed a campus library Decision Support System with threshold logic and time-series analysis",
    "Applied K-Means clustering to mine household electricity consumption patterns",
    "Developed classification models to analyze attendance-learning quality correlations"
  ],
  resumeLink: "https://drive.google.com/uc?export=download&id=1WfBFinKNKhiU2nKbQWyaQWXXwQ6CE4WG",
  displayGreeting: true,
  stats: [
    { emoji: "🚀", text: "4 Projects" },
    { emoji: "💼", text: "1 Internship" },
    { emoji: "🎓", text: "2025 – 2029" }
  ]
};

/* ========= ABOUT ME ========= */
const aboutSection = {
  title: "About Me",
  content: "First-year B.Tech student at ADIT studying Artificial Intelligence and Data Science. I am drawn to problems where software meets the physical world — autonomous robots, real-time control systems, and intelligent pipelines that turn raw data into decisions. Currently building TrackBot and actively looking for an internship where I can apply the same thinking at scale.",
  display: true
};

/* ========= SOCIAL LINKS ========= */
const socialMediaLinks = {
  github: "https://github.com/vishvrajsolanki-dev",
  linkedin: "https://www.linkedin.com/in/vishvrajsinh-solanki-1396ab37a/",
  gmail: "vishvrajsolanki0207@gmail.com",
  instagram: "https://www.instagram.com/vishvraj_9091",
  twitter: "https://x.com/SolankiVis42411",
  kaggle: "https://www.kaggle.com/vishvrajsolanki",
  kakao: "https://kakao.com/", // Placeholder as requested to keep all
  whatsapp: "https://wa.me/919328767814",
  display: true
};

/* ========= CORE EXPERTISE ========= */
const skillsSection = {
  title: "Core Expertise",
  subTitle:
    "Focused on building intelligent, data-driven systems with real-world impact",
  skillCategories: [
    {
      category: "AI & Machine Learning",
      icon: "fas fa-brain",
      description: "Neural Networks, NLP, Generative AI, Model Tuning & Evaluation"
    },
    {
      category: "Data Science & Analysis",
      icon: "fas fa-chart-line",
      description: "EDA, Statistical Modeling, Feature Engineering, Interpretability & Storytelling"
    },
    {
      category: "Intelligent Systems & Robotics",
      icon: "fas fa-project-diagram",
      description: "Decision Support Systems, Robotics Integration, Real-time Automation & Embedded Control"
    },
    {
      category: "Programming & Data Structures",
      icon: "fas fa-code",
      description: "Python (Pandas, Scikit-learn), C/C++, SQL, Algorithm Optimization"
    },
    {
      category: "Frontend, Backend & Design",
      icon: "fas fa-layer-group",
      description: "React Basics, Flask API, UI/UX Design (Figma), Responsive Web Design"
    },
    {
      category: "Development & Data Tools",
      icon: "fas fa-tools",
      description: "Git/GitHub, VS Code, Matplotlib, Seaborn, Linux Basics"
    }
  ],
  radarData: [
    { subject: "AI & ML", A: 85, fullMark: 100 },
    { subject: "Data Science", A: 88, fullMark: 100 },
    { subject: "Intelligent Systems", A: 80, fullMark: 100 },
    { subject: "Programming", A: 82, fullMark: 100 },
    { subject: "Visualization", A: 78, fullMark: 100 },
    { subject: "Data Tools", A: 75, fullMark: 100 }
  ],
  display: true
};

/* ========= EDUCATION ========= */
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "AD Patel Institute of Technology",
      logo: require("./assets/images/adpatel.png"),
      subHeader: "B.Tech – Artificial Intelligence & Data Science",
      duration: "2025 – 2029",
      desc: "Undergraduate program with strong emphasis on data analysis, machine learning fundamentals, and real-world datasets.",
      descBullets: [
        "Built 4 end-to-end ML and embedded systems projects in first year",
        "Strong practical foundation in Python, data structures, and real-world datasets"
      ]
    }
  ]
};

/* ========= PROFICIENCY ========= */
const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

/* ========= WORK EXPERIENCE ========= */
const workExperiences = {
  display: true,
  experience: [
    {
      role: "AI & Data Science Intern",
      company: "My Job Grow",
      companylogo: require("./assets/images/myjobgrow.png"),
      date: "Nov 2025 – Feb 2026",
      desc: "Applied AI and Data Science methodologies to structured datasets with 10,000+ rows across multiple real-world domains.",
      descBullets: [
        "Performed EDA and statistical profiling on datasets with 10k+ records, identifying 15+ feature correlations",
        "Built and tuned classification models achieving 78% accuracy on imbalanced datasets",
        "Developed reusable data preprocessing pipelines reducing manual cleaning time by 60%",
        "Applied feature engineering techniques (binning, encoding, scaling) improving model F1-score by ~15%"
      ],
      color: "#7c3aed"
    }
  ]
};

/* ========= OPEN SOURCE (REQUIRED PLACEHOLDER – DO NOT REMOVE) ========= */
const openSource = {
  showGithubProfile: false,
  display: false
};

/* ========= PROJECTS ========= */
const bigProjects = {
  title: "Projects",
  subtitle: "Applied AI, Data Science & Robotics Projects — with visual proof of work",
  projects: [
    {
      projectName: "TrackBot: Autonomous Warehouse AGV",
      featured: true,
      images: [
        { src: require("./assets/images/projects/trackbot_robot_iso.png"), alt: "TrackBot AGV - Isometric view showing robotic arm, mecanum wheels, LiDAR sensor, and chassis" },
        { src: require("./assets/images/projects/trackbot_exploded.png"), alt: "TrackBot Exploded View - Layer-by-layer architecture from sensors to mobility" },
        { src: require("./assets/images/projects/trackbot_topview_blueprint.png"), alt: "TrackBot Top View - Blueprint showing path planning, sensors, and movement directions" },
        { src: require("./assets/images/projects/trackbot_architecture.png"), alt: "TrackBot System Architecture - 3-layer diagram: Hardware, Control, and AI & Data" },
        { src: require("./assets/images/projects/trackbot_mission_control.png"), alt: "TrackBot Mission Control - Dark tech dashboard with facility map and system monitor" },
        { src: require("./assets/images/projects/trackbot_dashboard.png"), alt: "TrackBot Control Center - Real-time telemetry, battery status, and task queue" }
      ],
      highlightLine: "Built an autonomous warehouse robot with real-time navigation, AI-based optimization, and a live monitoring dashboard simulating industrial AGV systems.",
      problem: "Traditional logistics and warehouse monitoring systems are often manual, prone to errors, and lack real-time predictive capabilities for autonomous fleet management.",
      approach: "Built a sophisticated system integrating high-performance robotics hardware with an AI-driven data pipeline. Used a multi-threaded architecture to handle real-time sensor streams and telemetry data simultaneously.",
      techStack: [
        "C/C++",
        "Python",
        "ESP-IDF",
        "Data Analytics",
        "Robotics Control",
        "Task Prediction",
        "Battery Analytics"
      ],
      keyFeatures: [
        "Real-time Telemetry Dashboard with live data visualization",
        "Autonomous Navigation with obstacle avoidance logic",
        "AI Task Prioritization for optimized warehouse routing",
        "Battery Health Analytics & Predictive Maintenance alerts",
        "Bidirectional Fleet Communication via custom protocols"
      ],
      results: "Successfully developed a prototype that reduced manual intervention by 60% and achieved a 78% accuracy in autonomous navigation tasks. The system demonstrated robust performance in simulated warehouse environments.",
      impact: "78% Accuracy, 60% Time Saved",
      footerLink: [{ name: "GitHub", url: "https://github.com/vishvrajdev" }]
    },
    {
      projectName: "Campus Library Resource Allocation DSS",
      images: [
        { src: require("./assets/images/projects/library_dss_chart.png"), alt: "Library Occupancy Analysis - Hourly patterns with color-coded recommendations" }
      ],
      problem: "University libraries face challenges in optimizing seating, staffing, and operating hours due to fluctuating student occupancy throughout the day.",
      approach: "Designed a decision support system using hourly occupancy data. Implemented conservative threshold logic and time-of-day analysis to recommend operational actions like extending hours, increasing seating, or monitoring usage patterns.",
      techStack: ["Python", "Pandas", "NumPy", "Decision Logic", "Data Analysis"],
      results: "Generated actionable recommendations for 3 distinct time periods. System identified peak hours requiring 40%+ more seating and off-peak hours suitable for reduced operations.",
      impact: "40% Seating Optimization",
      footerLink: [{ name: "GitHub", url: "https://github.com/vishvrajdev" }]
    },
    {
      projectName: "Electricity Consumption Pattern Mining",
      images: [
        { src: require("./assets/images/projects/electricity_clustering.png"), alt: "K-Means Clustering - 3 distinct household consumption pattern clusters" }
      ],
      problem: "Utility providers and households lack visibility into distinct consumption behaviors, making it difficult to design targeted energy-saving programs.",
      approach: "Applied time-series aggregation and K-Means clustering on household electricity data. Performed feature engineering to extract temporal patterns and interpreted cluster characteristics.",
      techStack: ["Python", "Pandas", "Scikit-learn", "K-Means", "Matplotlib"],
      results: "Identified 3 distinct consumption profiles: high-usage evenings, steady daytime, and low-consumption patterns. Clusters enabled targeted energy-saving recommendations.",
      impact: "3 Distinct Profiles Identified",
      footerLink: [{ name: "GitHub", url: "https://github.com/vishvrajdev" }]
    },
    {
      projectName: "Attendance vs Learning Quality Analysis",
      images: [
        { src: require("./assets/images/projects/attendance_analysis.png"), alt: "Attendance-Learning Quality Correlation - Scatter plot with classification threshold" }
      ],
      problem: "Educational institutions assume higher attendance equals better learning, but lack data-driven validation of this correlation.",
      approach: "Analyzed academic attendance records alongside performance metrics. Designed a custom learning quality score, performed EDA, and applied classification models to validate the attendance-performance relationship.",
      techStack: ["Python", "Pandas", "Scikit-learn", "Classification", "Seaborn"],
      results: "Found that attendance alone explains ~62% of learning quality variance. Identified a threshold attendance rate below which performance drops significantly.",
      impact: "62% Variance Explained",
      footerLink: [{ name: "GitHub", url: "https://github.com/vishvrajdev" }]
    },
    {
      projectName: "View All Projects",
      isCTA: true,
      images: [
        { src: require("./assets/images/developerActivity.svg"), alt: "More projects on GitHub" }
      ],
      problem: "See complete source code, notebooks, and documentation",
      approach: "Check out my GitHub profile for all open-source contributions and research notebooks.",
      techStack: ["Git", "GitHub", "Open Source"],
      results: "Dozens of repositories covering NLP, Computer Vision, and Robotics.",
      impact: "View All on GitHub",
      footerLink: [{ name: "View GitHub Profile", url: "https://github.com/vishvrajdev" }]
    }
  ],
  display: true
};

/* ========= CERTIFICATIONS ========= */
const achievementSection = {
  title: "Certifications & Training",
  subtitle: "Verified academic and internship credentials",
  achievementsCards: [
    {
      title: "AI & Data Science Training",
      subtitle: "My Job Grow (2025)",
      image: require("./assets/images/myjobgrow.png"),
      imageAlt: "My Job Grow Logo",
      descBullets: [
        "Worked on 10,000+ row real-world datasets across multiple domains",
        "Built end-to-end ML pipelines from raw data to model evaluation"
      ],
      footerLink: []
    },
    {
      title: "AI Internship Program",
      subtitle: "IIT Hyderabad (2025)",
      image: require("./assets/images/iith.png"),
      imageAlt: "IIT Hyderabad Logo",
      descBullets: [
        "Explored applied AI problem-solving under structured IIT curriculum",
        "Completed structured modules covering real-world AI applications"
      ],
      footerLink: []
    },
    {
      title: "Introduction to Generative AI",
      subtitle: "Google Cloud (2025)",
      image: require("./assets/images/googlecloud.png"),
      imageAlt: "Google Cloud Logo",
      descBullets: [
        "Completed labs covering LLM fundamentals and Vertex AI basics",
        "Explored prompt engineering and generative AI use cases"
      ],
      footerLink: []
    },
    {
      title: "CVM Hackathon 2026",
      subtitle: "(March 2026)",
      image: require("./assets/images/adpatel.png"),
      imageAlt: "ADIT Logo",
      institution: "A. D. Patel Institute of Technology",
      descBullets: [
        "Participated in university-level hackathon under SSIP & IIC",
        "Collaborated in a team to build and present a working solution within 24 hours"
      ],
      footerLink: []
    }
  ],
  display: true
};

/* ========= DISABLED SECTIONS ========= */
const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };
const twitterDetails = { display: false };

/* ========= RESUME ========= */
const resumeSection = {
  display: true,
  resumeLink: require("./assets/files/Vishvrajsinh_Solanki_Resume.pdf")
};

/* ========= CONTACT ========= */
const contactInfo = {
  title: "Let's Work Together",
  subtitle: "Actively seeking internships in AI and Data Science. Available for immediate opportunities — let's connect.",
  availabilityBadge: "Available for Internships",
  email_address: "vishvrajsolanki0207@gmail.com"
};

const isHireable = true;

/* ========= EXPORTS ========= */
export {
  illustration,
  greeting,
  aboutSection,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
