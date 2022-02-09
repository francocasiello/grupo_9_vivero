const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


//Aqui tienen otra forma de llamar a cada uno de los modelos
const products = db.Producto;
const categories = db.Category;


const productsAPIController = {
    'list': (req, res) => {
        categories.findAll();
        db.Producto.findAll({
            include: [{association: "category"}]}
            )
        
        .then(products => {
            let categoriesArray = {}
            let productsArray = []
            products.forEach(product => {
                //if(categoriesArray[product.categoria_id]){

                //}
                // = categoriesArray[product.categoria_id] + 1;
                productsArray.push({
                    id:product.id,
                    name:product.name,
                    description:product.description,
                    categories:product.category.name,
                    detail:'/api/products/'+product.id
                })
        })
            let respuesta = {
                meta: {
                status: 200,
                count: products.length,
                countByCategory: categories,
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
                        url: '/api/products/'+product.id
                    },
                    data: {
                        id:product.id,
                        name:product.name,
                        description:product.description,
                        categories: product.category.name,
                        price: product.price,
                        imagen: product.image
                    }
                }
                res.json(respuesta);
            });
    },
    
    
}

module.exports = productsAPIController;
