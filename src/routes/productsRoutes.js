const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const upload = require('../middlewares/upload');

///**** VALIDACIONES ****////
const productsValidations = require("../middlewares/productsValidations")


/*** GET ALL PRODUCTS ***/
router.get('/', productsController.index);

/*** CREATE ONE PRODUCT ***/
router.get('/create', productsValidations, productsController.create);

/*** SUBMIT CREATE ONE PRODUCT ***/
router.post('/', upload.single('image'), productsValidations, productsController.store);

/*** BUSCAR ONE PRODUCT***/
router.get('/search', productsController.search);

/*** GET ONE PRODUCT (DETAIL) ***/
router.get('/:id', productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get('/edit/:id', productsController.edit);

/*** SUBMIT EDIT ONE PRODUCT ***/
router.put('/edit/:id', upload.single('image'), productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete('/:id', productsController.destroy);
    
module.exports = router;
