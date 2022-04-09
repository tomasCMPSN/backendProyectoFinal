import User from '../models/user'
import {

    validateEmail,
    validatePassword
}from '../helpers/ValidateForms'

const userCtrl={};

userCtrl.listarUsuario = async(req,res)=>{
    try{
        const listarUsuario = await User.find();
        res.status(200).json(listarUsuario);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: "Error al listar los usuarios"
        })
    }
}

// Metodo para crear

userCtrl.crearUsuario = async(req,res)=>{
    try {
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
            password:req.body.password,
        });

        await usuarioNuevo.save();
        res.status(201).json({
            mensaje: "El usuario se ha creado con exito"
        })



    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar crear el usuario"
        })
        
    }
}

export default userCtrl;