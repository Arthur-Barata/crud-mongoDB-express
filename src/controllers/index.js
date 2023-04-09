import express from "express";
import livrosController from "./LivroController.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Bem vindo ao livru");
  });
  app.use(express.json(), livrosController);
};

export default routes;
