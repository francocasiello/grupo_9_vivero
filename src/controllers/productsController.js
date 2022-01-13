const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const db = require("../../database/models")
const sequelize = db.sequelize;

//const Producto = db.Producto;
//const Op = db.Sequelize.Op;

const {Op} = require("sequelize")

const productsController = {
    // Root - Show all products
    //index: (req, res) => {
    //  res.render('products', { products });
    //},

    index: (req, res) => {
      db.Producto.findAll()
          .then(productos => {
              res.render('products', {productos});
          }).catch(error => {
            console.log(error)
          })
    },

     detail: (req, res) => {
      db.Producto.findByPk(req.params.id, {
        include: [{association: "category"}]}
      )   .then(product => {
              res.render('productDetailIndividual', {product});
          })
      },

   
    //detail: (req, res) => {
    // Aca necesitamos recibir un objeto de tipo producto
    // Primero buscamos el producto correspondiente
    //const requiredId = req.params.id;

    //const requiredProduct = products.find((prod) => {
      /* El primer elemento que devuelva true se guarda como resultado */
    //  const condition = prod.id == requiredId;
    //  return condition;
    //});

    // Calculo el final price en el controlador para que la vista quede mas limpia
 
    // res.render('productDetailIndividual', { products: requiredProduct});
    //},

    edit: (req, res) => { db.Producto.findByPk(req.params.id,{
      include: [{association: "category"}]})
      .then(function(product){
          res.render("editProduct", {product});
      })
  },



      // Solo falta autocompletar los inputs y el action y method del form
      //const requiredId = req.params.id;
      //const productToEdit = products.find((prod) => {
        /* El primer elemento que devuelva true se guarda como resultado */
      //  const condition = prod.id == requiredId;
      //  return condition;
      //});
   
      //res.render('editProduct', { productToEdit });
    //},

    update: (req, res) => {
      db.Producto.update ({
        name: req.body.name,
        image: req.file ? req.file.filename : req.body.filename,
        price: req.body.price,
        description: req.body.description,
        categoria_id: req.body.categoria_id
    }, {
        where: { id : req.params.id}
    })
    .then (function(){
        res.redirect("/products/" + req.params.id)
    }).catch(error => {
      console.log(error)
    })
},
      // Leemos el id que viene por url
      //const productId = req.params.id;
      // buscamos la posicion del producto que queremos editar
      //const productIndex = products.findIndex((p) => p.id == productId);
  
      // Generamos el producto actualizado
      //const updatedProduct = {
      //  ...products[productIndex],
      //  ...req.body,
      //  price: Number(req.body.price),
      //  discount: Number(req.body.discount),
      //  name: req.body.name,
      //  image: req.file ? req.file.filename : products[productIndex].image
      //};
  
      // Reemplazamos el objeto en el array
      //products[productIndex] = updatedProduct;
  
      // Escribimos en el JSON para persistir
      //fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
  
      // Volvemos a la pagina de productos
      //res.redirect('/products');
    //},


    create: (req, res) => {
      db.Category.findAll()
      .then(categoria => {
        res.render('newProduct', {categoria});
      }).catch(error => {
        console.log(error)
      })// Renderizar el formulario de create
      // No necesita parametros
     // res.render('newProduct');
    },

    store: function (req, res) {
      // ✓ Acceder a nuestro archivo JSON
      // ✓ Leer los datos y convertirlos en un array para modificarlo
      // Leer los datos que vienen en la request (req.body)
      //const newProduct = {
      //  id: products[products.length - 1].id + 1,
      //  ...req.body,
      //  price: Number(req.body.price),
      //  discount: Number(req.body.discount),
      //  name: req.body.name,
      //image: req.file ? req.file.filename : null
      //};
      // Modificar el arreglo para agregar el nuevo producto
      //const newProductList = [...products, newProduct];
        db.Producto.create ({
        name: req.body.name,
        image: req.file ? req.file.filename : null,
        price: req.body.price,
        description: req.body.description,
        categoria_id: req.body.categoria_id
     })
    .then (function(){
        res.redirect("/products")
    })
},
  
      // Escribir en el JSON el nuevo arreglo actualizado
      //fs.writeFileSync(
      //  productsFilePath,
      //  JSON.stringify(newProductList, null, ' ')
     // );
  
      // res.redirect('index');
      //res.redirect('/');
    // },

    destroy: (req, res) => {
      db.Producto.destroy({
        where: {
            id: req.params.id
        }
    }).then (function(){
        res.redirect("/products")
    })
},
      // Leer el id
      //const productId = req.params.id;
      // Buscar la posicion actual del producto a eliminar
      //const productIndex = products.findIndex((p) => p.id == productId);
      /// Recortar el array sin ese producto
      //products.splice(productIndex, 1);
      // Guardar en el json el nuevo array
      //fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
  
      //res.redirect('/products');
      search: (req, res) => {
        db.Producto.findAll({
          where: {
            name: {[Op.substring]: req.query.keywords } 
          }
        }).then(productos => {
                res.render("search", {productos, user: req.session.userLogged});
            }).catch(error => {
              console.log(error)
            })
        },
        
       
};


module.exports = productsController;
