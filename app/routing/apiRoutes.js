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
    },
    {
        "name": "Spiderman",
        "photo": "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Batman-BenAffleck.jpg/200px-Batman-BenAffleck.jpg",
        "scores": [
            5,
            1,
            5,
            3,
            5,
            1,
            1,
            2,
            4,
            1
        ]
    }
]

var matchesArray = [];
var matchIndex;



router.get('/', (req, res) => {
    return res.json(friends);
})

router.post('/', (req, res) => {
    let newFriend = req.body;
    let totalDifference = 0;
    for (let j=0; j<friends.length; j++) {
        for (let i=0; i<req.body.scores.length;i++) {        
            req.body.scores[i] = parseInt(req.body.scores[i]);
            totalDifference += Math.abs(req.body.scores[i] - friends[j].scores[i]);
        }
        matchesArray.push(totalDifference);
        console.log(matchesArray)
    }
    var firstMatch = Math.min(...matchesArray)
    function isMatch(element) {
        return element === firstMatch 
    }
    matchIndex = matchesArray.findIndex(isMatch);
    console.log(friends[matchIndex]);
    friends.push(newFriend);
    return res.json(friends);
})

//subtract the two numbers and get absolute values
//add the absolute values
//lowest score is the match

module.exports = router;