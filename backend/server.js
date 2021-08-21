const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const dbURI = process.env.ATLAS_URI;

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
const userRouter = require('./router/users');
const exerciseRouter = require('./router/exercises')

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then((result) =>{app.listen(port, () => {
        console.log(`Our Application is running at port : ${port}`);
    })})
    .catch(err => console.log(err))
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB Connected Succesfully!');
})

