import express from "express";
import LivrosService from "../services/LivrosService.js";
const router = express.Router();

router
  .get("/livros", LivrosService.ListarLivros)
  .post("/livros", LivrosService.criarLivro)
  .put("/livros/:id", LivrosService.atualizarLivro)
  .delete("/livros/:id", LivrosService.deletarLivro);

export default router;
