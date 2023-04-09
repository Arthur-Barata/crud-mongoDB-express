import express from "express";
import db from "./config/DBconnection.js";
import rotas from "./controllers/index.js";

db.on("error", console.log.bind(console, "erro de conexao"));

try {
  db.once("open", () => {
    console.log("conexão estabelecida com sucesso!");
  });
} catch (error) {
  console.log(error);
}

const app = express();
app.use(express.json());
rotas(app);

// const livros = [
//   {
//     id: 1,
//     titulo: "senhor dos aneis",
//   },
//   {
//     id: 2,
//     titulo: "senhor dos pasteis",
//   },
// ];

app.get("/", (req, res) => {
  res.status(200).send("voce esta na home do express");
});

export default app;
