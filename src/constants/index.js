import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  githubbb,
  vscode,
  mysql,
  linkedin,
  instagram,
  cv,
  leetcode,
  mail,
  celebal,
  tiu,
  pcs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  // {
  //   title: "Student",
  //   icon: web,
  // },
  // {
  //   title: "Frontend Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Coder",
  //   icon: backend,
  // },
  // {
  //   title: "Tech Enthusiast",
  //   icon: creator, // You can replace this icon with one that better fits if needed
  // },
  {
    title: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/soumojit-banerjee-4914b3228/",
  },
  {
    title: "GitHub",
    icon: githubbb,
    link: "https://github.com/soumojit622", // Replace with your GitHub profile link
  },
  {
    title: "CV",
    icon: cv,
    link: "https://drive.google.com/file/d/1f2wkwMRhxKj_QmwWQLaK2FV8TnIeDOnG/view?usp=sharing",
  },
  {
    title: "Mail",
    icon: mail,
    link: "mailto:soumojitbanerjee22@gmail.com", // Replace with your email address
  },
  {
    title: "Leetcode",
    icon: leetcode,
    link: "#",
  },
  {
    title: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/soumo622/",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Github",
    icon: githubbb,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "React.js Intern",
    company_name: "Celebal Technologies",
    icon: celebal,
    iconBg: "#FFF",
    date: "May 2024 - July 2024",
    points: [
      "Develop and maintain web applications using React.js and related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Techno India University, West Bengal",
    company_name: "Bachelor of Technology - BTech in CSE",
    icon: tiu,
    iconBg: "#E6DEDD",
    date: "2021 - 2025",
    points: [
      "CGPA: 7.92",
      "Gained a comprehensive understanding of Computer Science and Engineering principles.",
      "Developed skills in web technology, data structures, and algorithms.",
      "Worked on various projects involving web technologies such as React.js, HTML, CSS, and JavaScript.",
      "Collaborated with peers on group projects, enhancing teamwork and problem-solving abilities.",
    ],
  },
  {
    title: "Barasat P.C.S Govt. High School",
    company_name: "West Bengal Council of Higher Secondary Education",
    icon: pcs,
    iconBg: "#383E56",
    date: "2019 - 2021",
    points: [
      "Achieved a percentage of 84.4% in secondary education.",
      "Developed an interest in technology and web development during academic studies.",
      "Excelled in computer science classes, creating simple programs and websites.",
      "Enjoy playing badminton, promoting physical fitness and teamwork.",
      "Engaged in gaming as a hobby, enhancing strategic thinking and problem-solving skills.",
    ],
  },
  {
    title: "Barasat P.C.S Govt. High School",
    company_name: " West Bengal Board of Secondary Education",
    icon: pcs,
    iconBg: "#383E56",
    date: "2009 - 2019",
    points: [
      "Achieved a percentage of 88.85% in secondary education.",
      "Developed an interest in technology and web development during academic studies.",
      "Enjoy playing badminton, promoting physical fitness and teamwork.",
      "Engaged in gaming as a hobby, enhancing strategic thinking and problem-solving skills.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I was convinced it was impossible to create a website as stunning as our product, but the developer proved me wrong.",
    designation: "Chief Financial Officer",
    company: "Innovate Solutions",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've rarely encountered a web developer who genuinely prioritizes their clients' success like this one does.",
    designation: "Chief Operating Officer",
    company: "TechVista",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Since the developer optimized our website, our traffic surged by 50%. We are immensely grateful for their work!",
    designation: "Chief Technology Officer",
    company: "Global Insights",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "The developer’s innovative approach and attention to detail have transformed our online presence. Highly recommended!",
    designation: "Head of Marketing",
    company: "BrightFuture Tech",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const projects = [
  {
    name: "TaskFlow",
    description:
      "This is a note taking website built with Next.js 13, React, Convex, Tailwind CSS, Prisma, Clerk authentication, and Shadcn UI. The project aims to replicate the core functionalities of Notion 📝 while providing additional features and a customizable UI 🎨.",

    tags: [
      {
        name: "next13",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "convex",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "blue-text-gradient",
      },
      {
        name: "clerk",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/soumojit622/next13-notion-clone",
  },
  {
    name: "Portfolio",
    description:
      "This project features ✨ a responsive design 📱 for all devices, interactive elements 🖱️, a project showcase 🛠️, and a display of skills and experience 🧑‍💻. Built with HTML5 🌐, CSS3 🎨, and JavaScript 📜, it demonstrates my ability to create modern, user-friendly web applications.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/soumojit622/PORTFOLIO",
  },
  {
    name: "Scribee",
    description:
      "A modern, collaborative document editor 📝 that replicates the core functionalities of Google Docs. This application offers real-time collaboration 🤝, rich text editing ✍️, and a responsive design 📱 for an optimal user experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "liveblocks",
        color: "pink-text-gradient",
      },
      {
        name: "sentry",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn ui",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/soumojit622/google-docs-clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
