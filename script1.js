app.use(express.json());

app.post('/articles', (req, res) => {
  const newArticle = req.body;
  articles.push(newArticle);
  res.status(201).json(newArticle);
});
