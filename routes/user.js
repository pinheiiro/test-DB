const express = require('express');
const addUser = require('../services/addUserDB');
const checkRecord = require('../middlewares/checkUser');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({message: 'Hello, World !'});
});

routes.post('/new', checkRecord, async (req, res) => {
    const data = req.body;
    const user = await addUser(data);
    res.status(200).json({message: 'Cadastro Efetuado', user});
});


module.exports = routes;