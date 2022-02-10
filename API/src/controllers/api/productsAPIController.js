const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


//Aqui tienen otra forma de llamar a cada uno de los modelos
const products = db.Producto;
const categories = db.Category;


const productsAPIController = {
    'list': (req, res) => {
        let categoriesArray = []
        categories.findAll()
        .then( categories => {
            categories.forEach(category => {
                //console.log(category.dataValues)
                categoriesArray.push({
                    id:category.dataValues.id,
                    name:category.dataValues.name,
                    cant:0
                });
            })
            
        })
        db.Producto.findAll({
            include: [{association: "category"}]}
            )
        .then(products => {
            let productsArray = []
            products.forEach(product => {
                let category = null;
                try {
                    //console.log(product.category.dataValues)
                    category = categoriesArray.find(category => category.id == product.category.id)
                    category.cant = category.cant + 1
                    //console.log(category)
                } catch (e) {
                    console.log("producto con valor en null");
                }
                 productsArray.push({
                    id:product.id,
                    name:product.name,
                    description:product.description,
                    //categories:product.category.name,
                    detail:'/api/products/'+product.id
                })
            })
            let respuesta = {
                meta: {
                status: 200,
                count: products.length,
                countByCategory: categoriesArray,
                },
                detalles: 
                    productsArray
                
            }
            res.json(respuesta);
        })
    },
    
    'detail': (req, res) => {
        db.Producto.findByPk(req.params.id,{
            include: [{association: "category"}]}
          )
        .then(product => {
            let respuesta = {
                meta: {
                    status: 200,
                    url: '/api/products/id'
                },
                data: {
                    //id:product.id,
                    //name:product.name,
                    //description:product.description,
                    //categories: product.category.name,
                    //price: product.price,
                    //imagen: product.image
                    product //porque se tiene que detallar cada uno ?
                }
            }
            res.json(respuesta);
        });
    },
    
    
}

module.exports = productsAPIController;
