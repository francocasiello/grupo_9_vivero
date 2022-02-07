const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

//Rutas
//Listado de clientes
router.get('/', productsAPIController.list);
//Detalle de un cliente
router.get('/:id', productsAPIController.detail);
//Agregar un cliente
//router.post('/create', clientesAPIController.create);
//Modificar un cliente
//router.put('/update/:id', clientesAPIController.update);
//Eliminar un cliente
//router.delete('/delete/:id', clientesAPIController.destroy);

module.exports = router;