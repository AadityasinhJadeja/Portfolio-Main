import {
  Experience,
  Project,
  Education,
  Certification,
  TechnicalSkill,
  ProfessionalSkill,
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
    phone: "+1 (123) 456-7890"
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
    period: "2020 - Present",
    description: "Led development of the company's flagship product, improving performance by 40%. Managed a team of 5 developers and implemented CI/CD pipelines.",
    technologies: ["React", "Node.js", "AWS", "Docker"]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "WebSolutions Co.",
    period: "2018 - 2020",
    description: "Developed responsive web applications for various clients. Improved site performance and implemented modern UI libraries to enhance user experience.",
    technologies: ["JavaScript", "Vue.js", "SASS", "Webpack"]
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "Digital Agency Ltd.",
    period: "2016 - 2018",
    description: "Built and maintained websites for small businesses. Collaborated with designers to implement pixel-perfect interfaces and ensure cross-browser compatibility.",
    technologies: ["HTML", "CSS", "jQuery", "PHP"]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store with payment processing, inventory management, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    codeUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application with task tracking, team collaboration, and custom reporting features.",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    demoUrl: "#",
    codeUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    description: "Mobile application for tracking workouts, nutrition, and progress with data visualization.",
    technologies: ["React Native", "Firebase", "Redux"],
    demoUrl: "#",
    codeUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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

export const technicalSkills: TechnicalSkill[] = [
  {
    id: 1,
    name: "JavaScript",
    percentage: 90
  },
  {
    id: 2,
    name: "React",
    percentage: 85
  },
  {
    id: 3,
    name: "Node.js",
    percentage: 80
  },
  {
    id: 4,
    name: "HTML/CSS",
    percentage: 95
  },
  {
    id: 5,
    name: "TypeScript",
    percentage: 75
  }
];

export const professionalSkills: ProfessionalSkill[] = [
  {
    id: 1,
    name: "Problem Solving",
    percentage: 80
  },
  {
    id: 2,
    name: "Teamwork",
    percentage: 90
  },
  {
    id: 3,
    name: "Project Management",
    percentage: 75
  },
  {
    id: 4,
    name: "Communication",
    percentage: 85
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
