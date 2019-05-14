const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const app = express(); // create app w/ express
app.use(morgan('dev')); // log every request to console
app.use(bodyParser.json())

require('./app/routes.js')(app);

const port = process.env.PORT || 8080;
app.listen(port);
console.log("App listening on port " + port);
