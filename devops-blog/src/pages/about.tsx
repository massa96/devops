import React from 'react';
import MainLayout from '../layouts/MainLayout';

const About: React.FC = () => {
    const competencesTechniques = [
        'Langages : Shell (bash, ksh, sh), Java/JEE, HTML5, CSS3, PHP',
        'Systèmes d’exploitation : Windows Server (2012 R2, 2016, 2022), Linux (Red Hat, Debian, CentOS), UNIX (AIX, Solaris)',
        'Déploiement continu : Git, GitHub, GitLab, Jenkins, XLDeploy',
        'Ordonnanceurs : VTOM, Control-M, Dollar U',
        'Serveurs d’applications : Tomcat, WebLogic, JBoss, WebSphere, IIS',
        'SGBD : SQL Server, Oracle, MySQL, MariaDB',
    ];

    const competencesFonctionnelles = [
        'Méthodes projet : Cycle en V et Agile',
        'Coordination avec les équipes MOE/MOA',
        'Supervision du SI et suivi de production (VTOM, Dollar U, Centreon)',
        'Gestion des incidents, support technique N2 et gestion de crise',
        'Analyse, préparation et rédaction de documents techniques',
        'Planification, ordonnancement et optimisation des traitements batch',
        'Déploiement et intégration continue d’applications',
    ];

    const missionsIntegration = [
        'Pilotage des mises en production en coordination avec les intervenants techniques',
        'Intégration et déploiement d’applications et flux applicatifs',
        'Organisation des comités de déploiement (chronogrammes, fiches de livraison)',
        'Déploiements via XLDeploy, Jenkins Pipeline et Git',
        'Livraisons sur INT, REC, PPROD et PROD',
        'Déploiement sur Tomcat et JBoss, maintenance applicative',
        'Détection et traitement d’incidents (Dollar U, Centreon), relances et reprises',
        'Industrialisation des déploiements, documentation et reporting hebdomadaire',
        'Renouvellement de certificats et amélioration continue des procédures',
    ];

    const missionsDevOps = [
        'Prise en charge des demandes sur les environnements MOA, PPD et PRD',
        'Coordination des projets de production avec les équipes MOA/MOE',
        'Vérification des livrables et préparation des prérequis de mise en production',
        'Déploiement continu des packages via Jenkins, GitLab et pipelines CI/CD',
        'Administration et déploiement sur Tomcat, WebLogic et JBoss',
        'Intégration de composants et ordonnancement sous Dollar U',
        'Rédaction des plans de tests techniques et des dossiers d’exploitation',
        'Suivi des incidents d’exploitation, analyse des causes et actions correctives',
        'Mise à jour des manuels d’exploitation et comptes rendus d’incidents',
    ];

    const atouts = [
        'Capacité à travailler en multitâches',
        'Gestion des priorités dans des contextes de crise',
        'Respect des plannings et des engagements',
        'Travail sur plusieurs projets en parallèle',
    ];

    return (
        <MainLayout>
            <div className="about-page">
                <h1>Profil professionnel</h1>
                <p>
                    Intégrateur d’applications et de production avec une forte orientation DevOps,
                    spécialisé dans l’industrialisation des déploiements, le suivi de production
                    et la fiabilisation des mises en production sur environnements critiques.
                </p>

                <h2>Compétences techniques</h2>
                <ul>
                    {competencesTechniques.map((item, index) => (
                        <li key={`tech-${index}`}>{item}</li>
                    ))}
                </ul>

                <h2>Compétences fonctionnelles</h2>
                <ul>
                    {competencesFonctionnelles.map((item, index) => (
                        <li key={`func-${index}`}>{item}</li>
                    ))}
                </ul>

                <h2>Expériences professionnelles</h2>

                <h3>Fonction : Intégrateur d’applications et de production</h3>
                <ul>
                    {missionsIntegration.map((item, index) => (
                        <li key={`integration-${index}`}>{item}</li>
                    ))}
                </ul>

                <h3>Fonction : Intégrateur DevOps d’applications</h3>
                <ul>
                    {missionsDevOps.map((item, index) => (
                        <li key={`devops-${index}`}>{item}</li>
                    ))}
                </ul>

                <h2>Atouts</h2>
                <ul>
                    {atouts.map((item, index) => (
                        <li key={`atout-${index}`}>{item}</li>
                    ))}
                </ul>

                <h2>Environnements techniques maîtrisés</h2>
                <p>
                    Windows Server 2012 R2/2016/2022, Linux Red Hat, UNIX, Oracle, MySQL,
                    MariaDB, Centreon, GLPI, Shiva, IWS, Jenkins, XLDeploy, GitLab, VTOM,
                    Dollar U, Tomcat, WebLogic, JBoss.
                </p>
            </div>
        </MainLayout>
    );
};

export default About;