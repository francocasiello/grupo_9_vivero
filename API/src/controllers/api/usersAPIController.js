const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Usuario = db.Usuario;
const miNombre = "Franco"

const usersAPIController = {

     'list': (req, res) => {
        db.Usuario.findAll()
        .then(usuarios => {
            let respuesta = {
                count: {
                    total: usuarios.length,
               },
                users: {
                    usuarios,
                    id: miNombre,
                    name: usuarios.fullName,
                    email: usuarios.email,
                    detail: '/api/users/usuarios.id',
                },
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.Usuario.findByPk(req.params.id)
            .then(usuario => {
                let respuesta = {
                    id: usuario.id,
                    name: usuario.fullName,
                    email: usuario.email,
                    birthday: usuario.birthday,
                    profilePicture: usuario.avatar
                }
                res.json(respuesta);
            });
    }
     
}

module.exports = usersAPIController;
