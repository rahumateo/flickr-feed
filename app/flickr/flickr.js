const request = require('request');
const flickrConfig = require('./../../config/flickrConfig');

function addSearchParams(searchTags) {
    let reqURL = flickrConfig.feed_url + "?format=json";
    if (searchTags) {
        reqURL += "&tags=" + searchTags;
    }
    return reqURL;
}

exports.getFeed = function (tags, res) {
    if (tags) {
        console.log("search for " + tags);
    } else {
        console.log("search public feed");
    }

    let url = addSearchParams(tags);
    request(url, null, (err, searchResult, body) => {
        if (err) {
            throw new Error(err);
        }

        // remove some suffix to have a clean json format
        let resultString = body.replace(/[A-Za-z]*\(/, '').replace();
        resultString = resultString.substring(0, resultString.length - 1);

        let resultJson = JSON.parse(resultString);
        res.json(resultJson);
    });
};
