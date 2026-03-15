export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "Pipeline CI/CD automatisé",
    description: "Mise en œuvre d’un pipeline CI/CD entièrement automatisé avec Jenkins et Docker, réduisant le temps de déploiement de 50%.",
    link: "https://example.com/ci-cd-pipeline",
    image: "/images/jenkins.svg"
  },
  {
    id: "p2",
    title: "Infrastructure as Code avec Terraform",
    description: "Développement d’une infrastructure as code avec Terraform, permettant des déploiements cohérents et reproductibles.",
    link: "https://example.com/terraform-infrastructure",
    image: "/images/terraform.svg"
  },
  {
    id: "p3",
    title: "Supervision et logs avec la stack ELK",
    description: "Mise en place d’une stack ELK pour centraliser la journalisation et la supervision, améliorant l’observabilité et le diagnostic.",
    link: "https://example.com/elk-stack",
    image: "/images/elk.svg"
  },
  {
    id: "p4",
    title: "Orchestration de conteneurs avec Kubernetes",
    description: "Déploiement et gestion d’applications sur Kubernetes, avec amélioration de la scalabilité et de la fiabilité des services.",
    link: "https://example.com/kubernetes-orchestration",
    image: "/images/kubernetes.svg"
  }
];