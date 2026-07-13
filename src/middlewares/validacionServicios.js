import { body, param } from "express-validator";
import resultadoValidacion from "./resultadosValidacion.js";


export const validacionServicio = [
    body('nombreServicio')
    .notEmpty()
    .withMessage('El nombre del servicio es un dato obligatorio')
    .isString()
    .withMessage('El nombre del servicio debe ser un string')
    .isLength({min: 5, max: 100})
    .withMessage('El nombre del servicio debe tener entre 5 y 100 caracteres'),


    body('precio')
    .notEmpty()
    .withMessage('El precio del servicio es un dato obligatorio')
    .isNumeric()
    .withMessage('El precio del servicio debe ser un número')
    .isFloat({min: 50})
    .withMessage('El precio del servicio debe ser un número mayor o igual a 50'),

    body('descripcion')
    .notEmpty()
    .withMessage('La descripción del servicio es un dato obligatorio')
    .isString()
    .withMessage('La descripción del servicio debe ser un string')
    .isLength({min: 10, max: 500})
    .withMessage('La descripción del servicio debe tener entre 10 y 500 caracteres'),

     body('imagen')
    .notEmpty()
    .withMessage('La imagen del servicio es un dato obligatorio')
    .isString()
    .withMessage('La imagen del servicio debe ser un string')
    .matches(/^https:\/\/.+\.(jpg|jpeg|png|webp|avif|svg)$/)
    .withMessage('La imagen del servicio debe ser una URL válida y debe terminar con una extensión de imagen válida (jpg, jpeg, png, webp, avif, svg)'), 
    
    body('categoria')
    .notEmpty()
    .withMessage('La categoría del servicio es un dato obligatorio')
    .isString()
    .withMessage('La categoría del servicio debe ser un string')
    .isIn(['Desarrollo Web', 'Backend & API', 'Consultoría'])
    .withMessage('La categoría del servicio debe ser una de las siguientes opciones: Desarrollo Web, Backend & API, Consultoría'),
 

    resultadoValidacion
]

export const validacionIDServicio = [
    param('id').isMongoId().withMessage('El ID enviado no tiene el formato de ID de mongoDB'), resultadoValidacion
]