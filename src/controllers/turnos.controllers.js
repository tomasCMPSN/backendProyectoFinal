import Turno from "../models/turno";
import {
  validateNames,
  validateVet,
  validateDate,
} from "../helpers/ValidateForms";
const turnoCtrl = {};

turnoCtrl.listarTurnos = async (req, res) => {
  try {
    const listaTurnos = await Turno.find();
    res.status(200).json(listaTurnos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error en listar los turnos",
    });
  }
};

turnoCtrl.crearTurno = async (req, res) => {
  try {
    console.log(req.body);
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
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear un turno",
    });
  }
};

turnoCtrl.obtenerTurno = async (req, res) => {
  try {
    console.log(req.params.id);
    const turnoBuscado = await Turno.findById(req.params.id);
    res.status(200).json(turnoBuscado);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se pudo obtener el producto buscado",
    });
  }
};

turnoCtrl.editarTurno = async (req, res) => {
  try {
    await Turno.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "Turno modificado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar modificar el turno",
    });
  }
};

turnoCtrl.borrarTurno = async (req, res) => {
  try {
    await Turno.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "Turno eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar borrar el turno",
    });
  }
};

export default turnoCtrl;
