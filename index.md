---
layout: default
title: Accueil
---

<div class="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 group/design-root overflow-x-hidden" id="forum-page">
  <div class="flex h-full grow flex-col">
    <header class="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 px-10 py-3">
      <div class="flex items-center gap-8">
        <div class="flex items-center gap-3 text-slate-900 dark:text-white">
          <svg class="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C12.8284 6.96921 16.0308 10.1716 21 11C16.0308 11.8284 12.8284 15.0308 12 20C11.1716 15.0308 7.96921 11.8284 3 11C7.96921 10.1716 11.1716 6.96921 12 2Z"></path>
          </svg>
          <h2 class="text-lg font-bold">Dev Forum</h2>
        </div>
        <div class="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
          <a class="hover:text-primary" href="#">Accueil</a>
          <a class="hover:text-primary" href="#">Questions</a>
          <a class="hover:text-primary" href="#">Tags</a>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <label class="relative flex items-center">
          <span class="material-symbols-outlined absolute left-3 text-slate-400 dark:text-slate-500">search</span>
          <input class="form-input rounded-lg border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark pl-10 pr-4 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-primary focus:ring-primary" placeholder="Rechercher"/>
        </label>
        <button class="flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold tracking-wide hover:bg-primary/90" onclick="showAskQuestionPage()">
          <span>Poser une question</span>
        </button>
      </div>
    </header>

    <main class="flex-1 px-10 py-8">
      <div class="mx-auto max-w-4xl">
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-slate-900 dark:text-white">Questions</h1>
          <p class="mt-2 text-slate-500 dark:text-slate-400">Explorez les questions de la communauté ou posez la vôtre.</p>
        </div>
        <div class="mb-6">
          <label class="relative flex items-center">
            <span class="material-symbols-outlined absolute left-4 text-slate-400 dark:text-slate-500">search</span>
            <input class="form-input w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 pl-12 pr-4 py-3 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-primary focus:ring-primary" placeholder="Rechercher des questions"/>
          </label>
        </div>

        <div class="space-y-4">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white">Questions les plus récentes</h2>
          <div class="divide-y divide-slate-200 dark:divide-slate-800 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            {% for post in site.posts %}
              <a class="flex items-center justify-between gap-4 px-6 py-4 hover:bg-background-light dark:hover:bg-background-dark" href="{{ post.url }}">
                <div class="flex-1">
                  <p class="font-medium text-slate-800 dark:text-slate-200">{{ post.title }}</p>
                  <p class="text-sm text-slate-500 dark:text-slate-400">Réponses: 0</p>
                </div>
                <div class="text-sm text-slate-500 dark:text-slate-400">{{ post.date | date: "%B %d, %Y" }}</div>
              </a>
            {% endfor %}
          </div>
        </div>

        <div class="mt-8 flex items-center justify-center gap-2">
          <a class="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800" href="#">
            <span class="material-symbols-outlined text-xl">chevron_left</span>
          </a>
          <a class="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white text-sm font-bold" href="#">1</a>
          <a class="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 text-sm" href="#">2</a>
          <a class="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 text-sm" href="#">3</a>
          <span class="flex h-9 w-9 items-center justify-center text-slate-500 dark:text-slate-400">...</span>
          <a class="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 text-sm" href="#">10</a>
          <a class="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800" href="#">
            <span class="material-symbols-outlined text-xl">chevron_right</span>
          </a>
        </div>
      </div>
    </main>
  </div>
</div>

<div class="relative hidden min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 group/design-root overflow-x-hidden" id="ask-question-page">
  <div class="flex h-full grow flex-col">
    <header class="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 px-10 py-3">
      <div class="flex items-center gap-8">
        <div class="flex items-center gap-3 text-slate-900 dark:text-white">
          <svg class="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C12.8284 6.96921 16.0308 10.1716 21 11C16.0308 11.8284 12.8284 15.0308 12 20C11.1716 15.0308 7.96921 11.8284 3 11C7.96921 10.1716 11.1716 6.96921 12 2Z"></path>
          </svg>
          <h2 class="text-lg font-bold">Dev Forum</h2>
        </div>
        <div class="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
          <a class="hover:text-primary" href="#" onclick="showForumPage()">Accueil</a>
          <a class="hover:text-primary" href="#" onclick="showForumPage()">Questions</a>
          <a class="hover:text-primary" href="#">Tags</a>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <button class="flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold tracking-wide hover:bg-primary/90" onclick="showForumPage()">
          <span class="material-symbols-outlined mr-2">arrow_back</span>
          <span>Retour</span>
        </button>
      </div>
    </header>

    <main class="flex-1 px-10 py-8">
      <div class="mx-auto max-w-4xl">
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-slate-900 dark:text-white">Poser une question</h1>
          <p class="mt-2 text-slate-500 dark:text-slate-400">Suivez les étapes ci-dessous pour soumettre votre question via une pull request.</p>
        </div>

        <div class="space-y-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
          <div>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">Étape 1: Forker le dépôt</h2>
            <p class="mt-2 text-slate-600 dark:text-slate-300">Commencez par forker le dépôt du forum sur votre compte GitHub. Cela créera une copie du projet que vous pourrez modifier.</p>
          </div>
          <div>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">Étape 2: Créer une nouvelle branche</h2>
            <p class="mt-2 text-slate-600 dark:text-slate-300">Créez une nouvelle branche dans votre fork pour votre question. Donnez-lui un nom descriptif, par exemple <code>question/mon-titre-de-question</code>.</p>
          </div>
          <div>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">Étape 3: Ajouter votre question</h2>
            <p class="mt-2 text-slate-600 dark:text-slate-300">Ajoutez un nouveau fichier Markdown dans le dossier <code>_posts</code>. Le nom du fichier doit respecter la syntaxe <code>AAAA-MM-JJ-titre.md</code>. Rédigez votre question en utilisant le format Markdown.</p>
          </div>
          <div>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">Étape 4: Soumettre une pull request</h2>
            <p class="mt-2 text-slate-600 dark:text-slate-300">Une fois que vous avez ajouté votre question, validez vos modifications et poussez la branche vers votre fork. Ensuite, ouvrez une pull request vers le dépôt principal du forum.</p>
          </div>
          <div>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">Étape 5: Revue et fusion</h2>
            <p class="mt-2 text-slate-600 dark:text-slate-300">Votre question sera examinée par les modérateurs. Une fois approuvée, elle sera fusionnée et apparaîtra sur le forum.</p>
          </div>
        </div>

        <div class="mt-8 flex justify-center">
          <a class="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold tracking-wide hover:bg-primary/90" href="https://github.com/votre-repo/fork" target="_blank">
            <span>Forker sur GitHub</span>
          </a>
        </div>
      </div>
    </main>
  </div>
</div>

<script>
function showAskQuestionPage() {
  document.getElementById('forum-page').classList.add('hidden');
  document.getElementById('ask-question-page').classList.remove('hidden');
}
function showForumPage() {
  document.getElementById('ask-question-page').classList.add('hidden');
  document.getElementById('forum-page').classList.remove('hidden');
}
</script>
