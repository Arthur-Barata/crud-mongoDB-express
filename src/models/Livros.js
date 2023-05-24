import mongoose from "mongoose";

const livrosSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  autor: { type: String, required: true },
  editora: { type: String, required: true },
  isbn: { type: String, required: true },
  paginas: { type: Number, required: false },
});

const livrosModel = mongoose.model("livros", livrosSchema);

export default livrosModel;
