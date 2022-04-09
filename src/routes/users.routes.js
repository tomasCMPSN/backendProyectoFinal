import { Router } from "express";
import userCtrl from "../controllers/users.controllers";

const routerUser = Router();

routerUser
  .route("/user")
  .get(userCtrl.listarUsuario)
  .post(userCtrl.crearUsuario);


  export default routerUser;