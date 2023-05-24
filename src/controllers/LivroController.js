import express from "express";
import AutoresService from "../services/autoresService.js";
import LivrosService from "../services/LivrosService.js";
const router = express.Router();

router
  .get("/livros", LivrosService.ListarLivros)
  .get("/livros/:id", LivrosService.pegarLivroPorId)
  .post("/livros", LivrosService.criarLivro)
  .put("/livros/:id", LivrosService.atualizarLivro)
  .delete("/livros/:id", LivrosService.deletarLivro)
  .post("/cad-autor", AutoresService.CadAutor)
  .get("/list-autores", AutoresService.listAutor)
  .get("/find-autor/:id", AutoresService.findAutor);

export default router;
