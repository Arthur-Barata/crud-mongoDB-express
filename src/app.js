import express from "express";
const app = express();

app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: "senhor dos aneis",
  },
  {
    id: 2,
    titulo: "senhor dos pasteis",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("voce esta na home do express");
});

app.get("/livros/:id", (req, res) => {
  res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
  try {
    livros.push(req.body);
    res.status(200).send("livro cadastrado com sucesso");
  } catch {
    res.status(500).send("livro nao cadastrado");
  }
});

export default app;
