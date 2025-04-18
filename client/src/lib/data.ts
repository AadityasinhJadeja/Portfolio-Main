import {
  Experience,
  Project,
  Education,
  Certification,
  Skill,
  Interest,
  PersonalInfo,
} from './types';

export const personalInfo: PersonalInfo = {
  name: "John Doe",
  roles: ["Full Stack Developer", "UI/UX Designer", "Problem Solver"],
  email: "john@example.com",
  location: "San Francisco, CA",
  availability: "Freelance / Full-time",
  about: [
    "I'm a passionate developer with over 5 years of experience creating web and mobile applications. I specialize in building responsive, user-friendly interfaces and robust backends.",
    "When I'm not coding, you can find me hiking, reading, or exploring new coffee shops. I believe in continuous learning and pushing the boundaries of what's possible with technology."
  ],
  contactInfo: {
    location: "San Francisco, California, USA",
    email: "john@example.com",
    phone: ""
  },
  socialLinks: [
    {
      id: 1,
      name: "GitHub",
      url: "https://github.com",
      icon: "fa-github"
    },
    {
      id: 2,
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "fa-linkedin-in"
    },
    {
      id: 3,
      name: "Twitter",
      url: "https://twitter.com",
      icon: "fa-twitter"
    },
    {
      id: 4,
      name: "Dribbble",
      url: "https://dribbble.com",
      icon: "fa-dribbble"
    }
  ]
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    domain: "AI & Machine Learning",
    period: "2022 - Present",
    description: "Led development of the company's flagship product, improving performance by 40%. Managed a team of 5 developers and implemented CI/CD pipelines.",
    technologies: ["React", "Node.js", "AWS", "Docker"]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "WebSolutions Co.",
    domain: "E-commerce",
    period: "2020 - 2022",
    description: "Developed responsive web applications for various clients. Improved site performance and implemented modern UI libraries to enhance user experience.",
    technologies: ["JavaScript", "Vue.js", "SASS", "Webpack"]
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "DataTech Ltd.",
    domain: "FinTech",
    period: "2019 - 2020",
    description: "Designed and implemented scalable backend systems for financial data processing. Created API services and optimized database performance.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis"]
  },
  {
    id: 4,
    title: "Mobile Developer",
    company: "AppGenius",
    domain: "Healthcare",
    period: "2018 - 2019",
    description: "Developed mobile applications for healthcare providers. Implemented secure data handling and intuitive user interfaces for medical professionals.",
    technologies: ["React Native", "Firebase", "Redux", "REST APIs"]
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudSys",
    domain: "Infrastructure",
    period: "2017 - 2018",
    description: "Managed cloud infrastructure and deployment pipelines. Improved system reliability and reduced deployment times by implementing automation.",
    technologies: ["AWS", "Kubernetes", "Terraform", "CI/CD"]
  },
  {
    id: 6,
    title: "QA Engineer",
    company: "QualityTech",
    domain: "Software Quality",
    period: "2016 - 2017",
    description: "Developed automated testing frameworks and performed rigorous manual testing. Created comprehensive test documentation and reporting systems.",
    technologies: ["Selenium", "Jest", "Cypress", "Jenkins"]
  },
  {
    id: 7,
    title: "Junior Web Developer",
    company: "Digital Agency",
    domain: "Marketing & Advertising",
    period: "2015 - 2016",
    description: "Built and maintained websites for small businesses. Collaborated with designers to implement pixel-perfect interfaces and ensure cross-browser compatibility.",
    technologies: ["HTML", "CSS", "jQuery", "PHP"]
  },
  {
    id: 8,
    title: "Junior Developer Intern",
    company: "StartupHub",
    domain: "SaaS Tools",
    period: "2014 - 2015",
    description: "Assisted in various aspects of application development. Learned best practices in software development and collaborated with senior developers.",
    technologies: ["JavaScript", "Bootstrap", "MySQL", "Git"]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store with payment processing, inventory management, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB"],
    demoUrl: "#projects",
    codeUrl: "#projects",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application with task tracking, team collaboration, and custom reporting features.",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    demoUrl: "#projects",
    codeUrl: "#projects",
    imageUrl: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    description: "Mobile application for tracking workouts, nutrition, and progress with data visualization.",
    technologies: ["React Native", "Firebase", "Redux"],
    demoUrl: "#projects",
    codeUrl: "#projects",
    imageUrl: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    description: "Instant messaging platform with user authentication, group chats, and media sharing capabilities.",
    technologies: ["Socket.io", "React", "Express", "MongoDB"],
    demoUrl: "#projects",
    codeUrl: "#projects",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: 5,
    title: "Personal Finance Dashboard",
    description: "Financial management tool with expense tracking, budget planning, and investment monitoring features.",
    technologies: ["Angular", "D3.js", "Node.js", "MySQL"],
    demoUrl: "#projects",
    codeUrl: "#projects", 
    imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 6,
    title: "Weather Forecast App",
    description: "Location-based weather application with 7-day forecasts, radar maps, and severe weather alerts.",
    technologies: ["React", "Weather API", "Redux", "Leaflet"],
    demoUrl: "#projects",
    codeUrl: "#projects",
    imageUrl: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: 7,
    title: "Recipe Finder Application",
    description: "Culinary app that allows users to search recipes by ingredients, dietary restrictions, and preparation time.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    demoUrl: "#projects",
    codeUrl: "#projects",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 8,
    title: "Virtual Event Platform",
    description: "Online conference solution with video streaming, interactive sessions, and networking capabilities.",
    technologies: ["WebRTC", "React", "Node.js", "Redis"],
    demoUrl: "#projects",
    codeUrl: "#projects",
    imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 9,
    title: "Language Learning Platform",
    description: "Educational app with lessons, quizzes, and speech recognition for language acquisition.",
    technologies: ["React", "Express", "MongoDB", "Web Speech API"],
    demoUrl: "#projects",
    codeUrl: "#projects",
    imageUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
  },
  {
    id: 10,
    title: "Smart Home Control System",
    description: "IoT application for monitoring and controlling smart home devices with automation capabilities.",
    technologies: ["React", "Node.js", "MQTT", "Raspberry Pi"],
    demoUrl: "#projects",
    codeUrl: "#projects",
    imageUrl: "https://images.unsplash.com/photo-1558002038-2910a2020217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
];

