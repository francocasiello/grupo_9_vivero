//****express-valditor *////
const {body} = require("express-validator");

///**** VALIDACIONES ****////
const userValidations = [
    body("fullName").notEmpty().withMessage("El nombre debe estar completo").bail().isLength({min: 2}).withMessage("El nombre debe tener al menos dos caracteres"),
    body("email").notEmpty().withMessage("Tienes que escribir un correo electrónico válido").bail()
    .isEmail().withMessage("Desbes escribir un correo electrónico válido"),
    body("password").notEmpty().withMessage("Tienes que escribir una contraseña").bail().isLength({min: 8}).withMessage("La contraseña debe tener al menos ocho caracteres"),
    body("avatar").custom((value, {req})=> {
      let file = req.file;
      let acceptedExtensions = [".jgp", ".png", ".gif", ".jpeg"];
      
      if (!file) {
        throw new Error("Debes subir una imagen");
      } //else { 
        //let fileExtension = path.extname(file.originalname);
        //if (!acceptedExtensions.includes(fileExtension)) {
        //throw new Error(`Las extenciones de archivos permitidas son ${acceptedExtensions.join(", ")}`);
      //}
    //}
      return true;
    })
]

module.exports = userValidations;
