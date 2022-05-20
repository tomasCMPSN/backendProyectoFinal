import Turno from "../models/turno";
import {
  validateNames,
  validateVet,
  validateDate,
} from "../helpers/ValidateForms";
const turnoCtrl = {};

turnoCtrl.listarTurnos = async (req, res) => {
    const listaTurnos = await Turno.find();
    res.status(200).json(listaTurnos);
};

turnoCtrl.crearTurno = async (req, res) => {
    // VALIDACION
    if (!validateNames(req.body.petName) || !validateVet(req.body.vet) || !validateDate(req.body.date)) {
      res.status(404).json({
        mensaje: "Error al validar",
      })
      return;
    }
    const turnoNuevo = new Turno({
      petName: req.body.petName,
      vet: req.body.vet,
      date: req.body.date,
      time: req.body.time,
    });
    await turnoNuevo.save();
    res.status(201).json({
      mensaje: "Producto correctamente creado",
    });
};

turnoCtrl.obtenerTurno = async (req, res) => {
    const turnoBuscado = await Turno.findById(req.params.id);
    res.status(200).json(turnoBuscado);
};

turnoCtrl.editarTurno = async (req, res) => {
    await Turno.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "Turno modificado correctamente",
    });
};

turnoCtrl.borrarTurno = async (req, res) => {
    await Turno.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "Turno eliminado correctamente",
    });
};

export default turnoCtrl;
