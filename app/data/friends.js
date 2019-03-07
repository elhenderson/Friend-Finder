
class Friends {
    constructor(friendsArray, matchFunction) {
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
                "photo": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwidi6Sb4e7gAhVDbKwKHUG5Bh4QjRx6BAgBEAU&url=https%3A%2F%2Finsomniac.games%2Fgame%2Fspider-man-ps4%2F&psig=AOvVaw2AWtUfs-I5SKcXqTR3DFCV&ust=1552004433932125",
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
            }
        ]
    }
}

// this.matchFunction = function(e) {
//     e.preventDefault();
//     console.log("wow")
// }

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

// var friendsDisplay = JSON.stringify(friends);

// document.write(friendsDisplay);


// var $form = $("#friendForm")

// const handleFormSubmit = (event) => {
//     event.preventDefault();
//     $("#matchPic").attr("src", friends[0].photo)
//     $("#matchName").text(friends[0].name)
// //serialize data function

//     // var returnArray = {};
//     // for (let i = 0; i < formArray.length; i++){
//     //     returnArray[formArray[i]['name']] = formArray[i]['value'];
//     // }
//     // return returnArray;

// }


module.exports = Friends;