const express = require('express');
const exerciseModel = require('../models/user');

const router = express.Router();

router.route('/').get((req, res) => {
    exerciseModel.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err));
});

router.route('add').post((req,res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = req.body.date;

    const newExercise = new exerciseModel({username, description, duration, date});
    
    newExercise.save()
        .then(() => res.json('Exercise Added'))
        .catch(err => res.status(400).json(err));
})

module.exports = router;