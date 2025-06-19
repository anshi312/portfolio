/* Change this file to show your personal portfolio content */

export const greetings = {
  name: "Anshi Shah",
  title: "Hi, I'm Anshi",
  description:
    "I'm a Computer Engineering graduate student at NYU with a passion for machine learning, MLOps, and AI-powered systems. I love solving real-world problems using technology and building scalable solutions.",
  resumeLink: "https://drive.google.com/YOUR_RESUME_LINK",
};

export const openSource = {
  githubUserName: "anshi312",
};

export const contact = {
  email: "anshi.shah31@gmail.com",
};

export const socialLinks = {
  github: "https://github.com/anshi312",
  linkedin: "https://linkedin.com/in/shah-anshi",
};

export const skillsSection = {
  title: "Skills",
  subTitle: "Languages, Frameworks, Tools & Platforms",
  skills: [
    "⚡ Proficient in building ML models using XGBoost, TensorFlow, and MLflow",
    "⚡ Experience with cloud services like GCP and Chameleon Cloud",
    "⚡ Skilled in full-stack dev: React, FastAPI, Flutter, Docker, Prometheus, Grafana",
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "logos:python" },
    { skillName: "C++", fontAwesomeClassname: "logos:c-plusplus" },
    { skillName: "TensorFlow", fontAwesomeClassname: "logos:tensorflow" },
    { skillName: "Docker", fontAwesomeClassname: "logos:docker-icon" },
    { skillName: "FastAPI", fontAwesomeClassname: "simple-icons:fastapi" },
    { skillName: "Flutter", fontAwesomeClassname: "logos:flutter" },
    { skillName: "React", fontAwesomeClassname: "logos:react" },
    { skillName: "SQL", fontAwesomeClassname: "logos:mysql" },
    { skillName: "GitHub", fontAwesomeClassname: "mdi:github" },
  ],
};

export const educationInfo = [
  {
    schoolName: "New York University",
    subHeader: "M.S. in Computer Engineering",
    duration: "Aug 2024 – May 2026",
    desc: "Relevant Coursework: Machine Learning, MLOps, Deep Learning, Data Science for Business",
    grade: "GPA: 3.33/4.0",
  },
  {
    schoolName: "Ahmedabad University",
    subHeader: "B.Tech in Computer Science and Engineering",
    duration: "Aug 2020 – May 2024",
    desc: "Minor in Design | Honors: Certificate of Scholastic Distinction for Academic Excellence",
  },
];

export const experience = [
  {
    role: "AI Intern",
    company: "Intervision Systems",
    companyLogo: "https://upload.wikimedia.org/...", // You can use a logo URL or leave it blank
    date: "May 2025 – Present",
    desc: [
      "Developed an enterprise-scale AI assistant using Amazon Q.",
      "Integrated Q with platforms like Salesforce, ServiceNow, and Slack.",
      "Built a prototype chatbot with React frontend for conversational validation.",
    ],
  },
  {
    role: "Frontend Engineer Intern",
    company: "ODE INFINITY",
    companyLogo: "https://upload.wikimedia.org/...", // Optional
    date: "May 2023 – Jul 2023",
    desc: [
      "Built privacy-focused Flutter features improving user retention by 15%.",
      "Improved UI consistency from Figma designs.",
      "Boosted client's SEO score using analytics tools and on-page optimization.",
    ],
  },
];

export const projects = [
  {
    name: "NYC Taxi Demand Prediction",
    desc: "Forecasted hourly taxi demand using MLOps on Chameleon Cloud with weather & flight data. Achieved 8% higher accuracy using XGBoost and MLflow tracking.",
    github: "https://github.com/anshi312", // Replace with actual link
  },
  {
    name: "Jailbreaking Deep Models",
    desc: "Implemented adversarial attacks on ResNet-34, reducing model accuracy by up to 75%. Visualized vulnerabilities using OpenCV and Matplotlib.",
    github: "https://github.com/anshi312", // Replace with actual link
  },
];

export const achievementSection = {
  title: "Certifications",
  achievementsCards: [
    {
      title: "Certificate of Scholastic Distinction",
      subtitle: "Ahmedabad University academic excellence honor.",
      image: "/assets/images/award.svg", // Use any generic image or badge
    },
    {
      title: "Google Analytics & SEO Tools",
      subtitle: "Used Semrush, Ubersuggest, GA to boost SEO by 40%",
      image: "/assets/images/seo.svg",
    },
  ],
};

export const leadership = {
  title: "Leadership & Extracurriculars",
  content: [
    "Organized a 36-hour inter-university hackathon with 1100+ attendees.",
    "Led logistics, marketing, and managed 100+ submissions evaluated by industry professionals.",
  ],
};
