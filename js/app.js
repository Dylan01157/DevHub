// Parser le frontmatter YAML
function parseFrontmatter(content) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);
    
    if (!match) {
        return { frontmatter: {}, content: content };
    }
    
    const frontmatterText = match[1];
    const markdownContent = match[2];
    
    const frontmatter = {};
    frontmatterText.split('\n').forEach(line => {
        const [key, ...values] = line.split(':');
        if (key && values.length) {
            frontmatter[key.trim()] = values.join(':').trim().replace(/^["']|["']$/g, '');
        }
    });
    
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
        
        // Gérer les liens vers réponse/question
        if (type === 'question' && frontmatter.reponse_id) {
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