
class Friends {
    constructor(friendsArray, getMatch) {
        this.friendsArray = [
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
                "photo": "https://insomniac.games/wp-content/uploads/2018/09/Spider-Man_PS4_Selfie_Photo_Mode_LEGAL.jpg",
                "scores": [
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5
                ]
            },
            {
                "name": "Deadpool",
                "photo": "https://cdn-images-1.medium.com/max/2000/1*-4nkXQYN05ljzfJez_azbg.jpeg",
                "scores": [
                    3,
                    4,
                    2,
                    5,
                    5,
                    1,
                    5,
                    2,
                    4,
                    1
                ]
            },
            {
                "name": "Captain America",
                "photo": "https://fanfest.com/wp-content/uploads/2018/10/captain-america-figure_0-632x450.png",
                "scores": [
                    4,
                    4,
                    5,
                    5,
                    5,
                    2,
                    5,
                    2,
                    4,
                    1
                ]
            }
        ]
        this.getMatch = function(reqBody, res) {
            var newFriend = reqBody
            var matchesArray = [];
            let totalDifference = 0;
            this.friendsArray.map(function(friend) {
                reqBody.scores.map(function(score, index) {
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
            var matchIndex = matchesArray.findIndex(isMatch);
            var foundFriend = this.friendsArray[matchIndex];
            this.friendsArray.push(newFriend);
            res.json(foundFriend);
        }
    }
}



module.exports = Friends;