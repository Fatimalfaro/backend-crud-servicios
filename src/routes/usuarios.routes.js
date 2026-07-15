import { Router } from "express";
import { crearUsuario, listarUsuarios, buscarUsuarioPorID, borrarUsuarioPorID } from "../controllers/usuarios.controllers.js";

const router = Router();

router.route('/').post(crearUsuario).get(listarUsuarios)
router.route('/:id').get(buscarUsuarioPorID).delete(borrarUsuarioPorID)

export default router
 