export type Project = {
  slug: string;
  title: string;
  image: string;
  summary: string;
  description: string[];
  githubUrl?: string;
  websiteUrl?: string;
  gallery?: { src: string; caption?: string }[];
};

export const projects: Project[] = [
  {
    slug: "course-scheduling-software",
    title: "Logiciel planification de cours",
    image: "/project_imgs/course_scheduling_software_poster.jpg",
    summary:
      "Développement d'une application web pour organiser et planifier les séances de cours à Télécom SudParis.",
    description: [
      "Ce projet a été réalisé en binôme dans le cadre académique du programme Cassiopée 2022-2023 de Télécom SudParis. L'objectif de ce projet a été de développer de zéro une application de planification de cours pour le secteur physique de l'école. Tout au long de ce projet, nous étions en pleine autonomie avec notre tuteur jouant le rôle du parfait client. Ainsi, en se basant sur les demandes du client nous avons fourni une application fonctionnelle et une documentation associée afin que l'application puisse être maintenue après la fin du projet.",
      "Au niveau des technologies, nous avons choisi React pour le frontend et Django pour la partie backend. Afin d'héberger le serveur, nous avons configuré une machine virtuelle mise à disposition par la DSI de l'école à l'aide d'Apache.",
    ],
    githubUrl: "https://github.com/theoblc/course-scheduling-software",
    gallery: [{ src: "/project_imgs/course_scheduling_software_poster.jpg", caption: "Poster récapitulatif" }],
  },
  {
    slug: "hotel-reservation-manager",
    title: "Logiciel gestion d'hôtel",
    image: "/project_imgs/hotel_reservation_screenshot.png",
    summary:
      "Développement d'une application Java pour créer et organiser les réservations d'un hôtel.",
    description: [
      "Ce projet a été réalisé en quadrinôme dans le cadre académique du cours PRO3600 de Télécom SudParis. L'objectif de ce projet a été de développer de zéro une application de gestion d'un hôtel. Tout d'abord, nous avons imaginé les besoins d'un hôtel en termes de logiciel. Puis, nous avons réalisé des maquettes afin que nous développions tous avec la même image en tête de l'application finale.",
      "En termes de technologies, nous avons choisi de développer en Java et en JavaFX pour l'interface graphique. La base de données est hébergée sous MySQL.",
    ],
    githubUrl: "https://github.com/theoblc/hotel-reservation-manager",
    gallery: [{ src: "/project_imgs/hotel_reservation_screenshot.png", caption: "Capture d'écran de l'application" }],
  },
  {
    slug: "transfer-learning-finance",
    title: '"Transfer learning" en finance',
    image: "/project_imgs/TFL_data_enriched_test.png",
    summary:
      "Test d'une méthode d'apprentissage par transfert dans un cas de régression linéaire en finance.",
    description: [
      "Ce projet a été réalisé en binôme dans le cadre académique du projet de fin d'étude de Télécom SudParis. L'objectif de ce projet a été de comprendre le sujet du \"transfer learning\" (ou apprentissage par transfert) dans sa globalité. Puis, nous nous sommes concentrés sur l'article de Chen et al., Data enriched linear regression, qui propose une régression linéaire modifiée pour le transfer learning de type instance-based (connaissance transférée au niveau des jeux de données).",
      "Pour définir simplement le transfer learning, on peut dire que c'est le principe de recycler la connaissance d'un domaine source vers un domaine cible. Dans notre cas d'application, le but a été d'utiliser le jeu de données du cours de l'action IBM (de 1962 à 2023) comme domaine source afin d'améliorer la prédiction du cours de l'action HPE (de 2015 à 2023) comme domaine cible.",
      "Ainsi, nous avons implémenté la méthode de régression linéaire TL (pour Transfer Learning) en Python afin d'améliorer la prédiction du cours HPE. Cela n'a pas amélioré la qualité des prédictions car la méthode de régression linéaire est trop simpliste pour décrire un processus stochastique. Sur les conseils de notre tutrice, nous avons exploré la possibilité d'utiliser l'objet mathématique signature, souvent utilisé pour extraire des ensembles de caractéristiques essentielles des données. Par manque de temps, nous n'avons pas pu l'incorporer au modèle de prédiction mais la littérature scientifique semble encourageante à ce sujet.",
    ],
    githubUrl: "https://github.com/theoblc/transfer-learning-sp500",
    gallery: [
      {
        src: "/project_imgs/TFL_data_enriched_test.png",
        caption:
          "Deux graphes correspondant aux tests des modèles de régression linéaire classique et enrichie, entraînés sur le cours de fermeture de HP entre 2015-10-19 et 2017-01-01 (n=304 données). Le modèle enrichi a été entraîné en plus sur les données de l'entreprise IBM (de 1962-01-02 à 2017-01-01 : N=13846 données). Le graphe (a) correspond à la régression linéaire classique, le graphe (b) à la régression linéaire enrichie.",
      },
    ],
  },
  {
    slug: "dnn-from-scratch",
    title: "DNN from scratch",
    image: "/project_imgs/dnn_MNIST.jpg",
    summary: "Développement d'un Deep Neural Network avec la librairie Numpy de Python.",
    description: [
      "Ce projet a été réalisé dans le cadre académique de Télécom SudParis. L'objectif de ce projet a été de développer un Deep Neural Network sur Numpy afin qu'il puisse classifier les chiffres provenant de la base de données MNIST. Le projet se divise en trois étapes d'implémentation : le RBM (Restricted Boltzmann Machine), le DBN (Deep Belief Network) et pour finir le DNN (Deep Neural Network).",
    ],
    githubUrl: "https://github.com/theoblc/dnn-from-scratch",
    gallery: [
      {
        src: "/project_imgs/dnn_fig1.png",
        caption:
          "Trois graphes correspondant aux résultats du DNN sur MNIST. L'ordonnée correspond au taux d'erreur de classification, c'est-à-dire le pourcentage de mauvaises classifications (mauvais chiffre détecté) par rapport à tous les tests. Le premier graphe en partant de la gauche étudie l'impact de la profondeur du DNN en conservant les autres paramètres fixes à 200 neurones par couche et 10000 données d'entraînement. Le nombre de couche varie de 2 à 9.",
      },
      {
        src: "/project_imgs/dnn_fig2.png",
        caption:
          "Le deuxième graphe se concentre sur le nombre de neurones par couche de 100 à 800 neurones. Encore une fois, les autres paramètres sont fixés à 2 couche et 10000 données d'entraînement.",
      },
      {
        src: "/project_imgs/dnn_fig3.png",
        caption:
          "Pour le troisième graphe, on étudie l'impact du nombre de données d'entraînement de 1000 à 60000 pour un DNN à deux couches de 200 neurones. Ces trois figures constituent une première exploration d'optimisation des hyperparamètres du DNN.",
      },
    ],
  },
  {
    slug: "site-web-ophelie-claitte",
    title: "Site web pour Ophélie Claitte, diététicienne",
    image: "/project_imgs/ophelie_claitte_og.png",
    summary:
      "Développement fullstack d'un site vitrine pour une diététicienne-nutritionniste, de l'expression du besoin à la maintenance continue.",
    description: [
      "Ce projet a été réalisé en freelance pour Ophélie Claitte, diététicienne-nutritionniste, sur son site ocdiet.fr. J'ai piloté seul l'intégralité du projet : recueil du besoin auprès de la cliente, conception des maquettes, développement, mise en production et validation avec la cliente.",
      "Le site a été développé avec le framework Next.js, puis déployé sur Vercel pour l'hébergement de l'application, avec la gestion du nom de domaine et du DNS assurée via OVHCloud.",
      "En tant que développeur fullstack unique sur ce projet, j'assure également la maintenance continue du site : mises à jour des dépendances, correction des failles de sécurité (CVE), et évolutions du contenu à la demande de la cliente.",
    ],
    websiteUrl: "https://ocdiet.fr/",
  },
  {
    slug: "site-web-alexandra-silva",
    title: "Site web pour Alexandra Silva, diététicienne",
    image: "/project_imgs/alexandra_silva_og.png",
    summary:
      "Développement fullstack d'un site vitrine pour une diététicienne-nutritionniste, de l'expression du besoin à la maintenance continue.",
    description: [
      "Ce projet a été réalisé en freelance pour Alexandra Silva, diététicienne-nutritionniste, sur son site alexandrasilvadiet.fr. J'ai piloté seul l'intégralité du projet : recueil du besoin auprès de la cliente, conception des maquettes, développement, mise en production et validation avec la cliente.",
      "Le site a été développé avec le framework Next.js, puis déployé sur Vercel pour l'hébergement de l'application, avec la gestion du nom de domaine et du DNS assurée via OVHCloud.",
      "En tant que développeur fullstack unique sur ce projet, j'assure également la maintenance continue du site : mises à jour des dépendances, correction des failles de sécurité (CVE), et évolutions du contenu à la demande de la cliente.",
    ],
    websiteUrl: "https://alexandrasilvadiet.fr/",
  }
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
