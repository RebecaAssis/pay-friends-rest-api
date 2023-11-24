const express = require('express');
const router = express.Router();
const Payment = require('../models/payment');

router.get('/', async (req, res) => {
    try {
        const payments = await Payment.find();
        return res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.post('/user', async (req, res) => {
    try {
        const {email , password} = req.body;
        const payments = await Payment.find({'account.email': email});

        if (payments[0].account[0].email === email && payments[0].account[0].password === password) {
            console.log('user logado');
            return res.status(200).json(payments);
        } else {
            return res.status(200).json({error: 'usuário ou senha inválido'});
        }

    } catch (err) {
        console.log(err);
    }
})

module.exports = router;