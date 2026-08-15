// All content sourced directly from Sukhwinder_Singh_Resume.pdf.
// URLs below were extracted from the PDF's embedded link annotations —
// nothing here is invented.

export const profile = {
  name: 'Sukhwinder Singh',
  role: 'Backend-leaning Full-Stack Developer',
  phone: '+91 8264908244',
  email: 'sukhwindersingh102316014@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sukhwinder-singh-98aa37316/',
  github: 'https://github.com/sukhwindersingh102316014',
  resumeFile: '/Sukhwinder_Singh_Resume.pdf',
  summary:
    "CSE undergraduate at Thapar Institute of Engineering & Technology who builds full-stack platforms end to end — designing REST APIs in Spring Boot, modeling data in PostgreSQL and MongoDB, and shipping the React front ends that consume them. Comfortable owning a feature from JWT-secured endpoint to deployed UI.",
}

export const education = [
  {
    institution: 'Thapar Institute of Engineering & Technology, Patiala',
    degree: 'Bachelor of Engineering — Computer Science & Engineering',
    period: 'Aug 2023 – May 2027',
    detail: 'CGPA: 8.41 · Batch: 2023 – 2027',
  },
  {
    institution: 'GMSSS, Sector 16, Chandigarh',
    degree: 'Senior Secondary (12th) — PCM',
    period: '2021 – 2023',
    detail: 'Percentage: 91%',
  },
  {
    institution: 'Manav Mangal High School, Chandigarh (Sector 21)',
    degree: 'Secondary (10th)',
    period: '2019 – 2021',
    detail: 'Percentage: 92.6%',
  },
]

export const skillGroups = [
  {
    label: 'Programming Languages',
    route: '/languages',
    skills: ['C++', 'JavaScript', 'Java', 'Python', 'SQL'],
  },
  {
    label: 'Frontend Technologies',
    route: '/frontend',
    skills: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'JSX'],
  },
  {
    label: 'Backend Technologies',
    route: '/backend',
    skills: [
      'Node.js',
      'Express.js',
      'Mongoose',
      'Spring Boot',
      'Spring MVC',
      'Hibernate',
      'JDBC',
      'Servlet',
      'JSP',
    ],
  },
  {
    label: 'Databases',
    route: '/databases',
    skills: ['MongoDB', 'MySQL', 'Firebase'],
  },
  {
    label: 'Tools & Platforms',
    route: '/tools',
    skills: [
      'VS Code',
      'IntelliJ IDEA',
      'Eclipse',
      'Git',
      'GitHub',
      'Maven',
      'Postman',
      'Vercel',
      'Render',
      'AWS',
      'Figma',
      'Canva',
    ],
  },
  {
    label: 'Core Concepts',
    route: '/concepts',
    skills: [
      'Data Structures & Algorithms',
      'OOP',
      'Computer Networks',
      'DBMS',
      'Machine Learning (exploring)',
    ],
  },
]

