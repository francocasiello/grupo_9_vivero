// EXPRESS Y ROUTER
const express = require('express');
const router = express.Router();

// CONTROLADOR
const mainController = require("../controllers/mainController");

// RUTAS
router.get('/', mainController.index);
router.get("/productCart", mainController.productCart);
router.get("/index", mainController.index);


// EXPORTAMOS RESULTADO
module.exports = router;

