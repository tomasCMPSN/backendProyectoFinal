import mongoose, {Schema} from "mongoose";

const turnoSchema = new Schema({
    petName:{
        type: String,
        maxlength: 200,
        minlength: 1,
        required:true
    },
    vet:{
        type: String,
        required:true
    },
    date:{
        type: String,
        required:true
    },
    time:{
        type: String,
        required:true
    }
});

const Turno = mongoose.model('turno', turnoSchema);

export default Turno