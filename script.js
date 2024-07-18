document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/articles')
      .then(response => response.json())
      .then(articles => {
        const articlesDiv = document.getElementById('articles');
        articles.forEach(article => {
          const articleDiv = document.createElement('div');
          articleDiv.className = 'article';
          articleDiv.innerHTML = `<h2>${article.title}</h2><p>${article.description}</p>`;
          articlesDiv.appendChild(articleDiv);
        });
      })
      .catch(error => console.error('Error fetching articles:', error));
  });
  