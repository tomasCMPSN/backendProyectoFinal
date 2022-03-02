import Paciente from "../models/paciente";
const pacienteCtrl = {};

pacienteCtrl.listarPacientes = async (req, res) => {
  try {
    const listaPacientes = await Paciente.find();
    res.status(200).json(listaPacientes);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error en listar los pacientes",
    });
  }
};

pacienteCtrl.crearPaciente = async (req, res) => {
  try {
    console.log(req.body);
    // VALIDACION
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
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear un paciente",
    });
  }
};

pacienteCtrl.obtenerPaciente = async (req, res) => {
  try {
    console.log(req.params.id);
    const pacienteBuscado = await Paciente.findById(req.params.id);
    res.status(200).json(pacienteBuscado);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se pudo obtener al paciente buscado",
    });
  }
};

pacienteCtrl.editarPaciente = async (req, res) => {
  try {
    await Paciente.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "Paciente modificado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar modificar al paciente",
    });
  }
};

pacienteCtrl.borrarPaciente = async (req, res) => {
    try {
      await Paciente.findByIdAndDelete(req.params.id);
      res.status(200).json({
          mensaje: "Paciente eliminado correctamente"
      })
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "Error al intentar borrar al paciente",
      });
    }
  };

export default pacienteCtrl;
