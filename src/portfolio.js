/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Divyanshu Dubey's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Divyanshu Dubey Portfolio",
    type: "website",
    url: "https://github.com/Divyanshu1Dubey",
  },
};

//Home Page
const greeting = {
  title: "Divyanshu Dubey",
  logo_name: "DivyanshuDubey",
  nickname: "Divyanshu Dubey",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "Divyanshu_Dubey_Resume.pdf",
  portfolio_repository: "https://github.com/Divyanshu1Dubey",
  githubProfile: "https://github.com/Divyanshu1Dubey",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Divyanshu1Dubey",
  // linkedin: "https://www.linkedin.com/in/divyanshu1dubey",
  // gmail: "divyanshudubey2712@gmail.com",
  // gitlab: "",
  // facebook: "",
  // twitter: "",
  // instagram: ""

  {
    name: "Github",
    link: "https://github.com/Divyanshu1Dubey",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/divyanshu1dubey",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:divyanshudubey2712@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Django & Python",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "WordPress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#21759B",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Technology, Madras",
      subtitle: "Bachelors in Data Science and Programming",
      logo_path: "iitm-logo-new.png",
      alt_name: "IIT Madras",
      duration: "2023 - 2027",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ TPC (Training And Placement Cell Coordinator).",
      ],
      website_link: "https://www.iitm.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Intel Unnati Industrial Training",
      subtitle: "- Elite Student Cohort",
      logo_path: "intel_logo.jpg",
      certificate_link: "",
      alt_name: "Intel",
      color_code: "#0071C599",
    },
    {
      title: "Smart India Hackathon (SIH)",
      subtitle: "- College Finalist",
      logo_path: "google_logo.png",
      certificate_link: "",
      alt_name: "SIH",
      color_code: "#4285F499",
    },
    {
      title: "JEE Advanced & Mains",
      subtitle: "- 96%ile Overall, 98.14 in Math",
      logo_path: "iitm-logo.png",
      certificate_link: "",
      alt_name: "JEE",
      color_code: "#8C151599",
    },
    {
      title: "VITEEE AIR 7123",
      subtitle: "- Among 2,00,000+ candidates",
      logo_path: "google_logo.png",
      certificate_link: "",
      alt_name: "VITEEE",
      color_code: "#0C9D5899",
    },
    {
      title: "Gold Medalist",
      subtitle: "- International Olympiad of Science",
      logo_path: "google_logo.png",
      certificate_link: "",
      alt_name: "Olympiad",
      color_code: "#FFBB0099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Bachelors in Data Science (IIT Madras) with a strong foundation in AI, predictive modeling, and web development. Research Intern at the Micro-Nano R&D Centre, freelance web developer, and tech-driven initiative leader.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Tech & Web Team Lead",
          company: "Noble Citizen Foundation",
          company_url: "https://www.noblecitizenfoundation.org/",
          logo_path: "ncf_logo.jpeg",
          duration: "Sept 2024 - Present",
          location: "Delhi, India",
          description:
            "Architected and led the end-to-end development of the foundation's website—initially built in WordPress, later migrated to Flask for greater flexibility, performance, and backend control. Integrated secure donation systems, dynamic content modules, and event automation to streamline operations and boost digital outreach.",
          color: "#0879bf",
        },
        {
          title: "Freelance Full-Stack & AI Developer",
          company: "Freelance",
          company_url: "",
          logo_path: "github_logo.png",
          duration: "2024 - Present",
          location: "Remote",
          description:
            "Worked on multiple freelance projects across AI, Agentic AI, and full-stack web development. Major projects include Mahima Medicare – a multi-role hospital ERP powering 250+ daily orders, 100+ patient appointments, and automated medical operations; and SS Tech Farming India – an AI-driven agritech platform with predictive and prescriptive analytics. Offered the role of CTO & Founding Core Team Member at SS Tech Farming India.",
          color: "#181717",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Research Intern",
          company: "Micro-Nano R&D Centre",
          company_url: "",
          logo_path: "micronano_logo.jpg",
          duration: "2024 - Present",
          location: "India",
          description:
            "Contributed to multiple CSIR-backed and academic research projects, applying advanced machine learning techniques such as GBRNN, LSTM, and SHAP across high-dimensional scientific datasets. Built and optimized ML pipelines with robust validation strategies (5-fold, 10-fold) and Bayesian hyperparameter tuning. Leveraged CST Studio Suite for simulation-driven data generation and model input extraction.",
          color: "#4285F4",
        },
        {
          title: "Intel Unnati Industrial Training",
          company: "Intel",
          company_url: "https://www.intel.com/",
          logo_path: "intel_logo.jpg",
          duration: "2024",
          location: "India",
          description:
            "Selected among top engineering talent for advanced training in AI, ML, and emerging technologies; recognized by Intel and university leadership as part of the Elite Student Cohort.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "JITSIE, IIT Madras (Tata Groups)",
          company_url: "https://about.google/",
          logo_path: "jitsie_logo.jpeg",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "2023 - PRESENT",
          location: "Work From Home",
          description:
            "Actively contributing to many opensource projects. Contributions include bug fixes, feature requests and formulating proper documentation for projects across AI, web development, and data science.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create AI and Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "calorie-burn-prediction",
      name: "Calorie Burn Prediction During Workouts Using Machine Learning: A Comparative Study of Ensemble Models",
      createdAt: "2024-11-22T00:00:00Z",
      description: "Опубликовано в Сборнике трудов 24-й Международной конференции (Пензенский государственный университет, Россия). Published in a Russian scientific journal. Compared Linear Regression, Random Forest, Gradient Boosting, and XGBoost for calorie prediction. Gradient Boosting & XGBoost achieved R² of 0.9953.",
      url: "https://elibrary.ru/item.asp?id=79703715",
    },
    {
      id: "first-call",
      name: "FIRST_CALL – AI-Powered Healthcare Assistant",
      createdAt: "2025-01-15T00:00:00Z",
      description: "An end-to-end healthcare platform integrating disease prediction (94.8% accuracy), X-ray image diagnosis, medicine recommendation, and real-time doctor–patient communication. Included pharmacy geolocation.",
      url: "https://github.com/Divyanshu1Dubey/FirstCall",
    },
    {
      id: "ai-tutor",
      name: "Intel_Unnati_AI_tutor_project1",
      createdAt: "2025-04-05T00:00:00Z",
      description: "AI-Powered Personalized Tutor System – Dynamic EdTech platform enabling real-time student performance prediction, adaptive content delivery, and PDF-based query resolution using ML, NLP, and RAG with FAISS.",
      url: "https://github.com/Divyanshu1Dubey/Intel_Unnati_AI_tutor_project1",
    },
  ],
};

