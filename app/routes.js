const flickrService = require('./flickr/flickr');

module.exports = function (app) {
    app.get('/api/feed', function (req, res) {
    	res.setHeader('Access-Control-Allow-Origin', '*');

        let tags = null;
        if (req.query.tags) {
            tags = req.query.tags;
        }
        flickrService.getFeed(tags, res);
    });
}
