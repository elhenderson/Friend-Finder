const express = require('express');
const router = express.Router();
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom
// const dom = new JSDOM()
require("../data/friends")
let Friends = require("../data/friends")
var friends = new Friends();

// var friends = 
// [
//     {
//         "name": "Batman",
//         "photo": "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Batman-BenAffleck.jpg/200px-Batman-BenAffleck.jpg",
//         "scores": [
//             5,
//             1,
//             4,
//             4,
//             5,
//             1,
//             2,
//             5,
//             4,
//             1
//         ]
//     },
//     {
//         "name": "Spiderman",
//         "photo": "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Batman-BenAffleck.jpg/200px-Batman-BenAffleck.jpg",
//         "scores": [
//             5,
//             1,
//             5,
//             3,
//             5,
//             1,
//             1,
//             2,
//             4,
//             1
//         ]
//     }
// ]

var matchesArray = [];
var matchIndex;
var matchPic;


router.get('/', (req, res) => {
    res.json(friends.friendsArray);

})

router.post('/', (req, res) => {
    console.log(req.body);
    matchesArray = [];
    let totalDifference = 0;
    friends.friendsArray.map(function(friend) {
        req.body.scores.map(function(score, index) {
            var currentScore = parseInt(score)
            totalDifference += Math.abs(currentScore - friend.scores[index]);
        })
        matchesArray.push(totalDifference);
        console.log(totalDifference);

        totalDifference = 0;
        console.log(matchesArray)
    })
    var firstMatch = Math.min(...matchesArray)
    function isMatch(element) {
        return element === firstMatch 
    }
    matchIndex = matchesArray.findIndex(isMatch);
    var foundFriend = friends.friendsArray[matchIndex];
    // friends.friendsArray.push(newFriend);
    res.json(foundFriend);
})

//subtract the two numbers and get absolute values
//add the absolute values
//lowest score is the match

module.exports = router;