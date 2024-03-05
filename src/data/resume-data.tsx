import { GitHubIcon, LinkedInIcon } from "@/components/icons";


export const RESUME_DATA = {
  name: "Ursula Valeria Cubilla",
  initials: "UVC",
  location: "Barcelona, Spain",
  locationLink: "https://www.google.com/maps/place/Barcelona/@41.3926386,2.0577884,12z/data=!3m1!4b1!4m6!3m5!1s0x12a49816718e30e5:0x44b0fb3d4f47660a!8m2!3d41.3873974!4d2.168568!16zL20vMDFmNjI?entry=ttu",
  about:
    "Frontend Web Developer",
  summary:
    "I am a Frontend web developer, eager to keep growing in the technological world. Currently working with Reactjs, Nextjs, and I am open to learn new technologies if needed.",
  avatarUrl: "https://avatars.githubusercontent.com/u/113290079?v=4", 
  contact: {
    email: "ursulacubilla@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ursulacubilla",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ursula-cubilla/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "GRI Gabinete de Recolocación Industrial",
      degree: "Website Design and Publication",
      start: "2023",
      end: "2023",
    },
    {
      school: "IT Academy",
      degree: "Frontend React",
      start: "2022",
      end: "2023",
    }
  ],
  work: [
    {
      company: "Freelance",
      badges: ["Remote"],
      title: "Frontend Web Developer",
      start: "2023",
      end: "Present",
      description:
        "",
    },
    {
      company: "AIS Channel",
      link: "https://www.aischannel.com/",
      badges: ["Presencial"],
      title: "Frontend Web Developer",
      start: "2023",
      end: "2023",
      description:
        "",
    },
    {
      company: "IT Academy",
      link: "https://www.barcelonactiva.cat/en/itacademy",
      badges: ["Remote"],
      title: "Frontend Web Developer",
      start: "2023",
      end: "2023",
      description:
        "",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "TailwindCss",
    "Bootstrap",
    "HTML",
    "CSS"
  ],
  projects: [
    {
      title: "BatataBit",
      techStack: ["HTML", "CSS"],
      description:
        "BatataBit was created as a final project to put into practice what was I learned in class.",
      link: {
        label: "github.com",
        href: "https://ursulacubilla.github.io/ResponsiveDesign/",
      },
    },
    {
      title: "AmapolaCafe",
      techStack: ["HTML", "CSS", "JavaScript"],
      description:
        "AmapolaCafe was my end-of-course project, created with HTML, CSS and JavaScript.",
      link: {
        label: "github.com",
        href: "https://ursulacubilla.github.io/amapolaCafe/",
      },
    },
    {
      title: "YardSale",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      description: "E-commerce",
      link: {
        label: "github.com",
        href: "https://ursulacubilla.github.io/Maquetacion-HTML/",
      },
    },
    {
      title: "BookMark",
      techStack: ["HTML", "CSS", "SCSS"],
      description: "A simple interface to organize your favourite websites.",
      link: {
        label: "github.com",
        href: "https://ursulacubilla.github.io/sprint2/",
      },
    },
  ],
} as const;
