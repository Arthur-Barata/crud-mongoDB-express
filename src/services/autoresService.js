import autoresModel from "../models/autores.js";

export default class AutoresService {
  static async CadAutor(req, res) {
    try {
      await autoresModel.create(req.body);
      res.status(200).send("autor cadastrado com sucesso");
    } catch (err) {
      console.log(err);
    }
  }

  static async listAutor(req, res) {
    try {
      const response = await autoresModel.find();
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
    }
  }

  static async findAutor(req, res) {
    try {
      const response = await autoresModel.findById(req.params.id);
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
    }
  }
}
