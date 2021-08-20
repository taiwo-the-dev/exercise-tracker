const express = require('express');
const userModel = require('../models/user');

const router = express.Router();

router.route('/').get((req, res) => {
    userModel.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err));
});

router.route('add').post((req,res) => {
    const username = req.body.username;
    const newUser = new userModel({username: username});
    
    newUser.save()
        .then(() => res.json('User Added'))
        .catch(err => res.status(400).json(err));
})

module.exports = router;
