const express = require('express');
const router = express.Router();

const User = require('../models/users');

// GET users
router.get('/', (req, res, next) => {
    User.find()
        .then(users => {
            return res.status(200).json({ message: 'GET all users', users: users });
        })
        .catch(err=> next(err));
});

module.exports = router;
