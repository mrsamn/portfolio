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
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Amazon AWS",
    icon: mobile,
  },
  {
    title: "Generative AI",
    icon: backend,
  },
  {
    title: "DevOps",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Training",
    company_name: "Youtube",
    icon: tesla,
    iconBg: "#383E56",
    date: "January 2023 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Getting the knowledge of React.js and how we can use it to create good UI designs for frontend.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Made an Ecommerce website with the product section, Homepage, Navigation bar, checkout page, payment gateway and Add to cart feature.",
    ],
  },
  {
    title: "Generative AI",
    company_name: "Geeks For Geeks",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
      "Developed AI-powered applications using OpenAI APIs (GPT-4, DALL·E, Whisper).",
      "Built chatbots and virtual assistants with context memory and dynamic responses.",
      "Built mini tools like resume builders, email generators, and story creators using GenAI.",
      "Applied prompt engineering techniques to optimize AI outputs for various use-cases.",
    ],
  },
  {
    title: "Amazon AWS",
    company_name: "Devtown",
    icon: meta,
    iconBg: "#383E56",
    date: "August 2024 - November 2024",
    points: [
      "Deployed scalable web applications using EC2, S3, and Load Balancer for high availability.",
      "Used Amazon S3 for static site hosting, media storage, and cloud backups.",
      "Implemented serverless architecture.",
      "Leveraged CloudFormation for infrastructure as code (IaC) deployment.",
    ],
  },
  {
    title: "DevOps",
    company_name: "Youtube",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "December 2024 - Present",
    points: [
      "Built and maintained automated pipelines using Jenkins, GitHub Actions, and GitLab CI/CD.",
      "Dockerized applications for consistent development and production environments.",
      "Hands-on experience with Git, GitHub, and GitLab for collaboration and version management.",
      "Applied automated testing and linting tools in CI/CD workflows for code quality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sameer proved me wrong.",
    name: "Ritik Kumar",
    designation: "CFO",
    company: "Freelancer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGFdAnSCyfNRQ/profile-displayphoto-shrink_100_100/B56ZPT0.LNHIAU-/0/1734425699794?e=1756339200&v=beta&t=BkMkeWDBIHpgtpoP2pb-cl9sD1hHaenpXVsvWHI-sJw",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sameer does.",
    name: "Shashikant Kumar",
    designation: "COO",
    company: "Full Stack Developer",
    image: "https://media.licdn.com/dms/image/v2/D5635AQFCehHROCR2FA/profile-framedphoto-shrink_800_800/B56ZVqMhXnHQAg-/0/1741243422542?e=1751288400&v=beta&t=E42Lr3fG_m8iK3MK0sYNp2HAiAfY-q3-dnry8Kmuq7s",
  },
  {
    testimonial:
      "After Sameer optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Mandeep Pandey",
    company: "Content Creator",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFVQrqqS9Z9Bg/profile-displayphoto-shrink_800_800/B56ZPfHWICHIAg-/0/1734615065823?e=1756339200&v=beta&t=aqOTv0gwd9SFgl6TRYNqUJnf8BVbjk2EIkVAbHmQ1dE",
  },
];

const projects = [
  {
    name: "The Dior",
    description:
      "Dior-inspired e-commerce site using MERN stack with product listings, cart, authentication, responsive design, and secure checkout functionality.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/mrsamn/Dior",
  },
  {
    name: "Uber Clone",
    description:
      "Uber Clone project using MERN stack featuring real-time ride booking, driver-passenger tracking, authentication, maps integration, and responsive UI design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "H.M.S",
    description:
      " Hospital Management System built with MERN stack, offering seamless patient management, doctor scheduling, appointments, and a sleek admin dashboard.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
