import { StaticImageData } from "next/image";
import alex from "../../public/samuel.avif";
import jerry from "../../public/jerry.avif";
import mauro from "../../public/mauro.jpeg";
import alan from "../../public/alan.jpeg";
import olamide from "../../public/olamide.jpeg";
import umar from "../../public/umar.jpeg";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Tahsin Faiyaz Sayor",
    role: "Chief Executive Officer",
    company: "Dev Dynasty",
    testimonial:
      "Aronno did an outstanding job in designing and developing our entire enterprise website. His attention to detail, technical expertise, and seamless execution made the project a success!",
  },
  {
    name: "Atiqur Rahman",
    role: "Project Manager",
    company: "Queeny BD",
    testimonial:
      "Aronno delivered an exceptional student portal for Queeny BD, combining user-friendly design with robust functionality. His work greatly enhanced the platform's efficiency and overall user experience.",
  },
  {
    name: "Koushik Paul",
    role: "Co-Founder, Cheif Executive Officer",
    company: "Omnidynamics",
    testimonial:
      "Aronno delivered an exceptional UI-UX design and development for Omnidynamics, showcasing his creativity and technical skills. The scalable architecture he implemented has greatly enhanced our platform's performance and user experience.",
  },
  
];