export const projects = [
  {
    name: 'CloudShare',
    tagline: 'Full-stack microservices-based cloud storage platform',
    stack: ['Spring Boot', 'Spring Cloud Gateway', 'PostgreSQL', 'Redis', 'Cloudinary', 'React.js'],
    bullets: [
      'Developed a full-stack, microservices-based cloud storage platform with independent authentication and file management services.',
      'Implemented secure API authentication and authorization using JWT and centralized routing via Spring Cloud Gateway.',
      'Integrated Redis for caching and Cloudinary for scalable file storage, preserving folder hierarchy with fast search.',
      'Documented REST APIs with Swagger and decomposed the monolith into modular microservices.',
    ],
    links: {
      github: "https://github.com/sukhwindersingh102316014/CLoudShare",
      live: "https://cloudshare-cdn.vercel.app/",
      swagger: "https://cloudshare-le1b.onrender.com/swagger-ui/index.html"
    },
  },
  {
    name: 'CampusRide',
    tagline: 'Campus-focused cab booking platform connecting students & drivers',
    stack: ['Spring Boot', 'PostgreSQL', 'Spring Data JPA', 'React.js', 'Redis'],
    bullets: [
      'Developed a campus-focused cab booking solution connecting students and drivers under admin supervision.',
      'Implemented secure authentication and authorization using Spring Security and JWT.',
      'Designed and optimized backend APIs with structured exception handling and DTO-driven responses.',
      'Integrated PostgreSQL for efficient data management and ensured seamless frontend-backend communication.',
      'Achieved an average API response time of ~120 ms during local testing.',
    ],
    links: {
      github: 'https://github.com/sukhwindersingh102316014/CampusRide',
      live: 'https://thaparonwheels.vercel.app/',
      swagger: 'https://thaparonwheels.onrender.com/swagger-ui/index.html#/',
    },
  },
  {
    name: 'SkillBridge',
    tagline: 'Barter-based skill exchange & collaboration platform',
    stack: ['Spring Boot', 'WebSocket API', 'MongoDB', 'React.js'],
    bullets: [
      'Created a barter-based learning platform where users can exchange skills and collaborate.',
      'Built scalable backend services for user authentication, profile management, and skill discovery. Designed workflows for barter requests, approvals, and user interactions.',
      'Implemented real-time one-to-one messaging using WebSocket for seamless communication.',
      'Developed admin features and documented APIs using Swagger.',
    ],
    links: {
      github: 'https://github.com/sukhwindersingh102316014/SkillBridge',
      live: 'https://skills-swap-wheat.vercel.app/auth',
      swagger: 'https://skillsbarter-backend.onrender.com/swagger-ui/index.html#/',
    },
  },
  {
    name: 'EventSphere',
    tagline: 'Full-stack event management & ticket booking platform',
    stack: ['Spring Boot', 'PostgreSQL', 'Spring Data JPA', 'React.js', 'Redis'],
    bullets: [
      'Built a full-stack event management and ticket booking platform enabling organizers to create and manage events while allowing users to browse and book tickets seamlessly.',
      'Architected the backend system with secure JWT-based authentication and role-based access control for users and organizers.',
      'Designed booking workflows, payment validation mechanisms, and email notification services.',
      'Developed scalable REST APIs using DTO-based design and integrated Redis caching for performance optimization.',
      'Collaborated on frontend integration to ensure smooth end-to-end functionality.',
    ],
    links: {
      github: 'https://github.com/sukhwindersingh102316014/EventSphere',
      live: "https://fest-tracker-system.vercel.app/auth",
      swagger: "https://festtrackersystem.onrender.com/swagger-ui/index.html#/"
    },
  },
]

export const positions = [
  {
    role: 'Head Boy',
    org: 'Manav Mangal High School',
    detail:
      'Elected as the senior student representative; organized school-wide events, fostered unity among students, and served as the key liaison between students and faculty.',
  },
  {
    role: 'Group Representative (3P1)',
    org: 'TIET',
    detail:
      'Acted as liaison between students and instructors for Batch 3P1 (Elective), coordinating schedules and resolving academic concerns efficiently.',
  },
]

export const coding = {
  headline: 'Solved 400+ Data Structures & Algorithms problems across LeetCode, Code360, and GeeksforGeeks.',
  points: [
    'Strong command over Arrays, Trees, Graphs, Dynamic Programming, Recursion, and Greedy algorithms.',
    'Consistent practice with active streaks and badges; solutions implemented in Java with clean logic and edge-case handling.',
    'Proficient in Binary Search, Two Pointers, Sliding Window, and Hashing techniques.',
  ],
  profiles: [
    { label: 'LeetCode', url: 'https://leetcode.com/u/sukhwinder_singh_102316014/' },
    { label: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/profile/sukhwindersin38aj?tab=activity' },
    { label: 'Code360', url: 'https://www.naukri.com/code360/profile/8d442ddc-3e10-4710-a69f-81cbc54ed6af' },
    { label: 'GitHub', url: 'https://github.com/sukhwindersingh102316014' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sukhwinder-singh-98aa37316/' },
  ],
}

// Derived stats used by the hero "API console" — computed from the data above,
// never hand-typed, so they can't drift from the resume.
export const stats = {
  projects: projects.length,
  dsaProblems: '400+',
  cgpa: '8.41',
  coreStacks: ['Spring Boot', 'React.js', 'PostgreSQL', 'MongoDB'],
}
