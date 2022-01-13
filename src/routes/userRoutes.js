const express = require('express');
const router = express.Router();
const path = require('path');
const usersController = require('../controllers/usersController');
const upload = require('../middlewares/upload');

//***** MULTER **** */// Para guardar imagenes
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'public/images/avatars');
    },
    filename: (req, file, callback) => {
      callback(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    }
  });

const uploadFile= multer({storage});


///**** VALIDACIONES ****////
const userValidations = require("../middlewares/userValidations")
///**** MIDDLEWARES  ****//// 
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");



//FORMULARIO DE LOGIN
router.get("/login", guestMiddleware, usersController.login);

// PROCESAR EL LOGIN
router.post("/login", usersController.loginProcess);


router.get("/register", guestMiddleware, usersController.register);

router.post("/register", uploadFile.single("avatar"), userValidations, usersController.processRegister);

router.get("/profile", authMiddleware, userValidations, usersController.profile);

// LOGOUT
router.get("/logout", usersController.logout);

// ELIMINAR USUARIO
router.get("/destroy", usersController.destroy);


/*** EDIT USER ***/
router.get("/edit/:id", usersController.edit);

/*** SUBMIT EDIT USER ***/
router.put('/editUser/:id', upload.single('avatar'), usersController.editUser);


module.exports = router;