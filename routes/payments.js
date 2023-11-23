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

module.exports = router;