// Freelance Projects - For Clients
const bigProjects = {
  title: "Freelance Projects",
  subtitle: "Websites and platforms I have built for clients",
  projects: [
    {
      image: require("./assets/images/mahi.png"),
      link: "https://mahimamedicare.co.in/",
      name: "Mahima Medicare",
      description: "Multi-role hospital ERP (Admin, Doctor, Patient, Pharmacist, Lab modules) powering 250+ daily orders, 100+ patient appointments, and automated medical operations.",
    },
    {
      image: require("./assets/images/med.png"),
      link: "https://www.meduraa.com/",
      name: "Meduraa",
      description: "Trusted & affordable platform for medical officers – courses, free tests, and comprehensive medical resources.",
    },
    {
      image: require("./assets/images/ss_te.png"),
      link: "https://sstechfarmingindia.com/",
      name: "SS Tech Farming India",
      description: "AI-driven agritech platform with predictive and prescriptive analytics, real-time decision-making, and automation.",
    },
    {
      image: require("./assets/images/nob.png"),
      link: "https://noblecitizenfoundation.org/",
      name: "Noble Citizen Foundation",
      description: "NGO website with secure donation systems, dynamic content, event automation – committed to impacting 5 million lives by 2030.",
    },
    {
      image: require("./assets/images/Window-to-Bharat.png"),
      link: "https://windowtobharat.com/",
      name: "Window to Bharat",
      description: "World-class medical care coordination platform – access internationally accredited hospitals, renowned specialists, and affordable treatments in India.",
    },
    {
      image: require("./assets/images/image.png"),
      link: "http://pathwayglobalalliance.org/en/index.html",
      name: "Pathway Global Alliance",
      description: "Global alliance platform connecting international partners, facilitating cross-border collaborations and strategic partnerships.",
    },
  ],
};

