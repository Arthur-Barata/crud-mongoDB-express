import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:5o7EqEpL2lV5KFz0@node-mongodb.gzqyfkl.mongodb.net/mongoDB-express"
);

const db = mongoose.connection;
export default db;
