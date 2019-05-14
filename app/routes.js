const flickrService = require('./flickr/flickr');

module.exports = function (app) {
    app.get('/api/feed', function (req, res) {

        let tags = null;
        if (req.query.tags) {
            tags = req.query.tags;
        }
        flickrService.getFeed(tags, res);
    });
}
