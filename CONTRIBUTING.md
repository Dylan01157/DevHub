# Comment contribuer

Merci de vouloir contribuer à ce projet ! Voici comment faire.

## Ajouter une question

1. **Forkez** ce repository
2. Créez un nouveau fichier dans le dossier `_questions/`
3. Nommez-le selon le format : `YYYY-MM-DD-votre-titre.md`
4. Utilisez ce template :
```markdown
---
title: Titre de votre question
category: Catégorie
date: 2025-01-15
author: Votre Nom
reponse_id: 2025-01-15-slug-reponse
---

Votre question détaillée ici...
```

5. **Mettez à jour** le fichier `index.html` en ajoutant votre fichier dans le tableau `questions`
```javascript
const questions = [
    '_questions/2025-01-15-comment-utiliser-javascript.md',
    '_questions/YYYY-MM-DD-votre-titre.md' // Ajoutez cette ligne
];
```

6. Faites une **pull request**

## Ajouter une réponse

1. **Forkez** ce repository
2. Créez un nouveau fichier dans le dossier `reponses/`
3. Nommez-le selon le format : `YYYY-MM-DD-votre-titre.md`
4. Utilisez ce template :
```markdown
---
title: Titre de votre réponse
date: 2025-01-15
author: Votre Nom
question_id: 2025-01-15-slug-question
---

Votre réponse détaillée ici...
```

5. **Mettez à jour** le fichier `index.html` en ajoutant votre fichier dans le tableau `reponses`
```javascript
const reponses = [
    'reponses/2025-01-15-reponse-javascript.md',
    'reponses/YYYY-MM-DD-votre-titre.md' // Ajoutez cette ligne
];
```

6. Faites une **pull request**

## Règles

- Les champs `title`, `author` et `date` sont **obligatoires**
- Format de date : `YYYY-MM-DD`
- Les noms de fichiers doivent suivre le format `YYYY-MM-DD-titre.md`
- Le contenu doit être en markdown valide

Le workflow GitHub Actions validera automatiquement votre contribution ! ✨
```

## Structure finale du projet :
```
votre-projet/
├── _config.yml
├── index.html
├── question.html
├── reponse.html
├── CONTRIBUTING.md
├── .github/
│   └── workflows/
│       └── jekyll-gh-pages.yml
├── css/
│   └── style.css
├── js/
│   └── app.js
├── questions/          ← Renommé avec underscore
│   ├── 2025-01-15-comment-utiliser-javascript.md
│   └── 2025-03-16-comment-tuer-ces-collegue.md
└── reponses/           ← Renommé avec underscore
    └── 2025-01-15-reponse-javascript.md