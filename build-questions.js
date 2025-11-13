// build-questions.js
import fs from "fs";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import { JSDOM } from "jsdom";

dayjs.extend(localizedFormat);
dayjs.locale("fr");

// Dossiers
const questionsDir = path.join(process.cwd(), "questions");
const outputDir = path.join(process.cwd(), "build"); // au lieu de questions/
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
// et ensuite, tous tes fichiers HTML vont dedans

const indexFile = path.join(process.cwd(), "index.html");



// Crée le dossier si inexistant
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// Lire tous les fichiers Markdown
const mdFiles = fs.readdirSync(questionsDir).filter(f => f.endsWith(".md"));

// Stocker les données pour générer la liste
let questionsData = [];

mdFiles.forEach(file => {
  const filePath = path.join(questionsDir, file);
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent); // data = métadonnées
  const htmlContent = marked(content);

  const title = data.title || "Sans titre";
  const date = data.date ? dayjs(data.date).format("LL") : dayjs().format("LL");
  const author = data.author || "Anonyme";

  const htmlFileName = file.replace(/\.md$/, ".html");

  // Stocker pour la liste des questions
  questionsData.push({ title, date, author, htmlFileName });

  // Créer le HTML complet
  const htmlPage = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8"/>
<title>${title} - Dev Forum</title>
<link href="data:image/x-icon;base64," rel="icon" type="image/x-icon"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
<script>
tailwind.config = {
  darkMode: 'class',
  theme: { extend: { colors: { primary: '#1773cf', 'background-light': '#f6f7f8', 'background-dark': '#111921' }, fontFamily: { display: ['Inter'] }, borderRadius: { DEFAULT: '0.25rem', lg: '0.5rem', xl: '0.75rem', full: '9999px' } } }
};
</script>
</head>
<body class="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200">
<div class="flex min-h-screen flex-col px-10 py-8">
  <header class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 py-3">
    <h1 class="text-3xl font-bold text-slate-900 dark:text-white">Dev Forum</h1>
  </header>
  <main class="flex-1 mt-6 max-w-4xl mx-auto">
    <article class="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white">${title}</h1>
      <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">Publiée le ${date} par <span class="font-medium text-primary">${author}</span></p>
      <div class="mt-4 text-slate-600 dark:text-slate-300">
        ${htmlContent}
      </div>
    </article>
  </main>
</div>
</body>
</html>`;

  fs.writeFileSync(path.join(outputDir, htmlFileName), htmlPage, "utf-8");
  console.log(`✅ ${htmlFileName} généré`);
});

// Générer la liste HTML pour index.html
questionsData.sort((a,b) => new Date(b.date) - new Date(a.date)); // tri du plus récent au plus ancien
const questionsListHTML = questionsData.map(q => `
<a class="flex items-center justify-between gap-4 px-6 py-4 hover:bg-background-light dark:hover:bg-background-dark" href="questions/${q.htmlFileName}">
  <div class="flex-1">
    <p class="font-medium text-slate-800 dark:text-slate-200">${q.title}</p>
    <p class="text-sm text-slate-500 dark:text-slate-400">Réponses: 0</p>
  </div>
  <div class="text-sm text-slate-500 dark:text-slate-400">${q.date}</div>
</a>
`).join("\n");

// Mettre à jour index.html entre commentaires
let indexHTML = fs.readFileSync(indexFile, "utf-8");
indexHTML = indexHTML.replace(
  /<!-- QUESTIONS_LIST_START -->[\s\S]*<!-- QUESTIONS_LIST_END -->/,
  `<!-- QUESTIONS_LIST_START -->\n${questionsListHTML}\n<!-- QUESTIONS_LIST_END -->`
);
fs.writeFileSync(indexFile, indexHTML, "utf-8");
console.log("✅ Liste des questions mise à jour dans index.html !");
