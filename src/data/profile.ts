import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Blocks,
  Box,
  Boxes,
  BrainCircuit,
  Cloud,
  Cog,
  Container,
  Database,
  GitBranch,
  GitMerge,
  Hexagon,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  User,
  Waypoints,
  Workflow,
} from "lucide-react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MediumIcon,
  YoutubeIcon,
} from "../components/ui/icons";

export type IconComponent = ComponentType<{ className?: string }>;

const profile = {
  name: "Nalluri Lokesh Babu",
  shortName: "Lokesh Babu",
  role: "Site Reliability Engineer",
  headline: "Building Reliable, Secure & Automated Infrastructure",
  intro:
    "Site Reliability Engineer focused on DevOps, DevSecOps, Cloud Infrastructure, Kubernetes and Infrastructure as Code — with a growing focus on MLOps and AI Infrastructure.",
  positioning:
    "I build reliable, secure, automated infrastructure and I am moving toward AI/MLOps infrastructure.",
  email: "lokeshbabu.nalluri7878@gmail.com",
  location: "Hyderabad, Telangana, India",
  experience: "4+ years",
  resumeUrl: "/resume/Lokesh_Babu_Resume.pdf",
  githubUser: "nlokeshbabu1",
};

const links = {
  github: "https://github.com/nlokeshbabu1",
  linkedin: "https://www.linkedin.com/in/lokeshbabu-nalluri-b253b7230",
  medium: "https://medium.com/@lokeshbabu.nalluri7878",
  hashnode: "https://code-to-cloud.hashnode.dev/",
  youtube: "",
  instagram: "",
};

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
}

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: links.github, icon: GithubIcon },
  { label: "LinkedIn", href: links.linkedin, icon: LinkedinIcon },
  { label: "Medium", href: links.medium, icon: MediumIcon },
  { label: "Hashnode", href: links.hashnode, icon: Hexagon },
];

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "AWS infrastructure, Kubernetes platforms, networking, compute, storage and scalable cloud architecture.",
  },
  {
    icon: Blocks,
    title: "Infrastructure as Code",
    description:
      "Terraform-based infrastructure automation and reusable modules.",
  },
  {
    icon: Workflow,
    title: "DevOps & CI/CD",
    description:
      "GitHub Actions, GitLab CI/CD and ArgoCD for automated build, security and deployment workflows.",
  },
  {
    icon: Container,
    title: "Containers & Kubernetes",
    description:
      "Docker containerization and Kubernetes workloads with reliable deployments and operational practices.",
  },
  {
    icon: ShieldCheck,
    title: "DevSecOps",
    description:
      "Security scanning and quality gates using tools such as Trivy and SonarQube.",
  },
  {
    icon: Activity,
    title: "Observability & Reliability",
    description:
      "Prometheus, Grafana, monitoring, troubleshooting and reliability-focused engineering.",
  },
  {
    icon: BrainCircuit,
    title: "AI / MLOps",
    description:
      "Exploring MLOps, AI infrastructure, model deployment, automation and the application of DevOps practices to machine learning systems.",
  },
];

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  current?: boolean;
  summary?: string;
  focus?: string[];
  highlights?: string[];
  stack?: string[];
}

