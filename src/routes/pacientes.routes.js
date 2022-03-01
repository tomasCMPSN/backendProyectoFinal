import { Router } from "express";
import pacienteCtrl from "../controllers/pacientes.controllers";

const routerPacientes = Router();

routerPacientes
  .route("/patients")
  .get(pacienteCtrl.listarPacientes)
  .post(pacienteCtrl.crearPaciente);

routerPacientes
  .route("/patients/:id")
  .get(pacienteCtrl.obtenerPaciente)
  .put(pacienteCtrl.editarPaciente)
  .delete(pacienteCtrl.borrarPaciente);

export default routerPacientes;
