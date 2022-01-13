//****express-valditor *////
const {body} = require("express-validator");

///**** VALIDACIONES ****////
const productsValidations = [
    body("name").notEmpty().withMessage("El nombre debe estar completo").bail().isLength({min: 2}).withMessage("El nombre debe tener al menos dos caracteres"),
    body("description").notEmpty().withMessage("Tienes que escribir una descripción").bail().isLength({min: 20}).withMessage("La descripción debe tener al menos veinte caracteres"),
    body("price").notEmpty().withMessage("Tienes que escribir un precio"),
    body("image").custom((value, {req})=> {
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

module.exports = productsValidations;
