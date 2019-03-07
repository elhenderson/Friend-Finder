
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