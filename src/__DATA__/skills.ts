import { DiLinux, DiGitBranch } from "react-icons/di";
import {
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiGithubactions,
  SiGitlab,
  SiPrometheus,
  SiGrafana,
  SiNginx,
  SiApache,
  SiAmazonaws,
  SiVmware,
  SiVirtualbox,
  SiGnubash,         
  SiUbuntu,
  SiDebian,
  SiRedhat,
  SiCentos,
  SiAlpinelinux,
  SiArchlinux,
  SiMariadb,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { AiOutlineCloudServer, AiFillGithub } from "react-icons/ai";
import { FaLinux } from "react-icons/fa"; // For Pop!_OS

import { Skill } from "@/types/Skills";

const SKILLS_LIST: Skill[] = [
  {
    name: "Linux",
    color: "#000000",
    icon: DiLinux,
    subSkills: [
      { name: "Ubuntu", color: "#e95420", icon: SiUbuntu },
      { name: "Debian", color: "#a80030", icon: SiDebian },
      { name: "Red Hat", color: "#cc0000", icon: SiRedhat },
      { name: "CentOS", color: "#262577", icon: SiCentos },
      { name: "Alpine", color: "#0d597f", icon: SiAlpinelinux },
      { name: "Arch Linux", color: "#1793d1", icon: SiArchlinux },
      { name: "Pop!_OS", color: "#48b9c7", icon: FaLinux },
      { name: "Shell Scripting", color: "#4eaa25", icon: SiGnubash },
      { name: "Bash", color: "#4eaa25", icon: SiGnubash },
    ],
  },
  {
    name: "Containers & Orchestration",
    icon: SiDocker,
    color: "#0db7ed",
    subSkills: [
      { name: "Docker", color: "#2496ed", icon: SiDocker },
      { name: "Kubernetes", color: "#326ce5", icon: SiKubernetes },
    ],
  },
  {
    name: "Infrastructure as Code",
    icon: SiTerraform,
    color: "#623ce4",
    subSkills: [
      { name: "Terraform", color: "#623ce4", icon: SiTerraform },
      { name: "Ansible", color: "#e00", icon: SiAnsible },
    ],
  },
  {
    name: "CI/CD",
    icon: SiGithubactions,
    color: "#24292e",
    subSkills: [
      { name: "GitHub Actions", color: "#24292e", icon: SiGithubactions },
      { name: "GitLab CI", color: "#fc6d26", icon: SiGitlab },
    ],
  },
  {
    name: "Monitoring & Logging",
    icon: SiPrometheus,
    color: "#e6522c",
    subSkills: [
      { name: "Prometheus", color: "#e6522c", icon: SiPrometheus },
      { name: "Grafana", color: "#f46800", icon: SiGrafana },
    ],
  },
  {
    name: "Web Servers & Reverse Proxies",
    icon: SiNginx,
    color: "#009639",
    subSkills: [
      { name: "Nginx", color: "#009639", icon: SiNginx },
      { name: "Apache", color: "#d22128", icon: SiApache },
    ],
  },
  {
    name: "Cloud Providers",
    icon: AiOutlineCloudServer,
    color: "#333",
    subSkills: [
      { name: "AWS", color: "#ff9900", icon: SiAmazonaws },
    ],
  },
  {
    name: "Virtualization",
    icon: SiVmware,
    color: "#607078",
    subSkills: [
      { name: "VMware", color: "#607078", icon: SiVmware },
      { name: "VirtualBox", color: "#183a61", icon: SiVirtualbox },
    ],
  },
  {
    name: "Version Control",
    icon: DiGitBranch,
    color: "#f34f29",
    subSkills: [
      { name: "GitHub", color: "#24292f", icon: AiFillGithub },
      { name: "GitLab", color: "#e24329", icon: SiGitlab },
    ],
  },
  {
    name: "Databases",
    icon: SiPostgresql,
    color: "#336791",
    subSkills: [
      { name: "PostgreSQL", color: "#336791", icon: SiPostgresql },
      { name: "MySQL", color: "#dd8a00", icon: SiMysql },
      { name: "MariaDB", color: "#003545", icon: SiMariadb },
      { name: "MongoDB", color: "#47a248", icon: SiMongodb },
    ],
  },
];

export default SKILLS_LIST;
