export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image: string;
  githubAvailable: boolean;
  demoAvailable: boolean;
};


export const devProjects = [
  {
    id: 0,
    name: "Dev Dynasty",
    description:
      "I designed a better UI-UX, wrote a clean, well-documented codebase, and developed full IT operations for the agency, ensuring efficiency and scalability.",
    technologies: ["Next.JS", "Tailwind CSS", "React.JS", "Mongo DB"],
    image: require(".//../../public/projects/dd.png"),
    // available: false,
    githubAvailable: false,
    demoAvailable: false,
  },
  {
    id: 1,
    name: "Queeny BD Student Portal",
    description:
      "Implemented restrictions to prevent image downloads, ensured results are retrieved only when ID and name match in a row, and enabled admins to post images with default blur via the admin panel.",
    technologies: ["PHP", "Bootstrap CSS", "MySQL DB"],
    image: require(".//../../public/projects/qbsp.png"),
    // available: true,
    githubAvailable: false,
    demoAvailable: true,
    demo: "https://queenybd.com/students/",
  },
  {
    id: 2,
    name: "Omnidynamics Web-app",
    description:
      "Designed and developed a complex yet modern UI-UX with a component-based, scalable architecture.",
    technologies: ["React.JS", "FramerMotion", "TailwindCSS", "JSON"],
    image: require(".//../../public/projects/omni.png"),
    // available: true,
    githubAvailable: true,
    demoAvailable: true,
    demo: "https://omnidynamics.vercel.app",
    github: "https://github.com/aronnogh/omnidynamics",
  },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
