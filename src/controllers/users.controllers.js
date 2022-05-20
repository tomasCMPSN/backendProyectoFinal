import User from '../models/user'
import {

    validateEmail,
    validatePassword
}from '../helpers/ValidateForms'

const userCtrl={};

userCtrl.listarUsuario = async(req,res)=>{
        const listarUsuario = await User.find();
        res.status(200).json(listarUsuario);
}

// Metodo para crear

userCtrl.crearUsuario = async(req,res)=>{
        // validaciones
        if(!validateEmail(req.body.email)|| !validatePassword(req.body.password)){
            res.status(404).json({
                mensaje: "Error al validar los datos"
            })
            return;
        }

        // crearmos el usuario

        const usuarioNuevo = new User ({
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10),
        });

        await usuarioNuevo.save();
        res.status(201).json({
            mensaje: "El usuario se ha creado con exito"
        })
}

export default userCtrl;