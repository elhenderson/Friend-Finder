const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('jsonData');
})

// router.post('/api/friends', (req, res) => {

// })


module.exports = router;