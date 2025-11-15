---
title: Réponse - Utilisation de JavaScript pour site statique
date: 2025-01-15
author: Marie Martin
question_id: 2025-01-15-comment-utiliser-javascript
---

Excellente question ! Voici comment créer un site statique avec JavaScript :

## Bibliothèques utiles

- **marked.js** : Pour convertir le markdown en HTML
- **js-yaml** : Pour parser le frontmatter YAML (optionnel)

## Architecture recommandée

1. Stocker les fichiers markdown dans des dossiers (`questions/` et `reponses/`)
2. Utiliser `fetch()` pour charger les fichiers
3. Parser le frontmatter avec une regex simple
4. Convertir le markdown en HTML avec `marked.js`

## Exemple de code
```javascript
const response = await fetch('questions/mon-fichier.md');
const text = await response.text();
const html = marked.parse(text);
```

C'est simple, rapide et ne nécessite aucun build step !