// Tech4Growth Agency
const tech4growth = {
  name: "Tech4Growth",
  tagline: "Building Technology That Drives Growth",
  description:
    "My tech agency delivering complete digital solutions \u2013 from AI agents & automation to full-stack web development, WhatsApp/Telegram bots, digital marketing, and 24/7 tech support. Trusted by 15+ clients across healthcare, education, agritech, and NGO sectors.",
  url: "https://www.tech4growth.online/",
  services: [
    { icon: "\ud83e\udd16", title: "AI Agents & Automation", desc: "Custom AI solutions that automate tasks and boost productivity" },
    { icon: "\ud83c\udf10", title: "Website Development", desc: "Modern, responsive websites that convert visitors into customers" },
    { icon: "\ud83d\udcac", title: "WhatsApp & Telegram Bots", desc: "Chatbots that handle customer queries 24/7 automatically" },
    { icon: "\ud83d\udcc8", title: "Digital Marketing", desc: "Data-driven campaigns that deliver measurable results" },
    { icon: "\ud83c\udfa8", title: "Content & Design", desc: "Stunning visuals and compelling content for your brand" },
    { icon: "\ud83d\udee0\ufe0f", title: "24/7 Tech Support", desc: "Complete technical assistance whenever you need it" },
  ],
  stats: [
    { number: "15+", label: "Happy Clients" },
    { number: "6+", label: "Projects Delivered" },
    { number: "24/7", label: "Support Available" },
    { number: "99%", label: "Satisfaction Rate" },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "prof.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, Django, Flask, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://github.com/Divyanshu1Dubey",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Ahmedabad, Maninagar",
    locality: "Maninagar",
    country: "India",
    region: "Gujarat",
    postalCode: "380008",
    streetAddress: "Maninagar, Ahmedabad",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Maninagar,+Ahmedabad,+Gujarat",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91-9601981524",
  },
};

// LinkedIn Featured Posts
const linkedInHighlights = {
  title: "Featured on LinkedIn",
  subtitle: "Selected posts from my LinkedIn profile",
  profileUrl: "https://www.linkedin.com/in/divyanshu1dubey/",
  highlights: [
    {
      type: "Post",
      title: "We didn't just launch a website. We engineered a complete digit...",
      reactions: 15,
      comments: 10,
      link: "https://www.linkedin.com/posts/techfor4growth_healthcaretech-hospitalmanagementsystem-pharmatech-ugcPost-7430658895049621504-ktDN",
    },
    {
      type: "Post",
      title: "🎓 Elite Engineering Excellence: AI Innovation That Changes...",
      reactions: 101,
      comments: 12,
      link: "https://www.linkedin.com/posts/divyanshu1dubey_intelunnati-aiinnovation-machinelearning-activity-7338969355537281025-hMvS",
    },
    {
      type: "Post",
      title: "Grateful to be trusted with responsibility....",
      reactions: 30,
      comments: 22,
      link: "https://www.linkedin.com/in/divyanshu1dubey/",
    },
    {
      type: "Post",
      title: "📚 **Hackathon Experience** ...",
      reactions: 7,
      comments: 0,
      link: "https://www.linkedin.com/in/divyanshu1dubey/",
    },
    {
      type: "Post",
      title: "🏆 Thrilled to clinch victory in the recent Hackathon! 🚀 Develope...",
      reactions: 9,
      comments: 1,
      link: "https://www.linkedin.com/in/divyanshu1dubey/",
    },
  ],
};

// Talks Section
const talkSection = {
  title: "Talks",
  subtitle: "Webinars and Speaking Engagements",
  talks: [
    {
      title: "AI in Reels vs AI in Reality",
      subtitle:
        "Youth Skill Needs Webinar Series – Session 4, organised by Noble Citizen Foundation. Speakers: Harsh Kumar & Divyanshu Dubey. 22nd February 2026, 6:00 PM – 7:00 PM on Microsoft Teams.",
      slides_url: "",
      event_url: "https://lnkd.in/g3dwvHua",
      image: "noble_speak.jpg",
    },
  ],
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  talkSection,
  bigProjects,
  linkedInHighlights,
  tech4growth,
};
