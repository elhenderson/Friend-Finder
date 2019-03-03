const express = require('express');
const router = express.Router();

router.get('/api/friends', (req, res) => {
    req.get('friends')
})


module.exports = 'router'