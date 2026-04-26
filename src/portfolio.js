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
    "AI & Data Science Undergrad — turning raw data into real-world insights through ML, analytics, and decision support systems"
  ),
  proofPoints: [
    "Built an autonomous warehouse AGV with real-time navigation & AI optimization",
    "Designed a campus library Decision Support System with threshold logic & time-series analysis",
    "Applied K-Means clustering to mine household electricity consumption patterns",
    "Developed classification models to analyze attendance-learning quality correlations"
  ],
  resumeLink: "https://drive.google.com/uc?export=download&id=1WfBFinKNKhiU2nKbQWyaQWXXwQ6CE4WG",
  displayGreeting: true
};

/* ========= SOCIAL LINKS ========= */
const socialMediaLinks = {
  github: "https://github.com/vishvrajsolanki-dev",
  linkedin: "https://www.linkedin.com/in/vishvrajsinh-solanki-1396ab37a/",
  gmail: "vishvrajsolanki0207@gmail.com",
  instagram: "https://www.instagram.com/vishvraj_9091",
  twitter: "https://x.com/SolankiVis42411",
  kaggle: "https://www.kaggle.com/vishvrajsolanki",
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
      category: "Machine Learning",
      icon: "fas fa-brain",
      description: "Classification, Clustering (K-Means), Model Evaluation & Selection"
    },
    {
      category: "Data Analysis",
      icon: "fas fa-chart-bar",
      description: "EDA, Feature Engineering, Statistical Testing & Interpretation"
    },
    {
      category: "Intelligent Systems",
      icon: "fas fa-robot",
      description: "Decision Support Systems, Robotics Integration, Real-time Automation"
    },
    {
      category: "Programming",
      icon: "fas fa-code",
      description: "Python (Pandas, NumPy, Scikit-learn), C/C++, SQL"
    },
    {
      category: "Visualization",
      icon: "fas fa-chart-line",
      description: "Matplotlib, Seaborn, Dashboard Design (HTML/CSS/JS)"
    },
    {
      category: "Development Tools",
      icon: "fas fa-tools",
      description: "Git & GitHub, Jupyter Notebook, VS Code, ESP-IDF"
    }
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
        "Completed multiple applied data science projects",
        "Strong foundation in Python, statistics, and ML basics"
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
        "Applied feature engineering techniques (binning, encoding, scaling) improving model F1-scores"
      ]
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
      projectName: "TrackBot 1 — Autonomous Warehouse AGV",
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
      problem: "Warehouse logistics rely on manual tracking and rigid automation. Traditional systems lack adaptive navigation and real-time decision-making, resulting in inefficiencies and downtime.",
      approach: "Designed a multi-layer autonomous system integrating A* pathfinding, odometry, RFID correction, and omnidirectional movement using mecanum wheels. Implemented obstacle detection with dynamic path replanning, payload handling via servo gripper with sensor feedback, and a live WebSocket-powered dashboard for real-time telemetry and control.",
      techStack: ["ESP32-S3", "C/C++", "Python", "Pandas", "Scikit-learn", "WebSocket", "HTML/CSS/JS", "PID Control", "A* Algorithm"],
      keyFeatures: [
        "Autonomous navigation using A*, odometry, and RFID correction",
        "Omnidirectional movement using mecanum wheels",
        "Real-time obstacle detection and dynamic path replanning",
        "Payload handling using servo gripper and sensors",
        "Live dashboard with telemetry using WebSocket",
        "AI-based optimization (task prediction, battery analysis)"
      ],
      results: "Demonstrates real-world warehouse automation and Industry 4.0 logistics workflows. Integrates robotics, AI, and data systems into a cohesive autonomous platform.",
      footerLink: [{ name: "GitHub", url: "" }]
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
      footerLink: [{ name: "GitHub", url: "https://github.com/vishvrajsolanki-dev/Campus-Resource-DSS" }]
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
      footerLink: [{ name: "GitHub", url: "https://github.com/vishvrajsolanki-dev/electricityconsumption-pattern-mining" }]
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
      footerLink: [{ name: "GitHub", url: "https://github.com/vishvrajsolanki-dev/attendance-learning-quality-analysis" }]
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
        "Learned fundamentals of data analysis and ML workflows",
        "Gained hands-on experience with real datasets"
      ],
      footerLink: []
    },
    {
      title: "AI Internship Program",
      subtitle: "IIT Hyderabad (2025)",
      image: require("./assets/images/iith.png"),
      imageAlt: "IIT Hyderabad Logo",
      descBullets: [
        "Exposure to applied AI concepts and real-world problem solving",
        "Worked on structured learning modules and projects"
      ],
      footerLink: []
    },
    {
      title: "Introduction to Generative AI",
      subtitle: "Google Cloud (2025)",
      image: require("./assets/images/googlecloud.png"),
      imageAlt: "Google Cloud Logo",
      descBullets: [
        "Learned basics of LLMs and generative AI systems",
        "Explored real-world AI applications and use cases"
      ],
      footerLink: []
    },
    {
      title: "CVM University Hackathon 2026",
      subtitle: "A. D. Patel Institute of Technology (March 2026)",
      image: require("./assets/images/adpatel.png"),
      imageAlt: "ADIT Logo",
      descBullets: [
        "Participated in university-level hackathon under SSIP & IIC",
        "Collaborated in a team to solve real-world problem statements"
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
  subtitle: "Actively seeking internships in AI & Data Science. Available for immediate opportunities — let's connect!",
  availabilityBadge: "Available for Internships",
  number: "+91 93287 67814",
  email_address: "vishvrajsolanki0207@gmail.com"
};

const isHireable = true;

/* ========= EXPORTS ========= */
export {
  illustration,
  greeting,
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
