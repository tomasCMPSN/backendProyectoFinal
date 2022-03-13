import mongoose from "mongoose";
import {config} from "dotenv"; config()

// const url = "mongodb://localhost:27017/veterinariaGrupo2";
const url = process.env.REACT_APP_API_BACKGRUPO2;

mongoose.connect(url);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("base de datos");
});
