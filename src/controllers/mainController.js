const express = require("express");
const app = express();
const path = require("path")

const mainController = {
    index: (req, res) => { return res.render("index")},
    //index: (req, res) => { res.render(path.join(__dirname, "../views/index")},
    login: (req, res) => { return res.render("login")},
    productCart: (req, res) => { return res.render("productCart")},
    register: (req, res) => { return res.render("register")},
    productDetail: (req, res) => { return res.render("productDetail")},
    index: (req, res) => { return res.render("index")},
    newProduct: (req, res) => { return res.render("newProduct")},
    editProduct: (req, res) => { return res.render("editProduct")},
};

// Acá exportamos el resultado
module.exports= mainController