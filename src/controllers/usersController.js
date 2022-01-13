const express = require("express");
const app = express();
const path = require("path")
const fs = require('fs');

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const {validationResult} = require("express-validator");

const User = require("../models/User")

const bcryptjs = require("bcryptjs");

const db = require("../../database/models");
const sequelize = db.sequelize;
const Usuario = db.Usuario;
const Op = db.Sequelize.Op;

const { getMaxListeners } = require("process");



const usersController = {
login: (req, res) => { 
    return res.render("login")
},


//loginProcess: (req, res ) => {
//    let userToLogin = db.Usuario.findOne({
//        where : {
//            email: req.body.email
//        }
//    }).then ((resultado) => {
//        console.log(resultado); 
//    })

loginProcess: (req, res ) => {
    let userToLogin = Usuario.findOne({
              where : {
                  email: req.body.email
                }
            }).then ((userToLogin) => {
              if(userToLogin) {
                  let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
                  if(isOkThePassword) {
                      delete userToLogin.password;
                      req.session.userLogged = userToLogin;
          
                      if(req.body.remember_user) {
                          res.cookie("userEmail", req.body.email, {maxAge: (1000 * 60) * 5})
                      }
                  
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
              console.log(resultado); 
          })
    //User.findByField("email", req.body.email);
    //console.log(userToLogin)
    
},

register: (req, res) => { 
    return res.render("register")
},

processRegister: async (req, res) => { 
    const resultValidation = validationResult(req);
    //return res.send(resultValidation.errors.length);
    if (resultValidation.errors.length > 0) {
        return res.render ("register", {
            errors: resultValidation.mapped(),
            oldData: req.body
       });
    } 

    let userInDB = Usuario.findOne({
        where : {
            email: req.body.email
          }
      }).then((userInDB) => {
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
      }) 

    let userToCreate = {
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10),
        avatar: req.file.filename
    }

    let userCreated = await User.create(userToCreate);
    return res.redirect("/user/login")
},


profile: (req, res) => { 
    return res.render("userProfile", {
        user: req.session.userLogged
    })
},

logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
},

destroy: (req, res) => {
    Usuario.destroy({
      where: {
         email: req.session.userLogged.email
      }
  })
  .then (function(){
      res.clearCookie("userEmail");
      req.session.destroy();
      res.redirect("/")
 })
},

edit: (req, res) => { 
    Usuario.findOne({
        where : {
            id: req.session.userLogged.id
          }
    }) .then (function(userLogged){
        console.log(userLogged)
        let date = userLogged.birthday.getDate() + 1;
        let month = userLogged.birthday.getMonth() + 1;
        let year = userLogged.birthday.getFullYear();
        if (date < 10){
            date = '0' + date;
        }
        if (month < 10){
            month = '0' + month;
        }
        userLogged.custom_birthday = year + '-' + month + '-' + date;
        return res.render("editUser", {userLogged})
   }).catch(error => {
    console.log(error)
  })
  },
  
editUser: (req, res) => {
        Usuario.update ({
          fullName: req.body.fullName,
          email: req.body.email,
          password: bcryptjs.hashSync(req.body.password, 10),
          birthday: req.body.birthday,
          direction: req.body.direction,
          avatar: req.file ? req.file.avatar : req.body.avatar,
          
      }, {
          where: { id : req.session.userLogged.id}
      })
      .then (function(){
         res.clearCookie("userEmail");
        req.session.destroy();
          res.redirect("/user/login")
      }).catch(error => {
        console.log(error)
      })
  }
    
}


module.exports= usersController