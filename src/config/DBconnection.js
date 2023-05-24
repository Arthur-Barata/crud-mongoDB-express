import mongoose from "mongoose";

mongoose.connect(process.env.CONEXAO_DB);

const db = mongoose.connection;
export default db;
