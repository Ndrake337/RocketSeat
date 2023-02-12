const express = require("express");

const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  };

  repositories.push(repository)

  return response.status(201).json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;

  repositoryIndex = repositories.find(repository => repository.id === id);

  if (!repositoryIndex) {
    return response.status(404).json({ error: "Repository not found" });
  }

  repositoryIndex.title = title
  repositoryIndex.url = url
  repositoryIndex.techs = techs

  return response.json(repositoryIndex);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  repositoryIndex = repositories.find(repository => repository.id === id);

  if (!repositoryIndex) {
    return response.status(404).json({ error: "Repository not found" });
  }

  const repoIndex = repositories.indexOf(repositoryIndex);

  repositories.splice(repoIndex, 1);

  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  repositoryIndex = repositories.find(repository => repository.id === id);

  if (!repositoryIndex) {
    return response.status(404).json({ error: "Repository not found" });
  }


  ++repositoryIndex.likes

  return response.json(repositoryIndex);
});

module.exports = app;
