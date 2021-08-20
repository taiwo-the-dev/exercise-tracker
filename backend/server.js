const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const dbURI = process.env.ATLAS_URI;
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB Connected Succesfully!');
})

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const userRouter = require('./router/users');
const exerciseRouter = require('./router/exercises')

app.use('/exercises', exerciseRouter);
app.use('/uses', userRouter);
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Our Application is running at port : ${port}`);
})