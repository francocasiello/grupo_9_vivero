const express = require("express");
const app = express();
const path = require("path")
const fs = require('fs');
const { decodeBase64 } = require("bcryptjs");

const User = require("../models/User")

const db = require("../../database/models")

const productsFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const mainController = {
    index: (req, res) => { 
        res.render("index", {
            user: req.session.userLogged
        });
    },
    login: (req, res) => { return res.render("login")},
    productCart: (req, res) => { return res.render("productCart")},
    register: (req, res) => { return res.render("register")},
    };

// Acá exportamos el resultado
module.exports= mainController