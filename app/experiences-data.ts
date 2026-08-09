export type Experience = {
  company: string;
  logo: string;
  period: string;
  role?: string;
  content: string[];
  url?: string;
};

export const experiences: Experience[] = [
  {
    company: "Sagemcom",
    logo: "/logos/sagemcom.png",
    url: "https://www.sagemcom.com",
    period: "Septembre 2024 - Aujourd'hui",
    role: "Ingénieur IA (CDI)",
    content: [
      "A la suite de mon stage de fin d'études, j'ai rejoint [Sagemcom](https://www.sagemcom.com) en CDI en tant qu'ingénieur IA à partir de septembre 2024, poste que j'occupe encore aujourd'hui. Mon rôle couvre à la fois la création et la gestion continue de l'infrastructure IA de l'entreprise ainsi que le pilotage de plusieurs projets liés à l'intelligence artificielle.",
      "Création et gestion continue de l'infrastructure IA de l'entreprise : cette activité transverse et continue est liée à la création de la nouvelle équipe IA et à son intégration dans l'infrastructure globale de l'entreprise. J'ai commencé par comprendre l'infrastructure IT globale de l'entreprise et les contraintes associées, puis j'ai créé et administré des machines virtuelles (VM) pour déployer les applications IA en préproduction puis en production. Face aux limitations liées à l'absence de GPU sur les VM, j'ai mis en place une infrastructure dédiée : commande de serveurs équipés de GPU, assemblage et préparation des machines, installation en data center, dans le respect des normes, procédures et processus internes de l'entreprise. J'ai ensuite industrialisé les applications IA avec la mise en place de pipelines CI/CD, assuré leur déploiement en production et leur maintenance continue, mis en place le monitoring des applications et de l'infrastructure, géré les problématiques d'authentification et d'accès, et mis à disposition un serveur Ollama interne pour les collaborateurs souhaitant utiliser des modèles d'IA validés et hébergés en interne.",
      "Projet de mise en production : ce projet, initialement réalisé dans le cadre de mon stage de fin d'études, a été repris, amélioré et industrialisé durant le CDI. J'ai repris le prototype développé pendant le stage, amélioré la solution et ses fonctionnalités, adapté l'ensemble aux contraintes de l'environnement industriel de l'entreprise, puis assuré son industrialisation, sa mise en production et sa maintenance dans le temps.",
      "Projet de simulation thermique des gateways : ce projet vise à exploiter l'IA et les données historiques de l'entreprise afin de réduire le nombre de simulations thermiques physiques nécessaires aux équipes. L'objectif est d'exploiter la base de données existante de simulations, de prendre en compte les données issues des simulations 3D, de développer une approche basée sur l'IA permettant de prédire et comprendre le comportement thermique des gateways, de réduire le recours aux simulations physiques coûteuses en temps et en ressources, et de fournir aux équipes R&D un outil d'aide à la conception et à la validation.",
      "Projet MCP et base de connaissances intra-URD : ce projet vise à rendre les connaissances techniques des différentes unités de R&D accessibles de manière centralisée via un MCP (Model Context Protocol). L'approche envisagée consiste à recueillir les besoins auprès de chaque unité de recherche et développement (URD), à agréger les connaissances provenant notamment de GitLab, Confluence et Jira, à construire une base de connaissances exploitable par les assistants IA, puis à mettre ces connaissances à disposition via un MCP connectable depuis différents clients IA, notamment GitHub Copilot mais pas exclusivement. L'objectif est de permettre aux collaborateurs d'interroger les connaissances internes de l'entreprise directement depuis leurs outils IA.",
      "Projet de revue de code automatique : ce projet consiste en un outil d'analyse et de revue de code assistée par IA. La solution doit pouvoir fonctionner localement de manière autonome, ou être intégrée directement à une instance GitLab Community Edition auto-hébergée par Sagemcom, analyser le code lors d'une Merge Request (MR), identifier les problèmes, erreurs potentielles ou améliorations possibles, générer automatiquement des commentaires et les publier directement dans la MR, au niveau du code concerné. L'objectif est d'automatiser une partie de la revue de code tout en conservant les retours directement dans le workflow de développement des équipes.",
    ],
  },
  {
    company: "Sagemcom",
    logo: "/logos/sagemcom.png",
    url: "https://www.sagemcom.com",
    period: "Avril - Septembre 2024",
    role: "Stage de fin d'études",
    content: [
      "A l'occasion de mon stage de fin d'études, j'ai travaillé 6 mois dans l'entreprise [Sagemcom](https://www.sagemcom.com). Leader mondial de passerelles haut débit, Sagemcom fournit aux opérateurs du monde entier différentes technologies (Fibre, DOCSIS, DSL/FTTH, FWA 4G/5G, Wi-Fi 5, Wi-Fi6, ...) permettant l'accès à internet. Mon rôle a été de développer, en binôme, un assistant à la programmation pour les développeurs de Sagemcom. En effet, l'intérêt de ce projet est de rendre un modèle de base spécialisé en code, encore plus spécialisé dans la programmation type Sagemcom. De ce fait, l'objectif a été d'entraîner un modèle sur le code source de l'entreprise sans que ces données confidentielles ne fuitent sur le Cloud. Pour ce projet, nous avons utilisé principalement Python comme langage de programmation mais aussi JavaScript et TypeScript pour l'extension VSCode. Dans un premier temps, nous avons créé un pipeline d'exécution complet sur Amazon Web Services (AWS) afin d'automatiser le processus de fine-tuning d'un modèle open-source. Différentes étapes composent ce pipeline : traitement des données, entraînement (fine-tuning), test, benchmark et sauvegarde du modèle. Dans cet environnement AWS, nous avons utilisé le code de projets open-source se rapprochant du code Sagemcom tels que OpenWRT ou encore Android Open Source Project (AOSP). Enfin, l'objectif a été de migrer ce pipeline sur un pipeline GitLab en interne afin de ne pas exposer les données confidentielles sur le Cloud AWS.",
    ],
  },
  {
    company: "University of Žilina",
    logo: "/logos/uniza.jpg",
    period: "Juillet - Septembre 2023",
    role: "Stage “Urban mobile charging“, département ERAdiate+",
    content: [
      "J'ai réalisé mon séjour à l'étranger à travers un stage de 3 mois dans la ville de Žilina en Slovaquie. En effet, j'ai eu l'occasion de travailler avec le chercheur [Ľuboš Buzna](http://frdsa.uniza.sk/~buzna/) sur le sujet des véhicules électriques au sein du département ERAdiate+ de l'université de Žilina. Ce département rassemble des chercheurs de plusieurs domaines d'expertise sur des sujets de mobilité durable. Pour ma part, j'ai participé à l'exploitation de données de chargement de voitures électriques et de stations de chargement (mobiles) provenant de l'entreprise [Nimble Energy](https://nimble-energy.com/). J'ai donc eu pour mission de nettoyer les jeux de données : un jeu de données pour les charges de voitures électriques et un autre pour les stations de chargement mobiles (rechargeables). Ma seconde mission a été d'exploiter ces données à l'aide d'outils d'apprentissage statistique pour prédire le temps de charge des appareils. De plus, à la demande de l'entreprise Nimble Energy, trois scénarios étaient à considérer : une prédiction à partir du gain de charge (en %) souhaité par l'utilisateur, une prédiction à partir du statut de charge de départ et d'arrivée, puis une prédiction lorsque le chargement est en cours et que nous avons accès à d'autres variables (température de la batterie, courant, puissance, ...). Il m'a donc fallu comparer différentes méthodes d'apprentissage statistique pour chaque scénario. Enfin, j'ai également utilisé des méthodes d'augmentation des données car certains modèles comme le réseau de neurones nécessitent un plus gros jeu de données d'entraînement. Pour finir, cette mission a donné lieu à un article scientifique présenté à la conférence [SpliTech 2024](https://splitech.org/Home).",
    ],
  },
  {
    company: "RATP Group",
    logo: "/logos/ratp.png",
    url: "https://www.ratp.fr/",
    period: "Août 2022",
    role: "Stage développement logiciel",
    content: [
      "Mon stage de découverte de première année s'est découpé en deux périodes : un mois à la RATP et un mois à Sudelphone. La [RATP](https://www.ratp.fr/) (Régie Autonome des Transports Parisiens) est une grande entreprise (+ de 5000 employés) exerçant dans les secteurs suivants : exploitation, maintenance et ingénierie de réseaux de transport de voyageurs. Pour ma part, j'ai travaillé dans le département MTS (Métro, Transport et Services) et plus précisément dans l'unité \"Horaires et Trafic\". Le rôle de cette unité est de mesurer la demande de transport et d'y associer l'offre adéquate correspondante. Pour mesurer la demande de transport, on parle de Relevé De Charge (RDC). En effet, certains relevés de charge sont encore manuels et assurés par des agents de comptage. Ainsi, ils relèvent le nombre de voyageurs par rame dans l'application ComptaNet (application Android). D'autre part, les agents de comptage sont amenés à mesurer ce qu'on appelle la netteté des trains, c'est-à-dire la propreté des trains. Cette netteté est saisie sur ComptaNet. Dans le cadre de mon stage, j'ai eu pour mission de modifier le code source de cette application dans l'optique d'ajouter la fonction caméra pour les agents afin d'expliciter la netteté par image. Dans un premier temps, j'ai été formé au développement sur l'IDE Android Studio. Puis, j'ai réalisé des maquettes pour m'assurer que l'interface convenait aux besoins. J'ai ensuite développé la fonctionnalité en Java et j'ai rédigé une documentation de cette dernière.",
    ],
  },
  {
    company: "Sudelphone",
    logo: "/logos/sudelphone.png",
    period: "Juillet 2022",
    role: "Stage assistant technicien réseau",
    content: [
      "Toujours dans le cadre du stage de première année, j'ai travaillé pour une TPE appelée Sudelphone. Sudelphone est une Société par Actions Simplifiées (SAS) composée de 5 employés exerçant dans les secteurs réseau, électronique et télécoms. L'entreprise installe et entretient des infrastructures téléphoniques (IP ou analogique), IPTV (Télévision sur IP) et s'assure de la cybersécurité chez ses clients. Mon rôle en tant que stagiaire a été principalement d'observer le fonctionnement des différents acteurs de l'entreprise. J'ai également produit des maquettes réseaux simples dont le but était de configurer un pare-feu Fortinet. Enfin, j'ai assisté les techniciens lors de leurs interventions (installation ou dépannage) chez les clients.",
    ],
  },
];
