require("dotenv").config();

var keys = require('./keys.js');
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var fs = require('fs');
var getMyTweets = function () {

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
                console.log(' ');
                console.log(tweets[i].text);
            }

        }
    });

}

var getArtistNames = function (artist) {
    return artist.name;
}

var getMeSpotify = function (songName) {


    spotify.search({ type: 'track', query: 'I Want it That Way' }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }



        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            console.log(i);
            console.log('artist(s): ' + songs[i].artists.map(getArtistNames));
            console.log('song name: ' + songs[i].name);
            console.log('previous song: ' + songs[i].preview_url);
            console.log('album: ' + songs[i].album.name);
            console.log('----------');
        }
    });
}
var getMeMovie = function (movieName) {
    request('http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&rjson', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var jsonData = JSON.parse(body);
            console.log('Title:' + jsonData.Title);
            console.log('year:' + jsonData.Year);
            console.log('IMDB rating:' + jsonData.imdbRating);
            console.log('rotten tomatoes rating:' + jsonData.tomatoRating);
            console.log('country:' + jsonData.Country);
            console.log('language:' + jsonData.Language);
            console.log('plot:' + jsonData.Plot);
            console.log('actors:' + jsonData.Actors);
            console.log('rotten tomatoes url' + jsonData.tomatoURL)
            console.log('---------------------');
        }
    })
}
fs.readFile('random.txt', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
var pick = function (caseData, fuctionData) {
    switch (caseData) {
        case "my-tweets":
            getMyTweets();
            break;
        case 'spotify-this-song':
            getMeSpotify(functionData);
            break;
        case 'movie-this':
            getMeMovie(functionData);
            break;
        default:
            console.log('LIRI doesnnot care');
    }
}

var runThis = function (argOne, argTwo) {
    pick(argOne, argTwo);
};
runThis(process.argv[2], process.argv[3]);

