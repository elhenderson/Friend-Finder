const express = require('express');
const router = express.Router();

router.get('/api/friends', (req, res) => {
    res.render('home');
})

// router.post('/api/friends', (req, res) => {

// })


module.exports = 'router'