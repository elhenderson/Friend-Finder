const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("hello");
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send("recieved your request");
})


module.exports = router;