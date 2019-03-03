const express = require('express');
const router = express.Router();

router.all('/', (req, res) => {
    res.render('home');
});

router.get('/survey', (req, res) => {
    res.render('survey');
});

module.exports = router;