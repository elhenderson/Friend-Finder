const express = require('express');
const router = express.Router();

var friends = 
[
    {
        "name": "Batman",
        "photo": "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Batman-BenAffleck.jpg/200px-Batman-BenAffleck.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }
]



router.get('/', (req, res) => {
    res.json(friends);
})


router.post('/', (req, res) => {
    console.log(req.body)
    friends.push(req.body);
    console.log(friends)
    for (i=0;i<friends[1].score.length; i++) { 
        console.log(parseInt(friends[1].score[i]))
    }
    res.send("recieved your request");

})


module.exports = router;