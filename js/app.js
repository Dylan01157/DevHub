function parseFrontmatter(content) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);
    
    if (!match) {
        return { frontmatter: {}, content: content };
    }
    
    const frontmatterText = match[1];
    const markdownContent = match[2];
    
    const frontmatter = {};
    let currentKey = null;
    let currentArray = [];
    
    frontmatterText.split('\n').forEach(line => {
        // Détecter une liste YAML
        if (line.trim().startsWith('- ')) {
            currentArray.push(line.trim().substring(2));
        } else if (line.includes(':')) {
            // Si on avait une liste en cours, la sauvegarder
            if (currentKey && currentArray.length > 0) {
                frontmatter[currentKey] = currentArray;
                currentArray = [];
            }
            
            const [key, ...values] = line.split(':');
            currentKey = key.trim();
            const value = values.join(':').trim().replace(/^["']|["']$/g, '');
            
            if (value) {
                frontmatter[currentKey] = value;
                currentKey = null;
            }
        }
    });
    
    // Sauvegarder la dernière liste si nécessaire
    if (currentKey && currentArray.length > 0) {
        frontmatter[currentKey] = currentArray;
    }
    
    return { frontmatter, content: markdownContent };
}

// Charger un fichier markdown
async function loadMarkdown(file, type) {
    try {
        const response = await fetch(`./${file}`);
        const text = await response.text();
        const { frontmatter, content } = parseFrontmatter(text);
        
        // Afficher les métadonnées
        document.getElementById('title').textContent = frontmatter.title || 'Sans titre';
        document.getElementById('author').textContent = `Par ${frontmatter.author || 'Anonyme'}`;
        document.getElementById('date').textContent = frontmatter.date || '';
        
        if (frontmatter.category && document.getElementById('category')) {
            document.getElementById('category').textContent = frontmatter.category;
        }
        
        // Convertir et afficher le contenu markdown
        document.getElementById('content').innerHTML = marked.parse(content);
        
        // Gérer les liens vers réponses multiples avec chargement des titres
        if (type === 'question' && frontmatter.reponses) {
            const reponsesContainer = document.getElementById('reponses-links');
            reponsesContainer.innerHTML = '<h3>Réponses disponibles :</h3>';
            const ul = document.createElement('ul');
            
            const reponses = Array.isArray(frontmatter.reponses) 
                ? frontmatter.reponses 
                : [frontmatter.reponses];
            
            for (const reponseId of reponses) {
                const li = document.createElement('li');
                
                // Charger le titre de la réponse
                fetch(`reponses/${reponseId}.md`)
                    .then(response => response.text())
                    .then(text => {
                        const { frontmatter: reponseFM } = parseFrontmatter(text);
                        const link = document.createElement('a');
                        link.href = `./reponse.html?file=reponses/${reponseId}.md`;
                        link.textContent = reponseFM.title || reponseId;
                        
                        const meta = document.createElement('small');
                        meta.className = 'reponse-meta';
                        meta.textContent = ` - par ${reponseFM.author || 'Anonyme'}`;
                        
                        li.appendChild(link);
                        li.appendChild(meta);
                    })
                    .catch(() => {
                        const link = document.createElement('a');
                        link.href = `./reponse.html?file=reponses/${reponseId}.md`;
                        link.textContent = reponseId;
                        li.appendChild(link);
                    });
                
                ul.appendChild(li);
            }
            
            reponsesContainer.appendChild(ul);
            reponsesContainer.style.display = 'block';
        }

        // Rétrocompatibilité avec reponse_id unique
        if (type === 'question' && frontmatter.reponse_id && !frontmatter.reponses) {
            const reponseLink = document.getElementById('reponse-link');
            const reponseLinkUrl = document.getElementById('reponse-link-url');
            reponseLink.style.display = 'block';
            reponseLinkUrl.href = `./reponse.html?file=reponses/${frontmatter.reponse_id}.md`;
        }
        
        if (type === 'reponse' && frontmatter.question_id) {
            const questionLink = document.getElementById('question-link');
            const questionLinkUrl = document.getElementById('question-link-url');
            questionLink.style.display = 'block';
            questionLinkUrl.href = `./question.html?file=questions/${frontmatter.question_id}.md`;
        }
        
        document.title = frontmatter.title || 'Question/Réponse';
        
    } catch (error) {
        console.error('Erreur lors du chargement:', error);
        document.getElementById('content').innerHTML = '<p>Erreur lors du chargement du contenu.</p>';
    }
}

// Charger la liste des questions ou réponses
async function loadList(listId, files, targetPage) {
    const listElement = document.getElementById(listId);
    listElement.innerHTML = '';
    
    if (files.length === 0) {
        listElement.innerHTML = '<li>Aucun contenu disponible</li>';
        return;
    }
    
    for (const file of files) {
        try {
            const response = await fetch(file);
            const text = await response.text();
            const { frontmatter } = parseFrontmatter(text);
            
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = `${targetPage}?file=${file}`;
            link.textContent = frontmatter.title || file;
            
            const meta = document.createElement('span');
            meta.className = 'meta';
            meta.textContent = `par ${frontmatter.author || 'Anonyme'} - ${frontmatter.date || ''}`;
            
            li.appendChild(link);
            li.appendChild(document.createElement('br'));
            li.appendChild(meta);
            listElement.appendChild(li);
        } catch (error) {
            console.error(`Erreur lors du chargement de ${file}:`, error);
        }
    }
}