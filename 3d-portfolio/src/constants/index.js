const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 30, suffix: "+", label: "Completed Projects" },
  { value: 70, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Management",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Vivek delivered high-quality client websites with consistency and attention to detail. His ability to turn design requirements into responsive, functional sites made him a reliable and efficient web developer on our team.",
    imgPath: "/images/logo1.png",
    logoPath: "/images/logo1.png",
    title: "Web Developer",
    date: "October 2024 - Present",
    responsibilities: [
      "Designed and developed client websites using modern web technologies and CMS platforms",
      "Customized layouts and features to align with client branding and functionality needs.",
      "Ensured cross-browser compatibility, mobile responsiveness, and basic SEO optimization.",
      "Managed website deployment, updates, and maintenance tasks."
    ],
  },
  {
    review: "Vivek was a dedicated Cybersecurity Intern who contributed to threat analysis, IDS tools, and blockchain research. He collaborated well with partners and showed strong technical skills and enthusiasm for cybersecurity.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo2.png",
    title: "Cyber Security Intern",
    date: "July 2024 - August 2024",
    responsibilities: [
      "Performed risk assessments, penetration testing, and security audits on over 10+ systems, improving compliance by 25%",
      "Collaborated with Albus Security, AlgoBharat, and ICP Hub India Crewsphere, contributing to threat intelligence reports that enhanced security posture by 25%",
      "Assisted in automating security monitoring, reducing manual review efforts by 40%.",
    ],
  },
  {
    review: "Vivek excelled as a Developer Intern at Victopia Labs, contributing to full-stack development and delivering clean, efficient code. He quickly adapted to new technologies and collaborated effectively within the team.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Developer Intern",
    date: "December 2023 - February 2024",
    responsibilities: [
      "Engineered secure API-driven applications, enhancing authentication security by 60% through OAuth Based Access Control. ",
      "Followed OOP principles to build modular, maintainable Python scripts for secure backend workflows.",
      "Implemented cloud-based security workflows, reducing data exposure risks by 35%.",
      "Automated Cybersecurity processes using Azure Functions and Zapier, increasing incident response efficiency by 50%."
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  
  {
    name: "Ahmed Fahad",
    mentions: "@Fahad",
    review:
      "Vivek was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "",
  },
  {
    name: "Nishal Singh",
    mentions: "@Nishal Singh",
    review:
      "Vivek contributed a meaningful amount of work during the development of the Web Application for Victopia Labs during the internship period.",
    imgPath: "",
  },
  {
    name: "Dr.R.Sethuraman",
    mentions: "@RSethuraman",
    review:
      "Vivek was a pleasure to work with. He understood the outcome of the research and put in the efforts to get the paper published. Understood the concepts in a grass-root level.",
    imgPath: "",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
