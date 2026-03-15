import React from 'react';
import MainLayout from '../layouts/MainLayout';

const services = [
    {
        title: 'Intégration applicative & mise en production',
        description: 'Prise en charge complète des déploiements applicatifs sur les environnements INT, REC, PPROD et PROD, avec préparation des chronogrammes, coordination des équipes techniques et sécurisation des livraisons.',
        benefits: 'Mises en production fiabilisées, meilleure coordination inter-équipes et réduction des risques de régression.'
    },
    {
        title: 'Déploiement DevOps & CI/CD',
        description: 'Industrialisation des déploiements via Jenkins, XLDeploy, Git/GitLab, avec pipelines, contrôles de conformité des livrables et automatisation des tâches récurrentes.',
        benefits: 'Déploiements plus rapides, répétables et traçables, avec un gain fort en qualité opérationnelle.'
    },
    {
        title: 'Administration middleware & serveurs d’applications',
        description: 'Déploiement et administration des applications sur Tomcat, WebLogic, JBoss, WebSphere et IIS, avec maintenance des environnements et gestion des certificats.',
        benefits: 'Disponibilité applicative renforcée et meilleure stabilité des plateformes techniques.'
    },
    {
        title: 'Ordonnancement & supervision de production',
        description: 'Paramétrage, ordonnancement et suivi des traitements batch sous VTOM, Dollar U et Control-M, avec supervision Centreon, reprise sur incident et escalade coordonnée.',
        benefits: 'Continuité de service améliorée, meilleure réactivité en exploitation et incidents mieux maîtrisés.'
    },
    {
        title: 'Support technique, MCO & documentation',
        description: 'Suivi des incidents N2, analyse des causes, actions correctives, reporting hebdomadaire, rédaction des procédures d’exploitation et accompagnement MOA/MOE.',
        benefits: 'Capitalisation documentaire, meilleure exploitabilité et amélioration continue des processus de production.'
    }
];

const ServicesPage = () => {
    return (
        <MainLayout>
            <h1>Nos services</h1>
            <p>
                Une offre orientée production et DevOps, conçue pour fiabiliser vos mises en production,
                optimiser vos traitements batch et renforcer l’exploitation quotidienne de vos applications.
            </p>
            <ul>
                {services.map((service, index) => (
                    <li key={index}>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        <p><strong>Bénéfices :</strong> {service.benefits}</p>
                    </li>
                ))}
            </ul>
        </MainLayout>
    );
};

export default ServicesPage;