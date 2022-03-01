import mongoose, {Schema} from "mongoose";

const pacienteSchema = new Schema({
    paciente:{
        type: String,
        required:true
    },
    especie:{
        type: String,
        required:true
    },
    raza:{
        type: String,
        required:true
    },
    edad:{
        type: String,
        required:true
    },
    peso:{
        type: String,
        required:true
    },
    duenio:{
        type: String,
        required:true
    },
    dni:{
        type: String,
        required:true
    },
    telefono:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },

});

const Paciente = mongoose.model('paciente', pacienteSchema);

export default Paciente