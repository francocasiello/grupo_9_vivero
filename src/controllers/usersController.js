const express = require("express");
const app = express();
const path = require("path")
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const {validationResult} = require("express-validator");

const User = require("../models/User")

const bcryptjs = require("bcryptjs");

const usersController = {
login: (req, res) => { 
    return res.render("login")
},

loginProcess: (req, res ) => {
    let userToLogin = User.findByField("email", req.body.email);
    
    if(userToLogin) {
        let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
        if(isOkThePassword) {
            delete userToLogin.password;
            req.session.userLogged = userToLogin;
            return res.redirect("profile")
        }
        return res.render("login", {
            errors: {
                password: {
                    msg: "Contraseña incorrecta"
                }
            }
        })
    } 
    
    return res.render("login", {
        errors: {
            email: {
                msg: "Usuario no encontrado"
            }
        }
    })
},

register: (req, res) => { 
    return res.render("register")
},

processRegister: (req, res) => { 
    const resultValidation = validationResult(req);
    //return res.send(resultValidation.errors.length);
    if (resultValidation.errors.length > 0) {
        return res.render ("register", {
            errors: resultValidation.mapped(),
            oldData: req.body
       });
    } 

    let userInDB = User.findByField("email", req.body.email);
    if (userInDB) {
        return res.render ("register", {
            errors: {
                email: {
                    msg: "Este email ya esta registrado"
                }
            },
            oldData: req.body
       });
    }

    let userToCreate = {
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10),
        avatar: req.file.filename
    }

    let userCreated = User.create(userToCreate);
    return res.redirect("/user/login")
},

logout: (req, res) => {
    req.session.destroy();
    return res.redirect("/");
},

profile: (req, res) => { 
    return res.render("userProfile", {
        user: req.session.userLogged
    })
}

};


// Acá exportamos el resultado
module.exports= usersController