import project1 from "../assets/projects/think-ai.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `
I am a Computer Engineering graduate from Thapar Institute of Engineering and Technology. I’ve studied key subjects such as DBMS, OS, Data Structures and Algorithms, Data Science, and AI. My hands-on experience includes working as a Data Engineer Intern at Ericsson and a Deep Learning Intern at Samsung R&D Institute, where I applied my skills in SQL, GCP BigQuery, Spring Boot, AI and Python. I’m skilled in technologies like C/C++, Next.js, React, and Prisma, demonstrated through projects like the Think-AI SAAS Platform and an AI-powered road safety audit tool. I’ve also earned several achievements and certifications, including a merit scholarship for being in the top 10% of my branch.`
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Present",
    role: "Data Engineer Intern",
    company: "Ericsson",
    description: `Utilized SQL and BigQuery to analyze large datasets and derive valuable insights for decision-making.Upgraded cloud function to Python 3.12, ensuring compatibility and improving execution speed, while optimizing
complex SQL queries in BigQuery.Collaborated with team members on a Spring Boot Java backend project`,
    technologies: ["GCP", "SQL", "Springboot" ,"Python"],
  },
  {
    year: "Oct 2022 - June 2023",
    role: "Prism Deep Learning Intern",
    company: "Samsung R&D Institute",
    description: `Designed and deployed an object detection system using SSD and YOLOv5 models for identifying news article headings
from screenshots; developed a web app enhancing user experience and reducing processing time by 35%
Use Case:
Media Monitoring: Use heading detection to compile news articles, track trends, and create personalized news
feeds for users .
Content Curation: Employ heading extraction for personalized content delivery and targeted advertising based on
user interests.
`,
    technologies: ["Deep Learning", "Flask", "Python"],
  }
];

export const PROJECTS = [
  {
    title: "Think : Ai SAAS Platform",
    image: project1,
    link:"https://think-ai-sigma.vercel.app/",
    description:
      "Built Think-AI SAAS platform with 3 AI tools using Next.js, Prisma ORM, Gemini AI API, and Vercel with AI SDK.Integrated Postgres Database, Clerk for authentication, and Replicate AI for music/video generation.Created an AI user-centric platform which have Crisp for customer support; future plans include payment gateway integration for the pro version",
    technologies: ["NextJs" , "Gemini API", "Vercel" ,"Prisma", "React", "Tailwind", "Crisp" , "Replicate AI", "Clerk"],
  },
  {
    title: "Medium : Blogging Website",
    image: project2,
    link:"https://github.com/anshumisra/medium-fullstack",
    description:
      "Clone of a social publishing platform that is open to all and home for a diverse array of stories, blogs and perspectives.Architected and delivered a robust application frontend in React, integrating Postgres for database management, JWT for authentication, TypeScript for maintaining code quality, and Prisma ORM.Backend deployment using cloudfare workers and frontend on AWS (S3 and Cloudfront),zod as the validation library",
    technologies: ["React", "TypeScript", "Postgres", "Prisma", "AWS"],
  },
  {
    title: "Automated road safety audit through intervention of AI",
    image: project3,
    link:"https://github.com/anshumisra/",
    description:
      "Developed and deployed an AI-powered web app for automated road safety audits, cutting processing time by 50% and identifying more safety issues, significantly enhancing road safety compliance.Utilizes YOLOv5 to detect objects in user-provided images and fill out auditing forms automatically",
    technologies: ["Python", "YOLO", "Deta", "Streamlit"],
  },
];

export const CONTACT = {
  phoneNo: "+91 9454905535 ",
  email: "anshumisra.25@gmail.com",
};
