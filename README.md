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
>```
>|
>├── index.html 
>├── question.html 
>├── reponse.html 
>├── CONTRIBUTING.md 
>├── .github/ 
>│ └── workflows/ 
>│ └── main.yml 
>├── css/ 
>│ └── style.css 
>├── js/ 
>│ └── app.js 
>├── questions/ 
>│ └── 2025-01-15-comment-utiliser-javascript.md 
>│  
>└── reponses/ 
>│ └── 2025-01-15-reponse-javascript.md
>`

### Fonctionnement des contributions

DevHub repose sur un modèle collaboratif Git.
Toute personne souhaitant contribuer peut suivre ce processus :

1. Forker le dépôt GitHub

2. Créer une branche de travail à partir de predev

. git checkout predev
. git pull origin predev
. git checkout -b ma-contribution


3. Créer un fichier Markdown dans le dossier /questions

Basé sur le template fourni (template.md)

. Contenant :

- un titre
- une date
- un auteur
- le contenu de l’article ou de la question

4. Commit et push sur votre branche personnelle

. git add .
. git commit -m "Ajout d’un nouvel article"
. git push origin ma-contribution


5. Créer une Pull Request vers la branche predev

Pas vers main !
L’équipe du projet relira, corrigera si besoin, puis fusionnera sur predev.

Cette méthode permet de :

Garder un historique clair des contributions
Éviter la complexité d’un back-end
Maintenir un contrôle humain avant publication

### 🚀 Déploiement continu (CI/CD)

Le déploiement automatisé est géré via GitHub Actions.
- Les utilisateurs contribuent sur la branche predev.
- Après validation, les mainteneurs fusionnent predev dans main.
- Cette fusion déclenche le pipeline CI/CD, qui :

1. Construit les fichiers HTML/CSS statiques
2. Met à jour le contenu sur GitHub Pages
3. Déploie le site automatiquement

Ainsi :

- Les contributeurs travaillent en préproduction (predev)
- Le site public reste stable sur main
- Le déploiement est automatisé et contrôlé

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

 
