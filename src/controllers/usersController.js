const express = require("express");
const app = express();
const path = require("path")
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const usersController = {
login: (req, res) => { return res.render("login")},
register: (req, res) => { return res.render("register")},
processRegister: (req, res) => { return res.send(req.body)},

//profile: (req, res) => { return res.render("userProfile")},


};

// Acá exportamos el resultado
module.exports= usersController