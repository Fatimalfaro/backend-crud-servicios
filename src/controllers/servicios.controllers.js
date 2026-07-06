import Servicio from "../models/servicio.js"

export const prueba = (req, res)=>{
    const vehiculos = ['🚗','🚓','🚕']

    res.json({
        mensaje: 'Bienvenido a mi backend',
        vehiculos
    })
}

export const crearServicio = async (req, res)=>{
    try{
        //luego agregamos la validacion 
       const servicioNuevo = new Servicio(req.body)
       await servicioNuevo.save()
       //ahora doy de alta en la bd
       res.status(201).json({mensaje: 'El servicio fue creado correctamente'})
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje: 'Ocurrio un error al intentar crear un servicio'})
    }
}

export const listarServicios = async (req, res)=>{
    try{
        const servicios = await Servicio.find()
        res.status(200).json(servicios)

    }catch(error){
        console.error(error)
        res.status(500).json({mensaje: 'Ocurrio un error al intentar listar los servicios'})
    }
}