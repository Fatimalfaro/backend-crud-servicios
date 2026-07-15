import Usuario from "../models/usuario.js"

export const crearUsuario = async (req, res)=>{
    try{
        const usuarioNuevo = new Usuario(req.body)
        await usuarioNuevo.save()
       res.status(201).json({mensaje: 'El usuario fue creado correctamente'})
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje: 'Ocurrio un error al intentar crear un usuario'})
    }
}

export const listarUsuarios = async (req, res)=>{
    try{
        const usuarios = await Usuario.find()
        res.status(200).json(usuarios)
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje: 'Ocurrio un error al intentar listar los usuarios'})
    }
}

export const buscarUsuarioPorID = async (req, res)=>{
    try{
        console.log(req.params.id)
        const usuarioBuscado = await Usuario.findById(req.params.id)
        if(!usuarioBuscado){
            return res.status(404).json({mensaje: 'No se encontro un usuario con el id enviado'})
        }
        res.status(200).json(usuarioBuscado)
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje: 'Ocurrio un error al intentar buscar un usuario por id'})
    }
}

export const borrarUsuarioPorID = async (req, res)=>{
    try{
        const usuarioBorrado = await Usuario.findByIdAndDelete(req.params.id)
        if(!usuarioBorrado){
            return res.status(404).json({mensaje: 'No se encontro un usuario con el id enviado'})
        }
        res.status(200).json({mensaje: 'El usuario fue eliminado correctamente'})
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje: 'Ocurrio un error al intentar borrar un usuario por id'})
    }
}