const experience: ExperienceItem[] = [
  {
    role: "Site Reliability Engineer",
    company: "National Payments Corporation of India (NPCI)",
    period: "Dec 2025 – Present",
    location: "Hyderabad, Telangana, India",
    current: true,
    summary:
      "Contributing to enterprise DevOps engineering, cloud infrastructure automation, platform reliability, observability and AI-driven operations across private and public cloud environments.",
    focus: [
      "Site Reliability Engineering",
      "DevOps Engineering",
      "GitLab CI/CD",
      "Terraform",
      "Infrastructure Automation",
      "DevSecOps",
      "Private and Public Cloud",
      "Platform Reliability",
      "Observability",
      "AIOps",
      "AI/ML and MLOps",
    ],
    highlights: [
      "Manage GitLab repositories and build, maintain and optimize GitLab CI/CD pipelines for automated application delivery.",
      "Implement Infrastructure as Code (IaC) using Terraform for infrastructure provisioning and configuration.",
      "Integrate DevSecOps practices and automated security validation into CI/CD workflows.",
      "Improve deployment consistency through pipeline standardization and automation.",
      "Work across VMware, OpenStack, AWS and Azure environments, collaborating with application and infrastructure teams to improve platform reliability and scalability.",
      "Develop an AIOps solution using Amazon EKS, Fluent Bit and OpenSearch for centralized Kubernetes log collection and analysis.",
      "Develop Python automation integrated with Amazon Bedrock for AI-assisted log analysis, error identification and root-cause analysis (RCA).",
      "Explore incident correlation and automated troubleshooting recommendations to reduce manual investigation.",
      "Experiment with locally hosted LLMs using Ollama for infrastructure knowledge retrieval and troubleshooting.",
      "Develop RAG-based prototypes for AI-powered infrastructure documentation search and question answering.",
      "Explore AI-assisted security finding analysis, prioritization and remediation recommendations.",
      "Explore MLOps workflows, model deployment, versioning and AI infrastructure automation.",
    ],
    stack: [
      "GitLab",
      "GitLab CI/CD",
      "Terraform",
      "VMware",
      "OpenStack",
      "AWS",
      "Azure",
      "Amazon EKS",
      "Fluent Bit",
      "OpenSearch",
      "Python",
      "Amazon Bedrock",
      "Ollama",
      "RAG",
      "DevSecOps",
      "MLOps",
    ],
  },
  {
    role: "System Engineer",
    company: "Akshara Enterprises Pvt. Ltd.",
    period: "May 2022 – Dec 2025",
    location: "Hyderabad, Telangana, India",
    summary:
      "Built and operated cloud infrastructure and delivery pipelines for containerized workloads.",
    highlights: [
      "Designed and deployed production-grade infrastructure on AWS using EKS, EC2, RDS, S3 and VPC.",
      "Worked with Azure AKS environments.",
      "Automated infrastructure using Terraform modules.",
      "Implemented CI/CD pipelines using GitHub Actions and ArgoCD.",
      "Reduced deployment time by approximately 40%.",
      "Built and optimized Docker images.",
      "Managed containerized applications using Kubernetes.",
      "Implemented zero-downtime deployment practices.",
      "Automated Linux server provisioning and configuration using Ansible.",
      "Achieved approximately 95% automation coverage.",
      "Implemented monitoring using Prometheus and Grafana.",
      "Performed vulnerability scanning using Trivy.",
      "Integrated code quality and security practices using SonarQube.",
      "Collaborated with development teams to enable DevSecOps pipelines for microservices.",
      "Worked on cloud cost optimization through workload analysis, autoscaling and right-sizing.",
      "Used AWS Athena to query S3-hosted datasets for logs and analytics.",
    ],
    stack: [
      "AWS",
      "Azure AKS",
      "Terraform",
      "GitHub Actions",
      "ArgoCD",
      "Kubernetes",
      "Docker",
      "Ansible",
      "Prometheus",
      "Grafana",
      "Trivy",
      "SonarQube",
      "AWS Athena",
    ],
  },
  {
    role: "Technical Support Specialist",
    company: "Duranc",
    period: "Mar 2022 – Apr 2022",
    location: "Hyderabad, Telangana, India",
    summary: "Infrastructure support and hands-on troubleshooting.",
    focus: ["Linux", "Docker", "Technical Troubleshooting", "Infrastructure Support"],
  },
];

interface SkillGroup {
  name: string;
  icon: LucideIcon;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  { name: "Cloud", icon: Cloud, items: ["AWS"] },
  { name: "Containers", icon: Container, items: ["Docker", "Kubernetes", "EKS", "AKS"] },
  { name: "Infrastructure as Code", icon: Blocks, items: ["Terraform", "Ansible"] },
  { name: "CI/CD", icon: Workflow, items: ["GitHub Actions", "GitLab CI/CD", "ArgoCD"] },
  { name: "DevSecOps", icon: ShieldCheck, items: ["Trivy", "SonarQube"] },
  { name: "Observability", icon: Activity, items: ["Prometheus", "Grafana"] },
  { name: "Operating Systems", icon: Terminal, items: ["Linux"] },
  { name: "Infrastructure Platforms", icon: Server, items: ["OpenStack", "VMware", "NSX-T"] },
  {
    name: "AI / MLOps",
    icon: BrainCircuit,
    items: ["MLOps", "AI Infrastructure", "ML Pipelines", "Model Deployment", "AI/ML Platform Engineering"],
  },
];

interface Project {
  name: string;
  kind: string;
  status: string;
  statusTone: "accent" | "info";
  description: string;
  capabilities: string[];
  stack: string[];
  repositoryUrl?: string;
  websiteUrl?: string;
}

const projects: Project[] = [
  {
    name: "DevArchAI",
    kind: "Personal Project / Engineering Project",
    status: "In Development",
    statusTone: "accent",
    description:
      "A DevSecOps-focused SaaS platform designed to scan repositories and infrastructure for security, configuration and reliability issues.",
    capabilities: [
      "Repository integration",
      "Infrastructure scanning",
      "Terraform scanning",
      "Kubernetes scanning",
      "Docker scanning",
      "CI/CD pipeline scanning",
      "Dependency scanning",
      "Secret detection",
      "Cloud security checks",
      "Security findings dashboard",
      "Scan reports",
      "Multi-tenant architecture",
    ],
    stack: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "AWS",
      "GitHub App integration",
      "Terraform",
      "Kubernetes",
      "Docker",
    ],
    repositoryUrl: "",
    websiteUrl: "https://www.devarchai.xyz/",
  },
];

interface Publication {
  name: string;
  handle: string;
  url: string;
  description: string;
  icon: IconComponent;
}

const writingTopics = [
  "DevOps",
  "Cloud",
  "Kubernetes",
  "Terraform",
  "CI/CD",
  "DevSecOps",
  "Authentication",
  "Infrastructure",
  "SRE",
  "MLOps",
  "AI Infrastructure",
];

