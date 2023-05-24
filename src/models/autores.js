import mongoose from "mongoose";

const autoresSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
});

const autoresModel = mongoose.model("autores", autoresSchema);

export default autoresModel;
