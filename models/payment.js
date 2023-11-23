const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    tasks: {
        type: Array,
        required: true
    },
    account: {
        type: Array,
        required: true
    },
});

module.exports = mongoose.model('Payment', paymentSchema)