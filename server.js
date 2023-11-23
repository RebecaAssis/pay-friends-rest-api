require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_STRING,
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        dbName: 'payfriends' 
    }
);

const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Database connected!'));

app.use(express.json());

const payments = require('./routes/payments');

app.use('/payments', payments);

app.listen(3000, () => console.log('Server running'));