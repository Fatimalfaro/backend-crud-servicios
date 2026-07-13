import { Router } from "express";
import { prueba } from "../controllers/servicios.controllers.js";
import { crearServicio, listarServicios, buscarServicioPorID, borrarServicioPorID, editarServicioPorID} from "../controllers/servicios.controllers.js"
import { validacionIDServicio, validacionServicio, validacionPatchServicio } from "../middlewares/validacionServicios.js";

const router = Router();

//http://localhost:3000/api/servicios/test
router.route('/test').get(prueba)
router.route('/').post(validacionServicio, crearServicio).get(listarServicios)
router.route('/:id').get(validacionIDServicio, buscarServicioPorID).delete(validacionIDServicio, borrarServicioPorID).put([validacionIDServicio, validacionServicio], editarServicioPorID).patch([validacionIDServicio, validacionPatchServicio], editarServicioPorID)

export default router
