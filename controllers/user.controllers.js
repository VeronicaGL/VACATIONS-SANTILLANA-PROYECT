const express = require('express');
const router = express.Router();
const User = require('../models/user.models');
const bcrypt = require('bcrypt');

router.get('/register', (req, res) => {
    res.render('users/register');
});

/*router.post('/register', async (req, res) => {
    try{

    }
}
)*/