require("dotenv").config();

var keys = require('./keys.js');

var Twitter = require('twitter');

var client = new Twitter(keys.twitter);

var params = {
    screen_name: "ethiomartha",
    count: 5
};

// var latestTweets = function () {
    client.get('statuses/user_timeline', params, function (error, tweets,
        response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].created_at);
                console.log('------------------');
                console.log(tweets[i].text);
            }

        }
    });



// var choose = function (command, functionData) {
//     switch (command) {
//         case 'my-latest-tweets':
//             latestTweets();
//             break;
//         default:
//             console.log('???');
//     }
// }

// var run = function (arg1, arg2) {
//     choose(arg1, arg2);
// };
// run(process.argv[2], process.argv[3]);


// Add CommentCollapse 
// Message Input

// Message Raven, sls2u