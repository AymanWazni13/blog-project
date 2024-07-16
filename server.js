const express = require('express');
const app = express();
const PORT = 3000;

const articles = [
  { id: 1, title: "Article 1", description: "Description of Article 1", likes: 0 },
  { id: 2, title: "Article 2", description: "Description of Article 2", likes: 0 },
  // Ajouter d'autres articles ici
];

app.get('/articles', (req, res) => {
  res.json(articles);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

