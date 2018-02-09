const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// mongoose connection
mongoose.connect('mongodb://localhost/tuto-no-sql');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// routes
const api = require('../routes/api');
const users = require('../routes/users');
const posts = require('../routes/posts');

app.use(api);
app.use('/api/users', users);
app.use('/api/posts', posts);

app.listen(4200);
console.log("running on 4200");

app.use((err, req, res, next) => {
    console.error(err);
    return res.status(500).json({error: err});
});

module.exports = app;
