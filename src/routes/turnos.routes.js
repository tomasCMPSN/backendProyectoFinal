import { Router } from "express";
import turnoCtrl from "../controllers/turnos.controllers";

const router = Router();

router
  .route("/appointment")
  .get(turnoCtrl.listarTurnos)
  .post(turnoCtrl.crearTurno);

router
  .route("/appointment/:id")
  .get(turnoCtrl.obtenerTurno)
  .put(turnoCtrl.editarTurno)
  .delete(turnoCtrl.borrarTurno);

export default router;
