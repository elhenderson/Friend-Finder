const express = require('express');
const router = express.Router();
let Friends = require("../data/friends")
var friends = new Friends();




router.get('/', (req, res) => {
    res.json(friends.friendsArray);

})

router.post('/', (req, res) => {
    friends.getMatch(req.body, res);
})



module.exports = router;