export const educations: Education[] = [
  {
    id: 1,
    degree: "Master of Computer Science",
    institution: "Stanford University",
    period: "2014 - 2016",
    description: "Specialized in Artificial Intelligence and Machine Learning. Graduated with honors and completed a thesis on neural networks for natural language processing.",
    gpa: "3.9/4.0"
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Engineering",
    institution: "MIT",
    period: "2010 - 2014",
    description: "Studied computer architecture, algorithms, and software engineering. Participated in multiple hackathons and led the university's programming club.",
    gpa: "3.8/4.0"
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2022"
  },
  {
    id: 2,
    name: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    year: "2021"
  },
  {
    id: 3,
    name: "Certified Scrum Master",
    issuer: "Scrum Alliance",
    year: "2020"
  }
];

export const skills: Skill[] = [
  // Technical Skills (Programming Languages)
  {
    id: 1,
    name: "JavaScript",
    category: "technical"
  },
  {
    id: 2,
    name: "TypeScript",
    category: "technical"
  },
  {
    id: 3,
    name: "Python",
    category: "technical"
  },
  {
    id: 4,
    name: "Java",
    category: "technical"
  },
  {
    id: 5,
    name: "C++",
    category: "technical"
  },
  
  // Tools
  {
    id: 6,
    name: "React",
    category: "tool"
  },
  {
    id: 7,
    name: "Node.js",
    category: "tool"
  },
  {
    id: 8,
    name: "Docker",
    category: "tool"
  },
  {
    id: 9,
    name: "Git",
    category: "tool"
  },
  {
    id: 10,
    name: "VS Code",
    category: "tool"
  },
  {
    id: 11,
    name: "AWS",
    category: "tool"
  },
  
  // Core Skills
  {
    id: 12,
    name: "Machine Learning",
    category: "core"
  },
  {
    id: 13,
    name: "Generative AI",
    category: "core"
  },
  {
    id: 14,
    name: "Supervised Learning",
    category: "core"
  },
  {
    id: 15,
    name: "Computer Vision",
    category: "core"
  },
  {
    id: 16,
    name: "Natural Language Processing",
    category: "core"
  },
  {
    id: 17,
    name: "Problem Solving",
    category: "core"
  }
];

export const interests: Interest[] = [
  {
    id: 1,
    name: "Web Development",
    icon: "fa-code"
  },
  {
    id: 2,
    name: "Mobile Apps",
    icon: "fa-mobile-alt"
  },
  {
    id: 3,
    name: "UI/UX Design",
    icon: "fa-paint-brush"
  },
  {
    id: 4,
    name: "Databases",
    icon: "fa-database"
  },
  {
    id: 5,
    name: "Backend Systems",
    icon: "fa-server"
  },
  {
    id: 6,
    name: "Cloud Computing",
    icon: "fa-cloud"
  }
];