const publications: Publication[] = [
  {
    name: "Medium",
    handle: "@lokeshbabu.nalluri7878",
    url: links.medium,
    description:
      "Articles on DevOps, Kubernetes, Terraform, authentication and infrastructure engineering.",
    icon: MediumIcon,
  },
  {
    name: "Hashnode",
    handle: "code-to-cloud",
    url: links.hashnode,
    description:
      "The Code-to-Cloud blog covering cloud, CI/CD, DevSecOps and SRE practices.",
    icon: Hexagon,
  },
];

interface ContentChannel {
  label: string;
  href: string;
  icon: IconComponent;
  live: boolean;
}

const contentCreation = {
  title: "DevOps Explained",
  description:
    "Short-form educational content around DevOps, Cloud, Kubernetes and engineering concepts — focused on explaining complex infrastructure concepts in simple language.",
  topics: [
    "What is DevOps?",
    "Why DevOps?",
    "SDLC",
    "Waterfall",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "Terraform",
    "DevSecOps",
    "Cloud",
    "SRE",
    "MLOps",
    "AI Infrastructure",
  ],
  channels: [
    { label: "YouTube", href: links.youtube, icon: YoutubeIcon, live: false },
    { label: "Instagram", href: links.instagram, icon: InstagramIcon, live: false },
    { label: "LinkedIn", href: links.linkedin, icon: LinkedinIcon, live: true },
  ] as ContentChannel[],
};

const learningPath = {
  stages: [
    { label: "DevOps", state: "done" as const },
    { label: "DevSecOps", state: "done" as const },
    { label: "SRE", state: "done" as const },
    { label: "Cloud Engineering", state: "done" as const },
    { label: "MLOps", state: "active" as const },
    { label: "AI Infrastructure", state: "active" as const },
  ],
  statement:
    "My long-term direction is to combine DevOps, SRE, cloud infrastructure and automation with AI/ML systems — building reliable infrastructure and deployment platforms for intelligent applications.",
};

interface FlowNode {
  label: string;
  sublabel?: string;
  icon: LucideIcon;
}

interface Flow {
  id: string;
  title: string;
  tone: "accent" | "info";
  nodes: FlowNode[];
}

const flows: Flow[] = [
  {
    id: "app-delivery",
    title: "Application Delivery Pipeline",
    tone: "accent",
    nodes: [
      { label: "Developer", icon: User },
      { label: "Git", icon: GitBranch },
      { label: "CI/CD", icon: Cog },
      { label: "Security Scanning", icon: ShieldCheck },
      { label: "Container Build", icon: Box },
      { label: "Container Registry", icon: Database },
      { label: "Kubernetes", icon: Boxes },
      { label: "GitOps / ArgoCD", icon: GitMerge },
      { label: "Observability", sublabel: "Prometheus + Grafana", icon: Activity },
    ],
  },
  {
    id: "ml-platform",
    title: "ML / AI Platform Flow",
    tone: "info",
    nodes: [
      { label: "AI Application", icon: Sparkles },
      { label: "ML Pipeline", icon: Waypoints },
      { label: "Model Registry", icon: Database },
      { label: "Model Deployment", icon: Rocket },
      { label: "Kubernetes / Cloud", icon: Cloud },
      { label: "Monitoring", sublabel: "Metrics · Alerts", icon: Activity },
    ],
  },
];

type TerminalLine =
  | { type: "cmd"; text: string }
  | { type: "out"; text: string };

const terminalLines: TerminalLine[][] = [
  [
    { type: "cmd" as const, text: "whoami" },
    { type: "out" as const, text: "nalluri-lokesh-babu — site reliability engineer" },
    { type: "cmd" as const, text: "kubectl get sre --namespace production" },
    { type: "out" as const, text: "NAME          STATUS   REGION       UPTIME" },
    { type: "out" as const, text: "lokesh-babu   Ready    ap-south-1   4y+" },
  ],
  [
    { type: "cmd" as const, text: "terraform apply -auto-approve" },
    { type: "out" as const, text: "Plan: 12 to add, 3 to change, 0 to destroy." },
    { type: "out" as const, text: "Apply complete! Resources: 12 added." },
    { type: "cmd" as const, text: "argocd app sync platform --prune" },
    { type: "out" as const, text: "application platform: health — Healthy ✓ sync — Synced ✓" },
  ],
  [
    { type: "cmd" as const, text: "trivy image api:latest --severity HIGH,CRITICAL" },
    { type: "out" as const, text: "api:latest (alpine 3.20)" },
    { type: "out" as const, text: "Vulnerabilities: 0 HIGH — 0 CRITICAL ✓" },
    { type: "cmd" as const, text: "echo $MISSION" },
    { type: "out" as const, text: "reliable · secure · automated infrastructure" },
  ],
];

export {
  profile,
  links,
  navLinks,
  socialLinks,
  services,
  experience,
  skillGroups,
  projects,
  publications,
  writingTopics,
  contentCreation,
  learningPath,
  flows,
  terminalLines,
};
export type {
  NavLink,
  SocialLink,
  Service,
  ExperienceItem,
  SkillGroup,
  Project,
  Publication,
  ContentChannel,
  Flow,
  FlowNode,
  TerminalLine,
};
