import mongoose from "mongoose";

// const url = "mongodb://localhost:27017/veterinariaGrupo2";
const url = "mongodb+srv://posonu:tomasito1010@clustertest.7omwy.mongodb.net/database?retryWrites=true&w=majority";

mongoose.connect(url);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("base de datos");
});
