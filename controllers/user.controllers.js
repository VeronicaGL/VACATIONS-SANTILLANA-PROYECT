const express = require('express');
const router = express.Router();
const User = require('../models/user.models');
const bcrypt = require('bcrypt');

module.exports.create = (req, res, next) => {
    res.render('register')
}

module.exports.doCreate = async (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then((hash) => {
        user.create({
            name: req.body.name,
            email:req.body.email, 
            password: hash, 
            avatarUrl: req.body.avatarUrl,
        })

        .then(() => {
            res.redirect('/register')
        })
        .catch((error) => res.status(500).send('Fallo al registrar usuario' + error))
    })
}    

router.get('/register', (req, res) => {
    res.render('users/register');
});

