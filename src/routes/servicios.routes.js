import { Router } from "express";
import { prueba } from "../controllers/servicios.controllers.js";
import { crearServicio, listarServicios, buscarServicioPorID, borrarServicioPorID, editarServicioPorID} from "../controllers/servicios.controllers.js"

const router = Router();

//http://localhost:3000/api/servicios/test
router.route('/test').get(prueba)
router.route('/').post(crearServicio).get(listarServicios)
router.route('/:id').get(buscarServicioPorID).delete(borrarServicioPorID).put(editarServicioPorID).patch(editarServicioPorID)
export default router