import { FiGithub, FiInstagram, FiLinkedin, } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa"; 

import { SocialLink } from "@/types/socials";

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    link: "www.linkedin.com/in/rohith-remesh-a59144275",
    icon: FiLinkedin,
    color: "#0a66c2",
  },
  {
    name: "Github",
    link: "https://github.com/rohith0708",
    icon: FiGithub,
    color: "#161b22",
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/6282954335",
    icon: FaWhatsapp,
    color: "#25D366",
  },
];

export default SOCIAL_LINKS;
