const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/productsController');
const upload = require('../middlewares/upload');

///**** VALIDACIONES ****////
const productsValidations = require("../middlewares/productsValidations")


/*** GET ALL PRODUCTS ***/
router.get('/', productsController.index);

/*** CREATE ONE PRODUCT ***/
router.get('/create', productsController.create);

/*** SUBMIT CREATE ONE PRODUCT ***/
router.post('/', productsValidations, upload.single('image'), productsController.store);

/*** BUSCAR ONE PRODUCT***/
router.get('/search', productsController.search);

/*** GET ONE PRODUCT (DETAIL) ***/
router.get('/:id', productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get('/edit/:id', productsValidations, productsController.edit);

/*** SUBMIT EDIT ONE PRODUCT ***/
router.put('/edit/:id', productsValidations, upload.single('image'), productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete('/:id', productsController.destroy);
    
module.exports = router;
