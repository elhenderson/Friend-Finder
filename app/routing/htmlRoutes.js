const express = require('express');
const router = express.Router();

router.all('/', (req, res) => {
    res.render('home');
});

router.get('/survey', (req, res) => {
    res.render('survey');
});

router.post('/', (req, res) => {
    res.render('survey');
   res.send("recieved your request!");
});

module.exports = router;