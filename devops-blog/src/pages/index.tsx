import React from 'react';
import MainLayout from '../layouts/MainLayout';
import PostCard from '../components/PostCard';
import ProjectHighlight from '../components/ProjectHighlight';
// `getRecentPosts` will be loaded server-side in `getStaticProps` to avoid bundling Node `fs` in the client
import { projects } from '../data/projects';

const servicesPreview = [
    {
        title: 'Intégration applicative & mise en production',
        description: 'Coordination des livraisons, préparation des chronogrammes et sécurisation des déploiements sur INT/REC/PPROD/PROD.',
    },
    {
        title: 'Déploiement DevOps & CI/CD',
        description: 'Industrialisation des livraisons via Jenkins, XLDeploy et GitLab avec pipelines et contrôles de conformité.',
    },
    {
        title: 'Administration middleware',
        description: 'Déploiement et exploitation sur Tomcat, WebLogic, JBoss, WebSphere et IIS, avec maintenance continue.',
    },
    {
        title: 'Ordonnancement & supervision',
        description: 'Pilotage des batchs sous VTOM, Dollar U et Control-M avec supervision active et reprise sur incident.',
    },
    {
        title: 'Support technique & MCO',
        description: 'Gestion des incidents N2, documentation d’exploitation, reporting et amélioration continue des processus.',
    },
];

const HomePage = ({ recentPosts }: { recentPosts: any[] }) => {

    return (
        <MainLayout>
            <section className="hero-section">
                <h1>Bienvenue sur mon blog DevOps</h1>
                <p>
                    Des retours concrets sur le CI/CD, Docker, Kubernetes,
                    l'automatisation cloud et la fiabilité des plateformes.
                </p>
            </section>
            <section className="content-section">
                    <h2>Articles récents</h2>
                    <div className="post-list">
                        {recentPosts.map(post => (
                            <PostCard key={post.slug} post={post} />
                        ))}
                    </div>
                </section>
                <section className="content-section">
                    <h2>Nos expertises</h2>
                    <div className="services-preview-grid">
                        {servicesPreview.map((service) => (
                            <article key={service.title} className="service-preview-card">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </article>
                        ))}
                    </div>
                    <p>
                        <a href="/services" className="card-link">Voir tous les services</a>
                    </p>
                </section>
                <section className="content-section">
                    <h2>Projets à la une</h2>
                    <ProjectHighlight projects={projects} />
                </section>
        </MainLayout>
    );
};

export default HomePage;

export async function getStaticProps() {
    const { getRecentPosts } = await import('../lib/markdown');
    const recentPosts = getRecentPosts();
    return { props: { recentPosts } };
}