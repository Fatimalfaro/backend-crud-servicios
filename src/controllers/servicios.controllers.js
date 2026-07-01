export const prueba = (req, res)=>{
    const vehiculos = ['🚗','🚓','🚕']

    res.json({
        mensaje: 'Bienvenido a mi backend',
        vehiculos
    })
}