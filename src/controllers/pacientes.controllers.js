import Paciente from "../models/paciente";
import {
  validateEmail,
  validateNumber,
  validatePaciente,
} from "../helpers/ValidateForms";
const pacienteCtrl = {};

pacienteCtrl.listarPacientes = async (req, res) => {
    const listaPacientes = await Paciente.find();
    res.status(200).json(listaPacientes);
};

pacienteCtrl.crearPaciente = async (req, res) => {
    // VALIDACION
    if (
      !validatePaciente(req.body.paciente) ||
      !validatePaciente(req.body.especie) ||
      !validatePaciente(req.body.raza) ||
      !validatePaciente(req.body.duenio) ||
      !validateEmail(req.body.email) ||
      !validateNumber(req.body.peso) ||
      !validateNumber(req.body.telefono) || !validateNumber(req.body.dni) ||
      !validateNumber(req.body.edad)
    ) {
      res.status(404).json({
        mensaje: "Error al validar",
      })
      return;
    }
    const pacienteNuevo = new Paciente({
      paciente: req.body.paciente,
      especie: req.body.especie,
      raza: req.body.raza,
      edad: req.body.edad,
      peso: req.body.peso,
      duenio: req.body.duenio,
      dni: req.body.dni,
      telefono: req.body.telefono,
      email: req.body.email,
    });
    await pacienteNuevo.save();
    res.status(201).json({
      mensaje: "Paciente correctamente creado",
    });
};

pacienteCtrl.obtenerPaciente = async (req, res) => {
    const pacienteBuscado = await Paciente.findById(req.params.id);
    res.status(200).json(pacienteBuscado);
};

pacienteCtrl.editarPaciente = async (req, res) => {
    await Paciente.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "Paciente modificado correctamente",
    });
};

pacienteCtrl.borrarPaciente = async (req, res) => {
      await Paciente.findByIdAndDelete(req.params.id);
      res.status(200).json({
          mensaje: "Paciente eliminado correctamente"
      })
  };

export default pacienteCtrl;
