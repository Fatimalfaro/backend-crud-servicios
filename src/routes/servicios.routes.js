import { Router } from "express";

const router = Router();

//http://localhost:3000/api/servicios/test
router.route('/test').get((req, res)=>{
    const vehiculos = ['🚗','🚓','🚕']

    res.json({
        mensaje: 'Bienvenido a mi backend',
        vehiculos
    })
})

export default router