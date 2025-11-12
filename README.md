## DevHub 🌐

Un site communautaire open-source pour les passionnés d’informatique et les étudiants en technologie.

### Présentation

DevHub est un site statique, simple et collaboratif, destiné à rassembler une communauté autour du partage de connaissances en informatique.
L’objectif est de proposer un espace où chacun peut :

💡 Partager ses projets ou expériences

🤝 Publier des annonces d’entraide

📅 Annoncer des événements

💬 Échanger des conseils techniques

Contrairement à un forum traditionnel, DevHub mise sur la simplicité et la mise en valeur des contributions, à travers une interface statique légère, hébergée directement sur GitHub Pages.

### Structure du projet

Le site est composé de simples fichiers HTML et CSS, sans base de données ni serveur.
L’intégralité du contenu est versionnée sur GitHub, ce qui rend le projet :

Transparent 🧩

Facile à maintenir 🔧

> Structure du projet :
>
> ```text
> devhub/
> │
> ├── index.html
> ├── faq.html
> ├── README.md
> ├── questions/
> │   └── ...
> └── .github/
>     └── workflows/
>         └── main.yml
> `

### Fonctionnement des contributions

DevHub repose sur un modèle collaboratif Git.
Toute personne souhaitant contribuer peut suivre ce processus :

1. Forker le dépôt GitHub

2.Créer une branche de travail à partir de predev

git checkout predev
git pull origin predev
git checkout -b ma-contribution


3.Créer un fichier Markdown dans le dossier /questions

Basé sur le template fourni (template.md)

.Contenant :

- un titre
- une date
- un auteur
- le contenu de l’article ou de la question

4.Commit et push sur votre branche personnelle

git add .
git commit -m "Ajout d’un nouvel article"
git push origin ma-contribution


5.Créer une Pull Request vers la branche predev

Pas vers main !

L’équipe du projet relira, corrigera si besoin, puis fusionnera sur predev.

Cette méthode permet de :

Garder un historique clair des contributions
Éviter la complexité d’un back-end
Maintenir un contrôle humain avant publication

### Déploiement continu (CI/CD)

DevHub intègre un pipeline d’intégration continue grâce à GitHub Actions.
Processus automatisé

À chaque fusion sur la branche principale :

1. Le workflow GitHub Actions se déclenche automatiquement
2. Le fichier YAML (deploy.yml) :

.Génère les pages statiques
.Met à jour le contenu du site
.Déploie automatiquement le tout sur GitHub Pages

Ce système assure :

.Un déploiement automatique
.Une validation humaine préalable via les PR
.Une mise à jour instantanée du site après chaque contribution approuvée

### Technologies utilisées

.HTML5 / CSS3 — Structure et mise en page du site
.GitHub Pages — Hébergement statique
.GitHub Actions — Intégration et déploiement continus
.Markdown — Format des contributions

Contribution

Les contributions sont les bienvenues !

### Pour participer :

- ***1   Cloner le projet***
git clone https://github.com/ton-utilisateur/devhub.git

- ***2   Créer une nouvelle branche***
git checkout -b ma-contribution

- ***3   Ajouter ton article dans /questions***

- ***4   Commit et push***
git commit -m "Ajout d’un nouvel article"
git push origin ma-contribution

- ***5   Créer une Pull Request sur GitHub***

### Objectifs pédagogiques

- Ce projet illustre trois piliers essentiels du développement moderne :

- La collaboration via Git

- La transparence et la traçabilité des contributions

- L’automatisation du déploiement (CI/CD)

Entièrement communautaire 🌍
Paolo L
Shaïna L
Dylan B
Killian B

 
