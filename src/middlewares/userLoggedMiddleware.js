const User= require("../models/User");
const db = require("../../database/models");
const sequelize = db.sequelize;
const Usuario = db.Usuario;
const Op = db.Sequelize.Op;


function userLoggedMiddleware (req, res, next) {
    res.locals.isLogged = false;

    
    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField("email", emailInCookie);

    if (userFromCookie) {
        req.session.userLogged = userFromCookie;
    }

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.isLogged = req.session.userLogged;
    }
    
    next();
}


module.exports = userLoggedMiddleware