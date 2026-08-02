export type Project = {
  slug: string;
  title: string;
  image: string;
  summary: string;
  description: string[];
  githubUrl?: string;
  gallery?: { src: string; caption?: string }[];
};

export const projects: Project[] = [
  {
    slug: "course-scheduling-software",
    title: "Logiciel planification de cours",
    image: "/images/pic01.jpg",
    summary:
      "Développement d'une application web pour organiser et planifier les séances de cours à Télécom SudParis.",
    description: [
      "Ce projet a été réalisé en binôme dans le cadre académique du programme Cassiopée 2022-2023 de Télécom SudParis. L'objectif de ce projet a été de développer de zéro une application de planification de cours pour le secteur physique de l'école. Tout au long de ce projet, nous étions en pleine autonomie avec notre tuteur jouant le rôle du parfait client. Ainsi, en se basant sur les demandes du client nous avons fourni une application fonctionnelle et une documentation associée afin que l'application puisse être maintenue après la fin du projet.",
      "Au niveau des technologies, nous avons choisi React pour le frontend et Django pour la partie backend. Afin d'héberger le serveur, nous avons configuré une machine virtuelle mise à disposition par la DSI de l'école à l'aide d'Apache.",
    ],
    githubUrl: "https://github.com/theoblc/course-scheduling-software",
    gallery: [{ src: "/images/poster_peph.jpg", caption: "Poster récapitulatif" }],
  },
  {
    slug: "hotel-reservation-manager",
    title: "Logiciel gestion d'hôtel",
    image: "/images/pic02.jpg",
    summary:
      "Développement d'une application Java pour créer et organiser les réservations d'un hôtel.",
    description: [
      "Ce projet a été réalisé en quadrinôme dans le cadre académique du cours PRO3600 de Télécom SudParis. L'objectif de ce projet a été de développer de zéro une application de gestion d'un hôtel. Tout d'abord, nous avons imaginé les besoins d'un hôtel en termes de logiciel. Puis, nous avons réalisé des maquettes afin que nous développions tous avec la même image en tête de l'application finale.",
      "En termes de technologies, nous avons choisi de développer en Java et en JavaFX pour l'interface graphique. La base de données est hébergée sous MySQL.",
    ],
    githubUrl: "https://github.com/theoblc/hotel-reservation-manager",
    gallery: [{ src: "/images/dashboard_pro3600.png", caption: "Capture d'écran de l'application" }],
  },
  {
    slug: "transfer-learning-finance",
    title: '"Transfer learning" en finance',
    image: "/images/pic03.jpg",
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
        src: "/images/data_enriched_test.png",
        caption:
          "Deux graphes correspondant aux tests des modèles de régression linéaire classique et enrichie, entraînés sur le cours de fermeture de HP entre 2015-10-19 et 2017-01-01 (n=304 données). Le modèle enrichi a été entraîné en plus sur les données de l'entreprise IBM (de 1962-01-02 à 2017-01-01 : N=13846 données). Le graphe (a) correspond à la régression linéaire classique, le graphe (b) à la régression linéaire enrichie.",
      },
    ],
  },
  {
    slug: "dnn-from-scratch",
    title: "DNN from scratch",
    image: "/images/pic04.jpg",
    summary: "Développement d'un Deep Neural Network avec la librairie Numpy de Python.",
    description: [
      "Ce projet a été réalisé dans le cadre académique de Télécom SudParis. L'objectif de ce projet a été de développer un Deep Neural Network sur Numpy afin qu'il puisse classifier les chiffres provenant de la base de données MNIST. Le projet se divise en trois étapes d'implémentation : le RBM (Restricted Boltzmann Machine), le DBN (Deep Belief Network) et pour finir le DNN (Deep Neural Network).",
    ],
    githubUrl: "https://github.com/theoblc/dnn-from-scratch",
    gallery: [
      { src: "/images/MNIST.jpg" },
      { src: "/images/dnn_fig1.png" },
      { src: "/images/dnn_fig2.png" },
      { src: "/images/dnn_fig3.png" },
    ],
  },
  {
    slug: "coming-soon",
    title: "Coming soon...",
    image: "/images/pic05.jpg",
    summary: "Coming soon...",
    description: ["Un nouveau projet est en préparation, revenez bientôt !"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
