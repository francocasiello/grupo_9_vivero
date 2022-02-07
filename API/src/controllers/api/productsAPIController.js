const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


//Aqui tienen otra forma de llamar a cada uno de los modelos
const products = db.Producto;


const productsAPIController = {
    'list': (req, res) => {
        db.Producto.findAll()
        .then(products => {
            let respuesta = {
                meta: {
                status: 200,
                count: products.length,
                countByCategory: db.Producto.findAll(),
                },
                detalles: {
                    products
                }
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.Producto.findByPk(req.params.id)
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/products/:id'
                    },
                    data: product
                }
                res.json(respuesta);
            });
    },
    
    
}

module.exports = productsAPIController;
