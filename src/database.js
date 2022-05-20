import mongoose from "mongoose";
require('dotenv').config()

// const url = "mongodb://localhost:27017/veterinariaGrupo2";
const url = process.env.REACT_APP_API_BACKGRUPO2;

mongoose.connect(url);

const connection = mongoose.connection;
