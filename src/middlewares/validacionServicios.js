import { body, param } from "express-validator";
import resultadoValidacion from "./resultadosValidacion.js";
import Servicio from "../models/servicio.js";


const reglasServicio = [
    body('nombreServicio')
    .isString()
    .withMessage('El nombre del servicio debe ser un string')
    .isLength({min: 5, max: 100})
    .withMessage('El nombre del servicio debe tener entre 5 y 100 caracteres')
    .custom(async (valor, {req}) => {
        const servicioExistente = await Servicio.findOne({nombreServicio: valor}) 
        if (!servicioExistente) {
           return true
        }
        //verificamos si estamos editando
        if(req.params?.id && servicioExistente._id.toString() === req.params.id){
        return true
        }
        throw new Error('El nombre del servicio ya existe en la base de datos')
    })
    ,


    body('precio')
    .isNumeric()
    .withMessage('El precio del servicio debe ser un número')
    .isFloat({min: 50})
    .withMessage('El precio del servicio debe ser un número mayor o igual a 50'),

    body('descripcion')
    .isString()
    .withMessage('La descripción del servicio debe ser un string')
    .isLength({min: 10, max: 500})
    .withMessage('La descripción del servicio debe tener entre 10 y 500 caracteres'),

     body('imagen')
    .isString()
    .withMessage('La imagen del servicio debe ser un string')
    .matches(/^https:\/\/.+\.(jpg|jpeg|png|webp|avif|svg)$/)
    .withMessage('La imagen del servicio debe ser una URL válida y debe terminar con una extensión de imagen válida (jpg, jpeg, png, webp, avif, svg)'), 
    
    body('categoria')
    .isString()
    .withMessage('La categoría del servicio debe ser un string')
    .isIn(['Desarrollo Web', 'Backend & API', 'Consultoría'])
    .withMessage('La categoría del servicio debe ser una de las siguientes opciones: Desarrollo Web, Backend & API, Consultoría'),
 
]

//para el post y put
export const validacionServicio = [
    ...reglasServicio.map((regla)=>regla.notEmpty().withMessage('Este campo es obligatorio')), resultadoValidacion
]

//para el patch
export const validacionPatchServicio = [
    ...reglasServicio.map((regla)=>regla.optional({values: 'falsy'})), resultadoValidacion
]

export const validacionIDServicio = [
    param('id').isMongoId().withMessage('El ID enviado no tiene el formato de ID de mongoDB'), resultadoValidacion
]